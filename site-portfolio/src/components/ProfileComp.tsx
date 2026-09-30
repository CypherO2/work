"use client";

import Avatar from "../assets/myavatar.jpg";
import { SOCIAL_LINKS, socialHref } from "../constants/mylinks";
import { EMPLOYMENT_INFO } from "../constants/jobdesc";
import Timeline from "./Cards/Timeline";
import { masonry2, panel } from "@/lib/ui";

const EDUCATION = [
  {
    dateStart: "April 2025",
    dateEnd: "Present",
    jobRole: "Software Engineering",
    workPlace: "The Open University",
    roleDesc: "HTQ Diploma of Higher Education in Software Development.",
  },
  {
    dateStart: "Sept 2022",
    dateEnd: "July 2024",
    jobRole: "T-Level",
    workPlace: "Salford City College",
    roleDesc: "T-Level in Digital Production, Design and Development.",
  },
  {
    dateStart: "Sept 2017",
    dateEnd: "July 2022",
    jobRole: "GCSEs",
    workPlace: "The Albion Academy",
    roleDesc:
      "Mathematics, English Literature, English Languages, Combined Science: Trilogy.",
  },
  {
    dateStart: "Sept 2017",
    dateEnd: "July 2022",
    jobRole: "BTECs",
    workPlace: "The Albion Academy",
    roleDesc:
      "Art, Craft and Design (3D Design), Art, Craft and Design, Creative iMedia.",
  },
] as const;

export default function ProfileComp() {
  return (
    <div className={masonry2}>
      <section
        className={`${panel} grid justify-items-center gap-2 px-4 py-7 text-center`}
      >
        <img
          src={Avatar.src}
          alt="CJ Presley"
          className="h-[9.5rem] w-[9.5rem] rounded-full border-2 border-panel-border object-cover"
        />
        <h1 className="mt-1.5 text-[1.05rem] font-bold">
          Junior Developer @ Citizens Advice SORT
        </h1>
        <p className="m-0 text-muted">Manchester, England, UK</p>
      </section>

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
              className="flex items-center justify-between gap-4 rounded-[0.35rem] border border-panel-border bg-panel px-4 py-3.5 text-ink hover:border-accent hover:text-accent"
            >
              <i
                className={`w-5 text-center ${social.socialIcon[1]} fa-${social.socialIcon[0]}`}
                aria-hidden="true"
              />
              <span>{social.socialText}</span>
            </a>
          </li>
        ))}
      </ul>

      <Timeline
        title="My Experience"
        entries={EMPLOYMENT_INFO.map((job) => ({
          dateStart: job.startDate,
          dateEnd: job.endDate,
          jobRole: job.jobRole,
          workPlace: job.companyName,
          roleDesc: job.roleDesc,
        }))}
      />

      <Timeline title="My Education" entries={[...EDUCATION]} />
    </div>
  );
}
