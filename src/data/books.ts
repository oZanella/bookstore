import type { Book } from '@/types/book';

import asMortesDeSofiaCover from '../../public/as_mortes_de_sofia_3ed.webp';
import esperoVoceCover from '../../public/espero_voce.png';
import paraOndeVoceFoiCover from '../../public/para_onde_voce_foi.png';

export const books: Book[] = [
  {
    id: 'as-mortes-de-sofia',
    title: 'As Mortes de Sofia',
    year: 2008,
    genre: 'Romance autobiográfico',
    cover: asMortesDeSofiaCover,
    description:
      'O que acontece, quando um amor se dispõe a enfrentar todas as barreiras e dificuldades que a vida coloca em seu caminho? O amor é um sentimento forte o bastante, para oferecer compreensão, compaixão e abnegação diante das adversidades? Em As Mortes de Sofia, a autora, Josiane Scapin, faz o próprio leitor confrontar-se com tais questões, em um texto delicado que, ainda pontilhado por esperança e sensibilidade, não renuncia à fragilidade da condição humana, expondo de forma muito realista os desafios de uma jovem garota, que se vê obrigada a enfrentar com perseverança e determinação os sofrimentos que a vida lhe impõe. Uma história que verdadeira de um amor capaz de ultrapassar os limites da vida, transmitindo um belo legado de experiências e ideias.',
  },
  {
    id: 'para-onde-voce-foi',
    title: 'Para onde você foi?',
    year: 2016,
    genre: 'Romance',
    cover: paraOndeVoceFoiCover,
    description:
      'Quem é Clarissa e de que ela está em busca? Até onde ela está disposta a ir para realizar seus sonhos e que ' +
      'sonhos são esses? Nas páginas deste livro, prepare-se para mergulhar em uma narrativa composta em um estilo ' +
      'direto, cru, desprovido de penduricalhos adjetivistas. Não há lugar nessas linhas para aquilo que em nada ' +
      'colabora para a compreensão da essência da história que está sendo narrada. Isso porque Josiane Scapin Dutra ' +
      'domina o fio da meada que ela mesma concebeu e maneja com precisão os elementos literários que vão produzir ' +
      'no leitor os efeitos (as surpresas, melhor dizendo) que ela planeja. E funciona.',
  },
  {
    id: 'espero-voce',
    title: 'Espero você',
    year: 2016,
    genre: 'Romance',
    cover: esperoVoceCover,
    description: 'O que acontece, quando um amor se dispõe a enfrentar todas as barreiras e dificuldades que a vida coloca em seu caminho? O amor é um sentimento forte o bastante, para oferecer compreensão, compaixão e abnegação diante das adversidades? Em As Mortes de Sofia, a autora, Josiane Scapin, faz o próprio leitor confrontar-se com tais questões, em um texto delicado que, ainda pontilhado por esperança e sensibilidade, não renuncia à fragilidade da condição humana, expondo de forma muito realista os desafios de uma jovem garota, que se vê obrigada a enfrentar com perseverança e determinação os sofrimentos que a vida lhe impõe. Uma história que verdadeira de um amor capaz de ultrapassar os limites da vida, transmitindo um belo legado de experiências e ideias.'
  },
];
