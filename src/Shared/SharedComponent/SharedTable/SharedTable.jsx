import React from "react";

const SharedTable = ({data,thImage,thName,thCategory,thPrice,thAction1,thAction2}) => {
  return (
    <div>
      <div className="px-8 py-4 w-full ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D99904] text-white font-bold rounded-t-xl rounded-r-md text-xl">
              <tr>
                <th></th>
                <th>{thImage}</th>
                <th>{thName}</th>
                {thCategory&&<th>{thCategory}</th>}
                <th>{thPrice}</th>
                {thAction1&&<th>Action</th>}
                {thAction2&&<th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {/* cart data map */}
              {data.map((item,index) => (
                <tr key={item._id}>
                  <th>
                    {/* <label>
                      <input type="checkbox" className="checkbox" />
                    </label> */}
                    {index+1}
                  </th>

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
                  {item?.category&&<td>{item?.category}</td>}
                  <td>{item?.price}</td>
                  {thAction1&&<td>
                    <button className="btn btn-ghost text-2xl bg-red-500 text-white font-bold">
                      {thAction1}
                    </button>
                  </td>}
                  {thAction2&&
                    <td>
                    <button className="btn btn-ghost text-2xl bg-red-500 text-white font-bold">
                      {thAction2}
                    </button>
                  </td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SharedTable;
