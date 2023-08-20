const Button = ({ classes, text, style }) => {
  return (
    <button className={"btn btn-" + classes} style={style}>
      {text}
    </button>
  );
};

export default Button;
