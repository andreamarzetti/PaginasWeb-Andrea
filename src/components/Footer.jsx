import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Pastelería Chocolate</p>

      <div className="footer-social">
        <a href="https://www.instagram.com/pasteleria_chocolate/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://wa.me/5491122631648" target="_blank">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
