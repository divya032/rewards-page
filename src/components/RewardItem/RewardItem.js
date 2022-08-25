import Card from "../ui/Card";
import classes from "./RewardItem.module.css";

function RewardItem(props) {
  let labelClass = props.isUsed == true ? "used-container" : "unused-container";
  let labelText = props.isUsed == true ? "Used" : "Redeem it";
  let mainClass = props.isExpired == true ? "expiredCard" : "content";
  let expiredLabel =
    props.isExpired == true
      ? "EXPIRED"
      : `EXPIRES ON ${new Date(props.expirationDate).toLocaleDateString()}`;

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes[mainClass]}>
          <div className={classes[labelClass]}>{labelText}</div>
          <h3>{props.title}</h3>
          <h4>{expiredLabel}</h4>
          <div className={classes["code-container"]}>{props.code}</div>
          <div className={classes["couponType-container"]}>
            {props.couponType}
          </div>
          {/* <p>{props.couponDescription}</p> */}
        </div>
      </Card>
    </li>
  );
}

export default RewardItem;
