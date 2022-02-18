export const getIssues = () => {
	return [
		{
			issueID: '1',
			text: 'パソコンの画面を画像ファイルにしたい',
			userID: '1'
		},
		{
			issueID: '2',
			text: 'テレビが急に映らなくなった',
			userID: '1'
		},
		{
			issueID: '3',
			text: '来年はチョコレートがほしいなあと思った',
			userID: '1'
		},
		{
			issueID: '4',
			text: 'あの時あんな機能があれば良かったのになあと思った',
			userID: '1'
		},
		{
			issueID: '5',
			text: 'ココアを美味しくお召し上がりたい',
			userID: '1'
		},
		{
			issueID: '6',
			text: 'オンラインでホワイトボードを共有したい',
			userID: '1'
		}
	];
};

export const getSolutions = () => {
	return [
		{
			solutionID: '1',
			issueID: '1',
			textA: '「プリントスクリーン」を検索',
			textB: '画像ファイルを保存する方法が分かるように',
			userName: 'name01',
			userID: 'ID01',
			userImage: 'https://api.lorem.space/image/face?hash=92048'
		},
		{
			solutionID: '2',
			issueID: '1',
			textA: 'スマホで写真を取るように',
			textB: 'スマホのアルバムに保存できるように',
			userName: 'name02',
			userID: 'ID02',
			userImage: 'https://api.lorem.space/image/face?hash=92040'
		},
		{
			solutionID: '3',
			issueID: '2',
			textA: 'テレビの側面をリズムよく軽快に叩いたり',
			textB: '再びテレビが映るように',
			userName: '砂の嵐',
			userID: 'ID03',
			userImage: 'https://api.lorem.space/image/face?hash=93040'
		}
	];
};

export const getUsers = () => {
	return [];
};

export const getSolutionList = () => {
	return {
		1: ['1', '2'],
		2: ['3']
	};
};

export const getSolutionsFromIssueID = (issueID, allSolutions, solutionList) => {
	let solutions = [];

	if (solutionList[issueID] ?? false) {
		allSolutions.forEach((item) => {
			if (solutionList[issueID].includes(item.solutionID)) {
				solutions.push(item);
			}
		});
	}

	return solutions;
};

export const getIssueFromID = (issueID, allIssues) => {
	let issue = {};

	allIssues.forEach((item) => {
		if (issueID === item.issueID) {
			issue = item;
		}
	});

	return issue;
};
