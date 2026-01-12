import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export default function Home() {
  const carouselImages = [
    { src: "/src/assets/torta1.jpg", alt: "Torta 1", caption: "Torta de Frutilla" },
    { src: "/src/assets/torta2.jpg", alt: "Torta 2", caption: "Torta Oreo" },
    { src: "/src/assets/torta3.jpg", alt: "Torta 3", caption: "Cheesecake" },
  ];

  const products = [
    {
      slug: "torta-limepie",
      title: "Tarta Lime Pie",
      image: "/src/assets/torta4.jpg",
     
    },
    {
      slug: "torta-rogel",
      title: "Torta Rogel",
      image: "/src/assets/torta5.jpg",

    },
    {
      slug: "tiramisu",
      title: "Tiramisu",
      image: "/src/assets/torta6.jpg",
   
    },
    {
      slug: "torta-selva-negra",
      title: "Torta Selva Negra",
      image: "/src/assets/torta7.jpg",
     
    },
  ];

  return (
    <div className="home-page container">
      <section className="home-hero">
        <div className="hero-content">
          <h1>¡Bienvenidos!</h1>
          <p>Pastelería artesanal — tortas y postres.</p>
          <Button as={NavLink} to="/pasteleria" className="hero-btn">
            Ir a la tienda
          </Button>
        </div>

        <div className="hero-carousel">
          <Carousel>
            {carouselImages.map((item, i) => (
              <Carousel.Item key={i}>
                <img className="carousel-img" src={item.src} alt={item.alt} />
                <Carousel.Caption>
                  <h3>{item.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="products-section">
        <h2>Productos destacados</h2>
        <div className="products-grid">
          {products.map((p) => (
          <NavLink
  to="/pasteleria"
  key={p.slug}
  className="product-card product-link-wrapper"
>
  <img src={p.image} alt={p.title} className="product-img" />

  <div className="product-body">
    <h3>{p.title}</h3>
    <span className="ver-mas">Ver en pastelería</span>
  </div>
</NavLink>

          ))}
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="home-cta">
        <h2>Gracias por confiar 💗</h2>

        <p className="cta-text">
          Si tenés alguna pregunta, comentario o querés realizar un pedido
          personalizado, no dudes en contactarnos.
          <br />
          Nuestra pastelería está pensada para acompañar tus momentos más
          especiales.
        </p>

        <Button as={NavLink} to="/contacto" className="cta-btn">
          Hacer un pedido
        </Button>
      </section>

    </div>
  );
}
