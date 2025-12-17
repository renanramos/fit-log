import { CombinedExercise } from './combined-exercises.model';
import { Exercise } from './exercise.model';

export interface WorkoutDay {
    exercises: Exercise[];
    combinedExerciseSets?: CombinedExercise[];
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
