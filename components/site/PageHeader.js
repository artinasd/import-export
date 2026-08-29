import { ArrowLeft } from "lucide-react";

export default function PageHeader({ eyebrow, title, description, actionHref, actionLabel }) {
  return (
    <section className="bg-[#171816] pb-20 pt-40 text-white lg:pb-24 lg:pt-48">
      <div className="container-site">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex w-fit items-center" style={{ backgroundColor: "rgba(201, 166, 107, 0.10)", border: "1px solid rgba(201, 166, 107, 0.25)", borderRadius: "8px", padding: "4px 12px", color: "#c9a66b", fontSize: "16px", fontWeight: 800, lineHeight: 1.5 }}>{eyebrow}</p>
          <h1 className="font-display text-balance text-4xl font-black leading-[1.18] sm:text-5xl lg:text-7xl">{title}</h1>
          {description && <p className="mt-7 max-w-2xl text-sm leading-8 text-white/50 sm:text-base">{description}</p>}
          {actionHref && <a href={actionHref} className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#c9a66b] px-5 py-3.5 text-sm font-bold text-[#171816] transition hover:bg-white">{actionLabel}<ArrowLeft size={15} /></a>}
        </div>
      </div>
    </section>
  );
}
