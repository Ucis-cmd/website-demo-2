import Card from "./Card";
import classes from "./Proof.module.css";

const Proof = () => {
  return (
    <Card>
      <p className={classes.proofText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
        lorem, luctus id ante congue, maximus dignissim nibh. In et iaculis
        lorem. Proin et arcu.
      </p>
      <img className={classes.image} src="portrait.jpg" alt="Gina Catrina" />
      <h3>Gina Catrina</h3>
    </Card>
  );
};

export default Proof;
