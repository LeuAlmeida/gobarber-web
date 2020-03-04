import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
`;
