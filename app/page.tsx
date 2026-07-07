import Image from "next/image";
import Reveal from "./components/Reveal";
import StickyCTA from "./components/StickyCTA";
import Faq from "./components/Faq";

const PHONE = "346-219-3881";
const PHONE_HREF = "tel:+13462193881";
const SMS_HREF = "sms:+13462193881";
const INSTAGRAM = "https://www.instagram.com/_taylormadeesthetics_";
const FACEBOOK = "https://www.facebook.com/search/top?q=taylor%20made%20esthetics";
const WEBSITE = "https://taylormadeesthetics.net";

const FAQ_ITEMS = [
  {
    q: "What areas do you serve?",
    a: "We're based in Pearland, TX and bring the spa to you throughout Pearland and the greater Houston area — including Friendswood, League City, Manvel, Alvin and nearby communities. Celebrating a little farther out? Just ask and we'll do our best to travel to you!",
  },
  {
    q: "How much does a spa party cost?",
    a: "Every party is custom-built around your guest count, the ages of the girls, and the add-ons you choose — so pricing is personalized just for you. Call or text us at 346-219-3881 and we'll put together a quote that fits your celebration and your budget.",
  },
  {
    q: "What ages are the parties for?",
    a: "Our parties are perfect for all ages! The facial and spa fun is loved by girls from about age 5 through the teen years, and our nail services are available for every age — from pretty polish for the littles to full sets for teens and moms.",
  },
  {
    q: "How much space do we need for a teepee sleepover?",
    a: "Each teepee needs roughly a 3.5 ft by 6 ft footprint, so a living room or bonus room is perfect. For spa parties we set up at your table or in any open space. Tell us your setup and we'll style it to fit beautifully!",
  },
  {
    q: "What's included, and what do I need to provide?",
    a: "We bring everything: delivery, setup, all spa supplies and equipment, themed décor, goodie bags for every guest, and full takedown afterward. You just provide the space and the excited girls — we handle the rest!",
  },
  {
    q: "How far in advance should I book?",
    a: "Weekends fill up fast, especially during busy party seasons, so we recommend reaching out about 3–4 weeks ahead. Planning something last-minute? Message us anyway — we'll always try to make the magic happen.",
  },
];

const GALLERY = [
  { src: "/images/teepee-left.png", alt: "Glowing pink teepee tents with twinkle lights set up for a sleepover", w: 325, h: 290 },
  { src: "/images/facial-party.png", alt: "Girls in pink robes and headbands enjoying a facial spa party", w: 325, h: 300 },
  { src: "/images/g-goodiebag.png", alt: "Pink spa goodie bag filled with pampering treats", w: 283, h: 150 },
  { src: "/images/nails.png", alt: "Sparkly pink and silver manicured nails", w: 370, h: 163 },
  { src: "/images/teepee-right.png", alt: "Row of pink teepee beds with personal spa trays", w: 410, h: 320 },
  { src: "/images/g-balloons.png", alt: "Pink, white and gold balloon garland", w: 118, h: 283 },
  { src: "/images/spa-party-girls.png", alt: "Girls smiling together around a spa party table", w: 640, h: 800 },
  { src: "/images/decor/rose.jpg", alt: "A single soft pink rose in warm light", w: 400, h: 600 },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`sparkle ${className}`}>
      <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0z" />
    </svg>
  );
}

function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function Crown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M2 8l4.5 4L12 4l5.5 8L22 8l-2 11H4L2 8zm2 13h16v2H4v-2z" />
    </svg>
  );
}

function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 12.2l3 3 6-6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlourishDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 34" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M116 17 C96 6 74 5 57 15 C44 22 39 32 29 29 C21 26 24 16 33 17 C40 18 40 25 35 26" />
        <path d="M124 17 C144 6 166 5 183 15 C196 22 201 32 211 29 C219 26 216 16 207 17 C200 18 200 25 205 26" />
      </g>
      <path
        d="M120 11c-2.6-3.4-8-1.4-8 3 0 3.6 4.6 6.2 8 8.6 3.4-2.4 8-5 8-8.6 0-4.4-5.4-6.4-8-3z"
        fill="#f75d99"
      />
    </svg>
  );
}

