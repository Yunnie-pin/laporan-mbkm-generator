function CustomCard({ title, content }) {
  return (
    <div className="card bg-dark border border-light">
      <div className="card-header">{title}</div>
      <div className="card-body border-top border-light">{content}</div>
    </div>
  );
}

export default CustomCard;
