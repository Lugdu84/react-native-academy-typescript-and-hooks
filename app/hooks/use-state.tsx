import CustomInput from '@/components/CustomInput';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function UseStateScreen() {
	const [counter, setCounter] = useState(0);
	const [object, setObject] = useState({ name: 'toto', age: 20 });
	const [text, setText] = useState('');

	const handleIncrement = () => {
		setCounter(counter + 1);
		console.log('counter', counter);
	};

	const handleIncrement3 = () => {
		setCounter((prev) => prev + 1);
		setCounter((prev) => prev + 1);
		setCounter((prev) => prev + 1);
	};

	const handleDecrement = () => {
		setCounter(counter - 1);
	};

	const handleDecrement3 = () => {
		setCounter((prev) => prev - 1);
		setCounter((prev) => prev - 1);
		setCounter((prev) => prev - 1);
	};

	const handleUpdateObject = () => {
		object.name = 'tata'; // incorrect
		setObject(object); // incorrect car un objet est immuable
	};
	const handleUpdateObjectImmuable = () => {
		setObject({ ...object, name: 'lulu' });
	};

	console.log(' re-rendered');
	// console.log('object', object);
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'useState' }} />
			<Text style={styles.title}>Cours useState</Text>
			<Button
				title="increment"
				onPress={handleIncrement}
			/>
			<Button
				title="increment x3"
				onPress={handleIncrement3}
			/>
			<Button
				title="decrement"
				onPress={handleDecrement}
			/>
			<Button
				title="decrement x3"
				onPress={handleDecrement3}
			/>
			<Button
				title="update object"
				onPress={handleUpdateObject}
			/>
			<Button
				title="update object immuable"
				onPress={handleUpdateObjectImmuable}
			/>
			<Text style={styles.counter}>Counter: {counter}</Text>
			<CustomInput onChangeText={setText} />
			<Text>Text : {text}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	counter: {
		fontSize: 18,
		textAlign: 'center',
		margin: 20,
	},
});
