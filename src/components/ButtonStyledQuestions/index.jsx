import React from 'react';
import styled from 'styled-components';

const ButtonStyledQuestions = ({ text, functionClick, disabled }) => {
  return (
    <StyledWrapper>
      <button disabled={disabled} onClick={() => functionClick()}>
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    border: none;
    color: #fff;
    background-image: linear-gradient(30deg, #258F17, #74d96c);
    border-radius: 20px;
    background-size: 100% auto;
    font-family: inherit;
    font-size: 17px;
    padding: 0.6em 1.5em;
    cursor: pointer;
    transition: background-size 0.4s ease, transform 0.2s ease;
    width: 20vw;
  }

  button:disabled {
    background: #a5a5a5;
    cursor: not-allowed;
  }

  button:hover {
    background-position: right center;
    background-size: 200% auto;
    animation: pulse-green 1.5s infinite;
    transform: scale(1.05);
  }

  @keyframes pulse-green {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 143, 23, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(37, 143, 23, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 143, 23, 0);
    }
  }

  @media (max-width: 768px) {
    button{
        width: 50vw;
    }
`;

export default ButtonStyledQuestions;
