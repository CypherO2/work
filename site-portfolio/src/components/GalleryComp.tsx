"use client";

import "../css/core.css";
import { withBase } from "@/lib/basePath";

const ART_FILES = [
  "3dModal-Arcadia1.png",
  "3dModal-Arcadia2.png",
  "AsianLandscape.png",
  "Chi_no_Ame_2-3D_Modal2.png",
  "Chi_no_Ame-3D_Modal1.png",
  "Concept2.png",
  "CourseFinal1.png",
  "CourseWork2022(2).png",
  "CourseWork2022.png",
  "Dev Logo.jpg",
  "DnDMap-Arcadia.jpg",
  "Doodle1.png",
  "ElevatorOwl-Concept1.png",
  "Forest.png",
  "HappyBirthdayDragon.png",
  "MatchStick.png",
  "MinecraftCharacter1.png",
  "Mountainous.png",
  "Mushroom1.png",
  "pack.png",
  "PirateLogoConcept1.png",
  "Screenshot 2025-07-12 125816.png",
  "Screenshot 2025-07-12 193754.png",
  "Screenshot 2025-07-13 142704.png",
  "Screenshot 2025-07-14 133217.png",
  "Screenshot 2025-07-14 183613.png",
  "Screenshot 2025-07-15 151716.png",
  "Screenshot 2025-07-16 201424.png",
  "Seishi1.png",
  "Space2025.png",
  "Space Art Wide.png",
  "SpaceDrawing-Large1.png",
  "SpaceDrawing-Large2.png",
  "SpaceDrawing-Large3.png",
  "SpaceDrawing-Medium1.png",
  "SpaceSmall-1.png",
  "SpaceSmall-2.png",
  "Sword1.png",
  "TheTerribleTavern.png",
];

export default function GalleryComp() {
  return (
    <div className="masonry-gallery">
      {ART_FILES.map((file, index) => (
        <div key={file} className="masonry-item">
          <img
            src={withBase(`/MyArt/${encodeURIComponent(file)}`)}
            className="w-100 shadow-1-strong rounded"
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
