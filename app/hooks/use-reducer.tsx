import { Button, Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useReducer } from 'react';
import { View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';

const counterReducer = (state: StateCounter, action: ActionCounter) => {
	const { step } = action;
	switch (action.type) {
		case 'INCREMENT':
			return {
				counter: state.counter + step,
				error: null,
			};
		case 'DECREMENT':
			const newCounter = Math.max(0, state.counter - step);
			const error = newCounter <= 0 ? 'Cannot decrement below 0' : null;
			return {
				counter: newCounter,
				error,
			};
		case 'RESET':
			return {
				counter: 0,
				error: null,
			};
		default:
			return state;
	}
};

export default function UseReducerScreen() {
	const STEP = 1;
	// const [state, setState] = useState<StateCounter>({
	// 	counter: 0,
	// 	error: null,
	// });

	const initialState = {
		counter: 0,
		error: null,
	};

	const [state, dispatch] = useReducer(counterReducer, initialState);

	const increment = () => {
		// setState({ counter: state.counter + STEP, error: null });
		dispatch({ type: 'INCREMENT', step: STEP });
	};

	const decrement = () => {
		// const newCounter = Math.max(0, state.counter - STEP);
		// const error = newCounter <= 0 ? 'Cannot decrement below 0' : null;
		// setState({
		// 	counter: newCounter,
		// 	error,
		// });
		dispatch({ type: 'DECREMENT', step: STEP });
	};

	const reset = () => {
		// setState({ counter: 0, error: null });
		dispatch({ type: 'RESET', step: 0 });
	};

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'useReducer' }} />
			<View style={styles.buttons}>
				<Pressable
					onPress={decrement}
					style={styles.button}>
					<Ionicons
						name="remove"
						size={24}
						color="black"
					/>
				</Pressable>
				<Text>{state.counter}</Text>
				<Pressable
					onPress={increment}
					style={styles.button}>
					<Ionicons
						name="add"
						size={24}
						color="black"
					/>
				</Pressable>
			</View>
			<Text style={styles.error}>{state.error}</Text>
			<Button
				title="Reset"
				onPress={reset}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	step: {
		textAlign: 'center',
		fontSize: 20,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		gap: 20,
		backgroundColor: 'transparent',
	},
	button: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'lightgrey',
	},
	error: {
		color: 'red',
		textAlign: 'center',
		marginTop: 10,
	},
});
