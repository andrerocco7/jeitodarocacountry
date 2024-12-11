import Link from "next/link";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-video position-relative">
      <div className="wrap-slider">
        {/* Substituindo o caminho do vídeo pelo link do Firebase */}
        <video
          src="https://firebasestorage.googleapis.com/v0/b/e-commerce-fde02.appspot.com/o/videoplayback.mp4?alt=media&token=e91cb1a4-69c0-4ed8-8dde-7dbd86cc820b"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className="box-content">
          <div className="container">
            <h1 className="fade-item fade-item-2 heading text-white">
              <br />A loja Oficial dus mininu
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
