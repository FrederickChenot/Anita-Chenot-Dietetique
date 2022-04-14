import daisy from '../images/daisy.jpg';
import bumblebee from '../images/bumblebee.jpg';
import tulip from '../images/tulip.jpg';
import tree from '../images/tree.jpg';

const prestations = [
  {
    Title: 'bilan initial',
    UrlImg: daisy,
    Description: 'Au cours d’un entretien d’1h à 1h15, je réalise avec vous un bilan de vos habitudes et expériences alimentaires et de votre mode de vie, puis nous définissons ensemble vos objectifs réalistes de changements.',
    Price: '50 €',
  },
  {
    Title: 'Consultations de suivi',
    UrlImg: bumblebee,
    Description: `Elles peuvent durer de 45 minutes à 1h selon les besoins définis en amont. Ces entretiens permettent de faire le point sur ce que vous avez mis en place et sur vos difficultés rencontrées.
    Au cours de ces suivis, je peux vous proposer des exercices réalisés pendant la consultation ou à réaliser entre les consultations afin d’atteindre progressivement vos objectifs définis initialement et de vous motiver à maintenir les changements d’habitudes dans la durée.
    Les consultations de suivi sont généralement espacées de quatre semaines ou plus, c’est vous qui décidez.`,
    Price: '30 € pour 45 mibutes - 40 € pour 1h',
  },
  {
    Title: 'Ateliers culinaires',
    UrlImg: tulip,
    Description: `Ce sont des séances animées pour un groupe de 6 à 8 personnes.
    Je vous accueille dans ma cuisine et vous propose de préparer un repas équilibré à partir de produits locaux et de saison, puis de déguster ensemble les différentes préparations, ce qui permet d’échanger les techniques, astuces et autres idées de recettes.
    `,
    Price: '40 € / personne',
  },
  {
    Title: 'Journée à l\'écoute de mes sensations',
    UrlImg: tree,
    Description: `Cette journée animée pour un groupe de 6 à 8 personnes, est un temps que vous prenez pour réfléchir à l’attention que vous portez à vos sensations alimentaires : faim, rassasiement.
    Je vous accueille entre 9h et 9h30 autour d’une boisson chaude. Un repas préparé par votre hôte sera partagé à la mi-journée. La dégustation d’un produit du jardin clôturera cette journée vers 17h.
    `,
    Price: '40 € / personne',
  },

];
export default prestations;
