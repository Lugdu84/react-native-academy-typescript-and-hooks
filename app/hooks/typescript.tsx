import { LayoutChangeEvent, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import RowPosition from '@/components/RowPosition';

export default function TypeScriptScreen() {
	// 1. les types disponibles et qu'est-ce que any

	// string
	let str: string = 'string';

	// number
	let numm: number = 1;

	// boolean
	let bool: boolean = true;

	// array
	let arr: number[] = [1, 2, 3];

	// object
	let objectt: { id: string; longitude: number; latitude: number } = {
		id: '1',
		longitude: 30,
		latitude: 32,
	};

	// 2. union types
	let union: string | number = 'string';
	union = 4;
	union = 'string';

	const funct = (param?: string | number) => {};

	let unionOptional: string | number | undefined = 'string';
	unionOptional = undefined;

	// 2. Utilise l'inférence de type
	const number = 1;
	const string = 'string';
	const boolean = true;
	let boolean2 = false;
	const arrayOfNumber = [1, 2, 3];

	// 3. Créer un type

	// 4. Type le tableau en utilisant un tableau de type Position
	const positions: Position[] = [
		{ id: '1', longitude: 30, latitude: 20 },
		{ id: '2', longitude: 24, latitude: 12 },
		{ id: '3', longitude: 17, latitude: 31 },
	];

	// 5. Crée un type pour le handleFocus
	const handleLayout = (event: LayoutChangeEvent) => {
		console.log(event.nativeEvent.layout);
	};

	// 6. Typage du composant RowPosition

	// 7. un fichier position.d.ts et utilisation dans le composant RowPosition

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'TypeScript' }} />
			<Text style={styles.title}>Liste des positions</Text>
			{positions.map((position) => (
				<RowPosition
					key={position.id}
					position={position}
				/>
			))}
			<TextInput
				onLayout={handleLayout}
				style={styles.input}
				placeholder="Entrez un texte"
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		gap: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
		borderRadius: 10,
	},
});
