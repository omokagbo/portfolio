import "./style.css";

const profileImage = "https://omokagbo.github.io/portfolio/img/profile.png";

const projects = [
  {
    name: "ALAT by Wema",
    category: "Mobile banking and platform modernization",
    description:
      "Led the move from a legacy Xamarin app to native Swift and UIKit, establishing reusable architecture and engineering standards. Helped pioneer an AI voice-banking feature in West Africa, alongside work across cards, FX, savings, analytics, and personalization.",
    impact: "App stability improved from about 80% to over 99%",
    stack: [
      "Swift",
      "UIKit",
      "Xamarin",
      "C#",
      "AVFoundation",
      "gRPC",
      "ML Kit",
    ],
    color: "green",
    visual: "banking",
  },
  {
    name: "VillageSquare",
    category: "Real-time audio and video",
    description:
      "Built the core audio-room experience with AVFoundation and AVKit, then developed a custom WebSocket layer for resilient live communication.",
    impact: "25% higher engagement",
    stack: ["Swift", "AVFoundation", "AVKit", "WebSocket", "HLS"],
    color: "blue",
    visual: "waveform",
  },
  {
    name: "Publicly",
    category: "Social platform",
    description:
      "Building a rich-media social product, from its original UIKit foundations to a SwiftUI rebuild with a clear, maintainable app architecture.",
    impact: "SwiftUI rebuild in progress",
    stack: ["SwiftUI", "UIKit", "MVVM", "Realm", "Notifications"],
    color: "coral",
    visual: "feed",
  },
  {
    name: "SwiftMoney",
    category: "Digital finance",
    description:
      "Delivered secure KYC flows, payments, credit features, and document processing for a consumer finance app and its business counterpart.",
    impact: "95%+ crash-free sessions",
    stack: ["Swift", "UIKit", "Core Image", "PDFKit", "Payments"],
    color: "green",
    visual: "receipt",
    href: "https://apps.apple.com/ng/app/swift-money/id6443892373",
    linkLabel: "View on the App Store",
  },
  {
    name: "GIGM",
    category: "Mobility and enterprise",
    description:
      "Led a three-engineer team rebuilding the passenger app, and shipped a separate corporate experience for travel, billing, and fleet operations.",
    impact: "98% crash-free sessions",
    stack: ["Swift", "MVVM-C", "Payments", "MapKit", "Realm"],
    color: "blue",
    visual: "route",
    href: "https://apps.apple.com/ng/app/gig-mobility/id1154045195",
    linkLabel: "View passenger app",
  },
];

const roles = [
  {
    company: "ALAT by Wema",
    role: "Lead iOS Developer",
    dates: "Aug 2024 - Present",
    detail:
      "Leading iOS architecture and delivery. Migrated the legacy Xamarin app to native Swift and UIKit, improving app stability from about 80% to over 99%.",
  },
  {
    company: "PubliclyMe",
    role: "Lead Mobile Developer, Contract",
    dates: "Mar 2025 - Present",
    detail:
      "Leading the SwiftUI rebuild, setting architecture and engineering standards, and partnering with product and backend teams.",
  },
  {
    company: "VillageSquare",
    role: "Lead iOS Developer, Contract",
    dates: "Nov 2024 - Mar 2025",
    detail:
      "Owned audio rooms, messaging, live streaming, and the reliability work behind real-time features.",
  },
  {
    company: "PubliclyMe",
    role: "Lead Mobile Developer, Contract",
    dates: "Mar 2024 - Oct 2024",
    detail:
      "Built the iOS app from the ground up and improved launch time by 30% through focused performance work.",
  },
  {
    company: "Pastel",
    role: "Senior iOS Developer",
    dates: "Feb 2023 - Nov 2023",
    detail:
      "Built financial product features across SwiftMoney and SwiftMoney Business, including KYC, payment flows, and document generation.",
  },
  {
    company: "Frontendlabs Ltd",
    role: "Senior iOS Developer, Contract",
    dates: "Jan 2023 - Sep 2023",
    detail:
      "Improved several iOS apps, raised test coverage from 40% to 80%, and mentored engineers.",
  },
  {
    company: "GIGM",
    role: "Lead Mobile Developer, iOS",
    dates: "Dec 2021 - Feb 2023",
    detail:
      "Led a team of three iOS engineers and delivered passenger and corporate mobility applications.",
  },
  {
    company: "Co.Lab",
    role: "iOS Developer",
    dates: "Sep 2021 - Nov 2021",
    detail:
      "Built Axio, a location-based activity partner app, from concept through App Store submission.",
  },
  {
    company: "Atom Technologies",
    role: "Software Engineer",
    dates: "Apr 2019 - Dec 2021",
    detail:
      "Developed and maintained iOS applications, focusing on UIKit, performance, and thoughtful implementation.",
  },
  {
    company: "Auptsoft Technologies",
    role: "Software Engineer",
    dates: "Nov 2018 - Apr 2019",
    detail:
      "Contributed to an inventory management product, including its iOS client and data synchronization.",
  },
];

