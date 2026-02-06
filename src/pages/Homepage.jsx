import { Link } from "react-router-dom";
import SubtitleH2 from "../components/SubtitleH2";

const features = [
  {
    title: "Find your next game",
    description:
      "Browse the catalog and explore new releases, genres, and the top-rated titles curated for you.",
  },
  {
    title: "Save to your dashboard",
    description:
      "Add the games you want to play so you can keep a personal, always-available backlog.",
  },
  {
    title: "Create reviews",
    description:
      "Share your thoughts once you finish a game and build a profile that reflects your taste.",
  },
];

const steps = [
  {
    label: "Discover",
    detail: "Search, filter, and open any game details.",
  },
  {
    label: "Track",
    detail: "Save favorites to your dashboard with one click.",
  },
  {
    label: "Review",
    detail: "Write a review so friends know what to play next.",
  },
];

function Homepage() {
  return (
    <div className="homepage-container">
      <section className="homepage-hero">
        <div className="homepage-hero-content">
          <p className="homepage-eyebrow">Beat More Games</p>
          <h1>Find, save, and review games you love.</h1>
          <p className="homepage-lead">
            Beat More Games is the hub for discovering new titles, organizing
            your personal dashboard, and publishing reviews once you have
            completed the adventure.
          </p>
          <div className="homepage-actions">
            <Link to="/all-games">
              <button className="homepage-action-button homepage-action-primary">
                Explore games
              </button>
            </Link>
            <Link to="/user/igu">
              <button className="homepage-action-button homepage-action-secondary">
                View dashboard
              </button>
            </Link>
          </div>
          <div className="homepage-quick-info">
            <div>
              <span>40+</span>
              <p>Top games this year</p>
            </div>
            <div>
              <span>3 steps</span>
              <p>Discover, track, review</p>
            </div>
            <div>
              <span>One profile</span>
              <p>Your gaming journey</p>
            </div>
          </div>
        </div>
        <div className="homepage-hero-panel">
          <div className="homepage-hero-card">
            <h3>Your gaming dashboard</h3>
            <p>
              Keep everything in one place, from the latest games you want to
              try to the reviews you have already written.
            </p>
            <div className="homepage-hero-divider"></div>
            <div className="homepage-hero-list">
              {steps.map((step) => (
                <div key={step.label}>
                  <strong>{step.label}</strong>
                  <p>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="homepage-section">
        <SubtitleH2 text="Everything you need" color="#F7D007" fontSize={30} />
        <div className="homepage-feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="homepage-feature-card">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="homepage-section">
        <SubtitleH2 text="Ready to begin?" color="#bc1283" fontSize={30} />
        <div className="homepage-cta">
          <p>
            Start by exploring the full catalog or jump straight into your
            personalized dashboard to keep track of your next quest.
          </p>
          <div className="homepage-actions">
            <Link to="/all-games">
              <button className="homepage-action-button homepage-action-primary">
                Browse all games
              </button>
            </Link>
            <Link to="/top-games-this-year">
              <button className="homepage-action-button homepage-action-secondary">
                Top games this year
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
