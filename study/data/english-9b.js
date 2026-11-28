// 英語 九下（康軒版，課次依 115 學年度學校課程計畫）
// answer 是正確選項的索引：0=(A) 1=(B) 2=(C) 3=(D)
STUDY.add({
	id: "english-9b",
	subject: "英語",
	name: "九下",
	publisher: "康軒",
	lang: "en",
	note: "課次與文法重點依 115 學年度康軒九下學校課程計畫；課名只列出能確認的部分。題目以英文朗讀，解說以中文朗讀。",
	chapters: [
		{
			id: "l1",
			title: "Lesson 1　Sharing News",
			review: [
				{ heading: "when 與 while", points: [
					"when：當……的時候，可接短暫動作：I was reading when the phone rang.",
					"while：在……期間，通常接進行中的動作：While I was cooking, my brother was watching TV.",
					"過去進行式（was/were + V-ing）表示過去某時正在進行的動作，常被另一個過去動作打斷。",
				] },
				{ heading: "判斷新聞真假", points: [
					"看到太好或太驚人的消息，要先查證來源。",
				] },
			],
			questions: [
				{ id: "l1-1", section: "Lesson 1", q: "I was reading a book ___ the phone rang.", options: ["when", "while", "because", "so"], answer: 0, explain: "電話響是短暫的動作，用 when 連接：正在讀書時，電話響了。" },
				{ id: "l1-2", section: "Lesson 1", q: "___ I was cooking dinner, my brother was watching TV.", options: ["Because", "So", "While", "Until"], answer: 2, explain: "兩個動作在同一段時間內同時進行，用 while。" },
				{ id: "l1-3", section: "Lesson 1", q: "While she ___ a shower, the lights went out.", options: ["takes", "was taking", "took", "is taking"], answer: 1, explain: "while 後面接進行中的動作，句子是過去時間，用過去進行式 was taking。" },
				{ id: "l1-4", section: "Lesson 1", q: "When I got home, my mom ___ dinner.", options: ["cooks", "is cooking", "cooked", "was cooking"], answer: 3, explain: "我到家的那一刻，媽媽正在煮晚餐，用過去進行式 was cooking。" },
				{ id: "l1-5", section: "Lesson 1", q: "If a piece of news sounds too good to be true, you should ___ it first.", options: ["share", "believe", "check", "forget"], answer: 2, explain: "聽起來好得不像真的消息，應該先查證（check）。" },
			],
		},
		{
			id: "l2",
			title: "Lesson 2　Curry Fights…",
			review: [
				{ heading: "連接詞 as soon as / as long as", points: [
					"as soon as：一……就……。表示未來的時間子句用現在式：I'll call you as soon as I get home.",
					"as long as：只要……：You can go out as long as you finish your homework.",
				] },
				{ heading: "too…to / so…that", points: [
					"too + 形容詞 + to + 原形動詞：The box is too heavy for me to carry.",
					"so + 形容詞 + that + 子句：The box is so heavy that I can't carry it.",
					"He is too tired to walk. = He is so tired that he can't walk.",
				] },
			],
			questions: [
				{ id: "l2-1", section: "Lesson 2", q: "I'll call you as soon as I ___ home.", options: ["will get", "get", "got", "getting"], answer: 1, explain: "表示未來的時間子句（as soon as…）用現在式代替未來式：as soon as I get home。" },
				{ id: "l2-2", section: "Lesson 2", q: "You can go out as long as you ___ your homework first.", options: ["finish", "will finish", "finished", "finishing"], answer: 0, explain: "as long as（只要）引導的條件子句，表示未來時也用現在式。" },
				{ id: "l2-3", section: "Lesson 2", q: "The box is too heavy for me ___.", options: ["carry", "carrying", "that I carry", "to carry"], answer: 3, explain: "too…to + 原形動詞：太重了，我搬不動。" },
				{ id: "l2-4", section: "Lesson 2", q: "The box is so heavy ___ I can't carry it.", options: ["to", "for", "that", "as"], answer: 2, explain: "so + 形容詞 + that + 子句。" },
				{ id: "l2-5", section: "Lesson 2", q: "「He is too tired to walk.」的意思和哪一句相同？", options: ["He is so tired that he can walk.", "He is so tired that he can't walk.", "He is not tired, so he walks.", "He walks because he is tired."], answer: 1, explain: "too…to 本身含否定意思，改成 so…that 時要用否定：he can't walk。" },
			],
		},
		{
			id: "l3",
			title: "Lesson 3　The Age of AI",
			review: [
				{ heading: "either…or / neither…nor", points: [
					"either A or B：A 或 B 其中之一。",
					"neither A nor B：A 和 B 都不。",
					"動詞依最靠近的主詞決定：Either you or he is wrong.",
				] },
				{ heading: "附和句", points: [
					"肯定附和用 so：I like dogs. — So do I. / She is tired. — So am I.",
					"否定附和用 neither：I can't swim. — Neither can I.",
					"助動詞或 be 動詞要和前一句相同（do/does/did、am/is/are、can…）。",
				] },
			],
			questions: [
				{ id: "l3-1", section: "Lesson 3", q: "You can have ___ tea or coffee.", options: ["either", "neither", "both", "nor"], answer: 0, explain: "either A or B：A 或 B 選一個。" },
				{ id: "l3-2", section: "Lesson 3", q: "___ Tom nor Mary likes math.", options: ["Either", "Both", "Not", "Neither"], answer: 3, explain: "neither A nor B：A 和 B 都不。" },
				{ id: "l3-3", section: "Lesson 3", q: "Either you or he ___ wrong.", options: ["are", "is", "am", "be"], answer: 1, explain: "either…or 的動詞依最靠近的主詞 he 決定，用 is。" },
				{ id: "l3-4", section: "Lesson 3", q: "A: I like dogs.\nB: So ___ I.", options: ["am", "like", "do", "can"], answer: 2, explain: "前句用一般動詞 like（現在式），附和用 do：So do I." },
				{ id: "l3-5", section: "Lesson 3", q: "A: I can't swim.\nB: ___ can I.", options: ["Neither", "So", "Either", "Too"], answer: 0, explain: "前句是否定，附和用 Neither：Neither can I.（我也不會）" },
				{ id: "l3-6", section: "Lesson 3", q: "A: She is very tired.\nB: So ___ I.", options: ["do", "is", "does", "am"], answer: 3, explain: "前句用 be 動詞，附和也用 be 動詞，主詞 I 搭配 am：So am I." },
			],
		},
		{
			id: "l4",
			title: "Lesson 4　Looking Back on…",
			review: [
				{ heading: "使役動詞", points: [
					"make / let / have + 受詞 + 原形動詞：My mom made me clean my room.",
					"have + 物 + 過去分詞：請別人做某事：I had my hair cut.",
					"make 改成被動時要加 to：He was made to wait for an hour.",
				] },
			],
			questions: [
				{ id: "l4-1", section: "Lesson 4", q: "My mom made me ___ my room.", options: ["to clean", "clean", "cleaned", "cleaning"], answer: 1, explain: "使役動詞 make + 受詞 + 原形動詞。" },
				{ id: "l4-2", section: "Lesson 4", q: "Please let him ___ home now.", options: ["go", "to go", "goes", "going"], answer: 0, explain: "let + 受詞 + 原形動詞。" },
				{ id: "l4-3", section: "Lesson 4", q: "I had my hair ___ yesterday.", options: ["cuts", "to cut", "cut", "cutting"], answer: 2, explain: "have + 物 + 過去分詞，表示請別人做：頭髮「被剪」。cut 的過去分詞也是 cut。" },
				{ id: "l4-4", section: "Lesson 4", q: "The teacher let us ___ early today.", options: ["to leave", "left", "leaving", "leave"], answer: 3, explain: "let + 受詞 + 原形動詞：let us leave。" },
				{ id: "l4-5", section: "Lesson 4", q: "He was made ___ for an hour.", options: ["wait", "to wait", "waiting", "waited"], answer: 1, explain: "使役動詞 make 改成被動語態時，後面要加 to：was made to wait。" },
			],
		},
	],
});
