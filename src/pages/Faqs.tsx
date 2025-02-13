'use client';

import { useState } from 'react';

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const faqs = [
    {
      question: 'What is MealDash?',
      answer: 'MealDash is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
      question: 'How do I create an account on MealDash?',
      answer: 'To create an account on MealDash, visit our website and click on the "Sign Up" button. Follow the prompts to complete the registration process.',
    },
    
  ];

  return (
    <div className="flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-6">
      
      <div className="w-full md:w-1/3 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer rounded-lg transition-all duration-300 ${
              activeQuestion === faq.question
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveQuestion(faq.question)}
          >
            <h3 className="font-semibold">{faq.question}</h3>
          </div>
        ))}
      </div>

      <div className="w-full md:w-2/3 p-6 bg-gray-50 rounded-lg">
        {activeQuestion ? (
          <p className="text-gray-700">
            {faqs.find((faq) => faq.question === activeQuestion)?.answer}
          </p>
        ) : (
          <p className="text-gray-500">Select a question to view the answer.</p>
        )}
      </div>
    </div>
  );
};

export default FAQs;