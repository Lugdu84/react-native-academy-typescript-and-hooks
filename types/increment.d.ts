type StateCounter = {
	counter: number;
	error: string | null;
};

// type ActionCounter = "INCREMENT" | "DECREMENT" | "RESET";

type ActionCounter = {
	type: 'INCREMENT' | 'DECREMENT' | 'RESET';
	step: number;
};
