import { StyleSheet, Text, View } from 'react-native';

type ProfilProps = {
	user: User;
};

export default function Profil({ user }: ProfilProps) {
	return (
		<View style={styles.card}>
			<Text>Name : {user?.name}</Text>
			<Text>Age : {user?.age} ans</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		boxShadow: '0 5 10 rgba(0, 0, 0, 0.3)',
	},
});
