import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import * as Network from 'expo-network';
import { Stack } from 'expo-router';

export default function UseEffectTPScreen() {
	// 1. Créer un state qui permettra de savoir s'il y a une connexion internet ou pas
	const [isConnected, setIsConnected] = useState<boolean | undefined>(
		undefined
	);

	useEffect(() => {
		// const unsuscribe = NetInfo.addEventListener(({ isConnected }) => {
		// 	setIsConnected(isConnected);
		// });
		const subscription = Network.addNetworkStateListener(({ isConnected }) => {
			setIsConnected(isConnected);
		});
		return () => {
			// unsuscribe();
			subscription.remove();
		};
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'useEffect TP' }} />
			<Text style={[styles.text, { color: isConnected ? 'green' : 'red' }]}>
				{isConnected ? 'Vous êtes connecté' : "Vous n'êtes pas connecté"}
			</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
	},
});
