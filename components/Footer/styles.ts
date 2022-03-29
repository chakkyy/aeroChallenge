import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
  padding: 86px 0;
  color: var(--grey-600);
  font-weight: 600;

  span {
    margin-left: 10px;
  }

  .repo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  .repo:hover {
    background-image: var(--brand-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`
