import { useParams } from "react-router";
import { portfolio } from "../../Data";
import "./painting.css";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router";

const Painting = () => {
  const { paintingId } = useParams();
  const identifier = Number(paintingId);
  const painting = portfolio.find((item) => item.id === identifier);

  return (
    <section className="painting section">
      <h2 className="section-title">{painting?.title}</h2>

      <div className="painting-container container grid">
        <div className="painting-img-wrapper">
          <img src={painting?.img} alt="" className="painting-img" />
        </div>
        <div className="painting-content">
          <p className="painting-description">{painting?.description}</p>
          <div className="painting-details">
            <p>
              <strong>Year Created:</strong> {painting?.yearCreated}
            </p>
            <p>
              <strong>Subject:</strong> {painting?.subject}
            </p>
            <p>
              <strong>Styles:</strong> {painting?.styles}
            </p>
            <p>
              <strong>Mediums:</strong> {painting?.mediums}
            </p>
          </div>

          <Link to="/portfolio" className="button portfolio-button">
            Back to the collection
            <span className="button-icon">
              <RiArrowRightLine />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Painting;
