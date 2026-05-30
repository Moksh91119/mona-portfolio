import Profile from "../../assets/home.jpg";
import { Link } from "react-router";
import { RiArrowRightLine } from "react-icons/ri";
import "./home.css";

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Mona Jain</span> <br /> The Artist
        </h1>

        <p className="home-description">
          I’m an artist based in India, specializing in painting. Through my
          work, I aim to tell meaningful stories and create pieces that connect
          with people on a personal level. Inspired by themes of identity,
          culture, and everyday human experiences, I use vibrant colors, rich
          textures, and thoughtful details to bring my ideas to life. Each
          painting is an exploration of emotion and perspective, inviting
          viewers to pause, reflect, and engage in conversation.
        </p>

        <Link to="/about" className="button">
          More About Me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  );
};
export default Home;
