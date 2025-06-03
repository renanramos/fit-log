import { CombinedExercise } from './combined-exercises.model';
import { Exercise } from './exercise.model';

export interface WorkoutDay {
    exercises: Exercise[];
    combinedExerciseSets?: CombinedExercise[];
    // combinedExerciseSets?: {
    //     name: string; // Nome opcional do conjunto (ex: "Superset Peito/Costas")
    //     exercises: [Exercise, Exercise]; // Par fixo de exercícios combinados
    //     executionType: 'alternating' | 'sequential' | 'superset';
    // }[];
}

export interface WeeklyWorkout {
    [key: string]: WorkoutDay | undefined;
    monday: WorkoutDay;
    tuesday: WorkoutDay;
    wednesday: WorkoutDay;
    thursday: WorkoutDay;
    friday: WorkoutDay;
    saturday?: WorkoutDay;
    sunday?: WorkoutDay;
}
