import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseItemComponent, WeeklyWorkout } from './exercise-item/exercise-item.component';
import workout from 'src/app/domain/WeeklyWorkout';

@Component({
    selector: 'app-exercises',
    standalone: true,
    imports: [CommonModule, ExerciseItemComponent],
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {
    activeDay = 'monday';
    exercises: WeeklyWorkout = workout;

    setActiveDay(day: string): void {
        this.activeDay = day;
    }
}