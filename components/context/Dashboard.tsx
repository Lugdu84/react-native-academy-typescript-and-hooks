import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profil from './Profil';

type DashboardProps = {
	user: User;
};

export default function Dashboard({ user }: DashboardProps) {
	return (
		<View>
			<Profil user={user} />
		</View>
	);
}

const styles = StyleSheet.create({});
