import { View, Text, StyleSheet } from 'react-native';

type RowUserProps = {
	user: User;
};

export default function RowUser({ user: { name, age } }: RowUserProps) {
	return (
		<View style={styles.rowContainer}>
			<Text>Il s'appelle {name}</Text>
			<Text>Il a {age} ans</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'white',
		boxShadow: '3 3 10 rgba(0, 0, 5, 0.4)',
	},
});
