import React from "react";
import SharedDashBoardTitle from "../../../Shared/SharedComponent/SharedDashBoardTitle/SharedDashBoardTitle";
import useCart from "../../../CustomHook/UseCart/useCart";
import { key } from "localforage";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../CustomHook/UseAxios/useAxios";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);

  const axiosSecure = useAxiosSecure();
  // console.log(cart)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/carts/${id}`)
      .then((res)=>{
        refetch();
        if(res?.data?.deletedCount>0){
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        }
      })
        
    });
    console.log(id);
  };
  return (
    <div className="">
      <SharedDashBoardTitle
        title={"WANNA ADD MORE?"}
        subTitle={"My Cart"}
      ></SharedDashBoardTitle>
      <div className="flex justify-evenly bg-[#FFFFFF]">
        <h1 className="font-bold text-2xl">Total Order : {cart?.length} </h1>
        <h1 className="font-bold text-2xl">Total Price : {totalPrice} </h1>
        <button className="btn bg-[#D99904] font-bold text-xl">Pay</button>
      </div>
      <div className="px-8 py-4 w-full ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D99904] text-white font-bold rounded-t-xl rounded-r-md text-xl">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* cart data map */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        {/* <div className="font-bold">{item?.name}</div> */}
                        {/* <div className="text-sm opacity-50">United States</div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {item?.name}
                    <br />
                    {/* <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span> */}
                  </td>
                  <td>{item?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn btn-ghost text-2xl bg-red-500 text-white font-bold"
                    >
                      <MdDeleteForever></MdDeleteForever>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>            
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