const projectMarkup = projects
  .map(
    (project) => `
  <article class="project-row project-row--${project.color}">
    <div class="project-art project-art--${project.visual}" aria-hidden="true">
      ${project.visual === "waveform" ? '<div class="waveform"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="art-caption">LIVE AUDIO</span>' : ""}
      ${project.visual === "feed" ? '<div class="feed-window"><span class="feed-dot"></span><span class="feed-line feed-line--long"></span><span class="feed-line"></span><span class="feed-image"></span><span class="feed-line feed-line--short"></span></div><span class="art-caption">SOCIAL / MEDIA</span>' : ""}
      ${project.visual === "receipt" ? '<div class="receipt-window"><span class="receipt-brand">SWIFTMONEY</span><span class="receipt-rule"></span><span class="receipt-line"></span><span class="receipt-line receipt-line--short"></span><span class="receipt-rule"></span><span class="receipt-total"></span></div><span class="art-caption">SECURE FINANCE</span>' : ""}
      ${project.visual === "route" ? '<div class="route-window"><span class="route-pin route-pin--start"></span><span class="route-path"></span><span class="route-pin route-pin--end"></span></div><span class="art-caption">MOBILITY / IOS</span>' : ""}
      ${project.visual === "banking" ? '<div class="banking-window"><div class="banking-head"><span></span><i></i></div><div class="banking-balance"></div><div class="banking-subline"></div><div class="banking-actions"><i></i><i></i><i></i></div><div class="banking-row"></div><div class="banking-row banking-row--short"></div></div><span class="art-caption">ALAT / DIGITAL BANKING</span>' : ""}
    </div>
    <div class="project-copy">
      <p class="eyebrow">${project.category}</p>
      <h3>${project.name}</h3>
      <p class="project-description">${project.description}</p>
      <p class="project-impact">${project.impact}</p>
      <ul class="tag-list" aria-label="Technologies used">${project.stack.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${project.href ? `<a class="text-link" href="${project.href}" target="_blank" rel="noreferrer">${project.linkLabel}<span aria-hidden="true"> ↗</span></a>` : ""}
    </div>
  </article>
`,
  )
  .join("");

