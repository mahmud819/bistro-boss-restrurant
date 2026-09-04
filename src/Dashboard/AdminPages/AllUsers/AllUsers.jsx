import React from "react";
import useAxiosSecure from "../../../CustomHook/UseAxios/useAxios";
import useUsers from "../../../CustomHook/UseUsers/useUsers";
import SharedTable from "../../../Shared/SharedComponent/SharedTable/SharedTable";
import SharedDashBoardTitle from "../../../Shared/SharedComponent/SharedDashBoardTitle/SharedDashBoardTitle";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users,refetch] = useUsers();
  const axiosSecure = useAxiosSecure();


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
          axiosSecure.delete(`/users/${id}`)
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
    //   console.log(id);
    };
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
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>
                        {user?.name}
                      </td>
                      <td>{user?.email}</td>

                      <th>
                        <button
                          onClick={() => handleMakeAdmin(user?._id)}
                          className="btn btn-ghost text-2xl bg-[#D99904] text-white font-bold"
                        >
                          <FaUsers />
                        </button>
                      </th>
                      <th>
                        <button
                          onClick={() => handleDelete(user?._id)}
                          className="btn btn-ghost text-2xl bg-red-500 text-white font-bold"
                        >
                          <MdDeleteForever></MdDeleteForever>
                        </button>
                      </th>
                       <td className="divider"></td>
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
