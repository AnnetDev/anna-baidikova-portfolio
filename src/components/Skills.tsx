import AnimateIn from './AnimateIn';

export default function Skills() {
  return (
    <section className="skills container" id="skills">
      <h2>Tech Stack</h2>
      <ul className="skills__list">
        <li className="skills__list-item">
          <AnimateIn type="fade-in">
            <p className="visually-hidden">HTML5</p>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M128 96L162.9 491.8L319.5 544L477.1 491.8L512 96L128 96zM436.2 223.9L252.4 223.9L256.5 273.3L432.1 273.3L418.5 421.7L320.6 448.7L320.6 449L319.5 449L220.8 421.7L214.8 345.9L262.5 345.9L266 384L319.5 398.5L373.2 384L379.2 321.8L212.3 321.8L199.5 176.2L440.6 176.2L436.2 223.9z" />
              </svg>
              <figcaption>HTML5</figcaption>
            </figure>
          </AnimateIn>
        </li>
        <li className="skills__list-item">
          <AnimateIn type="fade-in" delay={0.1}>
            <p className="visually-hidden">CSS3</p>
            <figure>
              <svg className="skills__css" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M128 96L162.9 491.8L320 544L477.1 491.8L512 96L128 96zM441.1 176L436.3 223.3L321 272.6L320.7 272.7L432.2 272.7L419.4 419.3L321.2 448L222.4 418.8L216 344.9L264.9 344.9L268.1 383.2L320.7 396.5L375.4 381.1L379.1 319.5L212.8 319L212.8 318.9L212.6 319L209 272.7L321.1 226L327.6 223.3L204.7 223.3L198.9 176L441.1 176z" />
              </svg>
              <p className="visually-hidden">Sass</p>
              <svg className="skills__scss" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" style={{fill:'#cd6799'}} />
              </svg>
              <figcaption>CSS &amp; Sass</figcaption>
            </figure>
          </AnimateIn>
        </li>
        <li className="skills__list-item">
          <AnimateIn type="fade-in" delay={0.2}>
            <p className="visually-hidden">JavaScript</p>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M96 96L96 544L544 544L544 96L96 96zM339.8 445.4C339.8 489 314.2 508.9 276.9 508.9C243.2 508.9 223.7 491.5 213.7 470.4L248 449.7C254.6 461.4 260.6 471.3 275.1 471.3C288.9 471.3 297.7 465.9 297.7 444.8L297.7 301.7L339.8 301.7L339.8 445.4zM439.4 508.9C400.3 508.9 375 490.3 362.7 465.9L397 446.1C406 460.8 417.8 471.7 438.5 471.7C455.9 471.7 467.1 463 467.1 450.9C467.1 436.5 455.7 431.4 436.4 422.9L425.9 418.4C395.5 405.5 375.4 389.2 375.4 354.9C375.4 323.3 399.5 299.3 437 299.3C463.8 299.3 483 308.6 496.8 333L464 354C456.8 341.1 449 336 436.9 336C424.6 336 416.8 343.8 416.8 354C416.8 366.6 424.6 371.7 442.7 379.6L453.2 384.1C489 399.4 509.1 415.1 509.1 450.3C509.1 488.1 479.3 508.9 439.4 508.9z" />
              </svg>
              <figcaption>JavaScript</figcaption>
            </figure>
          </AnimateIn>
        </li>
        <li className="skills__list-item">
          <AnimateIn type="fade-in" delay={0.3}>
            <p className="visually-hidden">React</p>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M482.2 241.2C476.8 239.4 471.4 237.7 466 236.1C466.9 232.4 467.7 228.7 468.5 225C480.8 165.4 472.7 117.5 445.4 101.7C419.1 86.6 376.2 102.3 332.8 140.1C328.5 143.8 324.3 147.7 320.3 151.6C317.6 149 314.8 146.4 312 143.9C266.5 103.5 220.9 86.5 193.6 102.4C167.4 117.6 159.6 162.7 170.6 219.1C171.7 224.7 172.9 230.2 174.3 235.8C167.9 237.6 161.6 239.6 155.7 241.7C102.3 260.2 64 289.4 64 319.6C64 350.8 104.8 382.1 160.3 401.1C164.8 402.6 169.3 404.1 173.9 405.4C172.4 411.4 171.1 417.3 169.9 423.4C159.4 478.9 167.6 522.9 193.8 538C220.8 553.6 266.2 537.6 310.4 498.9C313.9 495.8 317.4 492.6 320.9 489.2C325.3 493.5 329.9 497.6 334.5 501.6C377.3 538.4 419.6 553.3 445.7 538.2C472.7 522.6 481.5 475.3 470.1 417.7C469.2 413.3 468.2 408.8 467.1 404.2C470.3 403.3 473.4 402.3 476.5 401.3C534.2 382.2 576 351.3 576 319.6C576 289.3 536.6 259.9 482.2 241.2zM320 365.8C345.3 365.8 365.8 345.3 365.8 320C365.8 294.7 345.3 274.2 320 274.2C294.7 274.2 274.2 294.7 274.2 320C274.2 345.3 294.7 365.8 320 365.8z" />
              </svg>
              <figcaption>React</figcaption>
            </figure>
          </AnimateIn>
        </li>
      </ul>

      <ul className="skills__list-text-only">
        {['Semantic markup', 'Responsive & Adaptive interfaces', 'Accessibility (a11y)', 'Performance Optimization', 'Modern Animations', 'Cross-browser compatibility'].map((skill, i) => (
          <AnimateIn key={skill} type="fade-in" delay={i * 0.05} as="li">
            <li>{skill}</li>
          </AnimateIn>
        ))}
      </ul>

      <h2 className="skills__tools-heading">Workflow &amp; Tools</h2>
      <ul className="skills__tools-list">
        {['Git / GitHub', 'NPM', 'Vite', 'Webpack', 'Gulp', 'UI libraries', 'Figma', 'Agile / Scrum', 'BEM', 'WordPress'].map((tool, i) => (
          <AnimateIn key={tool} type="fade-in" delay={i * 0.05}>
            <li className="skills__tools-list-item">{tool}</li>
          </AnimateIn>
        ))}
      </ul>

      <h2 className="skills__soft-heading">Soft Skills</h2>
      <ul className="skills__soft-list">
        {['Communication', 'Teamwork', 'Adaptability', 'Attention to detail', 'Empathy for users', 'Creative problem solving', 'Curiosity'].map((skill, i) => (
          <AnimateIn key={skill} type="fade-in" delay={i * 0.05}>
            <li className="skills__soft-list-item">{skill}</li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  );
}
