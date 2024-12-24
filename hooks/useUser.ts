import { useState } from 'react';

export const useUser = () => {
	const [user, setUser] = useState<User | null>(null);

	const connectToApi = async () => {};

	const signIn = () => {
		connectToApi();
		const newUser: User = {
			name: 'John Doe',
			age: 30,
			id: '1',
		};
		setUser(newUser);
	};

	const signOut = () => {
		setUser(null);
	};

	return { user, signIn, signOut };
};
