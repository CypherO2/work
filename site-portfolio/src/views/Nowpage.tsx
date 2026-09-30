import { now } from "@/lib/now";
import { page, pageTitle, panel } from "@/lib/ui";

export default function Nowpage() {
  return (
    <div className={page}>
      <h1 className={pageTitle}>{now.headline}</h1>
      <p className="mb-6 text-center text-sm text-muted">
        Updated {now.updated}
      </p>
      <ul className="m-0 mx-auto grid max-w-[42rem] list-none gap-3 p-0">
        {now.items.map((item) => (
          <li key={item.title} className={panel}>
            <h2 className="m-0 mb-2 text-[1.1rem] font-bold">{item.title}</h2>
            <p className="m-0 text-[0.95rem] text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