const experienceMarkup = roles
  .map(
    (role) => `
  <article class="role-row">
    <div class="role-date">${role.dates}</div>
    <div class="role-main">
      <h3>${role.company}</h3>
      <p class="role-title">${role.role}</p>
      <p class="role-detail">${role.detail}</p>
    </div>
  </article>
`,
  )
  .join("");

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Emmanuel Omokagbo, home"><span class="wordmark-mark">EO</span><span>Emmanuel Omokagbo</span></a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav"><span></span><span></span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="#work">Selected work</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a class="nav-contact" href="mailto:emmanuel.omokagbo@gmail.com">Get in touch</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero page-shell" aria-labelledby="hero-title">
      <div class="hero-copy" data-reveal>
        <p class="availability"><span class="availability-dot"></span> Senior iOS Engineer</p>
        <h1 id="hero-title">Building iOS products for the moments that matter.</h1>
        <p class="hero-intro">I'm Emmanuel, a mobile engineer and technical lead. I turn complex product ideas into dependable, human-feeling experiences for Apple platforms.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#work">Explore selected work</a>
          <a class="button button-secondary" href="mailto:emmanuel.omokagbo@gmail.com">Email me</a>
        </div>
        <p class="hero-footnote">Swift, UIKit, SwiftUI and the systems that make them work.</p>
      </div>
      <div class="hero-portrait" data-reveal>
        <div class="portrait-frame"><img src="${profileImage}" alt="Portrait of Emmanuel Omokagbo" fetchpriority="high" /></div>
        <div class="portrait-note"><span>Engineering since</span><strong>2018</strong><span>From first commit to App Store</span></div>
        <div class="portrait-index" aria-hidden="true">EO / 26</div>
      </div>
      <div class="hero-rule" aria-hidden="true"></div>
      <div class="hero-bottom"><span>Based in Nigeria</span><span>Working across borders</span></div>
    </section>

    <section class="proof-strip" aria-label="Areas of expertise">
      <div class="page-shell proof-inner"><span>Native iOS</span><span>Product architecture</span><span>Real-time media</span><span>Engineering leadership</span></div>
    </section>

    <section class="work-section page-shell section-space" id="work" aria-labelledby="work-title">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Products built to do real work.</h2>
        <p class="section-intro">A selection of mobile products across social, finance, and mobility. My role spans architecture, implementation, and the details that make an app feel dependable.</p>
      </div>
      <div class="project-list">${projectMarkup}</div>
    </section>

    <section class="about-section section-space" id="about" aria-labelledby="about-title">
      <div class="page-shell about-grid">
        <div class="about-heading" data-reveal>
          <p class="eyebrow">How I work</p>
          <h2 id="about-title">Good engineering should feel invisible.</h2>
        </div>
        <div class="about-copy" data-reveal>
          <p class="about-lede">The best mobile work is equal parts clear architecture and care for the person holding the phone.</p>
          <p>I build native iOS products with Swift, UIKit, and SwiftUI, from architecture and migration through release. I also bring hands-on experience across cross-platform mobile tools and Python/FastAPI services, which helps me make practical technology decisions across a product's lifecycle.</p>
          <p>As a lead, I set direction without losing touch with the implementation. I work closely with product, design, and backend teams, and enjoy helping engineers do their best work.</p>
          <div class="education"><span class="eyebrow">Education</span><p>B.Eng. Electrical / Electronic Engineering<br />University of Benin</p></div>
        </div>
      </div>
      <div class="page-shell skills-block" data-reveal>
        <p class="eyebrow">Tools and practice</p>
        <div class="skill-group">
          <h3 class="skills-heading">Core iOS</h3>
          <div class="skills-list"><span>Swift</span><span>SwiftUI</span><span>UIKit</span><span>Combine</span><span>Swift Concurrency</span><span>AVFoundation</span><span>Core Data</span><span>Realm</span><span>URLSession</span><span>WebSocket</span><span>XCTest</span><span>MVVM-C</span><span>Clean Architecture</span><span>Fastlane</span></div>
        </div>
        <div class="skill-group skill-group--secondary">
          <h3 class="skills-heading">Also experienced with</h3>
          <div class="skills-list skills-list--secondary"><span>Flutter</span><span>Dart</span><span>KMM</span><span>Kotlin</span><span>Xamarin</span><span>C#</span><span>Objective-C</span><span>React Native</span><span>JavaScript</span><span>Python</span><span>FastAPI</span></div>
        </div>
      </div>
    </section>

    <section class="experience-section page-shell section-space" id="experience" aria-labelledby="experience-title">
      <div class="section-heading experience-heading" data-reveal>
        <p class="eyebrow">Experience</p>
        <h2 id="experience-title">A steady record of shipping.</h2>
        <p class="section-intro">From hands-on iOS development to leading mobile teams, across early-stage products and established platforms.</p>
      </div>
      <div class="experience-list">${experienceMarkup}</div>
    </section>

    <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <div class="page-shell contact-inner" data-reveal>
        <div><p class="eyebrow">Have a thoughtful product to build?</p><h2 id="contact-title">Let's make it work beautifully.</h2></div>
        <a class="button button-light" href="mailto:emmanuel.omokagbo@gmail.com">emmanuel.omokagbo@gmail.com</a>
      </div>
      <div class="page-shell contact-links"><span>Emmanuel Omokagbo</span><div><a href="https://www.linkedin.com/in/emmanuel-omokagbo/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/omokagbo" target="_blank" rel="noreferrer">GitHub</a></div><span class="copyright">&copy; <span id="year"></span></span></div>
    </section>
  </main>
`;

document.body.classList.add("has-js");
document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation" : "Close navigation",
  );
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  });
});

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll("[data-reveal]")
    .forEach((element) => revealObserver.observe(element));
} else {
  document
    .querySelectorAll("[data-reveal]")
    .forEach((element) => element.classList.add("is-visible"));
}
