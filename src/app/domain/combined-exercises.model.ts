import { Exercise } from "./exercise.model";

export interface CombinedExercise {

    name: string;
    exercises: Exercise[];
    executionType: 'alternating' | 'sequential' | 'superset'
}