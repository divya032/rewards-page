import "./RewardItem.css";

const RewardItem = ({
  title,
  isUsed,
  isExpired,
  code,
  couponType,
  expirationDate,
}) => {
  let labelClass = isUsed ? "used-coupon-button" : "unused-coupon-button";
  let labelText = isUsed ? "Redeemed" : "Redeem it";
  let mainClass = isExpired ? "expired-card" : "active-card";
  let expiredLabel = isExpired
    ? "EXPIRED"
    : `EXPIRES ON ${new Date(expirationDate).toLocaleDateString()}`;

  return (
    <li className="item">
      <div className={mainClass}>
        <button className={labelClass}>{labelText}</button>
        <h3 className="coupon-title">{title}</h3>
        <h4>{expiredLabel}</h4>
        <div className="coupon-code">{code}</div>
        <div className="coupon-type">{couponType}</div>
      </div>
    </li>
  );
};

export default RewardItem;
