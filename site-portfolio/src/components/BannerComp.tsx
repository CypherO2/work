

export default function MainBanner() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        height: 500,
      }}
    >
      <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">CJ Presley</h1>
            <h4 className="mb-3">
              Web Developer, Copywriter & Graphic Design Artist
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
