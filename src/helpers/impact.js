import gifLow from '../assets/gifs/gif-mundo-bajo.gif';
import gifMedium from '../assets/gifs/gif-mundo-medio.gif';
import gifHigh from '../assets/gifs/gif-mundo-alto.gif';

export function getImpact(points) {
  if (points > 10) return 'ALTO';
  if (points > 8) return 'MEDIO';
  return 'BAJO';
}

export function getImpactGif(impact) {
  switch (impact) {
    case 'ALTO':
      return gifHigh;
    case 'MEDIO':
      return gifMedium;
    case 'BAJO':
    default:
      return gifLow;
  }
}


