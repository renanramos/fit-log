import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { WeeklyWorkout, WorkoutDay } from '@domain/weekly-workout.model';
import { Exercise } from '@domain/exercise.model';
import { CombinedExercise } from '@domain/combined-exercises.model';

@Component({
    selector: 'app-exercise-item',
    standalone: true,
    imports: [CommonModule, NgbCollapse],
    templateUrl: './exercise-item.component.html',
    styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit, OnChanges {

    @Input() weeklyWorkout!: WeeklyWorkout;
    @Input() accordionId!: string;
    @Input() activeDay: string = 'monday';

    workoutDays: WorkoutDay[] = [];
    exercises: Exercise[] = [];
    combinedExercises: CombinedExercise[] = [];
    showDetails = false;
    isCollapsed = true;
    totalExercises = 0;
    totalCompleted = 0;
    percentCompleted = 0;

    private collapsedState: Map<string | number, boolean> = new Map();
    private collapsedCombinedSets: Set<number> = new Set<number>();

    ngOnInit(): void {
        this.setUpAccordionExercisesList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.exercises = [];
        this.combinedExercises = [];
        if (changes['activeDay'] && !changes['activeDay'].firstChange) {
            this.workoutDays = [];
            this.setUpAccordionExercisesList();
            this.calculateExercisesPercentual();
        }
    }

    setUpAccordionExercisesList() {
        this.setWorkoutDay();
        this.collapseBasedOnSelectedDay();
    }

    private collapseBasedOnSelectedDay() {
        this.workoutDays.forEach((workoutDay, wdIndex) => {
            if (workoutDay.combinedExerciseSets) {
                workoutDay.combinedExerciseSets.forEach((_, index) => {
                    this.collapsedCombinedSets.add(index);
                });
            }
        });
    }

    setWorkoutDay() {
        const workoutDay = this.weeklyWorkout[`${this.activeDay}`];
        this.workoutDays.push(workoutDay as WorkoutDay);
        this.exercises.push(...workoutDay?.exercises as Exercise[]);
        if (workoutDay?.combinedExerciseSets) {
            this.combinedExercises.push(...workoutDay?.combinedExerciseSets as CombinedExercise[]);
        }
    }

    calculateTotalExercises(): number {
        let totalExerciseCount = this.exercises.length;

        // Contar exercícios dentro de conjuntos combinados
        this.combinedExercises.forEach(combinedSet => totalExerciseCount += combinedSet.exercises.length);

        return totalExerciseCount;
    }

    calculateExercisesPercentual(): void {
        this.totalExercises = this.calculateTotalExercises();

        const completedIndividualExercises = this.exercises.filter(exercise => exercise.completed).length;

        let completedCombinedExercises = 0;
        this.combinedExercises.forEach(combinedSet =>
            completedCombinedExercises += combinedSet.exercises.filter(exercise => exercise.completed).length);

        this.totalCompleted = completedIndividualExercises + completedCombinedExercises;
        this.percentCompleted = this.totalExercises > 0 ? (this.totalCompleted / this.totalExercises) * 100 : 0;
    }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    isExerciseCollapsed(exerciseId: string | number): boolean {
        return this.collapsedState.get(exerciseId) !== false;
    }

    toggleCollapse(exerciseId: string | number): void {
        const currentState = this.isExerciseCollapsed(exerciseId);
        this.collapsedState.set(exerciseId, !currentState);
    }

    isCombinedSetCollapsed(index: number): boolean {
        return this.collapsedCombinedSets.has(index);
    }

    toggleCombinedSetCollapse(index: number): void {
        if (this.collapsedCombinedSets.has(index)) {
            this.collapsedCombinedSets.delete(index);
        } else {
            this.collapsedCombinedSets.add(index);
        }
    }

    onCheckboxChange(exercise: Exercise, event: any): void {
        exercise.completed = event.target.checked;
        console.log(`Exercício ${exercise.title} está ${exercise.completed ? 'concluído' : 'pendente'}`);
        this.calculateExercisesPercentual();
    }
}

