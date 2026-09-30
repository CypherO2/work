import { panel } from "@/lib/ui";

type FocusTagsProps = {
  title?: string;
  tags: string[];
};

export default function FocusTags({
  title = "Focus",
  tags,
}: FocusTagsProps) {
  if (tags.length === 0) return null;

  return (
    <section className={panel}>
      <h2 className="mb-3 text-[1.05rem] font-bold">{title}</h2>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-[0.35rem] border border-panel-border px-2.5 py-1 text-sm text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
