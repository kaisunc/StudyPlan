// Validates question banks: node check.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "data/registry.js"), "utf8"), ctx);
ctx.STUDY = ctx.window.STUDY;
for (const f of fs.readdirSync(path.join(__dirname, "data")).filter((f) => f !== "registry.js" && f.endsWith(".js")))
	vm.runInContext(fs.readFileSync(path.join(__dirname, "data", f), "utf8"), ctx, { filename: f });

const errors = [];
let count = 0;
const ids = new Set();
for (const term of ctx.STUDY.terms) {
	for (const ch of term.chapters) {
		const where = `${term.id}/${ch.id}`;
		if (!ch.review?.length) errors.push(`${where}: no review blocks`);
		const answers = [0, 0, 0, 0];
		for (const q of ch.questions) {
			count++;
			const key = `${term.id}/${q.id}`;
			if (ids.has(key)) errors.push(`${key}: duplicate id`);
			ids.add(key);
			if (q.options?.length !== 4) errors.push(`${key}: needs 4 options`);
			if (new Set(q.options).size !== q.options.length) errors.push(`${key}: duplicate options`);
			if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${key}: bad answer index`);
			else answers[q.answer]++;
			for (const field of ["q", "explain", "section"]) if (!q[field]?.trim()) errors.push(`${key}: missing ${field}`);
		}
		console.log(`${where}  ${ch.questions.length} 題  answers A/B/C/D = ${answers.join("/")}`);
	}
}
console.log(`${count} questions checked`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
