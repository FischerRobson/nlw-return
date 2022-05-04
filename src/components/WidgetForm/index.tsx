/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { FeedbackType } from './feedbackTypes';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          handleRestartFeedback={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com S2 pela
        <a className="underline underline-offset-2" href="https://rockeatseat.com.br"> Rocketseat</a>
      </footer>
    </div>
  );
}
