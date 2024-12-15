import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

type AddTaskProps = {
	onSubmitted: (text: string) => void;
};

export default function AddTask({ onSubmitted }: AddTaskProps) {
	const [text, setText] = useState('');

	const handleSubmit = () => {
		if (!text) {
			return;
		}
		onSubmitted(text);
		setText('');
	};
	return (
		<View style={styles.inputView}>
			<TextInput
				onSubmitEditing={handleSubmit}
				value={text}
				onChangeText={setText}
				style={styles.input}
				placeholder="Entrez le nom de la tâche"
			/>
			<Button
				title="Ajouter"
				onPress={handleSubmit}
				disabled={!text}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputView: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		flex: 1,
	},
});
