import styled from 'styled-components'

export const StyledCatalog = styled.section`
  max-width: var(--max-width);
  width: calc(100vw - 40px);
  margin: 200px auto 0;

  .spinner__container {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  h2 {
    font-size: var(--ff-heading-200);
    font-weight: 900;
    margin-bottom: 42px;
    span {
      color: var(--blue-1);
    }
  }

  .container {
    display: flex;
    font-size: var(--ff-body-200);
    font-weight: 600;
    align-items: center;
    color: var(--grey-600);
  }

  .flex__container {
    display: flex;
  }

  .filter__container {
    margin-right: 40px;
    padding-right: 40px;
    border-right: 2px solid var(--grey-300);
  }

  .label__filter {
    margin-right: 16px;
  }

  .filter__select {
    padding: 16px 24px;
    border-radius: 16px;
    border: 1px solid #dae4f2;
    color: var(--grey-600);
    background-color: white;
    font-size: inherit;
    transition: transform 300ms;

    &:hover,
    &:focus {
      transform: translateY(-3px) scale(1.03);
      outline: none;
      border-color: #f279f2;
    }

    &:active {
      border-color: #f279f2;
    }
  }

  .sort__container {
    display: flex;
    align-items: center;

    p {
      margin-right: 40px;
    }

    input {
      appearance: none;
    }
    label {
      background-color: var(--brand-light);
      padding: 8px 24px;
      border-radius: 12px;
      font-size: 18px;
      margin-right: 12px;
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

  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px 24px;
    margin-top: 67px;
    margin-bottom: 64px;
  }

  footer {
    text-align: center;
    position: relative;
    padding: 20px 0;

    p {
      color: var(--grey-600);
    }
    .span {
      color: var(--blue-1);
      margin-right: 5px;
    }

    & > div:last-child {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 20px;

    h2 {
      font-size: 32px;
    }

    .flex__container {
      flex-direction: column;
    }

    .container {
      align-items: flex-start;
    }

    .filter__container {
      padding: 0;
      border: none;
      margin: 0 0 27px;
    }

    .products {
      justify-content: center;
      gap: 48px 24px;
    }

    footer {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;

      & > div:last-child {
        position: static;
        margin-left: 0;
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 730px) {
    h2 {
      text-align: center;
    }
    .filter__select,
    .filter__container {
      width: calc(100% - 20px);
    }

    .container {
      & > div:last-child {
        display: none;
      }
    }

    .sort__container {
      width: calc(100vw - 40px);
      overflow-x: auto;
      display: block;
      white-space: nowrap;

      label {
        display: inline-block;
        padding: 8px 16px;
        font-size: 16px;
        margin-right: 4px;
      }
    }
  }
`

export const MobilePagination = styled.button`
  position: relative;
  margin: 0 auto;
  border: 1px solid var(--grey-300);
  padding: 8px 16px;
  border-radius: 16px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  font-size: var(--ff-body-100);
  width: 156px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 300ms;
  color: #176feb;
  margin-top: 64px;
  font-weight: 600;

  span {
    margin: 0 auto;
  }

  &:hover,
  &:focus {
    transform: translateY(-3px) scale(1.03);
    outline: none;
    border-color: #f279f2;
  }
  &:disabled {
    background-image: none;
    background-color: var(--grey-200);
    color: var(--grey-600);
    pointer-events: none;
  }
`
