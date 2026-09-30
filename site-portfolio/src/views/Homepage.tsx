import { withBase } from "@/lib/basePath";
import MainBanner from "../components/Banner/BannerComp";
import ContentCard from "../components/Cards/ContentCard";
import { about } from "@/lib/about";
import { featuredProjects, projectToCardProps } from "@/lib/projects";
import { ABOUT_PATH, CODE_PATH } from "../constants/paths";
import { btn, cardGrid, page, panel } from "@/lib/ui";

export default function Homepage() {
  const featured = featuredProjects.slice(0, 3);

  return (
    <>
      <MainBanner
        titleText="CJ Presley"
        subtitleText="Developer, graphic designer, and copywriter"
        firstButtonText="About"
        firstRedirect={withBase(ABOUT_PATH)}
        secondButtonText="Projects"
        secondRedirect={withBase(CODE_PATH)}
      />

      <div className={`${page} grid gap-8`}>
        <section className={panel}>
          <h2 className="mb-2 text-[1.25rem] font-bold">Hello</h2>
          <p className="m-0 mb-4 max-w-[42rem] text-[0.95rem] text-muted">
            {about.profile.bio}
          </p>
          <a className={btn} href={withBase(ABOUT_PATH)}>
            Full about page
          </a>
        </section>

        <section>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <h2 className="m-0 text-[1.35rem] font-bold">Selected work</h2>
            <a
              className="text-sm font-bold text-accent hover:text-[#7ad4dc]"
              href={withBase(CODE_PATH)}
            >
              All projects
            </a>
          </div>
          <div className={cardGrid}>
            {featured.map((project) => (
              <ContentCard
                key={project.link}
                {...projectToCardProps(project)}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
