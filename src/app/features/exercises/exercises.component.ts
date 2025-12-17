import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';
import { WeekDays } from '@domain/weekdays.const';
import { WeeklyWorkout } from '@domain/weekly-workout.model';
import workout from '@domain/workout.const';

const FIRST_DAY_OF_WEEK = 0;

@Component({
    selector: 'app-exercises',
    standalone: true,
    imports: [CommonModule, ExerciseItemComponent],
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {
    
    activeDay: any = 'monday';
    selectedWeeklyDay: WeekDays;
    workoutDay: any = workout[this.activeDay];

    weekDays: WeekDays[] = [];

    constructor() {
         this.initializeWeekDays();
         this.selectedWeeklyDay = this.findWeekDayByActiveDay();
    }

    setActiveDay(day: string): void {
        this.activeDay = day;
        this.selectedWeeklyDay = this.findWeekDayByActiveDay();
        this.setWorkoutDay();
    }
    
    setWorkoutDay() {
        this.workoutDay = workout[this.activeDay];
    }

    get selectedDay() {
      return  this.selectedWeeklyDay; 
    }

    get value() {
        return this.selectedDay.value
    }

    get label () {
        return this.selectedDay.label;
    }
    
    get labelEn () {
        return this.selectedDay.labelEn;
    }
    
    getActiveDay(): WeekDays {
        return this.findWeekDayByActiveDay();;
    }
    
    findWeekDayByActiveDay(): WeekDays {
        const weekDay = this.weekDays.find(weekDay => weekDay.value === this.activeDay);
        return weekDay ? weekDay : this.weekDays[FIRST_DAY_OF_WEEK]
    }

    getSelectedWeeklyDay() {
        return this.selectedDay;
    }

    getSelectedWeeklyDayValue(weekDay: WeekDays) {
        return weekDay.value
    }

    initializeWeekDays() {
        this.weekDays = [
            { value: 'monday', label: 'SEG', labelEn: 'Monday' },
            { value: 'tuesday', label: 'TER', labelEn: 'Tuesday' },
            { value: 'wednesday', label: 'QUA', labelEn: 'Wednesday' },
            { value: 'thursday', label: 'QUI', labelEn: 'Thursday' },
            { value: 'friday', label: 'SEX', labelEn: 'Friday' }
        ];
    }
}

