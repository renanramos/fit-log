import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CombinedExercise } from '@domain/combined-exercises.model';
import { Exercise } from '@domain/exercise.model';

@Component({
  selector: 'app-exercises-progress',
  imports: [CommonModule],
  templateUrl: './exercises-progress.html',
  styleUrl: './exercises-progress.css',
})
export class ExercisesProgress implements OnInit {

  @Input() exercises: Exercise[] = [];
  @Input() combinedExercises: CombinedExercise[] = [];
  @Input() isActivated: boolean = false;

  totalExercises: number = 0;
  totalCompleted = 0;
  percentCompleted = 0;

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.calculateExercisesPercentual();
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
}
