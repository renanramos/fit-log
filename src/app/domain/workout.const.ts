import { WeeklyWorkout } from "./weekly-workout.model";

const workout: WeeklyWorkout = {
  monday: {
    exercises: [
      {
        id: "SupinoReto",
        title: "Banco Supino Reto",
        image: "./assets/supino-reto.gif",
        details: {
          weight: "20kg",
          interval: "50 segundos",
          set: "3 x 12 - 15"
        }
      },
      {
        id: "SupinoRetoInclinado",
        title: "Banco Supino Inclinado",
        image: "./assets/supino-inclinado.gif",
        details: {
          weight: "17kg",
          interval: "50 segundos",
          set: "3 x 10 - 12"
        }
      },
      {
        id: "PeckDeck",
        title: "Peck Deck",
        image: "./assets/peck-deck.gif",
        details: {
          weight: "35kg - 40kg - 45kg",
          interval: "50 segundos",
          set: "3 x 15 - 12 - 10",
          technique: {
            type: "pyramid",
            description: "1ª série: 15 repetições - 35kg\n2ª série: 12 repetições - 40kg\n3ª série: 10 repetições - 45kg"
          }
        }
      },
      {
        id: "TricepsCorda",
        title: "Tríceps na Polia com Corda",
        image: "./assets/triceps-corda.gif",
        details: {
          weight: "40kg - 35kg",
          interval: "50 segundos",
          set: "3 x 8 - 12",
          technique: {
            type: "dropset",
            description: "8 repetições com 40kg e, em seguida, 12 repetições com 35kg."
          }
        }
      }
    ],
    combinedExerciseSets: [{
      name: "Triceps",
      exercises: [
        {
          id: "TricepsPoliaBarraW",
          title: "Triceps na Polia Barra W",
          image: "./assets/triceps-polia-barra-w.gif",
          details: {
            weight: "35kg ou 40Kg",
            set: "3 x 12 - 15"
          }
        },
        {
          id: "TricepsBancoPernasDobradas",
          title: "Triceps Banco com Perna Dobradas",
          image: "./assets/triceps-no-banco.gif",
          details: {
            weight: "0kg",
            interval: "50 segundos",
            set: "3 x 12"
          }
        }],
      executionType: 'alternating'
    }]
  },
  tuesday: {
    exercises: [
      {
        id: "Correr",
        title: "Correr",
        image: "https://placehold.co/300x200",
        details: {
          set: "3x10",
          description: "Correr melhora a resistência cardiovascular."
        }
      }
    ]
  },
  wednesday: {
    exercises: [
      {
        id: "Levantamento",
        title: "Levantamento Terra",
        image: "https://placehold.co/300x200",
        details: {
          set: "3x10",
          description: "Este exercício é ótimo para as costas e posterior da coxa."
        }
      }
    ]
  },
  thursday: {
    exercises: [
      {
        id: "Flexao",
        title: "Flexão",
        image: "https://placehold.co/300x200",
        details: {
          set: "3x10",
          description: "As flexões fortalecem o peito, ombros e tríceps."
        }
      }
    ]
  },
  friday: {
    exercises: [
      {
        id: "Sprints",
        title: "Sprints",
        image: "https://placehold.co/300x200",
        details: {
          set: "3x10",
          description: "Os sprints ajudam a aumentar a potência e resistência."
        }
      }
    ]
  }
};

export default workout;