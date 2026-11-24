// 會考複習 — chapter review, practice tests, scoring, and read-aloud.
// Content lives in data/*.js, each calling STUDY.add({...}).

const app = document.getElementById("app");
const LETTERS = ["A", "B", "C", "D"];
// Front-page matrix. A cell is built when a data file has matching subject + name.
const SUBJECTS = [
	{ name: "國文" }, { name: "英語" }, { name: "數學" }, { name: "自然" },
	{ group: "社會", name: "地理" }, { group: "社會", name: "歷史" }, { group: "社會", name: "公民" },
	{ name: "藝術" }, { name: "科技" }, { name: "綜合活動" }, { name: "健康與體育" },
];
const GRADES = ["七上", "七下", "八上", "八下", "九上", "九下"];
const HISTORY_KEY = "studyplan.history.v1";
const VOICE_KEY = "studyplan.voice";
const RATE_KEY = "studyplan.rate";

// ---------- storage (works in file:// in Edge/Chrome; fails soft elsewhere) ----------
function store(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } }
function recall(key) { try { return localStorage.getItem(key); } catch { return null; } }
function history() { try { return JSON.parse(recall(HISTORY_KEY)) || []; } catch { return []; } }
function addResult(result) { const h = history(); h.push(result); store(HISTORY_KEY, JSON.stringify(h)); }

// ---------- data lookup ----------
function allChapters() { return STUDY.terms.flatMap((t) => t.chapters.map((c) => ({ term: t, chapter: c, key: t.id + "-" + c.id }))); }
function findChapter(key) { return allChapters().find((x) => x.key === key); }
function findTerm(subject, grade) { return STUDY.terms.find((t) => t.subject === subject && t.name === grade); }
function subjectLabel(term) { const s = SUBJECTS.find((x) => x.name === term.subject); return s && s.group ? `${s.group}・${term.subject}` : term.subject; }
function termTitle(term) { return `${subjectLabel(term)}｜${term.name}（${term.publisher}版）`; }
function termLink(term) { return `#/term/${term.id}`; }

// ---------- read-aloud ----------
function zhVoices() { return speechSynthesis.getVoices().filter((v) => /^zh/i.test(v.lang)); }
function pickVoice() {
	const voices = zhVoices();
	const saved = recall(VOICE_KEY);
	return voices.find((v) => v.name === saved)
		|| voices.find((v) => /zh[-_]TW/i.test(v.lang) && /natural/i.test(v.name))
		|| voices.find((v) => /zh[-_]TW/i.test(v.lang))
		|| voices[0];
}
function englishVoice() { const v = speechSynthesis.getVoices(); return v.find((x) => /^en[-_]US/i.test(x.lang)) || v.find((x) => /^en/i.test(x.lang)); }
function speakable(text) { return text.replace(/→/g, "，到，").replace(/[（(]([A-D])[)）]/g, "$1，"); }
function speak(text, lang) {
	speechSynthesis.cancel();
	const en = lang === "en";
	const voice = en ? englishVoice() : pickVoice();
	const rate = Number(recall(RATE_KEY)) || 0.95;
	// Chrome cuts off long utterances, so queue one per sentence.
	for (const part of (en ? text : speakable(text)).split(en ? /(?<=[.?!\n])\s/ : /(?<=[。！？\n])/)) {
		if (!part.trim()) continue;
		const u = new SpeechSynthesisUtterance(part);
		if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = en ? "en-US" : "zh-TW"; }
		u.rate = rate;
		speechSynthesis.speak(u);
	}
}
function speakButton(text, lang) {
	const b = document.createElement("button");
	b.className = "speak"; b.type = "button"; b.textContent = "🔊 朗讀"; b.title = "朗讀";
	b.addEventListener("click", () => speak(text, lang));
	return b;
}

// ---------- tiny DOM helper ----------
function el(tag, attrs = {}, ...children) {
	const node = document.createElement(tag);
	for (const [k, v] of Object.entries(attrs)) {
		if (k === "class") node.className = v;
		else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
		else node.setAttribute(k, v);
	}
	for (const c of children.flat()) if (c != null && c !== false) node.append(c instanceof Node ? c : String(c));
	return node;
}

// ---------- views ----------
function homeView() {
	const tested = new Set(history().filter((r) => !r.retry).map((r) => r.chapter));
	const head = el("tr", {}, el("th", {}, ""), GRADES.map((g) => el("th", {}, g)));
	const rows = SUBJECTS.map((s) => el("tr", {},
		el("th", { class: "subject" }, s.group ? el("span", { class: "group" }, s.group) : null, s.name),
		GRADES.map((g) => {
			const term = findTerm(s.name, g);
			if (!term) return el("td", {}, el("div", { class: "cell off" }, "尚未建立"));
			const done = term.chapters.filter((c) => tested.has(term.id + "-" + c.id)).length;
			return el("td", {}, el("a", { class: "cell on", href: termLink(term) },
				el("b", {}, `${term.publisher}版`), el("span", {}, `已測 ${done}／${term.chapters.length} 章`)));
		})));
	return [el("h1", {}, "選擇科目與年級"), el("p", { class: "muted" }, "灰色的格子還沒有建立內容。"),
		el("div", { class: "matrix-wrap" }, el("table", { class: "matrix" }, head, rows)), settingsCard()];
}

