import { createContext, PropsWithChildren, useContext } from 'react';
import { useUser } from './useUser';

const AuthContext = createContext<Auth | null>(null);

export const useAuth = () => {
	const value = useContext(AuthContext);
	if (!value) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return value;
};

export function AuthProvider({ children }: PropsWithChildren) {
	const { user, signIn, signOut } = useUser();

	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}
