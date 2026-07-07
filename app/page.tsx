import Image from "next/image";

const PHONE = "346-219-3881";
const PHONE_HREF = "tel:+13462193881";
const SMS_HREF = "sms:+13462193881";
const INSTAGRAM = "https://www.instagram.com/_taylormadeesthetics_";
const FACEBOOK = "https://www.facebook.com/search/top?q=taylor%20made%20esthetics";
const WEBSITE = "https://taylormadeesthetics.net";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`sparkle ${className}`}
    >
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
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-blush-800 tracking-tight">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-4" aria-hidden="true">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
        <Heart className="w-4 h-4 text-blush-400" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
      </div>
      {subtitle && <p className="mt-4 text-lg text-blush-900/70">{subtitle}</p>}
    </div>
  );
}

function BookButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={PHONE_HREF}
        className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-blush-600 to-blush-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blush-500/30 transition hover:scale-105 hover:shadow-blush-500/50"
      >
        📞 Call or Text {PHONE}
      </a>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full sm:w-auto text-center rounded-full px-8 py-4 text-lg font-bold transition hover:scale-105 ${
          light
            ? "bg-white text-blush-700 shadow-lg"
            : "gold-border text-gold-700 bg-cream shadow-md"
        }`}
      >
        💌 DM us on Instagram
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-blush-200/60">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Taylor Made Esthetics logo"
              width={110}
              height={73}
              className="h-12 w-auto"
              priority
            />
            <span className="font-script text-2xl text-blush-600 hidden sm:inline">
              Spa Parties
            </span>
          </a>
          <nav aria-label="Main" className="hidden md:flex items-center gap-6 text-sm font-semibold text-blush-800">
            <a href="#parties" className="hover:text-blush-500 transition">The Parties</a>
            <a href="#included" className="hover:text-blush-500 transition">What&apos;s Included</a>
            <a href="#addons" className="hover:text-blush-500 transition">Add-Ons</a>
            <a href="#contact" className="hover:text-blush-500 transition">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="rounded-full bg-gradient-to-r from-blush-600 to-blush-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blush-500/30 transition hover:scale-105"
          >
            Book Now ♥
          </a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="top" className="bg-hero relative">
        <Sparkle className="absolute top-16 left-[6%] w-6 h-6 text-gold-400" />
        <Sparkle className="absolute top-40 right-[8%] w-8 h-8 text-blush-300 [animation-delay:0.8s]" />
        <Sparkle className="absolute bottom-24 left-[12%] w-5 h-5 text-blush-400 [animation-delay:1.4s]" />
        <Sparkle className="absolute top-72 left-[45%] w-4 h-4 text-gold-300 [animation-delay:2s]" />
        <Sparkle className="absolute bottom-40 right-[15%] w-6 h-6 text-gold-400 [animation-delay:0.4s]" />

        <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 lg:pt-16 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex flex-col items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Taylor Made Esthetics"
                width={340}
                height={227}
                className="w-64 sm:w-80 h-auto"
                priority
              />
              <span className="font-script text-5xl sm:text-6xl text-pink-shimmer -mt-3 pb-2 px-6">
                Spa Parties
              </span>
            </div>

            <p className="inline-block rounded-full bg-white/80 border border-gold-400/60 px-5 py-1.5 text-sm font-bold tracking-widest uppercase text-gold-600 mb-5 shadow-sm">
              ✨ We bring the spa to you! ✨
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-tight text-blush-900">
              The Ultimate{" "}
              <span className="text-pink-shimmer">Spa Party</span>{" "}
              Experience for Girls in{" "}
              <span className="text-gold-shimmer">Pearland, TX</span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-blush-900/75 max-w-xl mx-auto lg:mx-0">
              Facials, sparkly nails, twinkle-light teepee sleepovers & goodie bags —
              perfect for birthdays, sleepovers and girls&apos; days. You celebrate,{" "}
              <strong>we take care of the rest!</strong>
            </p>

            <div className="mt-8">
              <BookButtons />
            </div>

            <p className="mt-6 font-script text-2xl text-blush-500">
              Relax. Pamper. Celebrate. Make memories that last!
            </p>
          </div>

          <div className="relative max-w-lg mx-auto w-full">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blush-300/40 via-gold-300/30 to-blush-200/40 rounded-[2.5rem] blur-2xl" aria-hidden="true" />
            <div className="relative floaty">
              <Image
                src="/images/spa-party-girls.png"
                alt="Girls in pink robes and headbands smiling at a spa party table"
                width={640}
                height={800}
                className="rounded-[2rem] card-glow w-full h-auto rotate-1"
                priority
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-10 w-40 sm:w-52 rotate-[-6deg]">
                <Image
                  src="/images/teepee-right.png"
                  alt="Pink teepee sleepover setup with twinkle lights"
                  width={410}
                  height={320}
                  className="rounded-2xl border-4 border-white shadow-xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-5 -right-3 sm:-right-8 bg-white rounded-full px-5 py-3 shadow-lg rotate-6 border border-blush-200">
                <p className="text-sm font-bold text-blush-600 flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-gold-500" /> Perfect for all ages!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PERFECT FOR STRIP ============ */}
      <section aria-label="Perfect for" className="bg-gradient-to-r from-blush-600 via-blush-500 to-blush-600 py-5">
        <ul className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white font-bold tracking-wide text-sm sm:text-base">
          <li>🎂 Birthdays</li>
          <li>🌙 Sleepovers</li>
          <li>💖 Girls&apos; Day</li>
          <li>🎉 Special Occasions</li>
          <li>✨ Just Because!</li>
        </ul>
      </section>

      {/* ============ THE PARTIES ============ */}
      <section id="parties" className="py-20 relative">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            script="pick your magic"
            title="The Parties"
            subtitle="Every celebration is Taylor-made just for your girl. Mix, match & make it hers!"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <article className="rounded-3xl bg-white card-glow overflow-hidden flex flex-col transition hover:-translate-y-2 duration-300">
              <div className="relative">
                <Image
                  src="/images/facial-party.png"
                  alt="Girls in pink robes enjoying facials at a spa party table"
                  width={325}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-blush-600 text-white text-xs font-bold px-4 py-1.5 shadow">
                  FACIAL PARTY FUN
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-bold text-blush-800">Glow Girl Facial Party</h3>
                <p className="mt-3 text-blush-900/75 flex-1">
                  Robes, headbands & light-up mirrors at every seat! Guests are pampered with
                  kid-friendly facials, masks and skincare fun — led by a licensed esthetician
                  who makes every girl feel like a VIP.
                </p>
                <p className="mt-4 text-sm font-bold text-gold-600">Ideal for ages 5 to teens ♥</p>
              </div>
            </article>

            <article className="rounded-3xl bg-white card-glow overflow-hidden flex flex-col transition hover:-translate-y-2 duration-300 md:-mt-6">
              <div className="relative">
                <Image
                  src="/images/teepee-left.png"
                  alt="Pink teepee tents with twinkle lights, pillows and spa trays for a sleepover"
                  width={325}
                  height={290}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-blush-600 text-white text-xs font-bold px-4 py-1.5 shadow">
                  MOST LOVED ✨
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-bold text-blush-800">Teepee Sleepover Magic</h3>
                <p className="mt-3 text-blush-900/75 flex-1">
                  Dreamy twinkle-light teepees with cozy beds, plush pillows and personal spa
                  trays for each guest. The sleepover of their dreams appears in your living
                  room — and disappears when the fun is done!
                </p>
                <p className="mt-4 text-sm font-bold text-gold-600">Setup, styling & takedown included ♥</p>
              </div>
            </article>

            <article className="rounded-3xl bg-white card-glow overflow-hidden flex flex-col transition hover:-translate-y-2 duration-300">
              <div className="relative">
                <Image
                  src="/images/nails.png"
                  alt="Sparkly pink and white manicured nails beside a pink flower"
                  width={370}
                  height={163}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-blush-600 text-white text-xs font-bold px-4 py-1.5 shadow">
                  NAILS & GLAM
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-bold text-blush-800">Nails & Spa Glam</h3>
                <p className="mt-3 text-blush-900/75 flex-1">
                  Manicures, pedicures and sparkle for days! Add glam nail services for any age
                  to your party, from pretty polish for the littles to full sets for teens
                  &amp; moms.
                </p>
                <p className="mt-4 text-sm font-bold text-gold-600">All ages welcome ♥</p>
              </div>
            </article>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-blush-900/75 max-w-2xl mx-auto">
              Every party is customized to your guest count, ages & theme —{" "}
              <strong>call or text for your personalized party quote!</strong>
            </p>
            <div className="mt-6">
              <a
                href={SMS_HREF}
                className="inline-block rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-gold-400/40 transition hover:scale-105"
              >
                💬 Text {PHONE} for a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section id="included" className="bg-section-pink py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            script="stress-free for moms"
            title="What's Included"
            subtitle="We handle everything — you enjoy the memories!"
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4">
              {[
                ["🚗", "Delivery, setup & takedown", "We arrive, create the magic, and pack it all away."],
                ["🧖‍♀️", "All spa supplies & equipment", "Robes, headbands, mirrors, bowls, skincare & more."],
                ["🎀", "Themed décor & styling", "Pink, gold & totally photo-worthy — styled to your theme."],
                ["💝", "Customizable experience", "Tailored to your guest of honor, her age & her besties."],
                ["🥂", "Hassle-free for parents", "You relax and snap pictures. We take care of the rest!"],
              ].map(([emoji, title, desc]) => (
                <li key={title} className="flex gap-4 rounded-2xl bg-white/80 p-5 card-glow">
                  <span className="text-3xl" aria-hidden="true">{emoji}</span>
                  <div>
                    <h3 className="font-bold text-blush-800 text-lg">{title}</h3>
                    <p className="text-blush-900/70">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative">
              <div className="gold-border rounded-[2rem] p-8 sm:p-10 text-center bg-cream shadow-xl">
                <Crown className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                <h3 className="font-display text-3xl font-bold text-blush-800">
                  Goodie Bags Included!
                </h3>
                <p className="font-script text-3xl text-blush-500 mt-2">
                  Every guest leaves feeling special &amp; pampered!
                </p>
                <p className="mt-4 text-blush-900/75">
                  Each guest takes home a sweet spa goodie bag filled with pampering treats —
                  the perfect ending to a magical day.
                </p>
                <div className="mt-6 flex justify-center gap-2 text-2xl" aria-hidden="true">
                  💗 🎁 ✨ 💅 🌸
                </div>
              </div>
              <Sparkle className="absolute -top-4 -right-3 w-8 h-8 text-gold-400" />
              <Sparkle className="absolute -bottom-4 -left-3 w-6 h-6 text-blush-400 [animation-delay:1s]" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ ADD-ONS ============ */}
      <section id="addons" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            script="make it extra special"
            title="Add-On Services"
            subtitle="Glam up any party with these à la carte extras — priced separately so you can build the perfect celebration."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facial add-ons */}
            <div className="rounded-3xl bg-white card-glow p-7">
              <h3 className="font-display text-2xl font-bold text-blush-800 flex items-center gap-2">
                <span aria-hidden="true">🧖‍♀️</span> Facial Add-Ons
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

            {/* Nail services */}
            <div className="rounded-3xl bg-white card-glow p-7">
              <h3 className="font-display text-2xl font-bold text-blush-800 flex items-center gap-2">
                <span aria-hidden="true">💅</span> Nail Services{" "}
                <span className="text-sm font-body font-semibold text-gold-600">(all ages)</span>
              </h3>
              <p className="mt-4 text-xs font-bold tracking-widest uppercase text-gold-600">
                Acrylic Nail Sets
              </p>
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
              <p className="mt-5 text-xs font-bold tracking-widest uppercase text-gold-600">
                Polish Services
              </p>
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

            {/* Popular extras */}
            <div className="rounded-3xl bg-white card-glow p-7 md:col-span-2 lg:col-span-1">
              <h3 className="font-display text-2xl font-bold text-blush-800 flex items-center gap-2">
                <span aria-hidden="true">🎈</span> Popular Extras
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
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-gradient-to-r from-blush-600 via-blush-500 to-blush-600 py-16 relative overflow-hidden">
        <Sparkle className="absolute top-6 left-[10%] w-6 h-6 text-white/60" />
        <Sparkle className="absolute bottom-8 right-[12%] w-8 h-8 text-white/50 [animation-delay:1.2s]" />
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            You Celebrate — We Take Care of the Rest!
          </h2>
          <div className="mt-10 grid sm:grid-cols-4 gap-8">
            {[
              ["1", "💌", "Book your date", "Call, text or DM us your date & party details"],
              ["2", "🚗", "We come to you", "We arrive and set up all the spa party magic"],
              ["3", "👑", "Girls get pampered", "Facials, nails, giggles & unforgettable memories"],
              ["4", "✨", "We handle cleanup", "We pack everything away — you just enjoy!"],
            ].map(([num, emoji, title, desc]) => (
              <div key={num} className="text-white">
                <div className="mx-auto w-16 h-16 rounded-full bg-white/15 border-2 border-white/50 flex items-center justify-center text-3xl">
                  <span aria-hidden="true">{emoji}</span>
                </div>
                <p className="mt-3 font-script text-2xl text-white/90">step {num}</p>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="mt-1 text-white/85 text-sm max-w-[16rem] mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT / FINAL CTA ============ */}
      <section id="contact" className="bg-hero py-20 relative">
        <Sparkle className="absolute top-10 right-[10%] w-7 h-7 text-gold-400" />
        <Sparkle className="absolute bottom-16 left-[8%] w-5 h-5 text-blush-400 [animation-delay:0.7s]" />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-script text-4xl sm:text-5xl text-blush-500">
            Let&apos;s make your next celebration unforgettable!
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-blush-900 mt-3">
            Book Your Party Today!
          </h2>
          <p className="mt-4 text-lg text-blush-900/75">
            Serving <strong>Pearland, TX &amp; surrounding Houston areas</strong> — we come to you!
          </p>

          <div className="mt-8">
            <BookButtons />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <a href={PHONE_HREF} className="rounded-2xl bg-white/85 p-5 card-glow transition hover:-translate-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Call or Text</p>
              <p className="mt-1 font-bold text-blush-800">{PHONE}</p>
            </a>
            <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/85 p-5 card-glow transition hover:-translate-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Website</p>
              <p className="mt-1 font-bold text-blush-800">taylormadeesthetics.net</p>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/85 p-5 card-glow transition hover:-translate-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Instagram</p>
              <p className="mt-1 font-bold text-blush-800">@_taylormadeesthetics_</p>
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/85 p-5 card-glow transition hover:-translate-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Facebook</p>
              <p className="mt-1 font-bold text-blush-800">Taylor Made Esthetics</p>
            </a>
          </div>

          <p className="mt-12 font-script text-3xl text-gold-shimmer">
            Creating magical experiences, one celebration at a time!
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-blush-900 text-blush-100 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4 text-center">
          <Image
            src="/images/logo.png"
            alt="Taylor Made Esthetics logo"
            width={140}
            height={93}
            className="h-16 w-auto brightness-0 invert opacity-90"
          />
          <p className="font-script text-3xl text-blush-300">Spa Parties</p>
          <p className="text-sm text-blush-200/80 max-w-md">
            Mobile kids spa parties &amp; teepee sleepovers serving Pearland, TX and the
            greater Houston area.
          </p>
          <p className="text-xs text-blush-200/60">
            © {new Date().getFullYear()} Taylor Made Esthetics. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