function termView(termId) {
	const term = STUDY.terms.find((t) => t.id === termId);
	if (!term) return notFound();
	const results = history();
	const parts = [el("h1", {}, termTitle(term)), el("p", { class: "muted" }, "先看「複習」重點，再做「測驗」。每章測驗都會記錄分數。")];
	if (term.note) parts.push(el("p", { class: "muted" }, term.note));
	for (const ch of term.chapters) {
		const key = term.id + "-" + ch.id;
		const mine = results.filter((r) => r.chapter === key && !r.retry);
		const latest = mine[mine.length - 1];
		const best = mine.reduce((m, r) => Math.max(m, r.score), -1);
		const scoreText = latest ? `最近 ${latest.score} 分・最高 ${best} 分・共做 ${mine.length} 次` : "尚未測驗";
		parts.push(el("div", { class: "card chapter" },
			el("div", { class: "name" }, el("b", {}, ch.title), el("div", { class: "score" }, scoreText)),
			el("a", { class: "btn secondary", href: `#/review/${key}` }, "複習"),
			el("a", { class: "btn", href: `#/test/${key}` }, `測驗（${ch.questions.length} 題）`)));
	}
	parts.push(el("div", { class: "actions" }, el("a", { class: "btn secondary", href: "#/" }, "回首頁")));
	return parts;
}

function settingsCard() {
	const voiceSelect = el("select", { onchange: (e) => store(VOICE_KEY, e.target.value) });
	const fill = () => {
		voiceSelect.replaceChildren();
		const current = pickVoice();
		const voices = zhVoices();
		if (!voices.length) voiceSelect.append(el("option", {}, "找不到中文語音"));
		for (const v of voices) {
			const o = el("option", { value: v.name }, `${v.name}（${v.lang}）`);
			if (current && v.name === current.name) o.selected = true;
			voiceSelect.append(o);
		}
	};
	fill();
	speechSynthesis.addEventListener("voiceschanged", fill);
	const rate = el("select", { onchange: (e) => store(RATE_KEY, e.target.value) });
	for (const [v, label] of [["0.8", "慢"], ["0.95", "正常"], ["1.1", "快"]]) {
		const o = el("option", { value: v }, label);
		if ((recall(RATE_KEY) || "0.95") === v) o.selected = true;
		rate.append(o);
	}
	return el("div", { class: "card" }, el("h2", {}, "朗讀設定"),
		el("div", { class: "settings" }, el("label", {}, "語音 ", voiceSelect), el("label", {}, "速度 ", rate),
			el("button", { type: "button", class: "secondary", onclick: () => speak("你好，這是朗讀測試。浮力等於物體排開液體的重量。") }, "試聽")));
}

function reviewView(key) {
	const found = findChapter(key);
	if (!found) return notFound();
	const { term, chapter } = found;
	const parts = [el("a", { class: "crumb", href: termLink(term) }, `← ${subjectLabel(term)}｜${term.name}`), el("h1", {}, chapter.title)];
	for (const block of chapter.review) {
		const spoken = block.heading + "。" + block.points.join("\n");
		parts.push(el("div", { class: "card" },
			el("h2", {}, block.heading, speakButton(spoken)),
			el("ul", { class: "points" }, block.points.map((p) => el("li", {}, p)))));
	}
	parts.push(el("div", { class: "actions" }, el("a", { class: "btn", href: `#/test/${key}` }, "開始測驗"), el("a", { class: "btn secondary", href: termLink(term) }, "回章節列表")));
	return parts;
}

