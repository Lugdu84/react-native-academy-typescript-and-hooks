import { Stack } from 'expo-router';
import { useEffect } from 'react';

import {
	SafeAreaView,
	StyleSheet,
	Text,
	AppState,
	AppStateStatus,
} from 'react-native';

export default function AppStateScreen() {
	useEffect(() => {
		const subscription = AppState.addEventListener('change', handleStateChange);

		return () => {
			subscription.remove();
		};
	}, []);

	const handleStateChange = (status: AppStateStatus) => {
		if (status === 'active') {
			console.log('refetch data ...');
		}
		console.log('status :', status);
	};
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'App State' }} />
			<Text style={styles.text}>Active ?</Text>
			<Text style={styles.text}>En background ?</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		gap: 20,
		alignItems: 'center',
	},
	text: {
		fontSize: 32,
	},
});
