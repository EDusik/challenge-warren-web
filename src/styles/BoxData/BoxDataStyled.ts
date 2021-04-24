import styled from "styled-components";

export const BoxDataStyled = styled.div`
  flex: 1 1 19rem;
  padding: 1rem;
  margin: 1rem;
  min-height: 180px;
  background-color: var(--white);

  a {
    justify-content: center;
    cursor: pointer;
    height: 100%;
    display: flex;           
    flex-direction: column;
    line-height: 2;
    transition: filter 0.2s;
    
    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      color:  ${props =>
				props.title === "Movimentação interna" ? "#0D81FF" : props.title === "Depósito" ? "#1BBC58" : "#FF9A0D"};
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--text);
    }

    b {
      font-size: 1rem;
      font-weight: 400;
      color: var(--dark);
    }

    span {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--dark);
    }
  }

  &:hover {
    filter: brightness(0.96);
  }
`;