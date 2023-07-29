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
};
