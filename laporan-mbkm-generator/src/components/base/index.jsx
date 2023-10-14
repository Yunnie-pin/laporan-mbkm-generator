import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

function Base(props) {
    const { children } = props;
  return (
    <div className="bg-dark min-vh-100 text-white">
      <Navbar />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Base;
