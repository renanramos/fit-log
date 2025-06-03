import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import workout from '@domain/workout.const';
import { WeeklyWorkout } from '@domain/weekly-workout.model';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';

@Component({
    selector: 'app-exercises',
    standalone: true,
    imports: [CommonModule, ExerciseItemComponent],
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {
    activeDay = 'monday';
    weeklyWorkout: WeeklyWorkout = workout;

    weekDays = [
        { value: 'monday', label: 'SEG', labelEn: 'Monday' },
        { value: 'tuesday', label: 'TER', labelEn: 'Tuesday' },
        { value: 'wednesday', label: 'QUA', labelEn: 'Wednesday' },
        { value: 'thursday', label: 'QUI', labelEn: 'Thursday' },
        { value: 'friday', label: 'SEX', labelEn: 'Friday' }
    ];

    setActiveDay(day: string): void {
        this.activeDay = day;
    }
}
