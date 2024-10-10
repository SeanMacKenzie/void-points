import React from 'react';
import { Recognition } from '../../types/Recognition';

interface RecognitionViewProps {
    recognition: Recognition;
}

const RecognitionView: React.FC<RecognitionViewProps> = ({ recognition }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{recognition.recipient} ({recognition.amount})</h5>
        <h6 className="card-subtitle mb-2 text-muted">Issued by: {recognition.issuer}</h6>
        <p className="card-text">{recognition.message}</p>
      </div>
    </div>
  );
};

export default RecognitionView;