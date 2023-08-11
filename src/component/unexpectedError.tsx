const UnexpectedBehaviorComponent = () => {
  const result = 10 / 0;

  return <div>{result}</div>;
};

export default UnexpectedBehaviorComponent;
