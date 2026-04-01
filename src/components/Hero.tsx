import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function Hero() {
  return (
    <section className="hero container" id="about">
      <AnimateIn type="fade-down" delay={0.2} duration={1.2}>
        <div className="hero__text-container">
          <h1 className="hero__title">Anna Baidikova</h1>
          <p className="hero__role">Frontend &amp; Fullstack Developer</p>
          <p className="hero__intro">
            3+ years building responsive, accessible, and high-quality web apps with React, TypeScript, Next.js,
            and modern CSS — plus backend experience with Node.js, Express, REST APIs, and MongoDB.
            Recently completed a Fullstack Internship at Gaddr (Stockholm), shipping production features:
            2FA, OAuth integrations, and real-time WebSocket systems.
          </p>
          <a href="#projects" className="hero__cta-btn">View Projects</a>
        </div>
      </AnimateIn>

      <AnimateIn type="zoom-in" delay={0.3} duration={1.2}>
        <Image
          className="hero__main-image"
          src="/images/hero/hero-image-mobile@1x.png"
          alt="Anna Baidikova — Frontend & Fullstack Developer"
          width={280}
          height={279}
          sizes="(min-width: 1200px) 400px, (min-width: 768px) 350px, 280px"
          priority
        />
      </AnimateIn>
    </section>
  );
}
