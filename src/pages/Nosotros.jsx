import React from "react";

export default function Nosotros() {
  return (
    <div className="nosotros-page">
      {/* HERO */}
      <section className="nosotros-hero">
        <h1>Sobre Nosotros</h1>
        <p>Pastelería artesanal hecha con amor y dedicación</p>
      </section>

      {/* HISTORIA */}
      <section className="nosotros-section">
        <div className="nosotros-text">
          <h2>Nuestra historia</h2>
          <p>
            Somos una pastelería artesanal que nació del amor por lo dulce y lo
            hecho a mano. Cada producto es elaborado cuidando los detalles,
            respetando recetas y usando ingredientes de calidad.
          </p>
          <p>
            Nos encanta ser parte de cumpleaños, celebraciones y momentos
            especiales, creando sabores que se recuerdan.
          </p>
        </div>

        <div className="nosotros-image">
          <img src="/src/assets/torta1.jpg" alt="Pastelería artesanal" />
        </div>
      </section>

      {/* VALORES */}
      <section className="nosotros-values">
        <h2>Nuestros valores</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>💗 Amor</h3>
            <p>Cada pedido se hace como si fuera para nuestra familia.</p>
          </div>

          <div className="value-card">
            <h3>🍫 Calidad</h3>
            <p>Ingredientes seleccionados y sabores reales.</p>
          </div>

          <div className="value-card">
            <h3>🧁 Artesanal</h3>
            <p>Producción cuidada, sin procesos industriales.</p>
          </div>

          <div className="value-card">
            <h3> Compromiso</h3>
            <p>Respetamos tiempos y cuidamos cada detalle.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nosotros-cta">
        <h2>Gracias por confiar en nosotros 💕</h2>
        <p>Será un placer acompañar tus momentos más especiales.</p>

        <a
          href="https://wa.me/549XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Hacer un pedido
        </a>
      </section>
    </div>
  );
}