function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 170" className={className} aria-hidden="true">
      <path d="M50 168 C42 132 62 108 52 74 C46 52 60 30 54 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="currentColor" stroke="none">
        <ellipse cx="40" cy="130" rx="13" ry="5" transform="rotate(-34 40 130)" />
        <ellipse cx="64" cy="108" rx="13" ry="5" transform="rotate(34 64 108)" />
        <ellipse cx="44" cy="84" rx="12" ry="4.6" transform="rotate(-38 44 84)" />
        <ellipse cx="60" cy="60" rx="12" ry="4.6" transform="rotate(38 60 60)" />
        <ellipse cx="49" cy="38" rx="10" ry="4" transform="rotate(-30 49 38)" />
        <ellipse cx="55" cy="16" rx="8" ry="3.4" transform="rotate(22 55 16)" />
      </g>
    </svg>
  );
}

function SectionHeading({
  script,
  title,
  subtitle,
}: {
  script: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 px-4">
      <p className="font-script text-3xl sm:text-4xl text-blush-500 mb-1">{script}</p>
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-blush-800 tracking-tight">{title}</h2>
      <FlourishDivider className="w-44 h-6 mx-auto mt-4 text-gold-500" />
      {subtitle && <p className="mt-4 text-lg text-blush-900/70">{subtitle}</p>}
    </div>
  );
}

function BookButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={PHONE_HREF}
        className="btn-sheen w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-blush-600 to-blush-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blush-500/30 transition hover:scale-105 hover:shadow-blush-500/50"
      >
        Call or Text {PHONE}
      </a>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto text-center rounded-full px-8 py-4 text-lg font-bold transition hover:scale-105 gold-border text-gold-700 bg-cream shadow-md"
      >
        DM us on Instagram
      </a>
    </div>
  );
}

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-blush-200/60">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Taylor Made Esthetics logo" width={110} height={73} className="h-12 w-auto" priority />
            <span className="font-script text-2xl text-blush-600 hidden sm:inline">Spa Parties</span>
          </a>
          <nav aria-label="Main" className="hidden md:flex items-center gap-6 text-sm font-semibold text-blush-800">
            <a href="#parties" className="hover:text-blush-500 transition">The Parties</a>
            <a href="#gallery" className="hover:text-blush-500 transition">Gallery</a>
            <a href="#included" className="hover:text-blush-500 transition">What&apos;s Included</a>
            <a href="#addons" className="hover:text-blush-500 transition">Add-Ons</a>
            <a href="#faq" className="hover:text-blush-500 transition">FAQ</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="rounded-full bg-gradient-to-r from-blush-600 to-blush-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blush-500/30 transition hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="top" className="bg-hero grain relative">
        <LeafSprig className="hidden lg:block absolute top-24 left-[2%] w-24 h-44 text-gold-400/40 -scale-x-100" />
        <Sparkle className="absolute top-16 left-[8%] w-6 h-6 text-gold-400" />
        <Sparkle className="absolute top-44 right-[6%] w-8 h-8 text-blush-300 [animation-delay:0.8s]" />
        <Sparkle className="absolute bottom-24 left-[14%] w-5 h-5 text-blush-400 [animation-delay:1.4s]" />
        <Sparkle className="absolute bottom-40 right-[16%] w-6 h-6 text-gold-400 [animation-delay:0.4s]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-10 pb-20 lg:pt-14 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex flex-col items-center mb-6">
              <Image src="/images/logo.png" alt="Taylor Made Esthetics" width={340} height={227} className="w-60 sm:w-72 h-auto" priority />
              <span className="font-script text-5xl sm:text-6xl text-pink-shimmer -mt-3 pb-2 px-6">Spa Parties</span>
            </div>

            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gold-400/60 px-5 py-1.5 text-sm font-bold tracking-widest uppercase text-gold-600 mb-5 shadow-sm">
              <Sparkle className="w-3.5 h-3.5" />
              We bring the spa to you!
              <Sparkle className="w-3.5 h-3.5" />
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-tight text-blush-900">
              The Ultimate <span className="text-pink-shimmer">Spa Party</span> Experience for Girls in{" "}
              <span className="text-gold-shimmer">Pearland, TX</span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-blush-900/75 max-w-xl mx-auto lg:mx-0">
              Facials, sparkly nails, twinkle-light teepee sleepovers &amp; goodie bags — perfect for birthdays,
              sleepovers and girls&apos; days. You celebrate, <strong>we take care of the rest!</strong>
            </p>

            <div className="mt-8">
              <BookButtons />
            </div>

            <p className="mt-6 font-script text-2xl text-blush-500">Relax. Pamper. Celebrate. Make memories that last!</p>
          </div>

          {/* Photo collage */}
          <div className="relative max-w-lg mx-auto w-full">
            <div className="blob w-72 h-72 bg-blush-300/50 -top-6 -right-2" aria-hidden="true" />
            <div className="blob w-64 h-64 bg-gold-300/40 bottom-0 -left-4" aria-hidden="true" />

            <div className="relative floaty">
              <div className="frame-gold rotate-2">
                <Image
                  src="/images/teepee-right.png"
                  alt="Glowing pink teepee tents with twinkle lights and spa trays for a sleepover"
                  width={410}
                  height={320}
                  className="rounded-[1.1rem] w-full h-auto"
                  priority
                />
              </div>

              <div className="absolute -bottom-10 -left-5 sm:-left-12 w-40 sm:w-52 floaty-slow">
                <div className="frame-gold">
                  <Image
                    src="/images/facial-party.png"
                    alt="Girls in pink robes enjoying facials at a spa party"
                    width={325}
                    height={300}
                    className="rounded-[0.9rem] w-full h-auto"
                  />
                </div>
              </div>

              <div className="absolute -top-8 -right-4 sm:-right-8 w-24 sm:w-28 rotate-6 floaty [animation-delay:1.5s]">
                <Image
                  src="/images/decor/rose.jpg"
                  alt="A soft pink rose"
                  width={200}
                  height={300}
                  className="rounded-2xl border-4 border-white shadow-lg w-full h-auto object-cover aspect-[3/4]"
                />
              </div>

              <div className="absolute top-2 right-2 bg-white rounded-full px-4 py-2 shadow-lg border border-blush-200">
                <p className="text-sm font-bold text-blush-600 flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-gold-500" /> Perfect for all ages!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section aria-label="Why families love us" className="bg-white/70 border-y border-blush-200/60 py-6">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4">
          {[
            ["We come to you", "Mobile setup at your home"],
            ["Setup & takedown", "We handle it all, start to finish"],
            ["Goodie bag for every guest", "Everyone leaves pampered"],
            ["Perfect for all ages", "From littles to teens & moms"],
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col items-center text-center px-2">
              <CheckCircle className="w-7 h-7 text-blush-500 mb-2" />
              <p className="font-bold text-blush-800 leading-tight">{title}</p>
              <p className="text-sm text-blush-900/60 mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PERFECT FOR STRIP ============ */}
      <section aria-label="Perfect for" className="bg-gradient-to-r from-blush-600 via-blush-500 to-blush-600 py-5">
        <ul className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white font-bold tracking-wide text-sm sm:text-base">
          {["Birthdays", "Sleepovers", "Girls' Day", "Special Occasions", "Just Because!"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Heart className="w-3 h-3 text-white/70" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ============ THE PARTIES ============ */}
      <section id="parties" className="py-20 relative grain">
        <LeafSprig className="hidden md:block absolute top-16 right-[3%] w-20 h-40 text-blush-200" />
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeading
              script="pick your magic"
              title="The Parties"
              subtitle="Every celebration is Taylor-made just for your girl. Mix, match & make it hers!"
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/facial-party.png",
                alt: "Girls in pink robes enjoying facials at a spa party table",
                w: 325,
                h: 300,
                tag: "Facial Party Fun",
                title: "Glow Girl Facial Party",
                body: "Robes, headbands & light-up mirrors at every seat! Guests are pampered with kid-friendly facials, masks and skincare fun — an esthetician-led experience that makes every girl feel like a VIP.",
                note: "Ideal for ages 5 to teens",
                lift: "",
              },
              {
                img: "/images/teepee-left.png",
                alt: "Pink teepee tents with twinkle lights, pillows and spa trays for a sleepover",
                w: 325,
                h: 290,
                tag: "Most Loved",
                title: "Teepee Sleepover Magic",
                body: "Dreamy twinkle-light teepees with cozy beds, plush pillows and personal spa trays for each guest. The sleepover of their dreams appears in your living room — and disappears when the fun is done!",
                note: "Setup, styling & takedown included",
                lift: "md:-mt-6",
              },
              {
                img: "/images/nails.png",
                alt: "Sparkly pink and white manicured nails beside a pink flower",
                w: 370,
                h: 163,
                tag: "Nails & Glam",
                title: "Nails & Spa Glam",
                body: "Manicures, pedicures and sparkle for days! Add glam nail services for any age to your party, from pretty polish for the littles to full sets for teens & moms.",
                note: "All ages welcome",
                lift: "",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 120} className={card.lift}>
                <article className="rounded-3xl bg-white card-glow overflow-hidden flex flex-col h-full hover-lift">
                  <div className="relative">
                    <Image src={card.img} alt={card.alt} width={card.w} height={card.h} className="w-full h-56 object-cover" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-blush-600 text-white text-xs font-bold px-4 py-1.5 shadow uppercase tracking-wide">
                      {card.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-bold text-blush-800">{card.title}</h3>
                    <p className="mt-3 text-blush-900/75 flex-1">{card.body}</p>
                    <p className="mt-4 text-sm font-bold text-gold-600">{card.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <p className="text-lg text-blush-900/75 max-w-2xl mx-auto">
                Every party is customized to your guest count, ages & theme —{" "}
                <strong>call or text for your personalized party quote!</strong>
              </p>
              <div className="mt-6">
                <a
                  href={SMS_HREF}
                  className="btn-sheen inline-block rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-gold-400/40 transition hover:scale-105"
                >
                  Request a Custom Quote
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" className="bg-cream-glow grain relative py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeading
              script="a peek at the pretty"
              title="Party Gallery"
              subtitle="Real Taylor Made moments — teepees, glowing skin, sparkly nails & so much pink!"
            />
          </Reveal>
          <Reveal>
            <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
              {GALLERY.map((img) => (
                <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl frame-gold hover-lift">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    className="rounded-[0.85rem] w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section id="included" className="bg-section-pink grain relative py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeading script="stress-free for moms" title="What's Included" subtitle="We handle everything — you enjoy the memories!" />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4">
              {[
                ["Delivery, setup & takedown", "We arrive, create the magic, and pack it all away."],
                ["All spa supplies & equipment", "Robes, headbands, mirrors, bowls, skincare & more."],
                ["Themed décor & styling", "Pink, gold & totally photo-worthy — styled to your theme."],
                ["Customizable experience", "Tailored to your guest of honor, her age & her besties."],
                ["Hassle-free for parents", "You relax and snap pictures. We take care of the rest!"],
              ].map(([title, desc], i) => (
                <Reveal key={title} delay={i * 90}>
                  <li className="flex gap-4 rounded-2xl bg-white/85 p-5 card-glow hover-lift">
                    <CheckCircle className="w-8 h-8 shrink-0 text-blush-500 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-blush-800 text-lg">{title}</h3>
                      <p className="text-blush-900/70">{desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={150}>
              <div className="relative">
                <div className="gold-border rounded-[2rem] p-8 sm:p-10 text-center bg-cream shadow-xl">
                  <Crown className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h3 className="font-display text-3xl font-bold text-blush-800">Goodie Bags Included!</h3>
                  <p className="font-script text-3xl text-blush-500 mt-2">Every guest leaves feeling special &amp; pampered!</p>
                  <p className="mt-4 text-blush-900/75">
                    Each guest takes home a sweet spa goodie bag filled with pampering treats — the perfect ending to a
                    magical day.
                  </p>
                  <div className="mt-6 flex justify-center items-center gap-3" aria-hidden="true">
                    <Sparkle className="w-4 h-4 text-gold-400" />
                    <Heart className="w-5 h-5 text-blush-400" />
                    <Sparkle className="w-6 h-6 text-gold-500" />
                    <Heart className="w-5 h-5 text-blush-400" />
                    <Sparkle className="w-4 h-4 text-gold-400" />
                  </div>
                </div>
                <Sparkle className="absolute -top-4 -right-3 w-8 h-8 text-gold-400" />
                <Sparkle className="absolute -bottom-4 -left-3 w-6 h-6 text-blush-400 [animation-delay:1s]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ ADD-ONS ============ */}
      <section id="addons" className="py-20 relative grain">
        <LeafSprig className="hidden md:block absolute bottom-16 left-[3%] w-20 h-40 text-blush-200 -scale-x-100" />
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeading
              script="make it extra special"
              title="Add-On Services"
              subtitle="Glam up any party with these à la carte extras — priced separately so you can build the perfect celebration."
            />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="rounded-3xl bg-white card-glow p-7 h-full hover-lift">
                <h3 className="font-display text-2xl font-bold text-blush-800 flex items-center gap-2.5">
                  <Sparkle className="w-5 h-5 text-gold-500 shrink-0" /> Facial Add-Ons
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    ["Dermaplane Glow (kid friendly)", "$20"],
                    ["Jelly Mask Upgrade", "$15"],
                    ["Under Eye Mask", "$10"],
                    ["LED Light Therapy", "$20"],
                    ["Extractions (if age appropriate)", "$15"],
                    ["High Frequency", "$20"],
                  ].map(([name, price]) => (
                    <li key={name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-blush-200 pb-2">
                      <span className="text-blush-900/85">{name}</span>
                      <span className="font-bold text-blush-600 whitespace-nowrap">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl bg-white card-glow p-7 h-full hover-lift">
                <h3 className="font-display text-2xl font-bold text-blush-800 flex items-center gap-2.5">
                  <Sparkle className="w-5 h-5 text-gold-500 shrink-0" /> Nail Services{" "}
                  <span className="text-sm font-body font-semibold text-gold-600">(all ages)</span>
                </h3>
                <p className="mt-4 text-xs font-bold tracking-widest uppercase text-gold-600">Acrylic Nail Sets</p>
                <ul className="mt-2 space-y-3">
                  {[
                    ["Youth (12 & under)", "$30"],
                    ["Teen (13–17)", "$40"],
                    ["Adult", "$50+"],
                  ].map(([name, price]) => (
                    <li key={name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-blush-200 pb-2">
                      <span className="text-blush-900/85">{name}</span>
                      <span className="font-bold text-blush-600 whitespace-nowrap">{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-bold tracking-widest uppercase text-gold-600">Polish Services</p>
                <ul className="mt-2 space-y-3">
                  {[
                    ["Manicure (Polish)", "$15"],
                    ["Gel Manicure", "$25"],
                    ["Pedicure (Polish)", "$20"],
                    ["Gel Pedicure", "$30"],
                  ].map(([name, price]) => (
                    <li key={name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-blush-200 pb-2">
                      <span className="text-blush-900/85">{name}</span>
                      <span className="font-bold text-blush-600 whitespace-nowrap">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="rounded-3xl bg-white card-glow p-7 h-full hover-lift md:col-span-2 lg:col-span-1">
                <h3 className="font-display text-2xl font-bold text-blush-800 flex items-center gap-2.5">
                  <Sparkle className="w-5 h-5 text-gold-500 shrink-0" /> Popular Extras
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    ["Balloon Garland", "$100–$150"],
                    ["Personalized Robes", "$25–$35 each"],
                    ["Personalized Tumbler", "$15–$20 each"],
                    ["Bracelet Making Station", "$75"],
                    ["Pizza, Snacks & Dessert Setup", "$100–$200"],
                    ["Mocktail Bar Setup", "$75"],
                    ["Extra Guest", "$50–$85 each"],
                  ].map(([name, price]) => (
                    <li key={name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-blush-200 pb-2">
                      <span className="text-blush-900/85">{name}</span>
                      <span className="font-bold text-blush-600 whitespace-nowrap">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-gradient-to-r from-blush-600 via-blush-500 to-blush-600 py-16 relative overflow-hidden">
        <Sparkle className="absolute top-6 left-[10%] w-6 h-6 text-white/60" />
        <Sparkle className="absolute bottom-8 right-[12%] w-8 h-8 text-white/50 [animation-delay:1.2s]" />
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">You Celebrate — We Take Care of the Rest!</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-4 gap-8">
            {[
              ["1", "Book your date", "Call, text or DM us your date & party details"],
              ["2", "We come to you", "We arrive and set up all the spa party magic"],
              ["3", "Girls get pampered", "Facials, nails, giggles & unforgettable memories"],
              ["4", "We handle cleanup", "We pack everything away — you just enjoy!"],
            ].map(([num, title, desc], i) => (
              <Reveal key={num} delay={i * 110}>
                <div className="text-white">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white/15 border-2 border-white/50 flex items-center justify-center font-display text-3xl font-bold">
                    {num}
                  </div>
                  <p className="mt-3 font-script text-2xl text-white/90">step {num}</p>
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="mt-1 text-white/85 text-sm max-w-[16rem] mx-auto">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-20 relative grain">
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <Reveal>
            <SectionHeading script="good to know" title="Frequently Asked" subtitle="Everything you need to know before you book your girl's big day." />
          </Reveal>
          <Reveal>
            <Faq items={FAQ_ITEMS} />
          </Reveal>
          <Reveal>
            <p className="mt-8 text-center text-blush-900/75">
              Still have a question?{" "}
              <a href={SMS_HREF} className="font-bold text-blush-600 underline decoration-gold-400 underline-offset-4">
                Text us at {PHONE}
              </a>{" "}
              — we&apos;d love to help!
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT / FINAL CTA ============ */}
      <section id="contact" className="bg-hero grain relative py-20">
        <LeafSprig className="hidden lg:block absolute top-16 right-[3%] w-24 h-44 text-gold-400/40" />
        <Sparkle className="absolute bottom-16 left-[8%] w-5 h-5 text-blush-400 [animation-delay:0.7s]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <p className="font-script text-4xl sm:text-5xl text-blush-500">Let&apos;s make your next celebration unforgettable!</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-blush-900 mt-3">Book Your Party Today!</h2>
            <p className="mt-4 text-lg text-blush-900/75">
              Serving <strong>Pearland, TX &amp; surrounding Houston areas</strong> — we come to you!
            </p>

            <div className="mt-8">
              <BookButtons />
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              ["Call or Text", PHONE, PHONE_HREF, false],
              ["Website", "taylormadeesthetics.net", WEBSITE, true],
              ["Instagram", "@_taylormadeesthetics_", INSTAGRAM, true],
              ["Facebook", "Taylor Made Esthetics", FACEBOOK, false],
            ].map(([label, value, href, ext], i) => (
              <Reveal key={label as string} delay={i * 80}>
                <a
                  href={href as string}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block rounded-2xl bg-white/85 p-5 card-glow hover-lift"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">{label}</p>
                  <p className="mt-1 font-bold text-blush-800 break-all">{value}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 font-script text-3xl text-gold-shimmer">Creating magical experiences, one celebration at a time!</p>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-blush-900 text-blush-100 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4 text-center">
          <Image src="/images/logo.png" alt="Taylor Made Esthetics logo" width={140} height={93} className="h-16 w-auto brightness-0 invert opacity-90" />
          <p className="font-script text-3xl text-blush-300">Spa Parties</p>
          <p className="text-sm text-blush-200/80 max-w-md">
            Mobile kids spa parties &amp; teepee sleepovers serving Pearland, TX and the greater Houston area.
          </p>
          <p className="text-xs text-blush-200/60">© {new Date().getFullYear()} Taylor Made Esthetics. All rights reserved.</p>
        </div>
      </footer>

      <StickyCTA phoneHref={PHONE_HREF} instagram={INSTAGRAM} />
    </main>
  );
}
