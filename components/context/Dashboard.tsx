import { StyleSheet, View } from 'react-native';

import Profil from './Profil';

export default function Dashboard() {
	return (
		<View style={styles.container}>
			<Profil />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
