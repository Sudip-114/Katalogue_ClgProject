import React, { useState } from 'react';

const Poll = ({ pollData }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleVote = () => {
    if (selectedOption !== null) {
      // Here you would send vote to backend (not implemented)
      setSubmitted(true);
    }
  };

  return (
    <div className="poll-container">
      <h3>{pollData.question}</h3>
      {submitted ? (
        <p>Thank you for voting!</p>
      ) : (
        <>
          {pollData.options.map((opt, idx) => (
            <div key={idx}>
              <input
                type="radio"
                id={`option-${idx}`}
                name="poll"
                value={opt}
                onChange={() => setSelectedOption(idx)}
              />
              <label htmlFor={`option-${idx}`}>{opt}</label>
            </div>
          ))}
          <button onClick={handleVote} disabled={selectedOption === null}>Vote</button>
        </>
      )}
    </div>
  );
};

export default Poll;
