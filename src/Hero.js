import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Best black paint on the market</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
          lorem, luctus id ante congue, maximus dignissim nibh. In et iaculis
          lorem. Proin et arcu.
        </p>
        <button>View products</button>
      </div>
    </div>
  );
};

export default Hero;
