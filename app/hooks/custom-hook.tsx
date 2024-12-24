import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '@/hooks/useUser';

export default function CustomHookScreen() {
	const { user, signIn, signOut } = useUser();

	console.log(user);
	return (
		<SafeAreaView style={styles.container}>
			{user ? (
				<Button
					title="Sign Out"
					onPress={signOut}
				/>
			) : (
				<Button
					title="Sign In"
					onPress={signIn}
				/>
			)}

			<Text style={styles.text}>
				{user
					? "L'utilisateur est connecté"
					: "L'utilisateur n'est pas connecté"}
			</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});
