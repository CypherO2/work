import Avatar from "../assets/myavatar.jpg";
import { SOCIAL_LINKS, socialHref, socialLabel } from "../constants/mylinks";
import { about } from "@/lib/about";
import BioPanel from "./BioPanel";
import FocusTags from "./FocusTags";
import Timeline from "./Cards/Timeline";
import { panel } from "@/lib/ui";

export default function ProfileComp() {
  const { profile, focus, experience, education } = about;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(15rem,17.5rem)_minmax(0,1fr)] lg:items-start">
      <aside className="grid gap-4 lg:sticky lg:top-20">
        <section
          className={`${panel} grid justify-items-center gap-2 px-4 py-7 text-center`}
        >
          <img
            src={Avatar.src}
            alt={profile.name}
            className="h-[9.5rem] w-[9.5rem] rounded-full border-2 border-panel-border object-cover"
          />
          <h1 className="mt-1.5 text-[1.05rem] font-bold">{profile.headline}</h1>
          <p className="m-0 text-muted">{profile.location}</p>
        </section>

        <FocusTags tags={focus} />

        <ul className="m-0 grid list-none gap-2 p-0">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.socialType}>
              <a
                href={socialHref(social.socialLink)}
                target={
                  social.socialLink.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.socialLink.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                title={social.socialText}
                className="flex items-center justify-between gap-4 rounded-[0.35rem] border border-panel-border bg-panel px-4 py-3.5 text-ink hover:border-accent hover:text-accent"
              >
                <i
                  className={`w-5 text-center ${social.socialIcon[1]} fa-${social.socialIcon[0]}`}
                  aria-hidden="true"
                />
                <span>{socialLabel(social.socialText)}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="grid gap-4">
        <BioPanel text={profile.bio} />

        <Timeline
          title="Experience"
          entries={experience.map((job) => ({
            dateStart: job.start,
            dateEnd: job.end,
            jobRole: job.role,
            workPlace: job.company,
            roleDesc: job.summary,
            mode: job.mode,
            location: job.location,
            achievements: job.achievements,
            tags: job.stack,
            tagsLabel: "Stack",
            url: job.url,
            links: job.links,
          }))}
        />

        <Timeline
          title="Education"
          entries={education.map((item) => ({
            dateStart: item.start,
            dateEnd: item.end,
            jobRole: item.program,
            workPlace: item.place,
            roleDesc: item.summary,
            mode: item.mode,
            location: item.location,
            studyType: item.studyType,
            score: item.score,
            achievements: item.achievements,
            tags: item.courses,
            tagsLabel: "Courses",
            url: item.url,
            links: item.links,
          }))}
        />
      </div>
    </div>
  );
}
