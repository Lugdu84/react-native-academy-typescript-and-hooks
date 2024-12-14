import {
	NativeSyntheticEvent,
	StyleSheet,
	Text,
	TextInput,
	TextInputChangeEventData,
	TextInputFocusEventData,
	TextInputSubmitEditingEventData,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import RowUser from '@/components/RowUser';

export default function TypeScriptScreen() {
	// 1. Typer ces variables
	let num: number;
	num = 323;
	let str: string;
	str = 'Hello world';
	let numStr: string;
	numStr = '323';
	let bool: boolean;
	bool = true;
	let arr: string[];
	arr = ['1', '2', '3'];

	// 2. Typer avec des Union type
	let union: string | number;
	union = 4;
	union = '4';
	let unionOptional: string | number | undefined;
	unionOptional = 4;
	unionOptional = '4';
	unionOptional = undefined;

	// 2. Utilise l'inférence de type
	let number = 1;
	let string = 'string';
	let boolean = true;
	let arrayOfNumber = [1, 2, 3];

	// 3. Crée un type pour les User avec les propriétés name, id et age, de type string, string et number
	type User = {
		id: string;
		name: string;
		age: number;
	};

	// 4. Type le tableau en utilisant un tableau de type User
	const users: User[] = [
		{ id: '1', name: 'toto', age: 10 },
		{ id: '2', name: 'titi', age: 20 },
		{ id: '3', name: 'tata', age: 30 },
	];

	// 5. Crée un type pour le handleFocus
	const handleFocus = (
		event: NativeSyntheticEvent<TextInputFocusEventData>
	) => {
		console.log(event);
	};

	// 6. Crée un type pour le handleChange
	const handleChange = (
		event: NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		console.log(event);
	};

	// 7. Crée un type pour le handleSubmit
	const handleSubmit = (
		event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		console.log(event.nativeEvent.text);
	};

	// 8. Va dans le composant RowUser et type les props
	// Pense à créer un fichier user.d.ts pour pouvoir l'utiliser dans ton composant

	// 9. Utilise un user (il faudra également changer les props de RowUser), plutôt que {...user}

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'TypeScript' }} />
			<Text style={styles.title}>Liste des users</Text>
			{users.map((user) => (
				<RowUser
					key={user.id}
					user={user}
				/>
			))}
			<TextInput
				onFocus={handleFocus}
				onChange={handleChange}
				style={styles.input}
				placeholder="Entrez un texte"
				onSubmitEditing={handleSubmit}
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
