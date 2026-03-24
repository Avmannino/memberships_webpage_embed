import "./App.css";
import logo from "./assets/wings-logo.png";

const CONTACT_EMAIL = "info@wingsarena.com";

const membershipIncludes = [
  "Free Public Skate sessions",
  "Free Cosmic Skate sessions",
  "Free Stick & Puck Sessions",
  "Free Open Hockey Sessions",
  "Free Rental Skates",
  "20% off Locker Rentals",
  "20% off Concessions (alcohol excluded)",
  "Access to Members Only events",
];

const tiers = [
  {
    name: "Individual Membership",
    price: "$100/month",
    badge: "Single Person",
    perks: membershipIncludes,
    cta: "Purchase",
  },
  {
    name: "Family Membership",
    price: "$200/month",
    badge: "Families of 2+",
    perks: membershipIncludes,
    cta: "Purchase",
  },
];

const includedBenefits = [
  "Simple monthly pricing",
  "Built for frequent skaters",
  "Great for hockey and recreational skating",
  "Family option available",
  "Discount on monthly locker rentals",
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
              One Simple Membership.
            </h1>

            <p className="heroText">
              Our new memberships are designed for skaters and families who
              visit often and want the most value each month. Get access to
              popular rink sessions while keeping your monthly cost simple.
            </p>

            <div className="heroActions">
              <a href="#pricing" className="primaryBtn">
                View Membership Options
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Wings%20Arena%20Membership%20Inquiry`}
                className="secondaryBtn"
              >
                Email to Join
              </a>
            </div>
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

              <div className="heroCardNote">
                <strong>Now offering:</strong> Individual and family monthly
                memberships.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section introSection">
          <div className="container introGrid">
            <div className="sectionHeadingBlock">
              <p className="sectionEyebrow">Why Join</p>
              <h2>Built for regular skaters, hockey players, and active families</h2>
              <p className="sectionText">
                If you are coming to the rink consistently, a membership helps
                you save while making each visit easier. Whether you are
                practicing, skating recreationally, or bringing the family, this
                is a simple way to get more from Wings Arena every month.
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
                Both plans include the same core perks. The difference is
                whether the membership is for one person or for a family of 2 or
                more.
              </p>
            </div>

            <div className="pricingGrid">
              {tiers.map((tier) => (
                <article key={tier.name} className="pricingCard">
                  <div className="pricingCardInner">
                    <div className="cardTop">
                      <p className="cardTier">{tier.badge}</p>
                      <h3>{tier.price}</h3>
                    </div>

                    <a
                      className="cardButton"
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                        tier.name + " Inquiry"
                      )}`}
                    >
                      {tier.cta}
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
            </div>
          </div>
        </section>

        <section className="section ctaSection">
          <div className="container ctaPanel">
            <p className="sectionEyebrow lightEyebrow">Wings Arena</p>
            <h2>Ready to make the rink part of your monthly routine?</h2>
            <p>
              Reach out to learn more about memberships, eligibility, and how to
              get started.
            </p>

            <div className="ctaActions centeredCta">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Wings%20Arena%20Membership%20Signup`}
                className="primaryBtn lightBtn"
              >
                Email info@wingsarena.com to Join
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}