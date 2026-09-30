import { work } from "@/lib/work";
import { page, pageTitle } from "@/lib/ui";

export default function Workpage() {
  return (
    <div className={page}>
      <h1 className={pageTitle}>Work</h1>
      <p className="mx-auto mb-8 max-w-[40rem] text-center text-[0.95rem] text-muted">
        {work.intro}
      </p>

      <ul className="m-0 mx-auto grid max-w-[46rem] list-none gap-8 p-0">
        {work.cases.map((item) => (
          <li
            key={item.title}
            className="border-t border-panel-border pt-6 first:border-t-0 first:pt-0"
          >
            <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="m-0 text-[1.2rem] font-bold text-ink">
                {item.title}
              </h2>
              <span className="text-sm text-muted">{item.period}</span>
            </div>
            <p className="m-0 mb-3 text-sm text-muted">
              {item.role} · {item.org}
            </p>
            <p className="m-0 mb-2 max-w-[40rem] text-[0.95rem] leading-relaxed text-muted">
              {item.summary}
            </p>
            <p className="m-0 mb-4 max-w-[40rem] text-[0.95rem] leading-relaxed text-ink">
              {item.outcome}
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {item.stack.map((tag) => (
                <li
                  key={tag}
                  className="rounded-[0.35rem] border border-panel-border px-2.5 py-1 text-sm text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
