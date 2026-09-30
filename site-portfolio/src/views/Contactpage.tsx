import { SOCIAL_LINKS, socialHref, socialLabel } from "@/constants/mylinks";
import { socialIcon } from "@/lib/socialIcons";
import { page, pageTitle, panel } from "@/lib/ui";

export default function Contactpage() {
  return (
    <div className={page}>
      <h1 className={pageTitle}>Contact</h1>
      <p className="mx-auto mb-6 max-w-[36rem] text-center text-[0.95rem] text-muted">
        Reach me by email or on any of these profiles.
      </p>
      <ul className="m-0 mx-auto grid max-w-[28rem] list-none gap-2 p-0">
        {SOCIAL_LINKS.map((social) => {
          const Icon = socialIcon(social.socialType);
          return (
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
                className={`${panel} flex items-center gap-3 text-ink transition-colors hover:border-accent hover:text-accent`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="min-w-0 truncate font-bold">
                  {socialLabel(social.socialText, 28)}
                </span>
                <span className="ml-auto text-xs text-muted capitalize">
                  {social.socialType}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
