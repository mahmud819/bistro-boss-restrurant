import React from "react";
import useAxiosSecure from "../../../CustomHook/UseAxios/useAxios";
import useUsers from "../../../CustomHook/UseUsers/useUsers";
import SharedTable from "../../../Shared/SharedComponent/SharedTable/SharedTable";
import SharedDashBoardTitle from "../../../Shared/SharedComponent/SharedDashBoardTitle/SharedDashBoardTitle";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

const AllUsers = () => {
  const [users] = useUsers();

  console.log(users);
  return (
    <div className="bg-[#DED7D7]">
      <div>
        <SharedDashBoardTitle
          subTitle={"How Many??"}
          title={"Manage All Users"}
        ></SharedDashBoardTitle>
      </div>
      <div className="w-[96%] mx-auto bg-[#fff] px-4 rounded-lg">
        <h1 className="text-3xl font-bold uppercase py-4">
          Total Users : {users?.length}
        </h1>
        <div>
          <div className=" py-4 w-full ">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className=" text-white font-boldtext-xl">
                  <tr className="bg-[#D99904] rounded-lg">
                    <th>SL/NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* cart data map */}
                  {users.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>
                        {item?.name}
                      </td>
                      <td>{item?.email}</td>

                      <th>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="btn btn-ghost text-2xl bg-[#D99904] text-white font-bold"
                        >
                          <FaUsers />
                        </button>
                      </th>
                      <th>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="btn btn-ghost text-2xl bg-red-500 text-white font-bold"
                        >
                          <MdDeleteForever></MdDeleteForever>
                        </button>
                      </th>
                       <div className="divider"></div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
