// 英語 九上（康軒版，課次依 115 學年度學校課程計畫）
// answer 是正確選項的索引：0=(A) 1=(B) 2=(C) 3=(D)
STUDY.add({
	id: "english-9a",
	subject: "英語",
	name: "九上",
	publisher: "康軒",
	lang: "en",
	note: "課次與文法重點依 115 學年度康軒九上學校課程計畫；課名只列出能確認的部分。題目以英文朗讀，解說以中文朗讀。",
	chapters: [
		{
			id: "l1",
			title: "Lesson 1　Have You Ever Tried These Dishes?",
			review: [
				{ heading: "現在完成式", points: [
					"have/has + 過去分詞（p.p.），表示經驗、完成或持續到現在。",
					"經驗：Have you ever eaten stinky tofu? — Yes, I have. / No, I haven't.",
					"have been to（去過某地）；have gone to（已經去了，人不在這裡）。",
					"already 用於肯定句；yet 用於否定句和疑問句。",
					"常考過去分詞：eat → eaten, see → seen, write → written, go → gone, be → been。",
				] },
				{ heading: "轉折語", points: [
					"表示對比：but, however（However 後面加逗號）。",
				] },
			],
			questions: [
				{ id: "l1-1", section: "Lesson 1", q: "I have ___ to Japan twice.", options: ["go", "went", "been", "going"], answer: 2, explain: "表示「去過」某地的經驗用 have been to。" },
				{ id: "l1-2", section: "Lesson 1", q: "A: Have you ever eaten stinky tofu?\nB: Yes, I ___.", options: ["have", "do", "did", "am"], answer: 0, explain: "用 Have 問，就用 have 回答：Yes, I have." },
				{ id: "l1-3", section: "Lesson 1", q: "She ___ finished her homework yet.", options: ["doesn't", "didn't", "isn't", "hasn't"], answer: 3, explain: "yet 用在現在完成式的否定句：She hasn't finished her homework yet." },
				{ id: "l1-4", section: "Lesson 1", q: "We have already ___ that movie.", options: ["see", "seen", "saw", "seeing"], answer: 1, explain: "現在完成式 have + 過去分詞；see 的過去分詞是 seen。" },
				{ id: "l1-5", section: "Lesson 1", q: "write 的過去分詞是哪一個？", options: ["wrote", "writed", "written", "writing"], answer: 2, explain: "write – wrote – written，是不規則動詞。" },
				{ id: "l1-6", section: "Lesson 1", q: "I like sushi. ___, my brother doesn't like it at all.", options: ["However", "Because", "So", "Also"], answer: 0, explain: "前後意思相反，用表示轉折的 However。" },
			],
		},
		{
			id: "l2",
			title: "Lesson 2　Are You Interested in Trying…?",
			review: [
				{ heading: "分詞當形容詞", points: [
					"-ing：令人……的（描述事物）：The movie is interesting.",
					"-ed：感到……的（描述人的感受）：I'm interested in it.",
				] },
				{ heading: "so…that / too…to", points: [
					"so + 形容詞 + that + 子句：I was so tired that I fell asleep.",
					"too + 形容詞 + to + 原形動詞：He is too young to drive.（太……而不能）",
				] },
				{ heading: "現在完成式：for / since", points: [
					"for + 一段時間：for five years。",
					"since + 過去的時間點：since 2020。",
				] },
			],
			questions: [
				{ id: "l2-1", section: "Lesson 2", q: "The movie is ___. I'm very ___ in it.", options: ["interested, interesting", "interesting, interested", "interesting, interesting", "interested, interested"], answer: 1, explain: "描述電影「令人感興趣的」用 interesting；描述人「感到興趣」用 interested。" },
				{ id: "l2-2", section: "Lesson 2", q: "I was so tired ___ I fell asleep in class.", options: ["that", "to", "and", "because"], answer: 0, explain: "so…that…：如此……以致於……。" },
				{ id: "l2-3", section: "Lesson 2", q: "He is too young ___ a car.", options: ["drives", "driving", "to drive", "that drive"], answer: 2, explain: "too…to + 原形動詞：太……而不能……。" },
				{ id: "l2-4", section: "Lesson 2", q: "I have lived in Taipei ___ 2020.", options: ["for", "ago", "in", "since"], answer: 3, explain: "since 後面接過去的時間點；for 接一段時間。" },
				{ id: "l2-5", section: "Lesson 2", q: "She has studied English ___ five years.", options: ["since", "for", "ago", "at"], answer: 1, explain: "five years 是一段時間，用 for。" },
				{ id: "l2-6", section: "Lesson 2", q: "The news was surprising. It made everyone ___.", options: ["surprise", "surprising", "surprised", "to surprise"], answer: 2, explain: "描述人的感受用 -ed：everyone felt surprised。" },
			],
		},
		{
			id: "l3",
			title: "Lesson 3　Men and Women…",
			review: [
				{ heading: "被動語態", points: [
					"be 動詞 + 過去分詞（+ by 動作者）。",
					"現在式：English is spoken in many countries.",
					"過去式：The window was broken by Tom.",
				] },
				{ heading: "附加問句", points: [
					"前肯定，後否定；前否定，後肯定。",
					"She is a teacher, isn't she? / You don't like cats, do you? / Tom went home, didn't he?",
					"附加問句的主詞用代名詞。",
				] },
			],
			questions: [
				{ id: "l3-1", section: "Lesson 3", q: "English ___ in many countries.", options: ["is spoken", "speaks", "is speaking", "spoke"], answer: 0, explain: "英語「被說」，用被動語態：is + spoken。" },
				{ id: "l3-2", section: "Lesson 3", q: "The window ___ by Tom yesterday.", options: ["breaks", "is broken", "broke", "was broken"], answer: 3, explain: "yesterday 是過去時間，窗戶「被打破」：was broken。" },
				{ id: "l3-3", section: "Lesson 3", q: "This bridge was ___ in 1990.", options: ["build", "built", "building", "builds"], answer: 1, explain: "被動語態 be + 過去分詞；build 的過去分詞是 built。" },
				{ id: "l3-4", section: "Lesson 3", q: "She is a teacher, ___?", options: ["is she", "doesn't she", "isn't she", "does she"], answer: 2, explain: "前面是肯定的 is，附加問句用否定 isn't she?" },
				{ id: "l3-5", section: "Lesson 3", q: "You don't like cats, ___?", options: ["do you", "don't you", "are you", "aren't you"], answer: 0, explain: "前面是否定的 don't，附加問句用肯定 do you?" },
				{ id: "l3-6", section: "Lesson 3", q: "Tom went home early, ___?", options: ["did Tom", "wasn't he", "doesn't he", "didn't he"], answer: 3, explain: "went 是過去式肯定句，附加問句用 didn't，主詞改成代名詞 he。" },
			],
		},
		{
			id: "l4",
			title: "Lesson 4　Do You Know What These Words Mean?",
			review: [
				{ heading: "間接問句（名詞子句）", points: [
					"疑問詞 + 主詞 + 動詞（直述句語序）：Do you know where he lives?",
					"不可寫成 where does he live。",
					"Yes/No 問句改間接問句用 if / whether：I wonder if he will come.",
				] },
				{ heading: "感官動詞", points: [
					"see / hear / watch / feel + 受詞 + 原形動詞（或 V-ing）。",
					"I saw him cross the street. / I heard someone call my name.",
				] },
			],
			questions: [
				{ id: "l4-1", section: "Lesson 4", q: "Do you know where ___?", options: ["does he live", "he lives", "lives he", "he does live"], answer: 1, explain: "間接問句用直述句語序：疑問詞 + 主詞 + 動詞。" },
				{ id: "l4-2", section: "Lesson 4", q: "Can you tell me what time ___?", options: ["it is", "is it", "it does", "does it"], answer: 0, explain: "間接問句：what time + it is。" },
				{ id: "l4-3", section: "Lesson 4", q: "I wonder ___ he will come to the party.", options: ["what", "that", "if", "where"], answer: 2, explain: "原本是 Yes/No 問句（Will he come?），改成間接問句用 if 或 whether。" },
				{ id: "l4-4", section: "Lesson 4", q: "下列哪一句正確？", options: ["Do you know when does the train leave?", "Do you know when leaves the train?", "Do you know when the train does leave?", "Do you know when the train leaves?"], answer: 3, explain: "間接問句不用助動詞 does，用直述句語序：when the train leaves。" },
				{ id: "l4-5", section: "Lesson 4", q: "I saw him ___ the street.", options: ["crossed", "to cross", "cross", "crosses"], answer: 2, explain: "感官動詞 see + 受詞 + 原形動詞（或 V-ing）。" },
				{ id: "l4-6", section: "Lesson 4", q: "I heard someone ___ my name.", options: ["to call", "call", "called", "calls"], answer: 1, explain: "感官動詞 hear + 受詞 + 原形動詞：heard someone call。" },
			],
		},
		{
			id: "l5",
			title: "Lesson 5　The Amazing…",
			review: [
				{ heading: "關係代名詞（主格）", points: [
					"人用 who（或 that），事物、動物用 which（或 that）。",
					"The girl who is singing is my sister.",
					"關係子句的動詞要和先行詞一致：The boys who are playing ball…",
				] },
			],
			questions: [
				{ id: "l5-1", section: "Lesson 5", q: "The girl ___ is singing on the stage is my sister.", options: ["who", "which", "whose", "whom"], answer: 0, explain: "先行詞 the girl 是人，在子句中當主詞，用 who。" },
				{ id: "l5-2", section: "Lesson 5", q: "I like books ___ have a lot of pictures.", options: ["who", "which", "whom", "whose"], answer: 1, explain: "先行詞 books 是事物，用 which（或 that）。" },
				{ id: "l5-3", section: "Lesson 5", q: "This is the dog ___ saved the little boy.", options: ["who", "whom", "whose", "that"], answer: 3, explain: "先行詞 the dog 是動物，用 that 或 which。" },
				{ id: "l5-4", section: "Lesson 5", q: "The boys who ___ playing basketball are my classmates.", options: ["is", "am", "are", "be"], answer: 2, explain: "關係子句的動詞要和先行詞一致，the boys 是複數，用 are。" },
				{ id: "l5-5", section: "Lesson 5", q: "He is a man ___ works very hard.", options: ["which", "whose", "who", "whom"], answer: 2, explain: "先行詞 a man 是人，在子句中當主詞，用 who。" },
			],
		},
		{
			id: "l6",
			title: "Lesson 6　Are You One of…?",
			review: [
				{ heading: "關係代名詞（受格與所有格）", points: [
					"受格：人用 whom/who/that，事物用 which/that；當受詞時可以省略。",
					"The book (which) I bought is interesting.",
					"所有格 whose + 名詞：She is the girl whose father is a doctor.",
				] },
			],
			questions: [
				{ id: "l6-1", section: "Lesson 6", q: "The book ___ I bought yesterday is very interesting.", options: ["who", "which", "whose", "what"], answer: 1, explain: "先行詞 the book 是事物，在子句中當 bought 的受詞，用 which（或 that，也可省略）。" },
				{ id: "l6-2", section: "Lesson 6", q: "She is the girl ___ father is a doctor.", options: ["who", "which", "whom", "whose"], answer: 3, explain: "「她的」父親，用所有格關係代名詞 whose + 名詞。" },
				{ id: "l6-3", section: "Lesson 6", q: "The man ___ we met yesterday is my teacher.", options: ["whom", "whose", "which", "what"], answer: 0, explain: "先行詞是人，在子句中當 met 的受詞，用 whom（或 who、that）。" },
				{ id: "l6-4", section: "Lesson 6", q: "下列哪一句中的關係代名詞可以省略？", options: ["The girl who is singing is Amy.", "The boy whose bike was stolen is sad.", "The cake that I made is delicious.", "The dog which saved him is famous."], answer: 2, explain: "關係代名詞當受詞時可以省略：The cake (that) I made。當主詞或所有格時不能省略。" },
				{ id: "l6-5", section: "Lesson 6", q: "I have a friend ___ house is near the beach.", options: ["who", "whose", "which", "whom"], answer: 1, explain: "朋友「的」房子，用 whose + 名詞。" },
			],
		},
	],
});
