import { COUPON_TYPE } from "@src/constants/enum/coupon.enum";

export interface ICoupon {
  id: number;
  name: string;
  description: string;
  tag: string;
  recommend: boolean;
  type: COUPON_TYPE;
}
