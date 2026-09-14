import PhotoGallery from "./PhotoGallery";

type Project = {
  student: string;
  title: string;
  description: string;
  category: string;
  url: string;
};

const projects: Project[] = [
  {
    student: "Shan Leo Yong",
    title: "MusicPalz",
    description: "A private music profile with transparent friendship matches based on taste.",
    category: "Music & community",
    url: "https://music-palz.vercel.app/",
  },
  {
    student: "Naomi Chang",
    title: "IMB Career Finder",
    description: "Internships and early-career roles matched to an Interactive Media and Business background.",
    category: "Careers",
    url: "https://intern-job-helper.vercel.app/",
  },
  {
    student: "Michelle Fung",
    title: "Graduate Salary Tracker",
    description: "Salary estimates that make early-career role comparisons easier to explore.",
    category: "Careers",
    url: "https://graduate-salary-tracker.vercel.app/",
  },
  {
    student: "Melody Xie",
    title: "Flight Finder",
    description: "A flight discovery tool for comparing prepared itineraries across flexible dates.",
    category: "Travel",
    url: "https://smart-flight-discovery.vercel.app/",
  },
  {
    student: "Echo Fan",
    title: "Book Decision Tool",
    description: "A concise, personalized shortlist of books drawn from Open Library.",
    category: "Books",
    url: "https://echo-sunday.vercel.app/",
  },
  {
    student: "Samira",
    title: "FoundIt",
    description: "A calm Socratic guide for beginners debugging Python and JavaScript.",
    category: "Learning",
    url: "https://socratic-debugging-tutor.vercel.app/",
  },
  {
    student: "Yanrou Gao",
    title: "Interactive Resume",
    description: "An evidence-based resume and portfolio that makes projects and credentials explorable.",
    category: "Portfolio",
    url: "https://interactive-resume-eight-sigma.vercel.app/#certificates",
  },
  {
    student: "Danaya",
    title: "Burgas Food Match",
    description: "Restaurant and dish matches in Burgas based on a visitor’s food profile.",
    category: "Food & place",
    url: "https://burgas-food-match.vercel.app/",
  },
  {
    student: "Sicheng Song",
    title: "FORM / ARCHIVE",
    description: "A bilingual archive of selected Yohji Yamamoto and Rei Kawakubo collections.",
    category: "Fashion",
    url: "https://fashion-archive-website.vercel.app/?_vercel_share=YO2NaBZbqLSJciUSNPoppSXhNXNCYGr4",
  },
  {
    student: "Matthew",
    title: "Daily Chinese Read",
    description: "A focused news reader designed for advanced Mandarin learners.",
    category: "Language learning",
    url: "https://chinese-news-eta.vercel.app/",
  },
  {
    student: "Jae Huang",
    title: "Soundcheck",
    description: "A practical workspace for preparing for concerts.",
    category: "Live music",
    url: "https://soundcheck-mvp.vercel.app/",
  },
  {
    student: "Elena Yan",
    title: "Flight Price Explorer",
    description: "Live flight offers organized by route, date, cabin, travelers, and stops.",
    category: "Travel",
    url: "https://flight-price-explorer.vercel.app/",
  },
  {
    student: "Theo Wu",
    title: "Precimac 精点",
    description: "Exact nutrition targets turned into meal plans and copyable grocery lists.",
    category: "Nutrition",
    url: "https://precimac.vercel.app/",
  },
  {
    student: "Lefei Yu",
    title: "Lefei TOUR",
    description: "Curated journeys and partner trips, selected and arranged with care.",
    category: "Travel",
    url: "https://lefei-tour.vercel.app/",
  },
  {
    student: "Nicholas Linz",
    title: "The Acquisition Edit",
    description: "An editorial notebook for tracking independent film acquisitions.",
    category: "Film",
    url: "https://indie-film-acquisition-tracker.vercel.app/",
  },
  {
    student: "Sara",
    title: "Ad2Ad",
    description: "A comparison tool for seeing how one product is advertised across cultural markets.",
    category: "Advertising",
    url: "https://a-dcomp.vercel.app/",
  },
  {
    student: "Mailys Oka",
    title: "Mindful Fibers",
    description: "A transparent, evidence-based assessment of clothing product quality.",
    category: "Consumer decisions",
    url: "https://perso-projectt.vercel.app/index.html",
  },
  {
    student: "Bo Gu",
    title: "PropTech Brief",
    description: "A focused briefing tool for researching property technology.",
    category: "Research",
    url: "https://proptech-brief.vercel.app/",
  },
];

