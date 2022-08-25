import RewardItem from "../RewardItem/RewardItem";
import { useContext, useEffect } from "react";
import classes from "./RewardList.module.css";
import TotalPriceContext from "../../stores/total-context";

function RewardList(props) {
  const totalPriceContext = useContext(TotalPriceContext);

  useEffect(
    () =>
      totalPriceContext.setTotalPrice(
        props.rewards.reduce((acc, value) => {
          if (value.isUsed) return acc + value.couponValue;
          return acc;
        }, 0)
      ),
    []
  );

  return (
    <ul className={classes.list}>
      {props.rewards.map((reward) => (
        <RewardItem
          key={reward.code}
          code={reward.code}
          title={reward.title}
          couponType={reward.couponType}
          couponDescription={reward.couponDescription}
          centAmount={reward.couponValue.centAmount}
          isUsed={reward.isUsed}
          isExpired={reward.isExpired}
          expirationDate={reward.expirationDate}
        />
      ))}
    </ul>
  );
}

export default RewardList;
