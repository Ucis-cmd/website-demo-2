import classes from "./Features.module.css";

import Feature from "./UI/Feature";

const Features = () => {
  return (
    <div className={classes.container}>
      <h1>Our Features and Benefits</h1>
      <div className={classes.features}>
        <Feature feature="Feature 1" />
        <Feature feature="Feature 1" />
        <Feature feature="Feature 1" />
      </div>
    </div>
  );
};

export default Features;