const buildLoop = [
  "Define",
  "Describe",
  "Inspect",
  "Debug",
  "Commit",
  "Deploy",
  "Iterate",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="From Zero to Agent home">
          <span className="wordmark-mark" aria-hidden="true">0/A</span>
          <span>From Zero to Agent</span>
        </a>
        <nav aria-label="Page sections">
          <a href="#weekend">The weekend</a>
          <a href="#projects">Student builds</a>
          <a href="#people">People</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">NYU Shanghai · Creative + Innovation · AI+</p>
          <h1>
            From Zero
            <span>to Agent</span>
          </h1>
          <p className="hero-deck">
            A two-day intensive workshop where students learned to build, test, and
            publish products with coding agents.
          </p>
          <div className="hero-meta" aria-label="Workshop facts">
            <span>September 12–13, 2026</span>
            <span>NYU Shanghai</span>
          </div>
          <a className="primary-link" href="#projects">
            Explore 18 student builds <span aria-hidden="true">↘</span>
          </a>
        </div>

        <PhotoGallery />

        <div className="hero-numbers" aria-label="Workshop summary">
          <div><strong>02</strong><span>days</span></div>
          <div><strong>24</strong><span>in-person participants</span></div>
          <div><strong>60+</strong><span>interested students</span></div>
          <div><strong>05</strong><span>organizers</span></div>
        </div>
      </section>

      <section className="initiative section-pad" aria-labelledby="initiative-title">
        <p className="section-index">01 · Context</p>
        <div>
          <p className="eyebrow">Creative + Innovation’s AI+ initiative</p>
          <h2 id="initiative-title">A shared home for learning, building, and experimenting with AI</h2>
        </div>
        <div className="initiative-copy">
          <p>
            AI+ brings together courses, workshops, and hands-on activities at the
            intersection of artificial intelligence and creative practice.
          </p>
          <p>
            Students approach AI as both a practical tool and a force reshaping
            creativity, trust, business, entrepreneurship, and organizational life.
          </p>
        </div>
      </section>

      <section className="finish-line">
        <div className="finish-line-label">The finish line</div>
        <blockquote>
          Ship one focused, working product—and be ready to show what it does.
        </blockquote>
        <p>
          By Sunday afternoon, students had scoped a real use case, built its core
          experience with coding agents, tested it with peers, deployed it to a live
          URL, and prepared a short demo. The eighteen projects below are the record
          of that work.
        </p>
      </section>

      <section className="weekend section-pad" id="weekend" aria-labelledby="weekend-title">
        <div className="section-heading">
          <p className="section-index">02 · The weekend</p>
          <h2 id="weekend-title">Learn the loop. Build twice. Ship something real.</h2>
          <p>
            The first day created a common method. The second asked each student to
            use it on a problem they cared about.
          </p>
        </div>

        <div className="day-grid">
          <article className="day day-one">
            <div className="day-topline">
              <span>Day 1</span>
              <span>See + practice</span>
            </div>
            <h3>A complete build loop, together</h3>
            <p>
              Students moved from language-model basics and agent feedback loops into
              product briefs, acceptance criteria, debugging, Git, and deployment.
              Shared examples included an AI Research Studio and a News Radar + Web
              Explorer, built one working layer at a time.
            </p>
            <ol>
              <li><span>Morning</span>AI foundations, agents, product thinking, and debugging</li>
              <li><span>Afternoon</span>Guided build, structured outputs, tests, and live deployment</li>
              <li><span>Close</span>Partner demo with one observed failure and one verified fix</li>
            </ol>
          </article>

          <article className="day day-two">
            <div className="day-topline">
              <span>Day 2</span>
              <span>Transfer + ship</span>
            </div>
            <h3>An independent product by 5 PM</h3>
            <p>
              Each student narrowed an idea to one user, one recurring problem, a
              manageable input, and a visible result. Timed milestones protected the
              core workflow before user testing, documentation, and final demos.
            </p>
            <ol>
              <li><span>08:25</span>Scope approved</li>
              <li><span>10:15</span>Core function working</li>
              <li><span>14:10</span>Live URL</li>
              <li><span>16:10</span>README and demo ready</li>
            </ol>
          </article>
        </div>
      </section>

      <section className="loop" aria-labelledby="loop-title">
        <div className="loop-heading">
          <p className="eyebrow">The method students can repeat</p>
          <h2 id="loop-title">The build loop</h2>
        </div>
        <ol>
          {buildLoop.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="loop-note">
          The agent accelerates implementation. The student remains responsible for
          purpose, evidence, boundaries, and quality.
        </p>
      </section>

      <section className="principles section-pad" aria-labelledby="principles-title">
        <div className="section-heading compact">
          <p className="section-index">03 · Working principles</p>
          <h2 id="principles-title">What counted as progress</h2>
        </div>
        <div className="principle-list">
          <article><span>01</span><h3>Scope</h3><p>Name one user, one problem, one input, and one visible result.</p></article>
          <article><span>02</span><h3>Direct</h3><p>Give the coding agent one meaningful increment with clear constraints.</p></article>
          <article><span>03</span><h3>Verify</h3><p>Use observable behavior, acceptance criteria, and repeatable tests.</p></article>
          <article><span>04</span><h3>Ship</h3><p>Save a stable checkpoint, deploy it, test the live link, and explain the limits.</p></article>
        </div>
      </section>

      <section className="projects section-pad" id="projects" aria-labelledby="projects-title">
        <div className="projects-intro">
          <div>
            <p className="section-index">04 · Student builds</p>
            <h2 id="projects-title">Eighteen ideas, live by Sunday</h2>
          </div>
          <p>
            The gallery ranges from career and travel tools to cultural archives,
            learning companions, and personal decision aids. Each card opens the
            student’s original live project.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.url}>
              <a
                className="project-card-overlay"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} by ${project.student}`}
              />
              <div className="project-preview" aria-hidden="true">
                <div className="project-preview-fallback">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.title}</strong>
                </div>
                <iframe
                  src={project.url}
                  title={`${project.title} live homepage preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  tabIndex={-1}
                />
              </div>
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="student-name">{project.student}</p>
                <p>{project.description}</p>
                <span className="project-card-link">
                  Open live project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="people section-pad" id="people" aria-labelledby="people-title">
        <div className="people-lead">
          <p className="section-index">05 · People</p>
          <h2 id="people-title">Organized by</h2>
        </div>
        <ul className="organizer-list">
          <li><span>01</span>Helena Rong</li>
          <li><span>02</span>Gabrielle Chou</li>
          <li><span>03</span>Nil Larom</li>
          <li><span>04</span>Espoir Lumbu</li>
          <li><span>05</span>Melody Xie</li>
        </ul>
        <p className="people-note">
          We are grateful for the support of C+I and NYU Shanghai Arts and Sciences.
        </p>
      </section>

      <footer>
        <div className="footer-title">From Zero to Agent</div>
        <p>NYU Shanghai · September 12–13, 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
