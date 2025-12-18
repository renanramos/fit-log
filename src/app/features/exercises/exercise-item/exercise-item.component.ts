import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyWorkout, WorkoutDay } from '@domain/weekly-workout.model';
import { Exercise } from '@domain/exercise.model';
import { CombinedExercise } from '@domain/combined-exercises.model';
import workout from '@domain/workout.const';
import { ExercisesProgress } from '@features/shared/exercises-progress/exercises-progress';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-exercise-item',
    standalone: true,
    imports: [CommonModule, ExercisesProgress],
    templateUrl: './exercise-item.component.html',
    styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {

    weeklyWorkout: WeeklyWorkout = workout;
    @Input() accordionId!: string;
    @Input() activeDay: string = 'monday';
    @Input() workoutDay?: WorkoutDay

    workoutDays: WorkoutDay[] = [];
    exercises: Exercise[] = this.workoutDay?.exercises || [];
    combinedExercises: CombinedExercise[] = this.workoutDay?.combinedExerciseSets || [];
    showDetails = false;
    isCollapsed = true;
    totalExercises = 0;
    enableAccordions = false;
    currentTime = 1;

    private collapsedState: Map<string | number, boolean> = new Map();
    private collapsedCombinedSets: Set<number> = new Set<number>();
    private intervalId: any;

    constructor(private cdr: ChangeDetectorRef){}

    ngOnInit(): void {
        this.setUpAccordionExercisesList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.exercises = [];
        this.combinedExercises = [];
        if (changes['activeDay'] && !changes['activeDay'].firstChange) {
            this.workoutDays = [];
            this.setUpAccordionExercisesList();
        }
    }

    setUpAccordionExercisesList() {
        this.setWorkoutDay();
        this.collapseBasedOnSelectedDay();
    }

    collapseBasedOnSelectedDay() {
        this.workoutDays.forEach((workoutDay, wdIndex) => {
            if (workoutDay.combinedExerciseSets) {
                workoutDay.combinedExerciseSets.forEach((_, index) => {
                    this.collapsedCombinedSets.add(index);
                });
            }
        });
    }

    setWorkoutDay() {
        this.workoutDays.push(this.workoutDay as WorkoutDay);
        this.exercises.push(...this.workoutDay?.exercises as Exercise[]);
        if (this.workoutDay?.combinedExerciseSets) {
            this.combinedExercises.push(...this.workoutDay?.combinedExerciseSets as CombinedExercise[]);
        }
    }

    toggleCollapse(exerciseId: string | number): void {
        const currentState = this.isExerciseCollapsed(exerciseId);
        this.collapsedState.set(exerciseId, !currentState);
    }

    isExerciseCollapsed(exerciseId: string | number): boolean {
        return this.collapsedState.has(exerciseId);
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
    }

    iniciarTreino() {
        this.ativarTimer();
        this.ativarAccordions();
    }

    ativarTimer() {
    //    this.intervalId = setInterval(() => {
    //     this.currentTime++;
    //     this.cdr.detectChanges();
    //    }, 1000);
    }

    ativarAccordions() {
        this.enableAccordions = !this.enableAccordions
    }

    getAccordionsColors() {
        return !this.enableAccordions ? 'var(--color-primary--blocked)' : 'var(--color-primary)';
    }
}

