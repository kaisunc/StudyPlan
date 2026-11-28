// 英語 八下（康軒版）— 依 114 學年度學校課程計畫列出的八下文法重點整理，非課本課次
// answer 是正確選項的索引：0=(A) 1=(B) 2=(C) 3=(D)
STUDY.add({
	id: "english-8b",
	subject: "英語",
	name: "八下",
	publisher: "康軒",
	lang: "en",
	note: "找不到康軒八下的課名，以下依 114 學年度學校課程計畫列出的八下文法重點整理成單元，單元名稱與課本不同。",
	chapters: [
		{
			id: "g1",
			title: "文法一　比較級與最高級",
			review: [
				{ heading: "比較級與最高級", points: [
					"短字：tall → taller → tallest；big → bigger → biggest；easy → easier → easiest。",
					"長字：interesting → more interesting → most interesting。",
					"不規則：good/well → better → best；bad → worse → worst；many/much → more → most。",
					"比較兩者：A is taller than B. 三者以上：the + 最高級 + of/in。",
					"as + 原級 + as：一樣……。",
				] },
			],
			questions: [
				{ id: "g1-1", section: "比較級與最高級", q: "Tom is ___ than Ken.", options: ["tall", "taller", "tallest", "more tall"], answer: 1, explain: "比較兩人用比較級：taller than。" },
				{ id: "g1-2", section: "比較級與最高級", q: "This is the ___ book of all.", options: ["more interesting", "interestinger", "most interesting", "interesting"], answer: 2, explain: "三者以上比較用最高級；長字用 the most + 原級。" },
				{ id: "g1-3", section: "比較級與最高級", q: "My score is bad, but his is even ___.", options: ["worse", "badder", "worst", "more bad"], answer: 0, explain: "bad 的比較級是不規則的 worse。" },
				{ id: "g1-4", section: "比較級與最高級", q: "Amy is as ___ as her sister.", options: ["taller", "tallest", "more tall", "tall"], answer: 3, explain: "as…as 中間用原級：as tall as。" },
				{ id: "g1-5", section: "比較級與最高級", q: "big 的最高級是哪一個？", options: ["bigest", "biggest", "most big", "bigger"], answer: 1, explain: "短母音加單子音結尾，要重複字尾再加 est：biggest。" },
			],
		},
		{
			id: "g2",
			title: "文法二　連綴動詞與感官動詞",
			review: [
				{ heading: "連綴動詞", points: [
					"look / sound / smell / taste / feel / seem + 形容詞（不能接副詞）。",
					"The cake smells good. / You look happy. / That sounds great.",
				] },
				{ heading: "感官動詞", points: [
					"see / hear / watch / feel + 受詞 + 原形動詞（或 V-ing）：I saw him run.",
				] },
			],
			questions: [
				{ id: "g2-1", section: "連綴動詞與感官動詞", q: "The cake smells ___.", options: ["well", "good", "nicely", "goodly"], answer: 1, explain: "連綴動詞 smell 後面接形容詞：smells good。" },
				{ id: "g2-2", section: "連綴動詞與感官動詞", q: "You look ___ today. What happened?", options: ["happily", "happiness", "happy", "happier than"], answer: 2, explain: "look（看起來）是連綴動詞，後面接形容詞 happy。" },
				{ id: "g2-3", section: "連綴動詞與感官動詞", q: "A: Let's go to the beach.\nB: That sounds ___.", options: ["great", "greatly", "well", "nicely"], answer: 0, explain: "sound（聽起來）是連綴動詞，接形容詞 great。" },
				{ id: "g2-4", section: "連綴動詞與感官動詞", q: "I heard her ___ a song in her room.", options: ["sang", "to sing", "sings", "sing"], answer: 3, explain: "感官動詞 hear + 受詞 + 原形動詞（或 V-ing）。" },
			],
		},
		{
			id: "g3",
			title: "文法三　情態副詞與副詞比較",
			review: [
				{ heading: "副詞", points: [
					"情態副詞修飾動詞，說明動作的方式：slow → slowly, careful → carefully, beautiful → beautifully。",
					"good 是形容詞，well 是副詞：She sings well.",
					"副詞比較級：fast → faster；carefully → more carefully；well → better。",
				] },
			],
			questions: [
				{ id: "g3-1", section: "情態副詞", q: "She sings very ___.", options: ["beautiful", "beauty", "beautifully", "more beautiful"], answer: 2, explain: "修飾動詞 sings 要用副詞 beautifully。" },
				{ id: "g3-2", section: "情態副詞", q: "He is a good swimmer. He swims ___.", options: ["good", "well", "goodly", "best"], answer: 1, explain: "good 是形容詞，修飾名詞；修飾動詞 swims 要用副詞 well。" },
				{ id: "g3-3", section: "副詞比較級", q: "Ben runs ___ than his brother.", options: ["faster", "fast", "fastest", "more fast"], answer: 0, explain: "比較兩人跑的速度，用副詞比較級 faster than。" },
				{ id: "g3-4", section: "副詞比較級", q: "Please drive ___. The road is wet.", options: ["careful", "care", "carefulness", "carefully"], answer: 3, explain: "修飾動詞 drive 用副詞 carefully。" },
			],
		},
		{
			id: "g4",
			title: "文法四　反身代名詞與不定代名詞",
			review: [
				{ heading: "反身代名詞", points: [
					"myself, yourself, himself, herself, itself, ourselves, yourselves, themselves。",
					"主詞和受詞是同一人時用反身代名詞：I hurt myself.",
					"Help yourself to some cake.（請自己取用）",
				] },
				{ heading: "不定代名詞", points: [
					"肯定句用 something / someone；疑問句、否定句多用 anything / anyone。",
					"形容詞放在 something 後面：something cold。",
					"兩者中，一個用 one，另一個用 the other。",
				] },
			],
			questions: [
				{ id: "g4-1", section: "反身代名詞", q: "I fell down and hurt ___.", options: ["me", "myself", "my", "mine"], answer: 1, explain: "主詞 I 和受詞是同一人，用反身代名詞 myself。" },
				{ id: "g4-2", section: "反身代名詞", q: "Please help ___ to some cookies, kids.", options: ["yourselves", "yourself", "you", "your"], answer: 0, explain: "對象是 kids（複數），用 yourselves：Help yourselves to…（請自己取用）。" },
				{ id: "g4-3", section: "不定代名詞", q: "Is there ___ in the box?", options: ["something", "nothing", "anything", "everything"], answer: 2, explain: "疑問句通常用 anything。" },
				{ id: "g4-4", section: "不定代名詞", q: "I'm thirsty. I want something ___.", options: ["cold to drink", "to drink cold", "drink cold", "cold drink to"], answer: 0, explain: "形容詞放在 something 後面，再接不定詞：something cold to drink。" },
				{ id: "g4-5", section: "不定代名詞", q: "I have two pets. One is a dog, and ___ is a cat.", options: ["other", "another", "others", "the other"], answer: 3, explain: "兩者中，一個用 one，另一個用 the other。" },
			],
		},
		{
			id: "g5",
			title: "文法五　連接詞 not only…but also / if / although",
			review: [
				{ heading: "連接詞", points: [
					"not only A but also B：不但 A 而且 B；動詞依 B 決定。",
					"if 引導條件子句，表示未來時用現在式：If it rains tomorrow, we will stay home.",
					"although / though（雖然）不能和 but 一起用。",
				] },
			],
			questions: [
				{ id: "g5-1", section: "連接詞", q: "If it ___ tomorrow, we will stay at home.", options: ["will rain", "rains", "rained", "raining"], answer: 1, explain: "if 引導的條件子句，表示未來時用現在式代替：If it rains。" },
				{ id: "g5-2", section: "連接詞", q: "___ it was raining, we still went hiking.", options: ["Because", "So", "Although", "If"], answer: 2, explain: "前後意思相反（雖然下雨，還是去爬山），用 Although。" },
				{ id: "g5-3", section: "連接詞", q: "下列哪一句正確？", options: ["Although he is rich, but he is not happy.", "Although he is rich, he is not happy.", "He is rich, although but he is not happy.", "But although he is rich, he is not happy."], answer: 1, explain: "although 和 but 不能同時使用。" },
				{ id: "g5-4", section: "連接詞", q: "Not only Tom but also his sisters ___ good at math.", options: ["is", "am", "be", "are"], answer: 3, explain: "not only A but also B，動詞依 B（his sisters，複數）決定，用 are。" },
			],
		},
	],
});
