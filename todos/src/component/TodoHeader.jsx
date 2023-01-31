import styled from 'styled-components';
import { useTodoState } from '../context/todos';

function TodoHeader() {
  const dateStr = new Date().toLocaleDateString('ko-KR', {
    // year: 'numeric',
    // month: 'narrow',
    // day: 'numeric',
    dateStyle: 'full',
  });

  const todos = useTodoState();

  const percent = Math.floor(
    (todos.filter((todo) => todo.done).length / todos.length) * 100
  );

  return (
    <Container>
      <DateText>{dateStr}</DateText>
      <CountText>
        완료: {todos.filter((todo) => todo.done).length}/{todos.length},{' '}
        {todos.length ? `${percent}%` : '일정 없음'}
      </CountText>
      <PercentageBar percent={percent} />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;

const DateText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;

  /* text-align: justify;
  text-align-last: justify; */
`;

const CountText = styled.span`
  font-size: 0.8rem;
  color: #888;
`;
const PercentageBar = styled.div`
  height: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;

    //width 대신 transform: 성능영향
    transform: scaleX(${({ percent }) => percent}%);
    transform-origin: left;

    height: 100%;
    background-color: ${({ theme }) => theme.colors.main_color};
    transition: width 0.4s;
  }
`;

export default TodoHeader;
