import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    img: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    img: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    img: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
