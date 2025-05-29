import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { Exercise } from '@domain/exercise.model';

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

