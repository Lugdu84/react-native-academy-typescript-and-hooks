import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TextStyle,
} from 'react-native';
import { useRef, useState } from 'react';
import { Stack } from 'expo-router';

export default function UseRefScreen() {
	const [count, setCount] = useState(0);
	const counterRef = useRef(0);
	const inputRef = useRef<TextInput>(null);
	const textRef = useRef<Text>(null);

	let counter = 0;

	const handleIncrementRef = () => {
		counter += 1;
		counterRef.current += 1;
		console.log('ref counter', counterRef.current);
		console.log('let counter', counter);
	};

	const handleChangeText = () => {
		textRef.current?.setNativeProps({
			style: {
				color: 'red',
				fontSize: 20,
			} satisfies TextStyle,
		});
	};

	const handleFocus = () => {
		inputRef.current?.focus();
	};
	const handleClear = () => {
		inputRef.current?.clear();
	};
	const handleSelectionInput = () => {
		inputRef.current?.setSelection(0, 5);
	};
	console.log('valeur de la ref :', counterRef.current);
	console.log('valeur de la variable let', counter);
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'useRef' }} />
			<TextInput
				ref={inputRef}
				style={styles.input}
				placeholder="Tapez du texte"
			/>
			<Button
				title="focus"
				onPress={handleFocus}
			/>
			<Button
				title="clear"
				onPress={handleClear}
			/>
			<Text ref={textRef}>Text</Text>
			<Button
				title="Change style of <Text />"
				onPress={handleChangeText}
			/>
			<Button
				title="Select Text in Input"
				onPress={handleSelectionInput}
			/>
			<Button
				title="Increment"
				onPress={handleIncrementRef}
			/>
			<Button
				title="re-render"
				onPress={() => setCount(count + 1)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	},
	input: {
		padding: 10,
		borderRadius: 10,
		borderColor: 'gray',
		borderWidth: 1,
	},
});
