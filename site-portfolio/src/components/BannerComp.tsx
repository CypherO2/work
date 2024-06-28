import BannerImg from '../assets/MyArt/SpaceDrawing-Medium1.png'

export default function MainBanner() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url("+BannerImg+")",
        height: 400,
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">CJ Presley</h1>
            <h4 className="mb-3">
              Full Stack / Web Developer & Graphic Design Artist
            </h4>
            <a
              className="btn btn-outline-light btn-lg m-1"
              href="#/portfolio-art"
              role="button"
            >
              My Art{" "}
            </a>
            <a
              className="btn btn-outline-light btn-lg m-1"
              href="#/portfolio-code"
              role="button"
            >
              My Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
