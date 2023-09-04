type Champion = {
	id: string;
	name: string;
	image: {
		full: string;
	};
};

type ItemProps = {
	items: Item[];
};

type Item = {
	name: string;
	description: string;
	plaintext: string;
	requiredChampion: string;
	specialRecipe: number;
	from: number[];
	into: number[];
	image: {
		full: string;
	};
	gold: {
		base: number;
		purchasable: boolean;
		total: number;
		sell: number;
	};
	tags: string[];
	maps: {
		"11": boolean;
		"12": boolean;
		"21": boolean;
		"22": boolean;
		"30": boolean;
	};
	depth: number;
};

type Game = {
	gameId: string;
	participants: string[];
	team1: {
		team1playerlist: string[];
		team1championlist: string[];
	};
	team2: {
		team2playerlist: string[];
		team2championlist: string[];
	};
	queueId: number;
	info: {
		gameDuration: number;
		participants: any[];
	};
};

type teamplayer = {
	champion: string;
	name: string;
};
