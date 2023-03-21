import classes from "./Feature.module.css";

import Card from "./Card";

const Feature = (props) => {
  return (
    <Card>
      <h3>{props.feature}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
        lorem, luctus id ante congue, maximus dignissim nibh. In et iaculis
        lorem. Proin et arcu.
      </p>
    </Card>
  );
};

export default Feature;
