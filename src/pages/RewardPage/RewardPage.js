import { useEffect, useState } from "react";
import axios from "axios";
import RewardList from "../../components/RewardList/RewardList";
import "./RewardPage.css";

const RewardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRewards, setLoadedRewards] = useState([]);

  const caculateTotalRewards = () => {
    return loadedRewards.reduce((acc, value) => {
      if (value.isUsed) return acc + value.couponValue;
      return acc;
    }, 0);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "http://f488-27-122-61-50.ngrok.io/v1/getCoupons/ruthpotterruiz@gmail.com"
      )
      .then((response) => {
        setIsLoading(false);
        setLoadedRewards(response.data.coupons);
      })
      .catch(() => {
        setIsLoading(false);
        setLoadedRewards([
          {
            code: "SD222FHPVH9P2",
            title: "SHIPPING",
            couponType: "SHIPPING-FREE",
            isUsed: true,
            isExpired: false,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2024-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 590,
          },
          {
            code: "SD222FHPVH9P3",
            title: "CASHBACK",
            couponType: "CASH-DISCOUNT",
            isUsed: false,
            isExpired: true,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2024-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
          {
            code: "SD222FHPVH9PM",
            title: "CASHBACK",
            couponType: "CASH-DISCOUNT",
            isUsed: true,
            isExpired: true,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2024-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
          {
            code: "SD222FHPVH9PV",
            title: "CYBER-OFFER",
            couponType: "CYBER-SALE",
            isUsed: false,
            isExpired: false,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2024-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
          {
            code: "SD222FHPVH9PV11",
            title: "CASHBACK",
            couponType: "CASH_DISCOUNT",
            isUsed: false,
            isExpired: false,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2024-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
          {
            code: "SD222PVH9PV11",
            title: "CASHBACK",
            couponType: "CASH_DISCOUNT",
            isUsed: false,
            isExpired: true,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2024-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
          {
            code: "SD22VH9PV11",
            title: "CASHBACK",
            couponType: "CASH_DISCOUNT",
            isUsed: true,
            isExpired: true,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2024-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
          {
            code: "D22VH9PV11",
            title: "CASHBACK",
            couponType: "CASH_DISCOUNT",
            isUsed: true,
            isExpired: true,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2029-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
          {
            code: "D22VH9PV01",
            title: "CASHBACK",
            couponType: "CASH_DISCOUNT",
            isUsed: false,
            isExpired: false,
            couponDescription: "400 Cashback",
            emailId: "naveen@gmail.com",
            expirationDate: "2029-02-18T02:25:00Z",
            termsConditions: "Terms and condition apply",
            couponValue: 40,
          },
        ]);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="main-container">
      <div className="total-rewards">
        Rewards Redeemed - ${caculateTotalRewards()}
      </div>
      <RewardList rewards={loadedRewards} />
    </section>
  );
};
export default RewardPage;
