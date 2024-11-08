export interface IExercise {
  id: number;
  type: string;
  question: string;
  correctAnswer?: string;
  userAnswer: string | string[];
  words?: string[];
  correctOrder?: string[]; // Only for word-order
}

export interface ITheorySection {
  id: string;
  title: string;
  content: string;
  examples: string[] | IExample[];
  table?: { subject: string; positive: string; negative: string }[];
  img?: string;
}

export interface IExample {
  type: string;
  sentence: string;
}

export interface IUnit {
  id: string;
  title: string;
  icon: string;
  link: { name: string; params?: { unitId: string } };
  caption?: string;
  theory: ITheorySection[];
  exercises: IExercise[];
}
