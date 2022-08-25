import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./RewardPage.module.css";
import RewardTotal from "../../components/RewardTotal/RewardTotal";
import RewardList from "../../components/RewardList/RewardList";

function RewardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRewards, setLoadedRewards] = useState([]);

  const config = {
    headers: {
      Authorization,
    },
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "http://seller-vouchers.herokuapp.com/v1/getCoupons/naveen@gmail.com",
        config
      )
      .then((response) => {
        console.log(response);
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
            isExpired: true,
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
            expirationDate: "2024-02-18T02:25:00Z",
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
    <section className={classes["main-container"]}>
      <RewardTotal />
      <RewardList rewards={loadedRewards} />
    </section>
  );
}
export default RewardPage;
