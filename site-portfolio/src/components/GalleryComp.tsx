import "../css/core.css";

// Define the type for the imported images
interface ImageModule {
  default: string;
  [key: string]: any;
}

// TypeScript needs this type annotation for the glob import
const images: Record<string, ImageModule> = import.meta.glob(
  "../assets/MyArt/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
  }
);

export default function GalleryComp() {
  const masonryImageList = Object.values(images).map((image, index) => (
    <div key={index} className="masonry-item">
      <img
        src={image?.default}
        className="w-100 shadow-1-strong rounded"
        alt={`Image ${index + 1}`}
      />
    </div>
  ));
  return <div className="masonry-gallery">{masonryImageList}</div>;
}

{
  /*




*/
}
