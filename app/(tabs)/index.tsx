import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Link
				style={styles.link}
				href={'/hooks/typescript'}>
				Cours TypeScript
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/typescript-tp'}>
				Corrigé TP TypeScript
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/use-state'}>
				Cours useState
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/use-state-tp'}>
				Corrigé TP useState
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
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
	link: {
		color: '#2e78b7',
	},
});
