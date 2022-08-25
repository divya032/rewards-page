import classes from "./RewardTotal.module.css";
import { useContext } from "react";
import TotalPriceContext from "../../stores/total-context";

function RewardTotal() {
  const totalPriceContext = useContext(TotalPriceContext);

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.logo}></div>
        <div>${totalPriceContext.totalPrice}</div>
        <div>Total Rewards</div>
      </div>
    </div>
  );
}

export default RewardTotal;
