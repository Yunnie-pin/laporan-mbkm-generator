import gulapict from "../../assets/gula-white.png";
import Button from "../Elements/Button";

function NotFoundPage() {
  return (
    <div className="d-flex justify-content-center">
      <div className="text-center">
        <img src={gulapict} alt="gulapict" width="200" />
        <h3 className="display-1">404</h3>
        <h3 className="pb-3">Halaman tidak ditemukan</h3>
        <Button type="link" to="/" text="Kembali Ke halaman utama"/>
      </div>
    </div>
  );
}

export default NotFoundPage;
