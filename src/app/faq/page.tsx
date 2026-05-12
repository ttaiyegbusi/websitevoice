import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import FinalCTA from '@/components/FinalCTA';
import { FAQS } from '@/data/faqs';

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Everything you wanted to know"
        subtitle="Can't find what you're looking for? Drop us a line — we'd be happy to help."
      />

      <section className="container-page py-14 max-w-3xl">
        <FAQAccordion items={FAQS} defaultOpen={0} />
      </section>

      <FinalCTA />
    </>
  );
}
