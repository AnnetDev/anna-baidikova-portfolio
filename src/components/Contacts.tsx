import AnimateIn from './AnimateIn';

export default function Contacts() {
  return (
    <section className="contacts container" id="contacts">
      <h2 className="contacts__heading">Let&apos;s keep in touch</h2>
      <p className="contacts__description">Always open for a chat — from brainstorming projects to casual networking</p>
      <ul className="contacts__list">
        <AnimateIn type="zoom-in" delay={0.1}>
          <li className="contacts__list-email">
            <a className="contacts__list-email-link" href="mailto:annabaidikova92@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
              </svg>
              <p>Send an e-mail</p>
            </a>
          </li>
        </AnimateIn>
        <AnimateIn type="zoom-in" delay={0.3}>
          <li className="contacts__list-github">
            <a className="contacts__list-github-link" href="https://github.com/AnnetDev/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z" />
              </svg>
              <p>My GitHub</p>
            </a>
          </li>
        </AnimateIn>
        <AnimateIn type="zoom-in" delay={0.5}>
          <li className="contacts__list-linkedin">
            <a className="contacts__list-linkedin-link" href="https://www.linkedin.com/in/anna-baidikova/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
              </svg>
              <p>My LinkedIn</p>
            </a>
          </li>
        </AnimateIn>
      </ul>

      <div className="contacts__extra">
        <h3 className="contacts__extra-heading">🙋🏼‍♀️ When I&apos;m not coding, you can find me:</h3>
        <ul className="contacts__extra-list">
          {[
            { icon: '🦸🏼‍♀️', text: 'Balancing family time with cleaning marathons' },
            { icon: '🏃🏼‍♀️', text: 'Active at the gym or sometimes jogging, sometimes just chasing after my kid' },
            { icon: '🏁', text: 'Watching Formula 1 races' },
            { icon: '🤓', text: 'Exploring new technologies, and occasionally browsing online catalogs' },
            { icon: '🎸', text: 'Listening to rock music' },
          ].map((item, i) => (
            <AnimateIn key={i} type="fade-right" delay={i * 0.1}>
              <li className="contacts__extra-item">
                <span className="contacts__extra-item-icon">{item.icon}</span>
                {item.text}
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
