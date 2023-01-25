function Hello({ title, children, color }) {
  return (
    <>
      <h1 style={{ color, backgroundColor: 'rgba(0,0,0,0.4)' }}>
        Hello {title}!
      </h1>
      {children}
    </>
  );
}

Hello.defaultProps = {
  title: '리액트',
  color: 'red',
};

export default Hello;
