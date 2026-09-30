"use client";

import MainBanner from "../components/Banner/BannerComp";
import TableComp from "../components/TableComp";
import ContentCard from "../components/Cards/ContentCard";
import { cx, masonry2, page } from "@/lib/ui";

export default function ElysiumPage() {
  return (
    <>
      <MainBanner
        titleText="Elysium Discord Bot"
        subtitleText="A multi-purpose discord bot, with an expansive selection of commands."
      />
      <div className={cx(page, masonry2)}>
        <TableComp />
        <ContentCard
          repoTitle="CypherO2/Elysium_DiscordBot"
          repoDesc="A multi-purpose discord bot, with an expansive selection of commands."
          repoLink="https://github.com/CypherO2/Elysium_DiscordBot"
        />
      </div>
    </>
  );
}
