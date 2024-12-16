import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	AppState,
	AppStateStatus,
	Button,
	Text,
} from 'react-native';

export default function UseEffectScreen() {
	const [count, setCount] = useState(0);
	const [count1, setCount1] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};

	// à chaque fois que le composant est monté, mis à jour
	useEffect(() => {
		// traitements à effectuer
		return () => {
			// cleanup
		};
	}, []);

	// lorsque le composant est monté
	useEffect(() => {
		const subscription = AppState.addEventListener(
			'change',
			handleChangeStateApp
		);

		return () => {
			subscription.remove();
		};
	}, []);

	console.log(' render');

	// lorqu'il y a un re-render avec count
	useEffect(() => {
		console.log('useEffect - componentDidUpdate avec count = ', count);
	}, [count]);

	// 1. mounting
	// 2 phases :
	// -------- 1. render => execution de la fonction
	// -------- 2. componentDidMount() => useEffect()

	// 2. updating
	// - 2 phases :
	// ------- 1. render (re-render)
	// ------- 2. componentDidUpdate() => useEffect()

	// 3. unmounting
	// -------- 1: rien ne se passe
	// -------- 2. componentWillUnmount() => useEffect() => cleanup

	const handleChangeStateApp = (status: AppStateStatus) => {
		console.log("Etat de l'application : ", status);
		// refetch data if status === 'active'
	};

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'useEffect' }} />
			<Button
				title="Increment"
				onPress={handleIncrement}
			/>
			<Text style={styles.text}>Compteur : {count}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		gap: 20,
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
	},
});
