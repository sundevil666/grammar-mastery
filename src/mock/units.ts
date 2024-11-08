const unitsDataList = [
  {
    id: 'u1',
    title: 'Unit1 am/is/are',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u1' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
      {
        id: 'b',
        title: 'Positive and Negative Sentences',
        content:
          'Here you will learn how to form positive and negative sentences in the Present Simple.',
        examples: [
          {
            type: 'positive',
            sentence: 'I read books.',
          },
          {
            type: 'negative',
            sentence: 'I do not read books.',
          },
        ],
        table: [
          {
            subject: 'I/We/You/They',
            positive: 'I go',
            negative: 'I do not go',
          },
          {
            subject: 'He/She/It',
            positive: 'She works',
            negative: 'She does not work',
          },
        ],
      },
      {
        id: 'c',
        title: "That's = That is",
        content: "The contraction 'That's' is commonly used for 'That is'.",
        examples: ["That's my book.", "That's the way to school."],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
      {
        id: 2,
        type: 'sentence-completion',
        question: 'She ____ (to have) a cat.',
        correctAnswer: 'has',
        userAnswer: '',
      },
      {
        id: 2,
        type: 'word-order',
        question: 'order these words',
        words: ['goes', 'to', 'she', 'school', 'every', 'day'],
        correctOrder: ['she', 'goes', 'to', 'school', 'every', 'day'],
        userAnswer: [],
      },
    ],
  },
  {
    id: 'u2',
    title: 'U2 am/is/are',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u2' } },
    caption: '(question)',
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
      {
        id: 'b',
        title: 'Positive and Negative Sentences',
        content:
          'Here you will learn how to form positive and negative sentences in the Present Simple.',
        examples: [
          {
            type: 'positive',
            sentence: 'I read books.',
          },
          {
            type: 'negative',
            sentence: 'I do not read books.',
          },
        ],
        table: [
          {
            subject: 'I/We/You/They',
            positive: 'I go',
            negative: 'I do not go',
          },
          {
            subject: 'He/She/It',
            positive: 'She works',
            negative: 'She does not work',
          },
        ],
      },
      {
        id: 'c',
        title: "That's = That is",
        content: "The contraction 'That's' is commonly used for 'That is'.",
        examples: ["That's my book.", "That's the way to school."],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
      {
        id: 2,
        type: 'sentence-completion',
        question: 'She ____ (to have) a cat.',
        correctAnswer: 'has',
        userAnswer: '',
      },
      {
        id: 2,
        type: 'word-order',
        question: 'order these words',
        words: ['goes', 'to', 'she', 'school', 'every', 'day'],
        correctOrder: ['she', 'goes', 'to', 'school', 'every', 'day'],
        userAnswer: [],
      },
    ],
  },
  {
    id: 'u3',
    title: 'U3 I am doing',
    caption: '(present continuous)',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u3' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
    ],
  },
  {
    id: 'u4',
    title: 'U4 are you doing',
    caption: '(present continuous questions)',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u4' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
    ],
  },
  {
    id: 'u5',
    title: 'U5 I/do/work/lire etc...',
    caption: '(present simple)',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u5' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
    ],
  },
  {
    id: 'u6',
    title: 'U6 I don`t ...',
    caption: '(present simple negative)',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u6' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
    ],
  },
  {
    id: 'u7',
    title: 'U7 Do you ...?',
    caption: '(present simple questions)',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u7' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
    ],
  },
  {
    id: 'u8',
    title: 'U8 I am doing ... and I do',
    caption: '(present continuous and present simple)',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u8' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
    ],
  },
  {
    id: 'u9',
    title: 'U9 I have adn I`ve got',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'u9' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
    ],
  },
  {
    id: 'u100',
    title: 'U 100 examples',
    icon: 'ac_unit',
    link: { name: 'UnitPage', params: { unitId: 'uX' } },
    theory: [
      {
        id: 'a',
        title: 'Examples of Sentences',
        img: 'present-simple.png',
        content:
          'This section provides examples of sentences in the Present Simple tense.',
        examples: [
          'I go to school every day.',
          'She works at a bank.',
          'They play football on weekends.',
        ],
      },
      {
        id: 'b',
        title: 'Positive and Negative Sentences',
        content:
          'Here you will learn how to form positive and negative sentences in the Present Simple.',
        examples: [
          {
            type: 'positive',
            sentence: 'I read books.',
          },
          {
            type: 'negative',
            sentence: 'I do not read books.',
          },
        ],
        table: [
          {
            subject: 'I/We/You/They',
            positive: 'I go',
            negative: 'I do not go',
          },
          {
            subject: 'He/She/It',
            positive: 'She works',
            negative: 'She does not work',
          },
        ],
      },
      {
        id: 'c',
        title: "That's = That is",
        content: "The contraction 'That's' is commonly used for 'That is'.",
        examples: ["That's my book.", "That's the way to school."],
      },
    ],
    exercises: [
      {
        id: 1,
        type: 'fill-in-the-blank',
        question: 'I ____ (to go) to school every day.',
        correctAnswer: 'go',
        userAnswer: '',
      },
      {
        id: 2,
        type: 'sentence-completion',
        question: 'She ____ (to have) a cat.',
        correctAnswer: 'has',
        userAnswer: '',
      },
      {
        id: 2,
        type: 'word-order',
        question: 'order these words',
        words: ['goes', 'to', 'she', 'school', 'every', 'day'],
        correctOrder: ['she', 'goes', 'to', 'school', 'every', 'day'],
        userAnswer: [],
      },
    ],
  },
];

export default unitsDataList;
