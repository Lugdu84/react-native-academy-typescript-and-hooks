import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Les fondamentaux' }} />
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
			<Link
				style={styles.link}
				href={'/hooks/use-effect'}>
				Cours useEffect
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/use-effect-tp'}>
				Corrigé TP useEffect
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/use-ref'}>
				Cours useRef
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/use-ref-tp'}>
				Corrigé TP useRef
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/use-reducer'}>
				Cours useReducer
			</Link>
			<Link
				style={styles.link}
				href={'/hooks/app-state'}>
				AppState youtube
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
