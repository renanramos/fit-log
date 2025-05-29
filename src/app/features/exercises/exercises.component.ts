import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';
import workout from '@domain/workout.const';
import { WeeklyWorkout } from '@domain/weekly-workout.model';

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
        { value: 'monday', label: 'Segunda', labelEn: 'Monday' },
        { value: 'tuesday', label: 'Terça', labelEn: 'Tuesday' },
        { value: 'wednesday', label: 'Quarta', labelEn: 'Wednesday' },
        { value: 'thursday', label: 'Quinta', labelEn: 'Thursday' },
        { value: 'friday', label: 'Sexta', labelEn: 'Friday' }
    ];

    setActiveDay(day: string): void {
        this.activeDay = day;
    }
}
