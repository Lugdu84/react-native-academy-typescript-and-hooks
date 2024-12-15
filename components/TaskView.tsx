import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TaskViewProps = {
	task: Task;
	onToggle: () => void;
	onDelete: () => void;
};

export default function TaskView({
	onDelete,
	onToggle,
	task: { text, completed },
}: TaskViewProps) {
	return (
		<View style={styles.rowView}>
			<Pressable
				style={styles.tackInfo}
				onPress={onToggle}>
				<Ionicons
					name={completed ? 'checkmark-circle' : 'radio-button-off'}
					size={24}
					color="green"
				/>
				<Text
					style={[
						styles.text,
						completed && { textDecorationLine: 'line-through' },
					]}>
					{text}
				</Text>
			</Pressable>
			<Pressable
				onPress={onDelete}
				style={styles.deleteButton}>
				<Ionicons
					name="trash"
					size={24}
					color="red"
				/>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	rowView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: '0 5 10 rgba(0, 0, 0, 0.4)',
		borderRadius: 10,
	},
	text: {
		fontSize: 16,
	},
	tackInfo: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		padding: 10,
	},
	deleteButton: {
		padding: 10,
	},
});
