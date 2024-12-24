type User = {
	id: string;
	name: string;
	age: number;
};

type Auth = {
	user: User | null;
	signIn: () => void;
	signOut: () => void;
};
