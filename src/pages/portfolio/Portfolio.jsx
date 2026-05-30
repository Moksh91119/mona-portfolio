import { portfolio } from "../../Data";
import { Link } from "react-router";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section-title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio-container container grid">
        {portfolio.map(({ id, img, title, description }) => {
          return (
            <article className="portfolio-card" key={id}>
              <Link
                to={`/portfolio/painting/${id}`}
                className="portfolio-img-wrapper"
              >
                <img src={img} alt="" className="portfolio-img" />
              </Link>

              <h3 className="portfolio-title">{title}</h3>
              <p className="portfolio-description">{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
