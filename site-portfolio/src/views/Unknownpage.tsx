"use client";

import { withBase } from "@/lib/basePath";
import MainBanner from "../components/Banner/BannerComp";
import { INDEX_PATH } from "../constants/paths";
import { btn } from "@/lib/ui";

export default function Unknownpage() {
  return (
    <div className="relative z-[1] px-[clamp(1rem,3vw,1.75rem)] py-16 text-center">
      <h1 className="mb-2 text-[clamp(1.8rem,5vw,2.6rem)] font-bold">
        404 - Page Not Found
      </h1>
      <p className="mb-6 font-bold text-accent">are you in the right place?</p>
      <MainBanner titleText="lost signal" subtitleText="this route does not exist" />
      <a className={btn} href={withBase(INDEX_PATH)}>
        Back home
      </a>
    </div>
  );
}
