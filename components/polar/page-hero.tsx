import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
};

export function PageHero({ eyebrow, title, text, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden bg-brand-primary-dark">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0B1E2D_0%,rgba(11,30,45,0.55)_42%,rgba(11,30,45,0.15)_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/80">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-5xl text-white md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{text}</p>
      </div>
    </section>
  );
}
