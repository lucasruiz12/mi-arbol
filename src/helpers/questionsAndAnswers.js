import iconAir from '../assets/icons/questions/icon-air.svg';
import iconCar from '../assets/icons/questions/icon-car.svg';
import iconEnergy from '../assets/icons/questions/icon-energy.svg';
import iconRoom from '../assets/icons/questions/icon-room.svg';

import cartoonAire from '../assets/images/cartoon/tips-aire.png';
import cartoonAnimal from '../assets/images/cartoon/tips-animal.png';
import cartoonAuto from '../assets/images/cartoon/tips-auto.png';
import cartoonCasa from '../assets/images/cartoon/tips-casa.png';
import cartoonComida from '../assets/images/cartoon/tips-comida.png';
import cartoonCompras from '../assets/images/cartoon/tips-compras.png';
import cartoonDucha from '../assets/images/cartoon/tips-ducha.png';
import cartoonEnergia from '../assets/images/cartoon/tips-energia.png';
import cartoonRenovable from '../assets/images/cartoon/tips-renovable.png';
import cartoonResiduos from '../assets/images/cartoon/tips-residuos.png';
import cartoonViajes from '../assets/images/cartoon/tips-viajes.png';

export const questionsAndAnswers = [
    {
        id: 1,
        question: "¿Cuántas habitaciones tiene tu casa? (Cuenta todas, no sólo las que tengan cama para dormir)",
        answers: [
            { name: "1-2", points: 1.314 },
            { name: "3-4", points: 2.628 },
            { name: "Más de 5", points: 5.256 },
        ],
        // messageToShow: null,
        cartoon: cartoonCasa,
        icon: iconRoom,
    },
    {
        id: 2,
        question: "¿Cuántas personas viven en tu casa?",
        answers: [
            { name: "1-2", points: 1 },
            { name: "3-4", points: 0.5 },
            { name: "Más de 5", points: 0.3 },
        ],
        // messageToShow: null,
        cartoon: cartoonCasa,
        icon: iconRoom,
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
        // messageToShow: "Aprovecha la luz natural y apaga el aire acondicionado cuando no sea necesario.",
        cartoon: cartoonAire,
        icon: iconAir,
    },
    {
        id: 4,
        question: "¿Cuántos minutos te bañas con agua caliente al día?",
        answers: [
            { name: "0-6 minutos", points: 0.19 },
            { name: "7-15 minutos", points: 0.38 },
            { name: "Más de 15 minutos", points: 0.57 },
        ],
        // messageToShow: null,
        cartoon: cartoonDucha,
        icon: iconRoom,
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
        // messageToShow: "Usar calentadores solares reduce la dependencia de combustibles fósiles.",
        cartoon: cartoonDucha,
        icon: iconEnergy,
    },
    {
        id: 6,
        question: "¿Tu hogar cuenta con fuentes de energía renovable?",
        answers: [
            { name: "Sí", points: 0.1 },
            { name: "No", points: 1 },
        ],
        // messageToShow: null,
        cartoon: cartoonRenovable,
        icon: iconEnergy,
    },
    {
        id: 7,
        question: "¿Buscas optimizar tus consumos de energía normalmente?",
        answers: [
            { name: "Cuando me es posible", points: 0.9 },
            { name: "Lo cuido lo más que puedo", points: 0.8 },
            { name: "No lo hago", points: 1 },
        ],
        // messageToShow: null,
        cartoon: cartoonEnergia,
        icon: iconEnergy,
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
        // messageToShow: "Compensa tus vuelos apoyando proyectos de reforestación.",
        cartoon: cartoonViajes,
        icon: iconCar,
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
        // messageToShow: null,
        cartoon: cartoonAuto,
        icon: iconCar,
    },
    {
        id: 10,
        question: "¿Cuántas horas a la semana utilizas este medio de transporte? (No tomes en cuenta tus viajes en carretera)",
        answers: [
            { name: "Menos de 5 horas", points: 1.9 },
            { name: "Entre 5 y 10 horas", points: 3.8 },
            { name: "Más de 10 horas", points: 5.7 },
        ],
        // messageToShow: null,
        cartoon: cartoonAuto,
        icon: iconCar,
    },
    {
        id: 11,
        question: "¿Cuántos kilómetros de carretera manejas al mes en promedio? (en idas y vueltas)",
        answers: [
            { name: "Menos de 250 km", points: 0.7 },
            { name: "Entre 250 y 600 km", points: 0.21 },
            { name: "Más de 600 km", points: 0.42 },
        ],
        // messageToShow: "Compartir viajes largos reduce el impacto ambiental.",
        cartoon: cartoonAuto,
        icon: iconCar,
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
        // messageToShow: "Disminuir productos de origen animal reduce la huella hídrica y de carbono.",
        cartoon: cartoonAnimal,
        icon: iconEnergy,
    },
    {
        id: 13,
        question: "¿Qué porcentaje de tus comidas diarias vienen de una producción local?",
        answers: [
            { name: "Menos del 20%", points: 1 },
            { name: "Entre el 20% y el 60%", points: 0.8 },
            { name: "Más del 60%", points: 0.4 },
        ],
        // messageToShow: "Comprar localmente apoya la economía y reduce emisiones por transporte.",
        cartoon: cartoonComida,
        icon: iconEnergy,
    },
    {
        id: 14,
        question: "¿Qué haces con los residuos que generas en tu hogar?",
        answers: [
            { name: "Los separo y los llevo a puntos de reciclaje", points: 0.75 },
            { name: "Los tiro a la basura", points: 0.85 },
            { name: "Hago composta", points: 0.625 },
        ],
        // messageToShow: "Separar y reciclar tus residuos reduce la basura en vertederos.",
        cartoon: cartoonResiduos,
        icon: iconRoom,
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
        // messageToShow: "Evitar los plásticos de un solo combate la contaminación ambiental.",
        cartoon: cartoonResiduos,
        icon: iconRoom,
    },
    {
        id: 16,
        question: "¿Con qué frecuencia adquieres productos como ropa, celulares o juguetes?",
        answers: [
            { name: "Hasta que termina su vida útil", points: 0.25 },
            { name: "Cada cambio de temporada o tecnología", points: 0.6 },
            { name: "Soy comprador compulsivo", points: 1.8 },
        ],
        // messageToShow: "Prolongar la vida útil de los productos disminuye desechos e impacto ambiental.",
        cartoon: cartoonCompras,
        icon: iconRoom,
    },
];
