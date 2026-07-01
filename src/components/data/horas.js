// src/data/horas.js

export const horasPico = [
    {
        id: 1,
        dia: "Lunes",
        bloques: [
            { tipo: "Desayuno", rango: "07:00 - 09:00", estado: "Alta" },
            { tipo: "Almuerzo", rango: "12:00 - 14:00", estado: "Alta" },
            { tipo: "Snack/Cena", rango: "15:00 - 17:00", estado: "Media" }
        ]
    },
    {
        id: 2,
        dia: "Martes",
        bloques: [
            { tipo: "Desayuno", rango: "07:00 - 09:00", estado: "Media" },
            { tipo: "Almuerzo", rango: "12:00 - 14:00", estado: "Alta" },
            { tipo: "Snack/Cena", rango: "15:00 - 17:00", estado: "Baja" }
        ]
    },
    {
        id: 3,
        dia: "Miércoles",
        bloques: [
            { tipo: "Desayuno", rango: "07:00 - 09:00", estado: "Alta" },
            { tipo: "Almuerzo", rango: "12:30 - 14:30", estado: "Alta" },
            { tipo: "Snack/Cena", rango: "16:00 - 18:00", estado: "Media" }
        ]
    },
    {
        id: 4,
        dia: "Jueves",
        bloques: [
            { tipo: "Desayuno", rango: "07:00 - 09:00", estado: "Media" },
            { tipo: "Almuerzo", rango: "12:30 - 14:30", estado: "Alta" },
            { tipo: "Snack/Cena", rango: "15:30 - 17:30", estado: "Media" }
        ]
    },
    {
        id: 5,
        dia: "Viernes",
        bloques: [
            { tipo: "Desayuno", rango: "07:30 - 09:30", estado: "Alta" },
            { tipo: "Almuerzo", rango: "12:00 - 14:30", estado: "Alta" },
            { tipo: "Snack/Cena", rango: "18:30 - 21:00", estado: "Alta" }
        ]
    },
    {
        id: 6,
        dia: "Sábado",
        bloques: [
            { tipo: "Desayuno", rango: "08:00 - 10:00", estado: "Alta" },
            { tipo: "Almuerzo", rango: "13:00 - 15:30", estado: "Alta" },
            { tipo: "Snack/Cena", rango: "19:00 - 22:00", estado: "Alta" }
        ]
    },
    {
        id: 7,
        dia: "Domingo",
        bloques: [
            { tipo: "Desayuno", rango: "08:30 - 10:30", estado: "Media" },
            { tipo: "Almuerzo", rango: "13:00 - 15:00", estado: "Alta" },
            { tipo: "Snack/Cena", rango: "18:00 - 20:00", estado: "Media" }
        ]
    }
];