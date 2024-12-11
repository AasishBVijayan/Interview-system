export interface Question {
  id: string;
  type: 'technical' | 'behavioral' | 'coding';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  category: string;
}

export interface CandidateResponse {
  questionId: string;
  response: string;
  codeSubmission?: string;
  timestamp: number;
}

export interface Interview {
  id: string;
  candidateId: string;
  status: 'pending' | 'in-progress' | 'completed';
  questions: Question[];
  responses: CandidateResponse[];
  startTime?: number;
  endTime?: number;
}