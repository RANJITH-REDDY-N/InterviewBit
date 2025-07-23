import React, { useState } from 'react';

const getSafeAnswer = (question) => {
  const answer = question.answer;
  const tech = question.technicalAnswer;
  const simple = question.simpleExplanation;
  if (answer && typeof answer === 'string' && answer.trim() !== '') return answer;
  if (tech && typeof tech === 'string' && tech.trim() !== '') return tech;
  if (simple && typeof simple === 'string' && simple.trim() !== '') return simple;
  // If any are objects, show a warning or fallback
  if (typeof answer === 'object' || typeof tech === 'object' || typeof simple === 'object') {
    return '[Invalid answer format]';
  }
  return 'No answer provided yet.';
};

const QuestionCard = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
      <div 
        className="p-4 cursor-pointer flex justify-between items-start"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question.question}</h3>
        </div>
      </div>
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="mb-2">
            <strong>Answer:</strong>
            <div className="mt-1 text-gray-800 dark:text-gray-200">
              {getSafeAnswer(question)}
            </div>
          </div>
          {question.tags && Array.isArray(question.tags) && question.tags.length > 0 && (
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <strong>Tags:</strong> {question.tags.join(', ')}
            </div>
          )}
          {question.relatedQuestions && Array.isArray(question.relatedQuestions) && question.relatedQuestions.length > 0 && (
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <strong>Related Questions:</strong> {question.relatedQuestions.join(', ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const QuestionsTab = ({ questions }) => {
  if (!questions || questions.length === 0) {
    return <div>No questions available</div>;
  }
  return (
    <div className="space-y-4">
      {questions.map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsTab;
