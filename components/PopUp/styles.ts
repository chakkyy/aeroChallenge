import styled, { keyframes } from "styled-components";

const appear = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-20px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const StyledPopUp = styled.div`
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  padding: 24px 0;
  position: absolute;
  right: 0;
  margin-top: 8px;
  font-size: var(--ff-body-200);
  width: 312px;
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index: 1;
  animation: ${appear} 300ms forwards;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--grey-300);
    color: var(--grey-900);
    padding: 0 24px 24px;
    margin-bottom: 24px;

    button {
      padding: 8px;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 300ms;

      &:hover,
      &:focus {
        background-color: var(--grey-200);
        outline: none;
      }
    }
  }

  .radio__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-top: 40px;

    input {
      appearance: none;
    }
    label {
      background-color: var(--brand-light);
      padding: 4px 16px;
      border-radius: 12px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 300ms;

      &:hover {
        transform: scale(1.05);
      }
    }
    span {
      background-image: var(--brand-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    input:checked {
      & + label {
        background-image: var(--brand-gradient);
        span {
          color: white;
          background: none;
        }
      }
    }
  }
  .add__points {
    padding: 12px 16px;
    flex-basis: 100%;
    margin: 24px 24px 0;
    border: none;
    border-radius: 16px;
    background-image: var(--brand-gradient);
    font-size: var(--ff-body-200);
    color: var(--white);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 300ms;

    &:hover,
    &:focus {
      transform: translateY(-3px) scale(1.03);
      outline: none;
    }

    &:disabled {
      pointer-events: none;
      background-image: none;
      background-color: var(--grey-200);
      color: var(--grey-600);
    }

    &:active {
      transform: scale(0.95);
    }

    span {
      margin-left: 8px;
    }
  }
`;
