import React from 'react';
import { QuestionCard } from '../components/interview/QuestionCard';
import { InterviewProgress } from '../components/interview/InterviewProgress';
import type { Question, Interview as InterviewType } from '../types/interview';

const MOCK_QUESTIONS: Question[] = [
  {
    id: '1',
    type: 'technical',
    difficulty: 'medium',
    category: 'Data Structures',
    question: 'Explain the difference between Arrays and Linked Lists. When would you use one over the other?'
  },
  {
    id: '2',
    type: 'coding',
    difficulty: 'hard',
    category: 'Algorithms',
    question: 'Implement a function to find the longest palindromic substring in a given string.'
  },
  {
    id: '3',
    type: 'behavioral',
    difficulty: 'medium',
    category: 'Problem Solving',
    question: 'Describe a challenging technical problem you have solved recently. What was your approach?'
  }
];

export const Interview: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [timeRemaining, setTimeRemaining] = React.useState(3600); // 1 hour
  const [responses, setResponses] = React.useState<string[]>([]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (response: string) => {
    setResponses([...responses, response]);
    if (currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <InterviewProgress
          totalQuestions={MOCK_QUESTIONS.length}
          currentQuestion={currentQuestionIndex + 1}
          timeRemaining={timeRemaining}
        />
        
        <QuestionCard
          question={MOCK_QUESTIONS[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
};