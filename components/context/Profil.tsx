import { useAuth } from '@/hooks/Auth';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Profil() {
	const { user, signOut } = useAuth();
	return (
		<View style={styles.card}>
			<View>
				<Text>Name : {user?.name}</Text>
				<Text>Age : {user?.age} ans</Text>
				<Button
					title="Sign out"
					onPress={signOut}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 10,
		boxShadow: '0 5 10 rgba(0, 0, 0, 0.3)',
	},
});
