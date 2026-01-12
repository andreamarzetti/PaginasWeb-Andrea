import React from "react";

export default function Pasteleria() {
  const productos = [
    {
      id: 1,
      nombre: "Tarta Lime Pie",
      descripcion: "Base crocante, crema de limón y merengue italiano.",
      precio: "$20.000",
      media: "/src/assets/torta4.jpg",
    },
    {
      id: 2,
      nombre: "Torta Oreo",
      descripcion: "Bizcochuelo de chocolate, ganache y Oreo.",
      precio: "$15.500",
      media: "/src/assets/torta2.jpg",
    },
    {
      id: 3,
      nombre: "Cheesecake",
      descripcion: "Cremoso, base de galletas y frutas.",
      precio: "$18.000",
      media: "/src/assets/torta3.jpg",
    },
    {
      id: 4,
      nombre: "Torta Brownie",
      descripcion: "Húmedos, intensos y con chocolate real.",
      precio: "$16.500",
      media: "/src/assets/torta8.jpg",
    },
    {
      id: 5,
      nombre: "Torta Helada",
      descripcion: "Rellena de crema helada y frutas frescas.",
      precio: "$19.000",
      media: "/src/assets/torta9.jpg",
    },
    {
      id: 6,
      nombre: "Torta Selva Negra",
      descripcion: "Rellena de crema con frutos rojos y esponjosos bizcochos.",
      precio: "$17.500",
      media: "/src/assets/torta7.jpg",
    },
      {
      id: 7,
      nombre: "Torta De Frutilla",
      descripcion: "Clásica, rellena de crema y frutillas frescas.",
      precio: "$14.500",
      media: "/src/assets/torta1.jpg",
    },
    {
      id: 8,
      nombre: "Tiramisu",
      descripcion: "Clásica, rellena de crema con mascarpone, vainillas y café.",
      precio: "$21.000",
      media: "/src/assets/torta6.jpg",
    },
    {
      id: 9,
      nombre: "Torta Rogel",
      descripcion: "Capas de masa fina con dulce de leche y merengue.",
      precio: "$18.500",
      media: "/src/assets/torta5.jpg",
    },
  ];

  const videos = [
    {
      id: 1,
      src: "/src/assets/video1.mp4",
      texto: "Momentos dulces",
    },
    {
      id: 2,
      src: "/src/assets/video2.mp4",
      texto: "Hecho a mano",
    },
    {
      id: 3,
      src: "/src/assets/video3.mp4",
      texto: "Para celebrar",
    },
  ];

  return (
    <div className="pasteleria-page">
      {/* HEADER */}
      <header className="pasteleria-header">
        <h1>Nuestra Pastelería</h1>
        <p>Pedidos artesanales · Encargos personalizados · Hecho con amor 💕</p>
      </header>

      {/* PRODUCTOS */}
      <section className="pasteleria-list">
        {productos.map((p) => (
          <article key={p.id} className="pasteleria-item">
            <div className="media-box">
              <img src={p.media} alt={p.nombre} />
            </div>

            <div className="info-box">
              <h3>{p.nombre}</h3>
              <p>{p.descripcion}</p>

              <div className="price-row">
                <span className="price">{p.precio}</span>
                <a
                  href={`https://wa.me/549XXXXXXXXXX?text=Hola! Quiero encargar ${p.nombre}`}
                  target="_blank"
                  rel="noreferrer"
                  className="buy-btn"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* VIDEOS FINALES */}
      <section className="pasteleria-videos">
        <h2>Así trabajamos</h2>

        <div className="videos-grid">
          {videos.map((v) => (
            <div key={v.id} className="video-card">
              <video
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
              />
              <span>{v.texto}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
