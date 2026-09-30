import MainBanner from "../components/Banner/BannerComp";
import TableComp from "../components/TableComp";
import ContentCard from "../components/Cards/ContentCard";
import { projects, projectToCardProps } from "@/lib/projects";
import { cx, masonry2, page } from "@/lib/ui";

const elysium =
  projects.find((project) => project.title.includes("Elysium")) ??
  projects[0];

export default function ElysiumPage() {
  return (
    <>
      <MainBanner
        titleText="Elysium Discord Bot"
        subtitleText="A multi-purpose Discord bot with a wide command set."
      />
      <div className={cx(page, masonry2)}>
        <TableComp />
        {elysium ? (
          <ContentCard {...projectToCardProps(elysium)} />
        ) : null}
      </div>
    </>
  );
}
