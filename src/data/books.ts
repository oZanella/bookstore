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
      'As Mortes de Sofia é uma história baseada em fatos reais: o namorado de Sofia descobre que tem leucemia ' +
      'com apenas dezessete anos. O que acontece, quando um amor se dispõe a enfrentar todas as barreiras e ' +
      'dificuldades que a vida coloca em seu caminho? O amor é um sentimento forte o bastante, para oferecer ' +
      'compreensão, compaixão e abnegação diante das adversidades? Em As Mortes de Sofia, a autora, Josiane ' +
      'Scapin, faz o próprio leitor confrontar-se com tais questões, em um texto delicado que, ainda pontilhado ' +
      'por esperança e sensibilidade, não renuncia à fragilidade da condição humana, expondo de forma muito ' +
      'realista os desafios de uma jovem garota, que se vê obrigada a enfrentar com perseverança e determinação ' +
      'os sofrimentos que a vida lhe impõe. Uma história verdadeira de um amor capaz de ultrapassar os limites ' +
      'da vida, transmitindo um belo legado de experiências e ideias.',
  },
  {
    id: 'para-onde-voce-foi',
    title: 'Para onde você foi?',
    year: 2016,
    genre: 'Romance',
    cover: paraOndeVoceFoiCover,
    description:
      'Quem é Clarissa e o que ela está em busca? Até onde ela está disposta a ir para realizar seus sonhos e que ' +
      'sonhos são esses? Nas páginas deste livro, prepare-se para mergulhar em uma narrativa composta em um estilo ' +
      'direto, cru, desprovido de penduricalhos adjetivistas. Não há lugar nessas linhas para aquilo que em nada ' +
      'colabora para a compreensão da essência da história que está sendo narrada. Isso porque Josiane Scapin Dutra ' +
      'domina o fio da meada que ela mesma concebeu e maneja com precisão os elementos literários que vão produzir ' +
      'no leitor os efeitos (as surpresas, melhor dizendo) que ela planeja. E funciona.',
  },
  {
    id: 'espero-voce',
    title: 'Espero você',
    year: 2021,
    genre: 'Romance',
    cover: esperoVoceCover,
    description:
      'Depois do sucesso de seu primeiro romance “As Mortes de Sofia”, com traços suas emoções a partir da força ' +
      'e coragem que empreende com determinação na busca dos sonhos. Narrativa irresistível, fluida, que dialoga ' +
      'com o universo íntimo do leitor, já que retrata amores e relacionamentos como fios que nos sustentam ao ' +
      'longo da vida. E, para a sorte do leitor exigente, a saga de Clarissa em busca de respostas continua ' +
      'neste volume: “Espero você” – uma pequena obra de arte. Trata-se de um elegante romance, uma reflexão ' +
      'sobre a passagem do tempo, vínculos familiares, casamento, pais e filhos. A narrativa enfatiza o que ' +
      'acontece quando as estruturas familiares e sociais desmoronam e a dor das perdas que invariavelmente ' +
      'voltam à tona para nos assombrar. Acompanhar Clarissa é como pular no tempo, o qual ora expande-se, ora ' +
      'se contrai. Sua vida se concentra em passado e em presente, pois há anos de ausências que o destino ' +
      'assim separou. A história é fictícia, mas poderia ser real, pois assim como a vida, desafia, desequilibra ' +
      'e apresenta-se repleta de percalços, despedidas, reencontros, escolhas, com as dores, as delícias dos ' +
      'vínculos e as superações. Aliás, o termo superação parece ser o mais adequado para definir o perfil de ' +
      'Clarissa, a personagem central. Ainda assim, em meio aos conflitos, projetos de vida nem sempre ' +
      'atingidos, a autora Josiane incursiona pelo universo do amor romântico, onde mapeia, junto aos ' +
      'personagens, as cidades de Porto Alegre, Londres e Veneza, conduzindo o leitor para outros cenários e ' +
      'aguçando seus sentidos com a descrição de paisagens, comidas, bebidas, sons e cheiros. Os personagens ' +
      'são poucos, porém intensos, complexos. E pode-se considerar também personagens, devido a seu papel ' +
      'crucial na narrativa, alguns objetos inanimados – tais como fotos, um diário e cartas. “Espero você”, ' +
      'como uma perfeita alquimia, nos fala que a vida pode ser assustadora, tem situações inexplicáveis, mas ' +
      'é, sobretudo, um romance esperançoso, com luz, com momentos de grande ternura: se há dor, há também o amor.',
  },
];
