import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Dashboard from '@/components/context/Dashboard';

export default function UseContextScreen() {
	const user: User = {
		name: 'John Doe',
		age: 30,
		id: '1',
	};

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'useContext' }} />
			<Dashboard user={user} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
