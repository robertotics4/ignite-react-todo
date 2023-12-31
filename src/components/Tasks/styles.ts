import styled, { css } from 'styled-components';

interface CheckProps {
  finished: boolean
}

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export const TasksHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  div {
    padding: 0.25rem 0.75rem;
    background-color: #333333;
    border-radius: 16px;

    span {
      font-weight: 700;
      color: #D9D9D9;
    }
  }
`;

export const TaskHeaderCreated = styled.strong`
  color: #4EA8DE;
  font-weight: 700;
`;

export const TaskHeaderDone = styled.strong`
  color: #8284FA;
  font-weight: 700;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TaskComponent = styled.div<CheckProps>`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  height: 4.5rem;
  padding: 1rem;
  
  background-color: #262626;
  border: 1px solid #333333;
  border-radius: 8px;

  p {
    margin-left: 1rem;
    font-weight: 400;
    font-size: 0.87rem;
    color: #F2F2F2;

    ${props => props.finished && css`
      text-decoration: line-through;
      color: #808080;
    `}
  }
`;

export const CheckButton = styled.button<CheckProps>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 16px;


  ${props => props.finished
    ? css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5E60CE;
        border: none;`
    : css`
        background: none; 
        border: 2px solid #4EA8DE;`
  }
`;

export const TrashButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;

  svg {
    margin-left: auto;
    color: #808080;
    transition: color 0.2s;

    &:hover{
      color: #F2F2F2;
    }
  }
`;

export const TasksEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
  padding: 4rem;

  border-top: 1px solid #333333;

  svg {
    color: #808080;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    font-size: 1rem;
    color: #808080;
  }
`;