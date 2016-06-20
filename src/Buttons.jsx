import React from 'react';

export const PreviousButton = ({ locale, onClick }) => {
  return (
    <button
      className="previous-btn"
      onClick={onClick}
    >
      {locale.previous}
    </button>
  );
};

export const NextButton = ({ locale, onClick }) => {
  return (
    <button
      className="next-btn"
      onClick={onClick}
    >
      {locale.next}
    </button>
  );
};

export const DoneButton = ({ locale, onClick }) => {
  return (
    <button
      className="done-btn"
      onClick={onClick}
    >
      {locale.done}
    </button>
  );
};
