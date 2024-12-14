import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Link href={'/hooks/typescript'}>TypeScript</Link>
			<Link href={'/hooks/lesson-typescript'}>Lesson TypeScript</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
