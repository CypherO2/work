import Link from "next/link";
import MainBanner from "@/components/Banner/BannerComp";
import ContentCard from "@/components/Cards/ContentCard";
import { about } from "@/lib/about";
import { now } from "@/lib/now";
import { featuredProjects } from "@/lib/projects";
import { CODE_PATH, WORK_PATH } from "@/constants/paths";
import { cardGrid, page } from "@/lib/ui";

export default function Homepage() {
  return (
    <>
      <MainBanner
        titleText="Cassi Presley"
        subtitleText={about.profile.headline}
        firstButtonText="Work"
        firstRedirect={WORK_PATH}
        secondButtonText="Projects"
        secondRedirect={CODE_PATH}
      />

      <div className={`${page} grid gap-10`}>
        <section id="now" className="scroll-mt-6">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="m-0 text-[1.35rem] font-bold">{now.headline}</h2>
            <p className="m-0 text-sm text-muted">Updated {now.updated}</p>
          </div>
          <ul className="m-0 grid list-none gap-5 border-t border-panel-border p-0 pt-5">
            {now.items.map((item) => (
              <li key={item.title}>
                <h3 className="m-0 text-[1.05rem] font-bold text-ink">
                  {item.title}
                </h3>
                <p className="m-0 mt-1 max-w-[42rem] text-[0.95rem] text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <h2 className="m-0 text-[1.35rem] font-bold">Selected projects</h2>
            <Link
              className="text-sm font-bold text-accent hover:text-[var(--accent-hover)]"
              href={CODE_PATH}
            >
              All projects
            </Link>
          </div>
          <div className={cardGrid}>
            {featuredProjects.map((project) => (
              <ContentCard key={project.link} {...project} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
