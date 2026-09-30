"use client";

import Link from "next/link";
import MainBanner from "@/components/Banner/BannerComp";
import { INDEX_PATH } from "@/constants/paths";
import { btn } from "@/lib/ui";

export default function Unknownpage() {
  return (
    <div className="relative z-[1] px-[clamp(1rem,3vw,1.75rem)] py-16 text-center">
      <MainBanner
        titleText="404"
        subtitleText="this route does not exist"
      />
      <Link className={btn} href={INDEX_PATH}>
        Back home
      </Link>
    </div>
  );
}
