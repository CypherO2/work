"use client";

import { SOCIAL_LINKS, socialHref } from "../../constants/mylinks";

export default function FootComp() {
  return (
    <footer className="relative z-[1] mt-8 px-[clamp(1rem,3vw,1.75rem)] pt-6 text-center">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.socialType}
            href={socialHref(social.socialLink)}
            aria-label={social.socialType}
            target={social.socialLink.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              social.socialLink.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[#111] hover:bg-accent hover:text-[#041018]"
          >
            <i
              className={`${social.socialIcon[1]} fa-${social.socialIcon[0]}`}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
      <p className="m-0 bg-black/35 p-3.5 text-sm text-muted">
        Made by{" "}
        <a className="font-bold text-ink" href="https://www.github.com/CypherO2">
          CJ Presley
        </a>
      </p>
    </footer>
  );
}
