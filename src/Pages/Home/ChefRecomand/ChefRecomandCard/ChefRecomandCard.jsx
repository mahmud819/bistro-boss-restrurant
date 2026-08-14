import React from "react";
import useAuthContext from "../../../../CustomHook/AuthContext/useAuthContext";

const ChefRecomandCard = ({data}) => {

   const {user} = useAuthContext();

  const handleAddToCart=(data)=>{
    console.log('from add to cart',data)
  }

    console.log(user);
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="px-2 pt-2">
        <img
          src={data?.image}
          alt="Food Image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data?.name}</h2>
        <p>
          {data?.recipe}
        </p>
        <div className="card-actions">
          <button onClick={()=>handleAddToCart(data)} className="btn text-[#D99904] border-[#D99904] border-b-4 rounded-lg p-2 hover:bg-black">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomandCard;
