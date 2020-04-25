import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  form {
    border-top: 1px solid rgb(214, 214, 214);
    display: flex;
    flex-direction: column;
    padding-top: 5px;

    input {
      margin: 5px 0;
      font-size: 1em;
      padding: 1.3%;
    }

    button {
      background-color: #7159c1;
      border: none;
      padding: 1% 0;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      
      &:hover {
        background-color: #5f43ba;
      }
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: .8em;
  margin-top: 0;
`;