import classes from "./SocialProof.module.css";
import Proof from "./UI/Proof";

const SocialProof = () => {
  return (
    <div className={classes.container}>
      <h1>What users have to say about us</h1>
      <div className={classes.proofs}>
        <Proof />
        <Proof />
        <Proof />
      </div>
    </div>
  );
};

export default SocialProof;
