import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  return (
    <main>
      <section className="contacto">
        <div className="contacto-container">

          {/* INFO */}
          <div className="contacto-info">
            <h2>Contacto</h2>
            <p>
              ¿Tenés una consulta o querés hacer un pedido personalizado?
              <br />
              Escribime y te respondo a la brevedad 💗
            </p>

            {/* DATOS */}
            <div className="contacto-datos">
              <a href="mailto:pikiestilo@gmail.com">
                <FaEnvelope /> pikiestilo@gmail.com
              </a>

              <a
                href="https://www.instagram.com/piki_estilo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> @piki_estilo
              </a>

              <a
                href="https://wa.me/5491122631648"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          {/* FORM */}
          <form className="contacto-form">
            <h3>Escribime</h3>
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu email" required />
            <textarea placeholder="Tu mensaje" rows="4" required />
            <button type="submit">Enviar mensaje</button>
          </form>

        </div>
      </section>

      {/* MAPA */}
      <section className="contacto-mapa">
        <h3>¿Dónde estamos?</h3>

        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Buenos+Aires+Argentina&output=embed"
          loading="lazy"
        ></iframe>
      </section>

     {/* FAQ */}
<section className="contacto-faq">
  <h3>Preguntas frecuentes</h3>

  <div className="faq-list">

    <details className="faq-item">
      <summary>¿Con cuánta anticipación debo hacer mi pedido?</summary>
      <p>Recomendamos realizarlo con al menos 48 horas de anticipación.</p>
    </details>

    <details className="faq-item">
      <summary>¿Hacen tortas personalizadas?</summary>
      <p>
        Sí 💕 Podés escribirnos por WhatsApp y armamos juntos tu torta ideal.
      </p>
    </details>

    <details className="faq-item">
      <summary>¿Dónde se retiran los pedidos?</summary>
      <p>La entrega o retiro se coordina una vez confirmado el pedido.</p>
    </details>

    <details className="faq-item">
      <summary>¿Qué medios de pago aceptan?</summary>
      <p>Aceptamos efectivo, transferencia y otros medios a coordinar.</p>
    </details>

  </div>
</section>

    </main>
  );
}
