import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { WeeklyWorkout, WorkoutDay } from '@domain/weekly-workout.model';

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
    showDetails = false;
    isCollapsed = true;

    private collapsedState: Map<string | number, boolean> = new Map();
    private collapsedCombinedSets: Set<number> = new Set<number>();

    ngOnInit(): void {
        this.setUpAccordionExercisesList();
    }

    setUpAccordionExercisesList() {
        this.setWorkoutDay();
        this.collapseBasedOnSelectedDay();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['activeDay'] && !changes['activeDay'].firstChange) {
            this.workoutDays = [];
            this.setUpAccordionExercisesList();
        }
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
        this.workoutDays.push(this.weeklyWorkout[`${this.activeDay}`] as WorkoutDay);
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
}

