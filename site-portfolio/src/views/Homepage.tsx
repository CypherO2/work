"use client";

import { withBase } from "@/lib/basePath";
import MainBanner from "../components/Banner/BannerComp";
import QuoteComp from "../components/QuoteComp";
import ContentCard from "../components/Cards/ContentCard";
import { cx, masonry2, page } from "@/lib/ui";

export default function Homepage() {
  return (
    <>
      <MainBanner
        titleText="CJ Presley"
        subtitleText="Developer, Graphic Designer & Copywriter"
        firstButtonText="Art"
        firstRedirect={withBase("/portfolio-art")}
        secondButtonText="Code"
        secondRedirect={withBase("/portfolio-code")}
      />
      <div className={cx(page, masonry2)}>
        <QuoteComp
          quoteText="The reason we call them the tickle monster and not another creature is because only a monster would tickle someone"
          quoteAuthor="CJ Presley"
        />
        <ContentCard
          repoTitle="Sgàthach Discord Bot"
          repoDesc="Sgàthach is a Python Discord bot for moderation, engagement, and community management."
          repoLink="https://github.com/CypherO2/Sg-thach-Discord-Bot"
        />
      </div>
    </>
  );
}
