import "./App.css";
import logo from "./assets/wings-logo.png";

const CONTACT_EMAIL = "jwanderlingh@wingsarena.com";

const membershipIncludes = [
  "Free Public Skate sessions",
  "Free Drop-In Figure Skating sessions",
  "Free Cosmic Skate sessions",
  "Free Stick & Puck sessions",
  "Free Open Hockey sessions",
  "Free Rental Skates",
  "20% off Locker Rentals",
  "20% off Skate Sharpening",
  "20% off Concessions (alcohol excluded)",
  "Access to Members Only events",
];

const tiers = [
  {
    name: "Individual Membership",
    price: "$100/month",
    badge: "Individual",
    perks: membershipIncludes,
  },
  {
    name: "Family Membership",
    price: "$200/month",
    badge: "Families of 2+",
    perks: membershipIncludes,
  },
];

const includedBenefits = [
  "The more you skate, the more you save",
  "Built for frequent skaters",
  "Great for hockey and recreational skating",
  "Perks on and off the ice",
  "Cancel anytime!",
];

export default function App() {
  return (
    <div className="pageShell">
      <header className="hero">
        <div className="container heroGrid">
          <div className="heroContent">
            <div className="heroLogoWrap">
              <img
                src={logo}
                alt="Wings Arena Memberships"
                className="heroLogo"
              />
            </div>

            <h1>
              More Ice Time.
              <br />
              More Value.
              <br />
              One Membership.
            </h1>

            <p className="heroText">
              Built for skaters and families who live at the rink. Get unlimited access to popular rink programs and member perks that more than pay for themselves.
            </p>

            <a
              href="#pricing"
              className="scrollHint"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("pricing");
                if (!el) return;
                const target = el.getBoundingClientRect().top + window.pageYOffset;
                const start = window.pageYOffset;
                const distance = target - start;
                const duration = 600;
                const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                let startTime = null;
                const step = (timestamp) => {
                  if (!startTime) startTime = timestamp;
                  const progress = Math.min((timestamp - startTime) / duration, 1);
                  const y = start + distance * ease(progress);
                  window.scrollTo(0, y);
                  if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
              }}
            >
              <span>View membership options</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>

          <div className="heroCard">
            <div className="heroCardInner">
              <div className="heroCardBottomContent">
                <div className="heroCardTop">
                  <h2 className="heroCardHeading">Skate More, Pay Less.</h2>
                </div>

                <p className="heroCardLabel">Your Membership Includes:</p>

                <ul className="heroList">
                  {membershipIncludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>


            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section introSection">
          <div className="container introGrid">
            <div className="sectionHeadingBlock">
              <p className="sectionEyebrow">Why Join?</p>
              <h2>Built for regular skaters, hockey players, and active families</h2>
              <p className="sectionText">
                Some skaters stop by the rink. Others practically call it home.
                If skating is part of your regular routine, a Wings Arena membership
                just makes sense — unlimited sessions, free rentals, and monthly
                perks all in one bundle!
              </p>
            </div>

            <div className="benefitsPanel">
              {includedBenefits.map((item) => (
                <div className="benefitRow" key={item}>
                  <span className="benefitDot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricingSection">
          <div className="container">
            <div className="sectionHeadingCentered">
              <p className="sectionEyebrow">Membership Plans</p>
              <h2>Choose the option that fits your household</h2>
              <p className="sectionText centeredText">
                Same perks, two plans — one for individuals, one for families of 2 or more.
              </p>
            </div>

            <div className="promoCallout">
              <span className="promoTag"><span className="promoDot" />Limited Offer</span>
              <span className="promoText">Buy 6 months, get your 7th month free.</span>
            </div>

            <div className="pricingGrid">
              {tiers.map((tier) => (
                <article key={tier.name} className="pricingCard">
                  <div className="pricingCardInner">
                    <div className="cardTop">
                      <p className="cardTier">{tier.badge}</p>
                      <h3>
                        {tier.price.replace("/month", "")}
                        <span className="priceMonth">/month</span>
                      </h3>
                    </div>

                    <a
                      className="cardButton"
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                        "Wings Arena - " + tier.name + " Inquiry"
                      )}`}
                      target="_top"
                    >
                      Email Us to Join
                    </a>

                    <ul className="perksList">
                      {tier.perks.map((perk) => (
                        <li key={perk}>{perk}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <p className="finePrint">All memberships require a 2-month minimum commitment.</p>
          </div>
        </section>

        <section className="section faqSection">
          <div className="container faqGrid">
            <div>
              <p className="sectionEyebrow">Good to Know</p>
              <h2>Membership highlights</h2>
            </div>

            <div className="faqList">
              <div className="faqItem">
                <h3>Who is the family membership for?</h3>
                <p>
                  The family membership is intended for families of 2 or more
                  and includes the same benefits extended to the household.
                </p>
              </div>

              <div className="faqItem">
                <h3>Are locker rentals included?</h3>
                <p>
                  Locker rentals are optional and not included, but members
                  receive 20% off monthly locker rentals.
                </p>
              </div>

              <div className="faqItem">
                <h3>How do I get started?</h3>
                <p>
                  Email Wings Arena to ask questions, confirm details, or sign
                  up for the membership option that fits you best.
                </p>
              </div>

              <div className="faqItem">
                <h3>Can I cancel anytime?</h3>
                <p>
                  Yes. You are free to cancel at any
                  time with no additional fees or penalties.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section ctaSection">
          <div className="container ctaPanel">
            <p className="sectionEyebrow lightEyebrow">Get Started</p>
            <h2>Ready to make the rink part of your monthly routine?</h2>
            <p>
              Reach out to learn more about memberships, eligibility, and how to
              get started.
            </p>

            <div className="ctaActions centeredCta">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Wings%20Arena%20Membership%20Signup`}
                className="primaryBtn lightBtn"
                target="_top"
              >
                Email Us to Join
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}