import { panel } from "@/lib/ui";

type BioPanelProps = {
  title?: string;
  text: string;
};

export default function BioPanel({ title = "About", text }: BioPanelProps) {
  return (
    <section className={panel}>
      <h2 className="mb-3 text-[1.35rem] font-bold">{title}</h2>
      <p className="m-0 text-[0.95rem] leading-relaxed text-muted">{text}</p>
    </section>
  );
}
