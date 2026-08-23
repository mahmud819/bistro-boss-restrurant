import React from "react";
import SharedTable from "../../../Shared/SharedComponent/SharedTable/SharedTable";
import useCart from "../../../CustomHook/UseCart/useCart";
import { MdDeleteForever } from "react-icons/md";
import SharedDashBoardTitle from "../../../Shared/SharedComponent/SharedDashBoardTitle/SharedDashBoardTitle";

const MyBookings = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);
  return (
    <div>
        <div>
            <SharedDashBoardTitle title={'My Bookings'} subTitle={'Excellent Ambience'}></SharedDashBoardTitle>
        </div>
        <div className="flex justify-evenly bg-[#FFFFFF]">
        <h1 className="font-bold text-2xl">Total Order : {cart?.length} </h1>
        <h1 className="font-bold text-2xl">Total Price : {totalPrice} </h1>
        <button className="btn bg-[#D99904] font-bold text-xl">Pay</button>
      </div>
      <div>
        <SharedTable
          data={cart}
          thImage={"Item Image"}
          thName={"Gust Number"}
          thCategory={"Category"}
          thPrice={"Price"}
          thAction1={<MdDeleteForever></MdDeleteForever>}
        ></SharedTable>
      </div>
    </div>
  );
};

export default MyBookings;
