import { View, Text, StyleSheet } from 'react-native';

type RowPositionProps = {
	position: Position;
};

export default function RowPosition({
	position: { longitude, latitude },
}: RowPositionProps) {
	return (
		<View style={styles.rowContainer}>
			<Text>Longitude : {longitude}</Text>
			<Text>Latitude : {latitude}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'white',
		boxShadow: '3 3 10 rgba(0, 0, 5, 0.4)',
	},
});
