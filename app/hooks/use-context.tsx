import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Dashboard from '@/components/context/Dashboard';
import { useAuth } from '@/hooks/Auth';

export default function UseContextScreen() {
	const { user, signIn } = useAuth();
	console.log('user', user);

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'useContext' }} />
			{user ? (
				<Dashboard />
			) : (
				<Button
					title="Sign in"
					onPress={signIn}
				/>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
