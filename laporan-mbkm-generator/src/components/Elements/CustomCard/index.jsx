function CustomCard(props) {
  const { title, content, style } = props;
  return (
    <div className="card bg-dark border border-light animation-hover" style={
     style ? style : {}
    }>
      <div className="card-header">{title}</div>
      <div className="card-body border-top border-light">{content}</div>
    </div>
  );
}

export default CustomCard;
