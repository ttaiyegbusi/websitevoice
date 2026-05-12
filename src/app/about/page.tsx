import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

const VALUES = [
  {
    title: "Accessibility first",
    body: "We design every feature so users with visual impairments, dyslexia, or learning differences can access content effortlessly.",
  },
  {
    title: "Natural voices",
    body: "We work with the best neural text-to-speech models so your readers hear voices that feel human, not robotic.",
  },
  {
    title: "Built for the busy",
    body: "Our players let your audience tune in while commuting, cooking, or working — turning your blog into a hands-free podcast.",
  },
  {
    title: "Friendly to creators",
    body: "Simple pricing, a fast WordPress plugin, and a 14-day free trial mean you can start with no commitment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A voice for every website."
        subtitle="We're a small team of readers, listeners, and engineers building text-to-speech that finally sounds human."
      />

      <section className="container-page py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16">
        <div>
          <h2 className="text-[26px] md:text-[30px] font-bold text-ink-900 leading-tight">
            Our story
          </h2>
        </div>
        <div className="space-y-5 text-ink-700 text-[15.5px] leading-relaxed">
          <p>
            We're a group of avid readers and podcast listeners who realized
            that sometimes it's difficult to catch up on our favorite blogs,
            news media and articles online when we're busy commuting, working,
            driving, doing chores, and keeping our eyes and hands occupied.
          </p>
          <p>
            And so we asked ourselves: wouldn't it be great if we could listen
            to these websites like a podcast instead of reading? The next
            question also arose: how are people with learning disabilities and
            visual impairments able to process information that is online in
            text?
          </p>
          <p>
            Thus we created WebsiteVoice, a text-to-speech solution for bloggers
            and web content creators that allow their audience to tune in to
            their content for better user engagement, accessibility and to grow
            more subscribers for their websites.
          </p>
        </div>
      </section>

      <section className="bg-ink-100 py-16 md:py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[26px] md:text-[32px] font-bold text-ink-900">
              What we care about
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-ink-200 p-7 hover:shadow-card-hover transition-shadow"
              >
                <h3 className="text-[18px] font-bold text-ink-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-ink-500 text-[15px] leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
