import RewardItem from "../RewardItem/RewardItem";
import "./RewardList.css";

const RewardList = ({ rewards }) => {
  return (
    <ul className="coupons-list">
      {rewards.map((reward) => (
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
};

export default RewardList;
