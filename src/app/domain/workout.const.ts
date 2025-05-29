import { WeeklyWorkout } from "./weekly-workout.model";

const workout: WeeklyWorkout = {
  monday: {
    exercises: [
      {
        id: "SupinoReto",
        title: "Supino Reto",
        image: "./assets/supino-reto.gif",
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
        title: "Tríceps Corda",
        image: "./assets/triceps-corda.gif",
        details: {
          weight: "40kg - 35kg",
          interval: "50 segundos",
          set: "3 x 15 - 12 - 10",
          technique: {
            type: "dropset",
            description: "8 repetições com 40kg e, em seguida, 12 repetições com 35kg."
          }
        }
      }
    ]
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