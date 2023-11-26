export type QuestType = {
  id: number;
  title: string;
  achivId: number;
  Questions: QuestionType[];
};

export type QuestionType = {
  id: number;
  title: string;
  question: string;
  answer: string;
  questId: number;
  locationId: number;
};
