import {
	Button,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
} from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';
import AddTask from '@/components/AddTask';
import TaskView from '@/components/TaskView';
import { Ionicons } from '@expo/vector-icons';

export default function UseStateTPScreen() {
	// A. Le compteur
	// 1. Crée un state pour un compteur
	const [counter, setCounter] = useState(0);

	// 2. Crée une fonction pour incrémenter le compteur
	const handleIncrement = () => {
		setCounter((prev) => prev + 1);
	};

	// 3. Ajoute un bouton ou un pressable qui utilise la fonction pour incrémenter le compteur

	// 4. Ajoute un <Text /> pour afficher le compteur

	// ----------------------------------------------

	// B. Une liste de tâches

	// 1. Crée un type Task (id: string, text: string, completed: boolean)
	// Places le dans un fichier séparé (task.d.ts), soit à la racine de ton projet, soit dans un dossier types

	// 2. Crée un state pour un tableau de tâches (initialisé avec un tableau vide)
	const [tasks, setTasks] = useState<Task[]>([]);

	// 2. Crée un composant qui permettra d'ajouter une tâche
	// - il pourrait avoir un TextInput pour entrer le texte de la tâche
	// - un bouton pour ajouter la tâche
	// - une fonction qui renvoie le texte
	// - peut-etre des vériifcations pour ne pas ajouter de tâche vide ?

	// 3. Crée une fonction qui permettra d'ajouter une tâche à la liste
	// - trouve une soltuion pour générer un id unique
	// - par défaut une tâche est non complétée
	// - ajoute la tâche à la liste

	const generateId = () => {
		return Date.now().toString() + Math.random().toString().substring(2, 8);
	};

	const handleSumit = (text: string) => {
		setTasks([...tasks, { id: generateId(), text, completed: false }]);
	};
	// 4. Passe cette fonction en props à ton composant AddTask

	// 5. Affiche les tâches dans une map (qui n'est pas la meilleure solution pour afficher une liste)
	// - on verra plus loin dans la formation,
	// la FlatList, qui est plus adaptée pour afficher une liste

	// 6. Crée un composant qui affichera la liste des tâches
	// - il pourrait avoir un Text pour afficher le texte de la tâche
	// - un bouton pour marquer la tâche comme complétée
	// - un bouton pour supprimer la tâche

	// 7. crée une fonction pour marquer une tâche comme complétée (ou non)
	// - utilise cette fonction dans le composant TaskView (en la passant en props)
	const handleToggle = (id: string) => {
		const tasksUpdated = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(tasksUpdated);
	};

	// 8. crée une fonction pour supprimer une tâche de la liste
	// - utilise cette fonction dans le composant TaskView (en la passant en props)

	const handleDelete = (id: string) => {
		const tasksUpdated = tasks.filter((task) => task.id !== id);
		setTasks(tasksUpdated);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'TP useState' }} />
			<Button
				title="increment"
				onPress={handleIncrement}
			/>
			<Pressable
				onPress={handleIncrement}
				style={styles.increment}>
				<Ionicons
					name="add"
					size={30}
					color="white"
				/>
			</Pressable>
			<Text>Compteur : {counter}</Text>
			<AddTask onSubmitted={handleSumit} />
			{tasks.map((task) => (
				<TaskView
					key={task.id}
					task={task}
					onToggle={() => {
						handleToggle(task.id);
					}}
					onDelete={() => {}}
				/>
			))}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
		margin: 20,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	input: {
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
		borderRadius: 10,
	},
	increment: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'green',
	},
});
