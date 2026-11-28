// 英語 八上（康軒版，課次依 114 學年度學校課程計畫）
// answer 是正確選項的索引：0=(A) 1=(B) 2=(C) 3=(D)
STUDY.add({
	id: "english-8a",
	subject: "英語",
	name: "八上",
	publisher: "康軒",
	lang: "en",
	note: "課次與文法重點依 114 學年度康軒八上學校課程計畫（她讀八上的那一年）；課名只列出能確認的部分。",
	chapters: [
		{
			id: "l1",
			title: "Lesson 1　It Rained a Lot Yesterday",
			review: [
				{ heading: "天氣", points: [
					"問天氣：How's the weather? / What's the weather like? — It's sunny / rainy / cloudy / windy.",
					"名詞變形容詞：rain → rainy, sun → sunny, cloud → cloudy, wind → windy, snow → snowy。",
					"動詞用法：It rained a lot yesterday. / It snows in winter.",
				] },
			],
			questions: [
				{ id: "l1-1", section: "Lesson 1", q: "A: ___ the weather today?\nB: It's sunny.", options: ["What's", "How's", "Where's", "Who's"], answer: 1, explain: "問天氣用 How's the weather? 或 What's the weather like?" },
				{ id: "l1-2", section: "Lesson 1", q: "A: What's the weather ___ in Taipei?\nB: It's hot and humid.", options: ["like", "how", "for", "about"], answer: 0, explain: "What's the weather like? 是固定用法。" },
				{ id: "l1-3", section: "Lesson 1", q: "It's ___ today. Take your umbrella.", options: ["rain", "rains", "rainy", "rained"], answer: 2, explain: "It's 後面接形容詞：rainy（下雨的）。" },
				{ id: "l1-4", section: "Lesson 1", q: "It ___ a lot yesterday, so the streets were wet.", options: ["rains", "is raining", "rainy", "rained"], answer: 3, explain: "yesterday 是過去時間，rain 當動詞用過去式 rained。" },
			],
		},
		{
			id: "l2",
			title: "Lesson 2　Why Didn't…?",
			review: [
				{ heading: "授與動詞", points: [
					"give / send / show / tell + 人 + 物 = give + 物 + to + 人：My mom gave me a book. = My mom gave a book to me.",
					"buy / make / cook + 物 + for + 人：She bought a cake for me.",
				] },
				{ heading: "Why 問句與 because / so", points: [
					"Why didn't you come? — Because I was sick.",
					"because 說原因，so 說結果；同一句不能同時用 because 和 so。",
				] },
			],
			questions: [
				{ id: "l2-1", section: "Lesson 2", q: "My mom gave me a book. = My mom gave a book ___ me.", options: ["for", "to", "with", "at"], answer: 1, explain: "give 改成「物 + 介系詞 + 人」時用 to。" },
				{ id: "l2-2", section: "Lesson 2", q: "My dad bought a new bike ___ me.", options: ["for", "to", "of", "at"], answer: 0, explain: "buy 的授與用法用 for：buy something for someone。" },
				{ id: "l2-3", section: "Lesson 2", q: "A: Why didn't you come to the party?\nB: ___ I was sick.", options: ["So", "But", "Because", "And"], answer: 2, explain: "回答 Why 的原因用 Because。" },
				{ id: "l2-4", section: "Lesson 2", q: "I was sick, ___ I didn't go to school.", options: ["because", "but", "or", "so"], answer: 3, explain: "前面是原因，後面是結果，用 so。" },
				{ id: "l2-5", section: "Lesson 2", q: "Could you pass ___ the salt, please?", options: ["me", "I", "my", "mine"], answer: 0, explain: "授與動詞 pass + 人（受格）+ 物：pass me the salt。" },
			],
		},
		{
			id: "l3",
			title: "Lesson 3　過去進行式與 when / before / after",
			review: [
				{ heading: "過去進行式", points: [
					"was / were + V-ing：表示過去某個時間正在進行的動作。",
					"What were you doing at 8 last night? — I was reading a book.",
					"I was sleeping when the phone rang.",
				] },
				{ heading: "時間連接詞", points: [
					"before（在……之前）、after（在……之後）、when（當……時）。",
					"Wash your hands before you eat. / After he finished his homework, he watched TV.",
				] },
			],
			questions: [
				{ id: "l3-1", section: "Lesson 3", q: "A: What were you doing at eight last night?\nB: I ___ a book.", options: ["read", "am reading", "was reading", "were reading"], answer: 2, explain: "問過去某時正在做什麼，用過去進行式；主詞 I 搭配 was：was reading。" },
				{ id: "l3-2", section: "Lesson 3", q: "I was sleeping ___ the phone rang.", options: ["when", "before", "after", "so"], answer: 0, explain: "正在睡覺「的時候」電話響了，用 when。" },
				{ id: "l3-3", section: "Lesson 3", q: "Wash your hands before you ___.", options: ["ate", "eating", "will eat", "eat"], answer: 3, explain: "before 引導的時間子句，表示未來或習慣時用現在式：before you eat。" },
				{ id: "l3-4", section: "Lesson 3", q: "After he finished his homework, he ___ TV.", options: ["watches", "watched", "watching", "is watching"], answer: 1, explain: "finished 是過去式，後面的動作也發生在過去：watched。" },
				{ id: "l3-5", section: "Lesson 3", q: "They ___ basketball when it started to rain.", options: ["were playing", "was playing", "are playing", "play"], answer: 0, explain: "下雨時他們正在打球，用過去進行式；主詞 They 搭配 were。" },
			],
		},
		{
			id: "l4",
			title: "Lesson 4　不定詞與動名詞",
			review: [
				{ heading: "不定詞與動名詞", points: [
					"want / hope / plan / decide / would like + to V：I want to be a doctor.",
					"enjoy / finish / practice / mind + V-ing：She enjoys reading.",
					"It's + 形容詞 + to V：It's fun to play with friends.",
				] },
			],
			questions: [
				{ id: "l4-1", section: "Lesson 4", q: "I want ___ a doctor in the future.", options: ["be", "being", "to be", "am"], answer: 2, explain: "want 後面接不定詞 to + 原形動詞。" },
				{ id: "l4-2", section: "Lesson 4", q: "She enjoys ___ books in her free time.", options: ["reading", "to read", "read", "reads"], answer: 0, explain: "enjoy 後面接動名詞 V-ing。" },
				{ id: "l4-3", section: "Lesson 4", q: "He finished ___ his homework at nine.", options: ["to do", "do", "does", "doing"], answer: 3, explain: "finish 後面接動名詞：finished doing。" },
				{ id: "l4-4", section: "Lesson 4", q: "It's fun ___ with friends.", options: ["play", "to play", "played", "plays"], answer: 1, explain: "It's + 形容詞 + to + 原形動詞。" },
				{ id: "l4-5", section: "Lesson 4", q: "Would you like ___ some tea?", options: ["having", "have", "to have", "had"], answer: 2, explain: "would like 後面接不定詞 to + 原形動詞。" },
			],
		},
		{
			id: "l5",
			title: "Lesson 5　Will We Stay…?",
			review: [
				{ heading: "未來式", points: [
					"will + 原形動詞：I will visit my grandma tomorrow.",
					"否定 won't（will not）：No, it won't.",
					"be going to + 原形動詞：表示已經計畫好，或有跡象將發生。Look at the clouds. It is going to rain.",
				] },
			],
			questions: [
				{ id: "l5-1", section: "Lesson 5", q: "I ___ visit my grandma tomorrow.", options: ["will", "was", "am", "did"], answer: 0, explain: "tomorrow 表示未來，用 will + 原形動詞。" },
				{ id: "l5-2", section: "Lesson 5", q: "We are going to ___ a party this weekend.", options: ["having", "had", "has", "have"], answer: 3, explain: "be going to 後面接原形動詞：are going to have。" },
				{ id: "l5-3", section: "Lesson 5", q: "A: Will it rain tomorrow?\nB: No, it ___.", options: ["isn't", "doesn't", "won't", "didn't"], answer: 2, explain: "用 Will 問，否定用 won't（will not）回答。" },
				{ id: "l5-4", section: "Lesson 5", q: "Look at those dark clouds! It ___ rain.", options: ["is going to", "was", "rained", "has"], answer: 0, explain: "看到跡象推測即將發生，用 be going to。" },
			],
		},
		{
			id: "l6",
			title: "Lesson 6　問路與 spend / pay / take / cost",
			review: [
				{ heading: "問路", points: [
					"How can I get to the bank? — Go straight and turn left at the corner.",
					"介系詞片語：next to、between A and B、across from、on the corner of。",
				] },
				{ heading: "花費的動詞", points: [
					"人 + spend + 時間/錢 + on 物 / V-ing：I spent two hours on my homework.",
					"人 + pay + 錢 + for 物：I paid 300 dollars for the book.",
					"It takes + 人 + 時間 + to V：It takes me 30 minutes to walk to school.",
					"物 + cost + 人 + 錢：The book cost 300 dollars.",
				] },
			],
			questions: [
				{ id: "l6-1", section: "Lesson 6", q: "Go straight and turn ___ at the corner. The bank is on your left.", options: ["right", "left", "back", "up"], answer: 1, explain: "銀行在你的左邊，所以在轉角左轉：turn left。" },
				{ id: "l6-2", section: "Lesson 6", q: "The bookstore is ___ the post office and the school.", options: ["between", "next", "across", "on"], answer: 0, explain: "在兩者之間用 between A and B。" },
				{ id: "l6-3", section: "Lesson 6", q: "I ___ two hours on my homework last night.", options: ["took", "cost", "paid", "spent"], answer: 3, explain: "人 + spend + 時間 + on 某事：spent two hours on。" },
				{ id: "l6-4", section: "Lesson 6", q: "It ___ me thirty minutes to walk to school every day.", options: ["spends", "takes", "costs", "pays"], answer: 1, explain: "It takes + 人 + 時間 + to V，表示花多少時間做某事。" },
				{ id: "l6-5", section: "Lesson 6", q: "This book ___ 300 dollars.", options: ["spends", "pays", "costs", "takes"], answer: 2, explain: "物當主詞用 cost：The book costs 300 dollars." },
				{ id: "l6-6", section: "Lesson 6", q: "I ___ 300 dollars for this book.", options: ["paid", "cost", "took", "spent on"], answer: 0, explain: "人 + pay + 錢 + for 物：paid 300 dollars for。" },
			],
		},
	],
});
