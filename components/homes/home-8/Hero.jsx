import Link from "next/link";
export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-video position-relative">
      <div className="wrap-slider">
        <video src="/images/slider/horse.mp4" autoPlay muted playsInline loop />
        <div className="box-content">
          <div className="container">
            <p className="fade-item fade-item-1 subheading text-white fw-7">
              SEU PASSAPORTE PARA O ESTILO COUNTRY
            </p>
            <h1 className="fade-item fade-item-2 heading text-white">
              Jeito da Roça Country
              <br />A loja Oficial do jeito da roça
            </h1>
            <Link
              href={`/shop-collection-sub`}
              className="fade-item fade-item-3 tf-btn fill-outline-light btn-icon radius-3"
            >
              <span>VER TODOS PRODUTOS </span>
              <i className="icon icon-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
