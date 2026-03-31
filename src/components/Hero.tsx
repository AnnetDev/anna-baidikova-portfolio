import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function Hero() {
  return (
    <section className="hero container" id="about">
      <AnimateIn type="fade-down" delay={0.2} duration={1.2}>
        <div className="hero__text-container">
          <h1 className="hero__title">Anna Baidikova</h1>
          <p className="hero__intro">
            Hi 👋🏻, I&apos;m Anna — a Frontend &amp; Web Developer. I love turning ideas into user-friendly, responsive
            websites using HTML, CSS/SCSS, JavaScript, React, and WordPress.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn type="zoom-in" delay={0.3} duration={1.2}>
        <Image
          className="hero__main-image"
          src="/images/hero/hero-image-mobile@1x.png"
          alt="I'm Anna, I'm Frontend Developer. Nice to meet you!"
          width={280}
          height={279}
          sizes="(min-width: 1200px) 400px, (min-width: 768px) 350px, 280px"
          priority
        />
      </AnimateIn>
    </section>
  );
}
