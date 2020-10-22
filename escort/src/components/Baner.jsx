import React from "react";

const banner2 = () => (
  <div
    id="carouselExampleIndicators"
    class="carousel slide "
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img //1920x1080
          src="https://www.secciona2.com/wp-content/uploads/2019/06/Obra-de-Arquitectura-Colegio-Ofelia-Uribe-Acosta-13.jpg"
          alt="..."
          class="imagenesBanner"
        ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1>Colegio Rafael Uribe de Acosta</h1>
          <button type="button" class="btn btn-outline-info botonBanner">
            Ir a ...?
          </button>
        </div>
      </div>
      <div class="carousel-item ">
        <img
          class="d-block w-100 imagenesBanner"
          src="https://vilmanunez.com/wp-content/uploads/2018/07/como-hacer-un-banner.png"
          alt="Second slide"
        ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1>Escort</h1>
          <button type="button" class="btn btn-outline-info botonBanner">
            Entrar al Inicio de Escort
          </button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          className="d-block w-100 imagenesBanner"
          src="https://cdn.digitalmenta.com/wp-content/uploads/2018/07/1.1.T%C3%ADtulo-II.jpg"
          alt="Third slide"
        ></img>
        <div className="carousel-caption d-none d-md-block">
          <h1>Que Queremos Llegar Hacer</h1>
          <button type="button" class="btn btn-outline-info botonBanner">
            Concoer mas...
          </button>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
);

export default banner2;