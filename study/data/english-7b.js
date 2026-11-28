// 英語 七下（翰林版，單元依 113 學年度學校課程計畫）
// answer 是正確選項的索引：0=(A) 1=(B) 2=(C) 3=(D)
STUDY.add({
	id: "english-7b",
	subject: "英語",
	name: "七下",
	publisher: "翰林",
	lang: "en",
	note: "單元名稱依 113 學年度翰林七下課程計畫（她讀七下的那一年）。題目以英文朗讀，解說以中文朗讀。",
	chapters: [
		{
			id: "u1",
			title: "Unit 1　Do You Like Sports?",
			review: [
				{ heading: "現在簡單式", points: [
					"表示習慣、經常發生的事：I play basketball every day.",
					"第三人稱單數（he/she/it）動詞加 s 或 es：He plays. She watches. It goes.",
					"疑問與否定用 do / does：Does she like music? — Yes, she does. / He doesn't have a bike.",
					"does / doesn't 後面接原形動詞。",
					"have → has：She has long hair.",
				] },
			],
			questions: [
				{ id: "u1-1", section: "Unit 1", q: "He ___ basketball every day.", options: ["play", "plays", "playing", "is play"], answer: 1, explain: "主詞 He 是第三人稱單數，現在簡單式動詞加 s：plays。" },
				{ id: "u1-2", section: "Unit 1", q: "A: Does she like music?\nB: Yes, she ___.", options: ["does", "is", "do", "likes"], answer: 0, explain: "用 Does 問，就用 does 回答：Yes, she does." },
				{ id: "u1-3", section: "Unit 1", q: "My brother ___ have a bike.", options: ["don't", "isn't", "not", "doesn't"], answer: 3, explain: "主詞 my brother 是第三人稱單數，否定用 doesn't + 原形動詞 have。" },
				{ id: "u1-4", section: "Unit 1", q: "watch 用在第三人稱單數時，正確形式是什麼？", options: ["watchs", "watching", "watches", "watched"], answer: 2, explain: "字尾 ch 要加 es：watches。" },
				{ id: "u1-5", section: "Unit 1", q: "She ___ long hair and big eyes.", options: ["have", "has", "is", "haves"], answer: 1, explain: "第三人稱單數的 have 要變成 has。" },
				{ id: "u1-6", section: "Unit 1", q: "Do they ___ dogs?", options: ["like", "likes", "liking", "to like"], answer: 0, explain: "do / does 後面接原形動詞。" },
			],
		},
		{
			id: "u2",
			title: "Unit 2　How Often Do You Go to the Library?",
			review: [
				{ heading: "頻率副詞", points: [
					"頻率由高到低：always > usually > often > sometimes > seldom > never。",
					"放在 be 動詞後面、一般動詞前面：She is never late. / I always eat breakfast.",
					"How often…? 問頻率：How often do you go to the library? — Twice a week.",
				] },
			],
			questions: [
				{ id: "u2-1", section: "Unit 2", q: "下列哪一句的頻率副詞位置正確？", options: ["She never is late.", "Never she is late.", "She is never late.", "She is late never."], answer: 2, explain: "頻率副詞放在 be 動詞後面：She is never late." },
				{ id: "u2-2", section: "Unit 2", q: "A: How often do you go to the library?\nB: ___", options: ["At the library.", "By bus.", "Because I like books.", "Twice a week."], answer: 3, explain: "How often 問頻率，回答次數：Twice a week.（一週兩次）" },
				{ id: "u2-3", section: "Unit 2", q: "頻率由高到低排列，下列哪一個正確？", options: ["always > usually > sometimes > never", "never > sometimes > usually > always", "sometimes > always > never > usually", "usually > always > never > sometimes"], answer: 0, explain: "always（總是）> usually（通常）> often（常常）> sometimes（有時）> seldom（很少）> never（從不）。" },
				{ id: "u2-4", section: "Unit 2", q: "I ___ eat breakfast. I eat it every day.", options: ["never", "always", "seldom", "sometimes"], answer: 1, explain: "每天都吃，表示「總是」：always。" },
				{ id: "u2-5", section: "Unit 2", q: "「Tom never drinks coffee.」的意思是什麼？", options: ["湯姆常喝咖啡", "湯姆有時喝咖啡", "湯姆從不喝咖啡", "湯姆總是喝咖啡"], answer: 2, explain: "never 是「從不」。" },
			],
		},
		{
			id: "u3",
			title: "Unit 3　Which Painting Do You Like?",
			review: [
				{ heading: "which / how much / one, ones", points: [
					"Which 問「哪一個」：Which do you like, the red one or the blue one?",
					"How much 問價錢：How much is this T-shirt? / How much are the apples? — They're fifty dollars.",
					"one 代替前面提過的單數可數名詞，ones 代替複數。",
				] },
				{ heading: "可數與不可數名詞", points: [
					"不可數名詞沒有複數形，例如 milk、water、bread、juice。",
				] },
			],
			questions: [
				{ id: "u3-1", section: "Unit 3", q: "___ do you like, the red one or the blue one?", options: ["Which", "What", "Who", "Where"], answer: 0, explain: "在有限的選項中選「哪一個」，用 Which。" },
				{ id: "u3-2", section: "Unit 3", q: "How much ___ this T-shirt?", options: ["are", "is", "do", "does"], answer: 1, explain: "this T-shirt 是單數，用 is：How much is this T-shirt?" },
				{ id: "u3-3", section: "Unit 3", q: "These shoes are too small. Do you have bigger ___?", options: ["one", "it", "they", "ones"], answer: 3, explain: "代替前面提過的複數名詞 shoes，用 ones。" },
				{ id: "u3-4", section: "Unit 3", q: "下列哪一個是不可數名詞？", options: ["apple", "book", "milk", "egg"], answer: 2, explain: "milk（牛奶）不可數，沒有複數形；apple、book、egg 都是可數名詞。" },
				{ id: "u3-5", section: "Unit 3", q: "A: How much are the apples?\nB: ___ fifty dollars.", options: ["It's", "They're", "This is", "That's"], answer: 1, explain: "the apples 是複數，用 They're 回答。" },
			],
		},
		{
			id: "u4",
			title: "Unit 4　How Much Flour Do You Need?",
			review: [
				{ heading: "how many / how much 與量詞", points: [
					"How many + 可數名詞複數：How many eggs do you need?",
					"How much + 不可數名詞：How much milk do you need?",
					"量詞：a bottle of water、a glass of milk、a slice of bread、a cup of tea、a bowl of rice。",
					"不可數名詞當主詞，動詞用單數：There is some juice in the glass.",
				] },
			],
			questions: [
				{ id: "u4-1", section: "Unit 4", q: "How ___ eggs do you need?", options: ["many", "much", "long", "often"], answer: 0, explain: "eggs 是可數名詞複數，用 How many。" },
				{ id: "u4-2", section: "Unit 4", q: "How ___ milk do you need?", options: ["many", "old", "much", "often"], answer: 2, explain: "milk 是不可數名詞，用 How much。" },
				{ id: "u4-3", section: "Unit 4", q: "I'd like a ___ of water.（一瓶水）", options: ["piece", "slice", "bowl", "bottle"], answer: 3, explain: "一瓶水是 a bottle of water。" },
				{ id: "u4-4", section: "Unit 4", q: "I ate two ___ of bread this morning.", options: ["slice", "slices", "bottles", "cups"], answer: 1, explain: "bread 不可數，用量詞表示數量，量詞要變複數：two slices of bread。" },
				{ id: "u4-5", section: "Unit 4", q: "There ___ some juice in the glass.", options: ["is", "are", "am", "be"], answer: 0, explain: "juice 是不可數名詞，用 There is。" },
			],
		},
		{
			id: "u5",
			title: "Unit 5　There Was a Lot of Trash in the Sea",
			review: [
				{ heading: "過去式", points: [
					"be 動詞過去式：I/He/She/It was；You/We/They were。",
					"規則動詞過去式加 ed：clean → cleaned, play → played。",
					"短母音 + 單子音結尾，重複字尾再加 ed：stop → stopped。",
					"疑問與否定用 did，後面接原形動詞：Did you watch TV last night?",
				] },
			],
			questions: [
				{ id: "u5-1", section: "Unit 5", q: "I ___ at home yesterday.", options: ["am", "were", "was", "is"], answer: 2, explain: "yesterday 是過去時間，主詞 I 的 be 動詞過去式是 was。" },
				{ id: "u5-2", section: "Unit 5", q: "They ___ at the beach last Sunday.", options: ["was", "were", "are", "is"], answer: 1, explain: "主詞 They 的 be 動詞過去式是 were。" },
				{ id: "u5-3", section: "Unit 5", q: "We ___ the beach last week.", options: ["clean", "cleans", "cleaning", "cleaned"], answer: 3, explain: "last week 是過去時間，規則動詞加 ed：cleaned。" },
				{ id: "u5-4", section: "Unit 5", q: "Did you ___ TV last night?", options: ["watch", "watched", "watches", "watching"], answer: 0, explain: "Did 後面接原形動詞：Did you watch…?" },
				{ id: "u5-5", section: "Unit 5", q: "stop 的過去式是哪一個？", options: ["stoped", "stops", "stopped", "stopping"], answer: 2, explain: "短母音加單一子音結尾，要重複字尾再加 ed：stopped。" },
				{ id: "u5-6", section: "Unit 5", q: "A: Were you tired after the game?\nB: Yes, I ___.", options: ["were", "was", "did", "am"], answer: 1, explain: "主詞 I 的 be 動詞過去式用 was：Yes, I was." },
			],
		},
		{
			id: "u6",
			title: "Unit 6　We Rode a Bike to the Temple",
			review: [
				{ heading: "不規則動詞過去式", points: [
					"go → went, ride → rode, see → saw, buy → bought, eat → ate, take → took。",
					"否定與疑問用 did / didn't + 原形動詞：No, he didn't.",
				] },
				{ heading: "because 與 so", points: [
					"because 說明原因：Why were you late? — Because I missed the bus.",
					"so 說明結果：I was hungry, so I ate a sandwich.",
				] },
			],
			questions: [
				{ id: "u6-1", section: "Unit 6", q: "go 的過去式是哪一個？", options: ["went", "goed", "gone", "goes"], answer: 0, explain: "go 是不規則動詞：go – went – gone。" },
				{ id: "u6-2", section: "Unit 6", q: "We ___ a bike to the temple yesterday.", options: ["ride", "rided", "riding", "rode"], answer: 3, explain: "ride 的過去式是不規則的 rode。" },
				{ id: "u6-3", section: "Unit 6", q: "A: Did he buy a new phone?\nB: No, he ___.", options: ["doesn't", "wasn't", "didn't", "isn't"], answer: 2, explain: "用 Did 問，否定回答用 didn't。" },
				{ id: "u6-4", section: "Unit 6", q: "I was very hungry, ___ I ate a big sandwich.", options: ["because", "so", "but", "or"], answer: 1, explain: "前面是原因，後面是結果，用 so（所以）。" },
				{ id: "u6-5", section: "Unit 6", q: "A: Why were you late?\nB: ___ I missed the bus.", options: ["Because", "So", "But", "And"], answer: 0, explain: "回答 Why 的原因，用 Because。" },
				{ id: "u6-6", section: "Unit 6", q: "see 的過去式是哪一個？", options: ["seed", "saw", "seen", "sawed"], answer: 1, explain: "see 是不規則動詞：see – saw – seen。" },
			],
		},
	],
});
