import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type CustomInputProps = {
	onChangeText: (text: string) => void;
};

export default function CustomInput({ onChangeText }: CustomInputProps) {
	console.log('re-rendered in input');
	const [text, setText] = useState('');

	const handleSubmited = () => {
		onChangeText(text);
		setText('');
	};
	return (
		<TextInput
			onChangeText={setText}
			onSubmitEditing={handleSubmited}
			value={text}
			style={styles.input}
			placeholder="Tape quelque chose"
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
		margin: 10,
		borderRadius: 10,
	},
});
