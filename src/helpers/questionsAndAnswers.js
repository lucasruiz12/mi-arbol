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
            { name: "1-2", points: 1 },
            { name: "3-4", points: 2 },
            { name: "Más de 5", points: 3 },
        ],
        messageToShow: null,
        cartoon: cartoonCasa,
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
        cartoon: cartoonCasa,
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
        messageToShow: "Aprovecha la luz natural y apaga el aire acondicionado cuando no sea necesario.",
        cartoon: cartoonAire,
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
        cartoon: cartoonDucha,
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
        cartoon: cartoonDucha,
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
        messageToShow: "Usar calentadores solares reduce la dependencia de combustibles fósiles.",
        cartoon: cartoonDucha,
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
        cartoon: cartoonRenovable,
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
        cartoon: cartoonEnergia,
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
        messageToShow: "Compensa tus vuelos apoyando proyectos de reforestación.",
        cartoon: cartoonViajes,
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
        messageToShow: "Elige transportes sustentables para reducir tus emisiones de carbono.",
        cartoon: cartoonAuto,
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
        cartoon: cartoonAuto,
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
        messageToShow: "Compartir viajes largos reduce el impacto ambiental.",
        cartoon: cartoonAuto,
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
        messageToShow: "Disminuir productos de origen animal reduce la huella hídrica y de carbono.",
        cartoon: cartoonAnimal,
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
        messageToShow: "Comprar localmente apoya la economía y reduce emisiones por transporte.",
        cartoon: cartoonComida,
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
        cartoon: cartoonResiduos,
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
        messageToShow: "Separar y reciclar tus residuos reduce la basura en vertederos.",
        cartoon: cartoonResiduos,
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
        messageToShow: "Evitar los plásticos de un solo combate la contaminación ambiental.",
        cartoon: cartoonResiduos,
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
        messageToShow: "Prolongar la vida útil de los productos disminuye desechos e impacto ambiental.",
        cartoon: cartoonCompras,
        icon: iconRoom,
    },
];
