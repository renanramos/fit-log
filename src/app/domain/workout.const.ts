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
      },
      {
        id: "ElevacaoFrontalLateral",
        title: "Elevacao Frontal + Lateral",
        image: "https://placehold.co/300x200",
        details: {
          weight: "9kg",
          interval: "50 segundos",
          set: "3 x 10"
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
    },
    {
      name: "Exercícios Combinados",
      exercises: [
        {
          id: "DesenvolvimentoHalteres",
          title: "Desenvolvimento com Halteres (Pegada Neutra)",
          image: "https://placehold.co/300x200",
          details: {
            weight: "6kg ou 7Kg",
            set: "3 x 12 - 15"
          }
        },
        {
          id: "AbdominalSupraSolo",
          title: "Abdominal Supra Solo",
          image: "https://placehold.co/300x200",
          details: {
            weight: "0kg",
            interval: "50 segundos",
            set: "3 x 20"
          }
        }],
      executionType: 'alternating'
    }],
  },
  tuesday: {
    exercises: [
      {
        id: "PuxadaAbertaBarraReta",
        title: "Puxada Aberta Barra",
        image: "https://placehold.co/300x200",
        details: {
          weight: "35Kg - 40Kg",
          set: "3 x 12 - 15",
          interval: "50 segundos"
        }
      },
      {
        id: "RemadaArticulada",
        title: "Remada Articulada (pegada neutra)",
        image: "https://placehold.co/300x200",
        details: {
          weight: "10Kg - 415Kg",
          set: "3 x 10 - 12",
          interval: "50 segundos"
        }
      },
      {
        id: "PuxadaNeutraTriangulo",
        title: "Puxada Neutra Triangulo",
        image: "https://placehold.co/300x200",
        details: {
          weight: "30kg - 35kg - 40kg",
          set: "3 x 10 - 12 - 15",
          interval: "50 segundos",
          technique: {
            type: "pyramid",
            description: "1ª série: 15 repetições - 30kg\n2ª série: 12 repetições - 35kg\n3ª série: 10 repetições - 40kg"
          }
        }
      },
      {
        id: "RoscaDiretaBarraReta",
        title: "Rosca Direta Barra Reta",
        image: "https://placehold.co/300x200",
        details: {
          weight: "8Kg",
          set: "3 x 10 - 12",
          interval: "50 segundos"
        }
      },
      {
        id: "RemadaAltaPoliaBaixaBarraReta",
        title: "Remada Alta na Polia Baixa com Barra Reta",
        image: "https://placehold.co/300x200",
        details: {
          weight: "40Kg",
          set: "3 x 15",
          interval: "50 segundos"
        }
      }
    ],
    combinedExerciseSets: [{
      name: "Exercícios Combinados",
      exercises: [
        {
          id: "RemadaUnilateralHalteres",
          title: "Remada Unilateral Halteres - Pegada Neutra (Serrote)",
          image: "https://placehold.co/300x200",
          details: {
            weight: "35kg ou 40Kg",
            set: "3 x 12 - 15"
          }
        },
        {
          id: "AbdominalPrancha",
          title: "Abdominal Prancha Isométrica",
          image: "https://placehold.co/300x200",
          details: {
            weight: "0kg",
            interval: "50 segundos",
            set: "3 - 40segundos"
          }
        }],
      executionType: 'alternating'
    },
    {
      name: "Exercícios Combinados",
      exercises: [
        {
          id: "RoscaAlternadaHalteres",
          title: "Rosca Alternada com Halteres",
          image: "https://placehold.co/300x200",
          details: {
            weight: "12Kg",
            set: "3 x 10"
          }
        },
        {
          id: "RoscaMarteloHalteres",
          title: "Rosca Martelo com Halteres",
          image: "https://placehold.co/300x200",
          details: {
            weight: "10kg",
            interval: "50 segundos",
            set: "3 x 10"
          }
        }],
      executionType: 'alternating'
    }],
  },
  wednesday: {
    exercises: [
      {
        id: "MobilidadeTornozeloSemiAjoelhado",
        title: "Mobilidade de Tornozelo Semi Ajoelhado",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 20 repetições",
          weight: "0Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "AlongamentoPosterior",
        title: "Alongamento de Posterior I",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 30 segundos",
          weight: "0Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "CadeiraExtensoraUnilateral",
        title: "Cadeira Extensora Unilateral",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 15",
          weight: "20Kg - 25Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "AgachamentoLivreBarraSuporte",
        title: "Agachamento Livre com Barra no Suporte",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10 - 12",
          weight: "17Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "LegPress",
        title: "Leg Press 45",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 15",
          weight: "160Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "AfundoHalteres",
        title: "Afundo com Halteres",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10",
          weight: "8Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "AducaoQuadrilMaquina",
        title: "Adução de Quadril Máquina",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 12 - 15",
          weight: "30Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "ElevacaoQuadrilMaquina",
        title: "Elevação de Quadril na Máquina",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 12",
          weight: "50Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "MesaFlexora",
        title: "Mesa Flexora",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 15",
          weight: "20Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "PanturrilhaSentadaMaquina",
        title: "Panturrilha Sentada Maquina",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 20",
          weight: "20Kg",
          interval: "50 segundos"
        }
      }
    ]
  },
  thursday: {
    exercises: [
      {
        id: "SupinoRetoArticulado",
        title: "Supino Reto Articulado",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 8 - 10",
          weight: "25Kg",
          interval: "50 segundos",
          description: "Realizar 10 repetições com 10Kg para aquecer"
        }
      },
      {
        id: "CrucificoInclinadoHalteres",
        title: "Crucifico Inclinado com Halteres",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10",
          weight: "17Kg",
          interval: "50 segundos",
          description: "3 segundos para descer e 3 segundos para subir"
        }
      },
      {
        id: "CrossoverPoliaBaixa",
        title: "Crossover Polia Baixa",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10 - 12",
          weight: "5Kg - 10Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "TricepsTestaPoliaBarraReta",
        title: "Triceps Testa na Polia com Barra Reta",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 12 - 15",
          weight: "40Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "TricepsCoiceHalteres",
        title: "Triceps Coice com Halteres",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10 - 12",
          weight: "10Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "DesenvolvimentoArnoldSentado",
        title: "Desenvolvimento Arnold Sentado",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 12 - 15",
          weight: "7Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "ElevacaoLateralHalteres",
        title: "Elevação Lateral com Halteres",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 8 - 15",
          weight: "5Kg - 8Kg",
          interval: "50 segundos",
          technique: {
            type: "dropset",
            description: "8 repetições com carga máxima, após isso reduzir a carga e realizar mais 15 repetições"
          }
        }
      }
    ]
  },
  friday: {
    exercises: [
      {
        id: "PuxadaUnilateral",
        title: "Puxada Unilateral",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 15",
          weight: "15Kg - 20Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "PuxadaNeutraBarraH",
        title: "Puxada Neutra Barra H",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 8 - 10",
          weight: "40Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "RemadaCurvadaBarraReta",
        title: "Remada Curvada com Barra Reta (Pegada Supinada)",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10 - 12",
          weight: "10Kg - 15Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "PulldownCorda",
        title: "Pulldown com Corda",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10 - 12",
          weight: "40Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "RoscaDireta21BarraW",
        title: "Rosca Direta 21 Barra W",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 7 - 7 - 7",
          weight: "8Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "RoscaConcentrada",
        title: "Rosca Concentrada",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 12",
          weight: "6Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "RoscaMarteloSentadoAlternadoHalteres",
        title: "Rosca Martelo Sentado Alternado com Halteres",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10",
          weight: "12Kg",
          interval: "50 segundos"
        }
      },
      {
        id: "EncolhimentoOmbrosHalteres",
        title: "Encolhimento de Ombros com Halteres",
        image: "https://placehold.co/300x200",
        details: {
          set: "3 x 10",
          weight: "20Kg",
          interval: "50 segundos"
        }
      }
    ]
  }
};

export default workout;