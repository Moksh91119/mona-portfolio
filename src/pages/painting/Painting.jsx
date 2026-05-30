import { useParams } from "react-router";
import { portfolio } from "../../Data";
import "./painting.css";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router";

const Painting = () => {
  const { paintingId } = useParams();
  const paintingIndex = portfolio.findIndex(
    (item) => String(item.id) === paintingId,
  );
  const painting = paintingIndex >= 0 ? portfolio[paintingIndex] : undefined;
  const previousPainting =
    paintingIndex > 0 ? portfolio[paintingIndex - 1] : undefined;
  const nextPainting =
    paintingIndex >= 0 && paintingIndex < portfolio.length - 1
      ? portfolio[paintingIndex + 1]
      : undefined;

  if (!painting) {
    return (
      <section className="painting section">
        <h2 className="section-title">Painting not found</h2>
        <div className="painting-container container grid">
          <div className="painting-content">
            <p className="painting-description">
              The painting you are looking for does not exist or the link is no
              longer valid.
            </p>

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
  }

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

          {nextPainting && (
            <Link
              to={`/portfolio/painting/${nextPainting.id}`}
              className="button portfolio-button"
            >
              Next painting
              <span className="button-icon">
                <RiArrowRightLine />
              </span>
            </Link>
          )}

          {previousPainting && (
            <Link
              to={`/portfolio/painting/${previousPainting.id}`}
              className="button portfolio-button"
            >
              Previous painting
              <span className="button-icon">
                <RiArrowRightLine />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Painting;
