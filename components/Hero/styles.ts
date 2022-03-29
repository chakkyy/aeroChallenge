import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledHero = styled.section`
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  justify-content: space-between;
  overflow: hidden;

  p {
    font-weight: 600;
    color: var(--grey-600);
    line-height: 150%;
    font-size: var(--ff-body-200);
    margin-top: 24px;
    max-width: 60ch;
  }

  a {
    padding: 27px 40px;
    border-radius: 24px;
    background-image: var(--brand-gradient);
    color: var(--white);
    font-weight: 600;
    font-size: var(--ff-body-200);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 300ms;
    transform-origin: left;

    img {
      transition: transform 300ms;
    }

    &:hover,
    &:focus {
      transform: translateY(-3px) scale(1.03);
      outline: none;
      img {
        transform: translateY(5px);
      }
    }
    &:active {
      transform: scale(0.95);
    }
    span {
      margin-right: 12.5px;
    }
  }

  .hero__img {
    margin-top: -85px;
    width: 100%;
    min-width: 600px;
    background-image: url('assets/illustrations/Hero-bg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center 10px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    & > div:first-child {
      text-align: center;
    }

    .texto__1 {
      font-size: 16px;
    }

    .texto__2 {
      font-size: 96px;
    }

    p {
      font-size: 16px;
      max-width: 290px;
      margin: 24px auto 0;
    }

    a {
      margin-top: 40px;
      padding: 20px 48px;
      font-size: 16px;
    }

    .hero__img {
      height: 520px;
      min-width: auto;
      margin-top: 50px;
      background-image: url('assets/illustrations/hero-responsive.png');
    }
  }

  @media (max-width: 555px) {
    width: 100%;

    .hero__img {
      background-size: cover;
      margin-top: 0;
    }
  }
`

export const Title = styled(motion.h1)`
  line-height: 0.8;
  margin-top: 3.5em;

  .text__1 {
    font-weight: 600;
    font-size: var(--ff-body-200);
    color: var(--grey-600);
    letter-spacing: 3px;
    display: block;
    margin-bottom: 15px;
  }
  .text__2 {
    background-image: var(--brand-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: block;
    font-size: clamp(120px, 14vw, var(--ff-heading-300));
    font-weight: 900;
    &.zone {
      color: var(--grey-900);
    }
  }
`
