function CustomAlert({ status, content }) {
    return (
      <div className={`alert alert-${status}`} role="alert">
        {content}
      </div>
    );
  }
  
  export default CustomAlert;