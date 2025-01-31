export const questionsAndAnswers = [
    {
        id: 1,
        question: "¿Cuántas habitaciones tiene tu casa? (Cuenta todas, no sólo las que tengan cama para dormir)",
        answers: [
            { name: "1-2", points: 1.314 },
            { name: "3-4", points: 2.628 },
            { name: "Más de 5", points: 5.256 },
        ],
    },
    {
        id: 2,
        question: "¿Cuántas personas viven en tu casa?",
        answers: [
            { name: "1-2", points: 1 },
            { name: "3-4", points: 0.5 },
            { name: "Más de 5", points: 0.3 },
        ],
    },
    {
        id: 3,
        question: "¿Con qué frecuencia usas el aire acondicionado en tu casa?",
        answers: [
            { name: "Sólo en invierno", points: 0.15 },
            { name: "Sólo en verano", points: 0.1501 },
            { name: "Casi todos los días", points: 0.35 },
            { name: "No lo uso", points: 0 },
        ],
    },
    {
        id: 4,
        question: "¿Cuántos minutos te bañas con agua caliente al día?",
        answers: [
            { name: "0-6 minutos", points: 0.19 },
            { name: "7-15 minutos", points: 0.38 },
            { name: "Más de 15 minutos", points: 0.57 },
        ],
    },
    {
        id: 5,
        question: "¿Qué tipo de fuente de energía usas para calentar el agua con la que te bañas?",
        answers: [
            { name: "Calentador de gas natural/LP", points: 1 },
            { name: "Calentador eléctrico", points: 0.85 },
            { name: "Calentador solar", points: 0.000001 },
            { name: "No uso", points: 0 },
        ],
    },
    {
        id: 6,
        question: "¿Tu hogar cuenta con fuentes de energía renovable?",
        answers: [
            { name: "Sí", points: 0.1 },
            { name: "No", points: 1 },
        ],
    },
    {
        id: 7,
        question: "¿Buscas optimizar tus consumos de energía normalmente?",
        answers: [
            { name: "Cuando me es posible", points: 0.9 },
            { name: "Lo cuido lo más que puedo", points: 0.8 },
            { name: "No lo hago", points: 1 },
        ],
    },
    {
        id: 8,
        question: "Si pudieras sumar todos los vuelos que tomas al año, ¿cuántas horas de viaje suman aproximadamente?",
        answers: [
            { name: "Menos de 7 hrs", points: 0.4 },
            { name: "Entre 8 y 18 hrs", points: 1.4 },
            { name: "Entre 19 y 28 hrs", points: 2.71 },
            { name: "Más de 28 hrs", points: 3.2 },
            { name: "No viajo", points: 0 },
        ],
    },
    {
        id: 9,
        question: "¿Cuál es tu medio de transporte para uso diario?",
        answers: [
            { name: "Automóvil", points: 0.51 },
            { name: "Camioneta", points: 1 },
            { name: "Transporte público", points: 0.3 },
            { name: "Motocicleta", points: 0.33 },
            { name: "Caminando/Bicicleta", points: 0 },
            { name: "Auto EV", points: 0.15},
        ],
    },
    {
        id: 10,
        question: "¿Cuántas horas a la semana utilizas este medio de transporte? (No tomes en cuenta tus viajes en carretera)",
        answers: [
            { name: "Menos de 5 horas", points: 1.9 },
            { name: "Entre 5 y 10 horas", points: 3.8 },
            { name: "Más de 10 horas", points: 5.7 },
        ],
    },
    {
        id: 11,
        question: "¿Cuántos kilómetros de carretera manejas al mes en promedio? (en idas y vueltas)",
        answers: [
            { name: "Menos de 250 km", points: 0.7 },
            { name: "Entre 250 y 600 km", points: 0.21 },
            { name: "Más de 600 km", points: 0.42 },
        ],
    },
    {
        id: 12,
        question: "¿Con qué frecuencia comes productos de origen animal?",
        answers: [
            { name: "En cada comida", points: 6.63 },
            { name: "Diario", points: 5.1 },
            { name: "Cada tercer día", points: 3.06 },
            { name: "Una vez a la semana", points: 1.53 },
        ],
    },
    {
        id: 13,
        question: "¿Qué porcentaje de tus comidas diarias vienen de una producción local?",
        answers: [
            { name: "Menos del 20%", points: 1 },
            { name: "Entre el 20% y el 60%", points: 0.8 },
            { name: "Más del 60%", points: 0.4 },
        ],
    },
    {
        id: 14,
        question: "¿Qué haces con los residuos que generas en tu hogar?",
        answers: [
            { name: "Los separo y los llevo a puntos de reciclaje", points: 0.75 },
            { name: "Los tiro a la basura", points: 0.85 },
            { name: "Hago composta", points: 0.625 },
        ],
    },
    {
        id: 15,
        question: "¿Qué tanto usas plásticos de un solo uso?",
        answers: [
            { name: "Diario", points: 0.75 },
            { name: "Una vez a la semana", points: 0.15 },
            { name: "Es raro", points: 0.08 },
            { name: "Nunca", points: 0 },
        ],
    },
    {
        id: 16,
        question: "¿Con qué frecuencia adquieres productos como ropa, celulares o juguetes?",
        answers: [
            { name: "Hasta que termina su vida útil", points: 0.25 },
            { name: "Cada cambio de temporada o tecnología", points: 0.6 },
            { name: "Soy comprador compulsivo", points: 1.8 },
        ],
    },
];
