import Hello from './components/Hello';

function App() {
  return (
    <>
      <Hello title='React' color='yellow' />
      <Hello title='Jay' color='green' />
      <Hello />
      <Hello>
        <p>자식요소 입니다.</p>
      </Hello>
    </>
  );
}

export default App;
