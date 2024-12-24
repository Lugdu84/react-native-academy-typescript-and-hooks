import { StyleSheet, View } from 'react-native';

import Profil from './Profil';

type DashboardProps = {
	user: User;
};

export default function Dashboard({ user }: DashboardProps) {
	return (
		<View style={styles.container}>
			<Profil user={user} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
