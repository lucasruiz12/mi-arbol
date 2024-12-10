import iconAir from '../assets/icons/questions/icon-air.svg';
import iconCar from '../assets/icons/questions/icon-car.svg';
import iconEnergy from '../assets/icons/questions/icon-energy.svg';
import iconRoom from '../assets/icons/questions/icon-room.svg';

export const questionsAndAnswers = [
    {
        id: 1,
        question: "¿Cuántas habitaciones tiene tu casa? (Cuenta todas, no sólo las que tengan cama para dormir)",
        answers: [
            { name: "1-2", points: 1 },
            { name: "3-4", points: 2 },
            { name: "Más de 5", points: 3 },
        ],
        messageToShow: null,
        icon: iconRoom,
    },
    {
        id: 2,
        question: "¿Cuántas personas viven en tu casa?",
        answers: [
            { name: "1", points: 1 },
            { name: "2-3", points: 2 },
            { name: "4-5", points: 3 },
            { name: "Más de 5", points: 4 },
        ],
        messageToShow: null,
        icon: iconRoom,
    },
    {
        id: 3,
        question: "¿Con qué frecuencia usas el aire acondicionado en tu casa?",
        answers: [
            { name: "Sólo en invierno", points: 1 },
            { name: "Sólo en verano", points: 2 },
            { name: "Casi todos los días", points: 3 },
            { name: "No lo uso", points: 0 },
        ],
        messageToShow: "Reducir tu consumo energético es clave para disminuir tu huella de carbono. Aprovecha la luz natural y apaga el aire acondicionado cuando no sea estrictamente necesario.",
        icon: iconAir,
    },
    {
        id: 4,
        question: "¿Con qué frecuencia te bañas?",
        answers: [
            { name: "Diario", points: 2 },
            { name: "Dos veces al día", points: 3 },
            { name: "Cada 3er día", points: 1 },
        ],
        messageToShow: null,
        icon: iconRoom,
    },
    {
        id: 5,
        question: "¿Te bañas con agua fría o caliente?",
        answers: [
            { name: "Fría", points: 1 },
            { name: "Caliente", points: 2 },
        ],
        messageToShow: null,
        icon: iconEnergy,
    },
    {
        id: 6,
        question: "¿Qué tipo de fuente de energía usas para calentar el agua con la que te bañas?",
        answers: [
            { name: "Calentador de gas natural/LP", points: 3 },
            { name: "Calentador eléctrico", points: 2 },
            { name: "Calentador solar", points: 1 },
            { name: "No uso", points: 0 },
        ],
        messageToShow: "Optar por calentadores solares puede evitar el uso de combustibles fósiles, reduciendo significativamente tu huella ambiental.",
        icon: iconEnergy,
    },
    {
        id: 7,
        question: "¿Tu hogar cuenta con fuentes de energía renovable?",
        answers: [
            { name: "Sí", points: 0 },
            { name: "No", points: 3 },
        ],
        messageToShow: null,
        icon: iconEnergy,
    },
    {
        id: 8,
        question: "¿Buscas optimizar tus consumos normalmente?",
        answers: [
            { name: "Básico", points: 2 },
            { name: "Lo cuido lo más que puedo", points: 1 },
            { name: "No lo hago", points: 3 },
        ],
        messageToShow: null,
        icon: iconEnergy,
    },
    {
        id: 9,
        question: "Si pudieras sumar todos los vuelos que tomas al año, ¿cuántas horas de viaje suman aproximadamente?",
        answers: [
            { name: "Menos de 5 hrs", points: 1 },
            { name: "Entre 5 y 15 hrs", points: 2 },
            { name: "Entre 15 y 22 hrs", points: 3 },
            { name: "Más de 22 hrs", points: 4 },
        ],
        messageToShow: "Cada hora de vuelo genera grandes emisiones de CO₂. Compensa tu huella apoyando proyectos de reforestación.",
        icon: iconCar,
    },
    {
        id: 10,
        question: "¿Cuál es tu medio de transporte para uso diario?",
        answers: [
            { name: "Automóvil pequeño", points: 2 },
            { name: "Automóvil mediano", points: 3 },
            { name: "Automóvil grande", points: 4 },
            { name: "Transporte público", points: 0.5 },
            { name: "Motocicleta", points: 1.5 },
            { name: "Caminando/Bicicleta", points: 0 },
            { name: "Auto eléctrico o híbrido", points: 1 },
        ],
        messageToShow: null,
        icon: iconCar,
    },
    {
        id: 11,
        question: "¿Cuántas horas a la semana utilizas este medio de transporte?",
        answers: [
            { name: "Menos de 5 horas", points: 1 },
            { name: "Entre 5 y 10 horas", points: 2 },
            { name: "Más de 10 horas", points: 3 },
        ],
        messageToShow: null,
        icon: iconCar,
    },
    {
        id: 12,
        question: "¿Cuántos kilómetros de carretera manejas al mes en promedio?",
        answers: [
            { name: "Menos de 100 km", points: 1 },
            { name: "Entre 100 y 500 km", points: 2 },
            { name: "Más de 500 km", points: 3 },
        ],
        messageToShow: "Reducir los viajes largos o compartirlos puede disminuir tu impacto ambiental.",
        icon: iconCar,
    },
    {
        id: 13,
        question: "¿Con qué frecuencia comes productos de origen animal?",
        answers: [
            { name: "En cada comida", points: 3 },
            { name: "Diario", points: 2 },
            { name: "Cada tercer día", points: 1 },
            { name: "Una vez a la semana", points: 0 },
        ],
        messageToShow: "Disminuir el consumo de productos de origen animal ayuda a reducir tu huella hídrica y de carbono.",
        icon: iconEnergy,
    },
    {
        id: 14,
        question: "¿Qué porcentaje de tus comidas diarias vienen de una producción local?",
        answers: [
            { name: "Menos del 20%", points: 3 },
            { name: "Entre el 20% y el 60%", points: 2 },
            { name: "Más del 60%", points: 1 },
        ],
        messageToShow: "Consumir productos locales no solo apoya la economía local, sino que reduce las emisiones asociadas al transporte.",
        icon: iconEnergy,
    },
    {
        id: 15,
        question: "¿Qué sueles hacer con la comida cuando no la ingieres?",
        answers: [
            { name: "Nunca hay sobrantes", points: 0 },
            { name: "La regalo", points: 1 },
            { name: "La tiro", points: 3 },
            { name: "Hago composta", points: 0.5 },
        ],
        messageToShow: null,
        icon: iconEnergy,
    },
    {
        id: 16,
        question: "¿Qué haces con los residuos que generas en tu hogar?",
        answers: [
            { name: "No genero residuos", points: 0 },
            { name: "Los separo y los llevo a puntos de reciclaje", points: 1 },
            { name: "Los tiro a la basura", points: 3 },
            { name: "Hago composta", points: 1.5 },
        ],
        messageToShow: "Separar y reciclar tus residuos es una de las maneras más efectivas de reducir la cantidad de basura que llega a los vertederos.",
        icon: iconRoom,
    },
    {
        id: 17,
        question: "¿Qué tanto usas plásticos de un solo uso?",
        answers: [
            { name: "Diario", points: 3 },
            { name: "Una vez a la semana", points: 2 },
            { name: "Es raro", points: 1 },
            { name: "Nunca", points: 0 },
        ],
        messageToShow: "Evitar los plásticos de un solo uso es esencial para reducir la contaminación ambiental.",
        icon: iconRoom,
    },
    {
        id: 18,
        question: "¿Con qué frecuencia adquieres productos como ropa, celulares o juguetes?",
        answers: [
            { name: "Hasta que termina su vida útil", points: 0 },
            { name: "Cada cambio de temporada o tecnología", points: 2 },
            { name: "Soy comprador compulsivo", points: 3 },
        ],
        messageToShow: "Optar por un consumo responsable y prolongar la vida útil de los productos ayuda a disminuir los desechos y el impacto ambiental.",
        icon: iconRoom,
    },
];
