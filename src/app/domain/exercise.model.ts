// src/app/domain/exercise.model.ts
export interface ExerciseDetails {
    weight?: string;
    interval?: string;
    set: string;
    description?: string;
    technique?: {
        type: 'pyramid' | 'dropset';
        description: string;
    }
}

export interface Exercise {
    id: string;
    title: string;
    image: string;
    details: ExerciseDetails;
    combinedWith?: {
        exercise: Omit<Exercise, 'combinedWith'>; // Evita recursão infinita
        executionType: 'alternating' | 'sequential' | 'superset';
    },
    completed?: boolean;
}
