type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-white border-b border-ink-200 pt-12 pb-14">
      <div className="container-page text-center max-w-3xl mx-auto">
        {eyebrow && (
          <p className="text-brand-700 font-semibold text-[13px] uppercase tracking-wider mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[34px] md:text-[44px] font-bold text-ink-900 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-ink-500 text-[16px] md:text-[17px] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
