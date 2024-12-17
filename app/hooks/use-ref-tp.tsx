import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { useRef, useState } from 'react';
import { Stack } from 'expo-router';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UseRefTPScreen() {
	const netfixRef = useRef<LottieView>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	// --- Tu auras besoin de la documentation. Ne te sers pas de vidéo youtube.
	// --- Lire la documentation est un excellent exercice 🔥
	// 🔥 Essaie d'afficher l'animation, sans les astuces qui suivent 🔥

	// 1. importe LottieView

	// 2. Utilise <LottieView /> dans la page.
	// - Affiche l'animation avec la propriété source
	// - donne du style pour afficher l'animation

	// 3. Autoplay et loop
	// - Fais en sorte que l'animation se lance automatique et qu'elle tourne en boucle

	// 4. Prends le contrôle de l'animation en créant une ref et en l'associant au composant.

	// 5. Mets en pause l'animation
	// - associe la fonction handlePause au <Pressable />
	// - implémente la fonction handlePause pour mettre en pause l'animation

	// 6. Fais la même chose pour relancer l'animation
	// - implemente la fonction handlePlay pour relancer l'animation
	// - comment faire pour utiliser le même bouton pour mettre en pause et relancer l'animation ?
	// - comment savoir si l'animation est en pause ou en cours de lecture ? 🧐
	// - utilise un state !!! 🔥🔥🔥

	// 7. Ajoute un state pour savoir si l'animation est en pause ou en cours de lecture

	// 8. Utilise le state pour afficher le bon bouton (pause ou play)
	// - utilise un ternaire pour afficher la bonne icône

	// 9. Associe la fonction handlePress au < Pressable />

	// 10. Implémente la logique à l'intérieur de la fonction handlePress.
	// - si l'animation est en pause, relance l'animation
	// - si l'animation est en cours de lecture, met en pause l'animation
	// - mise à jour du state

	const handlePlay = () => {
		netfixRef.current?.play();
	};
	const handlePause = () => {
		netfixRef.current?.pause();
	};

	const handlePress = () => {
		isPlaying ? handlePause() : handlePlay();
		setIsPlaying(!isPlaying);
	};
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'TP : Lottie avec useRef' }} />
			<View style={styles.animation}>
				<LottieView
					ref={netfixRef}
					source={require('@/assets/images/netfix.json')}
					style={styles.netfix}
					autoPlay
					loop
				/>
			</View>
			<Pressable
				style={styles.button}
				onPress={handlePress}>
				<Ionicons
					name={isPlaying ? 'pause' : 'play'}
					size={32}
				/>
			</Pressable>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	animation: {
		width: '100%',
		height: '90%',
	},
	netfix: {
		width: '100%',
		height: '100%',
	},
	button: {
		alignItems: 'center',
	},
});
