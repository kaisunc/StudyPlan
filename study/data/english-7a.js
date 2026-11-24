// 英語 七上（翰林版，單元依 113 學年度學校課程計畫）
// answer 是正確選項的索引：0=(A) 1=(B) 2=(C) 3=(D)
STUDY.add({
	id: "english-7a",
	subject: "英語",
	name: "七上",
	publisher: "翰林",
	lang: "en",
	note: "單元名稱依 113 學年度翰林七上課程計畫。題目以英文朗讀，解說以中文朗讀。",
	chapters: [
		{
			id: "su",
			title: "Starter Unit　複習國小",
			review: [
				{ heading: "be 動詞與人稱代名詞", points: [
					"I am / You are / He is / She is / It is / We are / They are。",
					"縮寫：I'm, you're, he's, she's, it's, we're, they're。",
					"所有格：my, your, his, her, its, our, their。例如 Her name is Amy.",
				] },
				{ heading: "數字與書寫規則", points: [
					"注意拼字：forty（不是 fourty）、fourteen、twelve、twenty。",
					"句首第一個字母大寫，人名、地名大寫，句尾加句號或問號。",
				] },
			],
			questions: [
				{ id: "su-1", section: "Starter Unit", q: "___ name is Amy. She is my friend.", options: ["She", "Her", "Hers", "He"], answer: 1, explain: "名字前面要用所有格。She 的所有格是 Her：Her name is Amy." },
				{ id: "su-2", section: "Starter Unit", q: "They ___ students.", options: ["am", "is", "are", "be"], answer: 2, explain: "They 是複數，be 動詞用 are。" },
				{ id: "su-3", section: "Starter Unit", q: "I ___ thirteen years old.", options: ["am", "is", "are", "be"], answer: 0, explain: "主詞 I 搭配 am。" },
				{ id: "su-4", section: "Starter Unit", q: "A: What's your phone number?\nB: ___", options: ["I'm fine, thank you.", "It's Tom.", "I'm thirteen.", "It's 0912-345-678."], answer: 3, explain: "問電話號碼，要回答號碼：It's 0912-345-678." },
				{ id: "su-5", section: "Starter Unit", q: "「四十」的英文拼字是哪一個？", options: ["fourty", "forty", "fourteen", "fouty"], answer: 1, explain: "four（四）、fourteen（十四）都有 u，但 forty（四十）沒有 u，是常考的拼字陷阱。" },
				{ id: "su-6", section: "Starter Unit", q: "下列哪一句的大小寫和標點完全正確？", options: ["my name is tom.", "My name is tom.", "My name is Tom.", "My Name Is Tom"], answer: 2, explain: "句首要大寫，人名 Tom 也要大寫，句尾要有句號。" },
			],
		},
		{
			id: "u1",
			title: "Unit 1　Who's That Handsome Boy?",
			review: [
				{ heading: "Who 問句與 be 動詞問句", points: [
					"Who is he/she? — He/She is my uncle.",
					"Is he a doctor? — Yes, he is. / No, he isn't.",
					"簡答用代名詞：Is your mother a cook? — No, she isn't.",
				] },
				{ heading: "形容詞與家人、職業", points: [
					"形容詞放在 be 動詞後面，或名詞前面：Max is tall. / Max is a tall boy.",
					"家人：grandfather, grandmother, uncle, aunt, cousin。爸爸的姊妹是 aunt。",
					"動詞＋er 變成「做這件事的人」：sing → singer, teach → teacher, dance → dancer。",
					"問年紀：How old is your brother? — He is fifteen.",
				] },
			],
			questions: [
				{ id: "u1-1", section: "Unit 1", q: "A: Who is that man?\nB: ___ is my uncle.", options: ["He", "She", "It", "They"], answer: 0, explain: "that man 是一位男性，代名詞用 He。" },
				{ id: "u1-2", section: "Unit 1", q: "A: Is your mother a doctor?\nB: No, ___.", options: ["he isn't", "she is", "it isn't", "she isn't"], answer: 3, explain: "mother 用 she，回答 No 要用否定：No, she isn't." },
				{ id: "u1-3", section: "Unit 1", q: "My father's sister is my ___.", options: ["uncle", "aunt", "cousin", "grandmother"], answer: 1, explain: "爸爸的姊妹是 aunt（姑姑）。uncle 是叔叔、舅舅，cousin 是堂表兄弟姊妹。" },
				{ id: "u1-4", section: "Unit 1", q: "下列哪一句正確？", options: ["Max is a boy tall.", "Max is tall a boy.", "Max is a tall boy.", "Max tall is a boy."], answer: 2, explain: "形容詞放在名詞前面：a tall boy。" },
				{ id: "u1-5", section: "Unit 1", q: "A: How old is your brother?\nB: ___", options: ["He is fifteen.", "He is tall.", "He is a student.", "He is fine."], answer: 0, explain: "How old 問年紀，要回答幾歲。" },
				{ id: "u1-6", section: "Unit 1", q: "He sings very well. He is a good ___.", options: ["sing", "singing", "singer", "song"], answer: 2, explain: "a good 後面要接名詞「人」。動詞 sing 加 er 變成 singer（歌手）。" },
				{ id: "u1-7", section: "Unit 1", q: "A: Who are they?\nB: ___ my grandparents.", options: ["He's", "She's", "It's", "They're"], answer: 3, explain: "they 是複數，They're = They are。" },
				{ id: "u1-8", section: "Unit 1", q: "「She is tall.」的否定句是哪一個？", options: ["She not is tall.", "She isn't tall.", "She doesn't tall.", "She no tall."], answer: 1, explain: "be 動詞的否定，直接在 is 後面加 not：She is not tall. = She isn't tall." },
			],
		},
		{
			id: "u2",
			title: "Unit 2　Where Are My Pencils?",
			review: [
				{ heading: "冠詞與名詞複數", points: [
					"a 接子音開頭的字，an 接母音發音開頭的字：a banana, an apple, an egg。",
					"一般加 s：book → books。字尾 s, x, sh, ch 加 es：box → boxes。",
					"字尾 f/fe 改 ves：knife → knives, leaf → leaves。",
				] },
				{ heading: "指示代名詞與 What/Where 問句", points: [
					"this（這個）/ that（那個）；these（這些）/ those（那些）。",
					"What is this? — It's a pen. / What are those? — They're books.",
					"Where is the cat? — It's under the bed. / Where are my pencils? — They're in the box.",
					"地方介系詞：in, on, under, near, next to, between A and B, behind, in front of。",
					"Is this your bag? — Yes, it is.（簡答不用縮寫 it's）",
				] },
			],
			questions: [
				{ id: "u2-1", section: "Unit 2", q: "I have ___ apple and ___ banana.", options: ["a, an", "an, a", "an, an", "a, a"], answer: 1, explain: "apple 是母音發音開頭，用 an；banana 是子音開頭，用 a。" },
				{ id: "u2-2", section: "Unit 2", q: "box 的複數是哪一個？", options: ["boxes", "boxs", "boxies", "box"], answer: 0, explain: "字尾是 x，複數加 es：boxes。" },
				{ id: "u2-3", section: "Unit 2", q: "knife 的複數是哪一個？", options: ["knifes", "knife", "knifs", "knives"], answer: 3, explain: "字尾 fe 要改成 ves：knife → knives。" },
				{ id: "u2-4", section: "Unit 2", q: "A: What are those?\nB: ___ are my books.", options: ["It", "They", "That", "He"], answer: 1, explain: "those 是複數，回答用 They：They are my books." },
				{ id: "u2-5", section: "Unit 2", q: "The cat is ___ the table.（貓在桌子下面）", options: ["on", "in", "under", "behind"], answer: 2, explain: "在……下面是 under。on 是在上面，behind 是在後面。" },
				{ id: "u2-6", section: "Unit 2", q: "Where ___ my pencils?", options: ["are", "is", "am", "be"], answer: 0, explain: "pencils 是複數，be 動詞用 are。" },
				{ id: "u2-7", section: "Unit 2", q: "The bank is ___ the school and the park.", options: ["next", "behind", "under", "between"], answer: 3, explain: "在兩者之間用 between A and B。" },
				{ id: "u2-8", section: "Unit 2", q: "A: Is this your bag?\nB: Yes, ___.", options: ["this is", "it is", "it's", "that is"], answer: 1, explain: "用 this 問，簡答用 it 回答：Yes, it is. 肯定簡答不能縮寫成 it's。" },
			],
		},
		{
			id: "u3",
			title: "Unit 3　Open the Magic Door",
			review: [
				{ heading: "祈使句與 Let's", points: [
					"祈使句用原形動詞開頭：Open the door. / Be quiet.",
					"否定：Don't + 原形動詞：Don't run in the hallway.",
					"加上 please 更有禮貌：Please close the door. / Close the door, please.",
					"Let's + 原形動詞：Let's go to the park. 回應：Sounds great! / OK. / Sorry, maybe next time.",
				] },
				{ heading: "can 與受格代名詞", points: [
					"Can you swim? — Yes, I can. / No, I can't.",
					"Can I use your pen? — Sure. Here you are.",
					"受格放在動詞或介系詞後面：me, you, him, her, it, us, them。",
				] },
			],
			questions: [
				{ id: "u3-1", section: "Unit 3", q: "___ run in the hallway.（不要在走廊奔跑）", options: ["No", "Not", "Don't", "Doesn't"], answer: 2, explain: "祈使句的否定用 Don't + 原形動詞。" },
				{ id: "u3-2", section: "Unit 3", q: "Let's ___ to the park.", options: ["go", "goes", "going", "to go"], answer: 0, explain: "Let's 後面接原形動詞：Let's go." },
				{ id: "u3-3", section: "Unit 3", q: "A: Let's play basketball after school.\nB: ___ I love basketball.", options: ["Sorry, I can't.", "No, thanks.", "Maybe next time.", "Sounds great!"], answer: 3, explain: "B 說自己很喜歡籃球，表示接受邀請，回答 Sounds great!" },
				{ id: "u3-4", section: "Unit 3", q: "A: Can I use your pen?\nB: Sure. ___", options: ["You're welcome.", "Here you are.", "I'm sorry.", "Thank you."], answer: 1, explain: "把東西遞給對方時說 Here you are.（拿去吧）。" },
				{ id: "u3-5", section: "Unit 3", q: "Amy is my friend. I like ___ very much.", options: ["she", "hers", "her", "he"], answer: 2, explain: "動詞 like 後面要用受格。she 的受格是 her。" },
				{ id: "u3-6", section: "Unit 3", q: "Please help ___.（請幫助我們）", options: ["us", "we", "our", "ours"], answer: 0, explain: "動詞 help 後面接受格。we 的受格是 us。" },
				{ id: "u3-7", section: "Unit 3", q: "A: Can you swim?\nB: No, I ___.", options: ["don't", "am not", "isn't", "can't"], answer: 3, explain: "用 Can 問，就用 can 回答：No, I can't." },
				{ id: "u3-8", section: "Unit 3", q: "下列哪一句正確？", options: ["Close please the door.", "Please close the door.", "Please closes the door.", "Please to close the door."], answer: 1, explain: "please 放在句首或句尾，動詞用原形：Please close the door." },
			],
		},
		{
			id: "u4",
			title: "Unit 4　What Time Is the Concert?",
			review: [
				{ heading: "時間與星期", points: [
					"What time is it? — It's seven thirty.（7:30）",
					"3:15 = three fifteen = a quarter past three；3:30 = half past three。",
					"a.m. 是上午，p.m. 是下午。",
					"What day is it today? — It's Friday.",
					"星期：Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday。",
				] },
				{ heading: "現在進行式", points: [
					"be 動詞（am/is/are）+ V-ing，表示「正在」做某事。",
					"What are you doing? — I'm doing my homework.",
					"Is she reading? — No, she isn't. She's sleeping.",
					"-ing 拼法：一般加 ing；字尾 e 去 e 加 ing（dance → dancing）；短母音＋單子音要重複字尾（swim → swimming, run → running）。",
				] },
			],
			questions: [
				{ id: "u4-1", section: "Unit 4", q: "現在是 7:30。A: What time is it? B: ___", options: ["It's seven three.", "It's seven thirty.", "It's thirty seven.", "It's half seven thirty."], answer: 1, explain: "7:30 唸成 seven thirty，也可以說 half past seven。" },
				{ id: "u4-2", section: "Unit 4", q: "3:15 可以怎麼說？", options: ["a quarter to three", "three fifty", "a quarter past three", "half past three"], answer: 2, explain: "15 分鐘是一刻鐘（a quarter），3 點過一刻：a quarter past three。" },
				{ id: "u4-3", section: "Unit 4", q: "A: What day is it today?\nB: ___", options: ["It's Friday.", "It's May 5th.", "It's ten o'clock.", "It's sunny."], answer: 0, explain: "What day 問星期幾，回答 It's Friday." },
				{ id: "u4-4", section: "Unit 4", q: "Look! The boys ___ basketball now.", options: ["play", "plays", "playing", "are playing"], answer: 3, explain: "Look! 和 now 表示正在發生，用現在進行式：are + playing。" },
				{ id: "u4-5", section: "Unit 4", q: "swim 加上 -ing 的正確拼法是哪一個？", options: ["swiming", "swimming", "swimeing", "swimmming"], answer: 1, explain: "swim 是短母音加單一子音結尾，要重複字尾 m 再加 ing。" },
				{ id: "u4-6", section: "Unit 4", q: "A: What are you doing?\nB: I ___ my homework.", options: ["do", "doing", "am doing", "is doing"], answer: 2, explain: "現在進行式：I am doing。I 要搭配 am。" },
				{ id: "u4-7", section: "Unit 4", q: "A: Is she reading?\nB: No, she ___. She's sleeping.", options: ["isn't", "doesn't", "can't", "aren't"], answer: 0, explain: "用 Is 問，用 is 回答；否定：No, she isn't." },
				{ id: "u4-8", section: "Unit 4", q: "Wednesday 的下一天是哪一天？", options: ["Tuesday", "Monday", "Friday", "Thursday"], answer: 3, explain: "Wednesday（星期三）的下一天是 Thursday（星期四）。" },
			],
		},
		{
			id: "u5",
			title: "Unit 5　What's the Date?",
			review: [
				{ heading: "月份與序數", points: [
					"月份：January, February, March, April, May, June, July, August, September, October, November, December。",
					"序數：first, second, third, fourth, fifth … ninth, tenth, eleventh, twelfth, twentieth, twenty-first。",
					"特別注意拼法：fifth, ninth, twelfth, twentieth。",
				] },
				{ heading: "日期問答與介系詞", points: [
					"What's the date today? — It's May 5th.（問日期）",
					"What day is it today? — It's Tuesday.（問星期）",
					"When is Christmas? — It's on December 25th.",
					"日期、星期用 on：on May 5th, on Sunday；月份、年份用 in：in June, in 2025。",
					"美國的感恩節在十一月。",
				] },
			],
			questions: [
				{ id: "u5-1", section: "Unit 5", q: "12 的序數（第十二）拼法是哪一個？", options: ["twelveth", "twelvth", "twelfth", "twelveteh"], answer: 2, explain: "twelve 變序數時 ve 改成 f，再加 th：twelfth。" },
				{ id: "u5-2", section: "Unit 5", q: "A: What's the date today?\nB: ___", options: ["It's May 5th.", "It's Monday.", "It's three o'clock.", "It's my birthday party."], answer: 0, explain: "What's the date 問日期（幾月幾日）。問星期要用 What day。" },
				{ id: "u5-3", section: "Unit 5", q: "A: When is Christmas?\nB: It's ___ December 25th.", options: ["in", "on", "at", "to"], answer: 1, explain: "特定日期前面用 on。" },
				{ id: "u5-4", section: "Unit 5", q: "My birthday is ___ June.", options: ["on", "at", "to", "in"], answer: 3, explain: "只有月份時用 in：in June。" },
				{ id: "u5-5", section: "Unit 5", q: "「第三」的英文是哪一個？", options: ["threeth", "thirth", "third", "thrid"], answer: 2, explain: "first、second、third 是不規則的序數，要特別記。" },
				{ id: "u5-6", section: "Unit 5", q: "August 的下一個月是哪一個？", options: ["September", "July", "October", "June"], answer: 0, explain: "August（八月）之後是 September（九月）。" },
				{ id: "u5-7", section: "Unit 5", q: "美國的感恩節（Thanksgiving）在哪一個月？", options: ["October", "November", "December", "September"], answer: 1, explain: "美國的感恩節在十一月（November）的第四個星期四。" },
				{ id: "u5-8", section: "Unit 5", q: "A: What day is it today?\nB: ___", options: ["It's June 1st.", "It's ten thirty.", "It's in June.", "It's Tuesday."], answer: 3, explain: "What day 問星期幾，回答 It's Tuesday." },
			],
		},
		{
			id: "u6",
			title: "Unit 6　There Are Some Elephants Over There",
			review: [
				{ heading: "There is / There are", points: [
					"There is + 單數名詞或不可數名詞：There is a dog in the park. / There is some milk.",
					"There are + 複數名詞：There are three books on the desk.",
					"否定：There isn't any milk. / There aren't any birds.",
					"疑問：Are there any birds in the tree? — Yes, there are. / No, there aren't.",
					"後面有多個名詞時，be 動詞看最靠近的名詞：There is a pen and two books.",
				] },
				{ heading: "時間與地點的介系詞", points: [
					"at：時刻、小地點（at 7 o'clock, at school）。",
					"on：日期、星期（on Sunday, on May 5th）。",
					"in：月份、年份、季節、大地點（in June, in 2025, in Taiwan）。",
				] },
			],
			questions: [
				{ id: "u6-1", section: "Unit 6", q: "There ___ a dog in the park.", options: ["is", "are", "am", "be"], answer: 0, explain: "a dog 是單數，用 There is。" },
				{ id: "u6-2", section: "Unit 6", q: "There ___ three books on the desk.", options: ["is", "are", "am", "be"], answer: 1, explain: "three books 是複數，用 There are。" },
				{ id: "u6-3", section: "Unit 6", q: "A: Are there any birds in the tree?\nB: Yes, ___.", options: ["they are", "it is", "there are", "there is"], answer: 2, explain: "用 Are there 問，就用 there are 回答。" },
				{ id: "u6-4", section: "Unit 6", q: "There ___ any milk in the bottle.", options: ["aren't", "is", "are", "isn't"], answer: 3, explain: "milk 是不可數名詞，用 is；否定句用 any：There isn't any milk." },
				{ id: "u6-5", section: "Unit 6", q: "There ___ a pen and two books on the desk.", options: ["is", "are", "am", "be"], answer: 0, explain: "There is/are 看最靠近的名詞。最靠近的是 a pen（單數），所以用 is。" },
				{ id: "u6-6", section: "Unit 6", q: "We go to church ___ Sunday.", options: ["in", "at", "on", "to"], answer: 2, explain: "星期前面用 on：on Sunday。" },
				{ id: "u6-7", section: "Unit 6", q: "The movie starts ___ 7 o'clock.", options: ["in", "at", "on", "to"], answer: 1, explain: "幾點幾分的時刻用 at。" },
				{ id: "u6-8", section: "Unit 6", q: "The new school year starts ___ September.", options: ["on", "at", "to", "in"], answer: 3, explain: "月份前面用 in：in September。年份也用 in，例如 in 2026。" },
			],
		},
	],
});
