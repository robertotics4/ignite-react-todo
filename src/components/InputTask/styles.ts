import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 3.37rem;
  padding: 1rem;

  background-color: #262626;
  border: 1px solid #0D0D0D;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;
  background: none;
  color: #f2f2f2;
  text-decoration: none;
  font-weight: 400;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 5.62rem;
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  background-color: #1E6F9F;
  color: #f2f2f2;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#1E6F9F')};
  }
`;