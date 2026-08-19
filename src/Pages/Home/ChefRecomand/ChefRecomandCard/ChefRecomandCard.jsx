import React from "react";
import useAuthContext from "../../../../CustomHook/AuthContext/useAuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../CustomHook/UseAxios/useAxios";
import useCart from "../../../../CustomHook/UseCart/useCart";

const ChefRecomandCard = ({ data }) => {
  const { user,setLoading } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart();

  const handleAddToCart = (data) => {
    // setLoading(true);
    const { name, price, image, category, _id } = data;
    if (user && user?.email) {
      const cartItem = {
        name,
        menuId: _id,
        email: user?.email,
        price,
        image,
        category,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res?.data?.insertedId) {
            // setLoading(false)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} item added your cart successfuly`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
          
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "If you want to cart this item?",
        text: "Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed)
          // Swal.fire({
          //   title: "Welcome!",
          //   text: "This item is added to your cart successfuly.",
          //   icon: "success",
          // });
          navigate("/signin", { state: { from: location } });
      });
    }
    console.log("from add to cart", data);
  };

  // console.log(user);
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="px-2 pt-2">
        <img src={data?.image} alt="Food Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data?.name}</h2>
        <p>{data?.recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(data)}
            className="btn text-[#D99904] border-[#D99904] border-b-4 rounded-lg p-2 hover:bg-black"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomandCard;
