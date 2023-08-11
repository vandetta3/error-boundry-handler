interface props {
  text: string;
}

const PropTypeErrorComponent = ({ text }: props) => {
  return <div>{text.toLocaleLowerCase()}</div>;
};

export default PropTypeErrorComponent;
