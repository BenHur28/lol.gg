type Champion = {
	id: string;
	name: string;
	image: {
		full: string;
	};
};

type Item = {
	name: string;
	description: string;
	plaintext: string;
	image: {
		full: string;
	};
	gold: {
		base: number;
		purchasable: boolean;
		total: number;
		sell: number;
	};
};