function shuffled(list) { const a = list.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

let retryPlan = null; // { key, ids } — set by 「只練錯題」

function testView(key) {
	const found = findChapter(key);
	if (!found) return notFound();
	const { term, chapter } = found;
	const retry = retryPlan && retryPlan.key === key ? retryPlan : null;
	retryPlan = null;
	const pool = retry ? chapter.questions.filter((q) => retry.ids.includes(q.id)) : chapter.questions;
	const questions = shuffled(pool);
	const chosen = new Map();
	const submit = el("button", { type: "button", disabled: "" }, "交卷");
	const progress = el("span", { class: "muted" }, `已作答 0／${questions.length}`);
	const update = () => {
		progress.textContent = `已作答 ${chosen.size}／${questions.length}`;
		if (chosen.size === questions.length) submit.removeAttribute("disabled");
	};

	const cards = questions.map((q, n) => {
		const spoken = term.lang === "en" ? `Question ${n + 1}. ${q.q}\n` + q.options.map((o, i) => `${LETTERS[i]}. ${o}.`).join("\n") : `第${n + 1}題。${q.q}\n` + q.options.map((o, i) => `（${LETTERS[i]}）${o}。`).join("\n");
		const opts = q.options.map((text, i) => {
			const input = el("input", { type: "radio", name: q.id, value: String(i) });
			const label = el("label", { class: "opt" }, input, `（${LETTERS[i]}）${text}`);
			input.addEventListener("change", () => {
				chosen.set(q.id, i);
				label.parentElement.querySelectorAll(".opt").forEach((x) => x.classList.toggle("chosen", x === label));
				update();
			});
			return label;
		});
		return { q, node: el("div", { class: "card q" }, el("div", { class: "stem" }, `${n + 1}. ${q.q}`, speakButton(spoken, term.lang)), el("div", {}, opts)) };
	});

	submit.addEventListener("click", () => {
		let correct = 0;
		const bySection = {};
		const wrongIds = [];
		for (const { q, node } of cards) {
			const pick = chosen.get(q.id);
			const ok = pick === q.answer;
			if (ok) correct++; else wrongIds.push(q.id);
			const s = (bySection[q.section] ||= { right: 0, total: 0 });
			s.total++; if (ok) s.right++;
			node.classList.add("done");
			node.querySelectorAll("input").forEach((i) => i.setAttribute("disabled", ""));
			const labels = node.querySelectorAll(".opt");
			labels[q.answer].classList.add("correct");
			if (!ok) labels[pick].classList.add("wrong");
			node.querySelector(".stem").prepend(el("span", { class: "mark " + (ok ? "ok" : "no") }, ok ? "✓" : "✗"));
			const explainText = `正確答案（${LETTERS[q.answer]}）。${q.explain}`;
			node.append(el("div", { class: "explain" }, el("b", {}, `正確答案：(${LETTERS[q.answer]})　`), q.explain, speakButton(explainText)));
		}
		const score = Math.round((correct / cards.length) * 100);
		addResult({ chapter: key, title: chapter.title, date: new Date().toISOString(), score, correct, total: cards.length, wrong: wrongIds, retry: !!retry });
		submit.remove(); progress.remove();

		const sectionRows = Object.entries(bySection).sort(([a], [b]) => a.localeCompare(b, "zh-Hant", { numeric: true }))
			.map(([name, s]) => el("tr", {}, el("td", {}, name), el("td", {}, `${s.right}／${s.total}`), el("td", {}, s.right === s.total ? "✓" : "需加強")));
		const actions = el("div", { class: "actions" });
		if (wrongIds.length) actions.append(el("button", { type: "button", onclick: () => { retryPlan = { key, ids: wrongIds }; rerender(); } }, `只練錯題（${wrongIds.length} 題）`));
		actions.append(el("button", { type: "button", class: "secondary", onclick: () => rerender() }, "整份重做"),
			el("a", { class: "btn secondary", href: `#/review/${key}` }, "回去複習"), el("a", { class: "btn secondary", href: termLink(term) }, "回章節列表"));
		const banner = el("div", { class: "card banner" },
			el("div", { class: "muted" }, retry ? "錯題練習結果（不計入章節分數）" : "測驗結果"),
			el("div", { class: "big" }, `${score} 分`),
			el("div", {}, `答對 ${correct}／${cards.length} 題`),
			el("table", { style: "margin-top:12px" }, el("tr", {}, el("th", {}, "小節"), el("th", {}, "答對"), el("th", {}, "")), sectionRows),
			actions);
		app.prepend(banner);
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	return [el("a", { class: "crumb", href: termLink(term) }, `← ${subjectLabel(term)}｜${term.name}`), el("h1", {}, chapter.title + (retry ? "：錯題練習" : "：測驗")),
		el("p", { class: "muted" }, "每題都選完才能交卷。題目順序每次會打亂。"),
		cards.map((c) => c.node), el("div", { class: "actions" }, submit, progress)];
}

function historyView() {
	const rows = history().slice().reverse().map((r) => el("tr", {},
		el("td", {}, new Date(r.date).toLocaleString("zh-TW", { dateStyle: "short", timeStyle: "short" })),
		el("td", {}, r.title + (r.retry ? "（錯題練習）" : "")), el("td", {}, `${r.score} 分`), el("td", {}, `${r.correct}／${r.total}`)));
	return [el("h1", {}, "成績紀錄"),
		rows.length ? el("div", { class: "card" }, el("table", {}, el("tr", {}, el("th", {}, "時間"), el("th", {}, "章節"), el("th", {}, "分數"), el("th", {}, "答對")), rows))
			: el("p", { class: "muted" }, "還沒有測驗紀錄。"),
		el("p", { class: "muted" }, "紀錄只存在這台電腦的這個瀏覽器裡。")];
}

function notFound() { return [el("h1", {}, "找不到這個頁面"), el("a", { class: "btn", href: "#/" }, "回首頁")]; }

// ---------- router ----------
function rerender() {
	speechSynthesis.cancel();
	const [, view, key] = location.hash.split("/");
	const content = view === "term" ? termView(key) : view === "review" ? reviewView(key) : view === "test" ? testView(key) : view === "history" ? historyView() : homeView();
	app.replaceChildren(...[content].flat(2));
	window.scrollTo(0, 0);
}
window.addEventListener("hashchange", rerender);
rerender();
