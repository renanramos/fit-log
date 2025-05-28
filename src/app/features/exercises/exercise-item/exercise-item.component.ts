import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

export interface Exercise {
    id: string;
    title: string;
    image: string;
    details: {
        weight?: string;
        interval?: string;
        set: string;
        description?: string;
        technique?: {
            type: 'pyramid' | 'dropset';
            description: string;
        }
    }
}

export interface WeeklyWorkout {
    monday: Exercise[];
    tuesday: Exercise[];
    wednesday: Exercise[];
    thursday: Exercise[];
    friday: Exercise[];
}

@Component({
    selector: 'app-exercise-item',
    standalone: true,
    imports: [CommonModule, NgbCollapse],
    templateUrl: './exercise-item.component.html',
    styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent {
    @Input() exercise!: Exercise;
    @Input() accordionId!: string;
    isCollapsed = true;

}
