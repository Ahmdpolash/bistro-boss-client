import React from "react";
import useMenu from "../../../Hooks/useMenu";
import { AiFillDelete, AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MangeItem = () => {
  const [menu, refetch] = useMenu();
  //   console.log(menu);
  const axiosSecure = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount > 0) {

            refetch()

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <div className="text-center mt-3 ">
        <h3>---Hurry Up!---</h3>
        <h1 className="text-3xl text-[#151515] font-semibold mt-2">
          MANAGE ALL ITEMS
        </h1>
      </div>

      <div className="bg-white px-16 ">
        <h1 className="text-2xl mt-3 font-bold">Total Items {menu.length} </h1>
        <div className="">
          {menu?.length === 0 ? (
            <p>No Data</p>
          ) : (
            <div className="overflow-x-auto lg:h-[80vh] my-4 mx-auto text-white">
              <table className="table">
                <thead className="">
                  <tr className="text-center font-semibold text-[16px] text-white bg-[#D1A054]">
                    <th className=" ">No</th>
                    <th className=" ">Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {menu?.map((menu, index) => (
                    <>
                      <tr key={menu._id} className=" text-center ">
                        <td className="text-black text-[16px] font-semibold ">
                          {" "}
                          {index + 1}
                        </td>
                        <td className="">
                          <div className="flex items-center space-x-3">
                            <div className="avatar text-center mx-auto">
                              <div className="mask mask-squircle  w-16 h-16">
                                <img
                                  className=""
                                  src={menu?.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="text-black bg- font-semibold">
                          {menu.name}
                        </td>

                        <td className="flex items-center justify-center">
                          <h2 className="text-black font-semibold mt-4">
                            ${menu?.price}
                          </h2>
                        </td>

                        <th>
                          <Link to={`/dashboard/update/${menu._id}`}>
                            <button
                              type="submit"
                              className="btn btn-ghost mr-2 bg-[#D1A054] py-2 lg:py-3 px-3 text-white "
                            >
                              <AiFillEdit className="text-2xl"></AiFillEdit>
                            </button>
                          </Link>
                        </th>
                        <th>
                          <button
                            onClick={() => handleDelete(menu._id)}
                            type="submit"
                            className="btn btn-ghost mr-2 bg-red-700 py-2 lg:py-3 px-3 text-white "
                          >
                            <AiFillDelete className="text-2xl"></AiFillDelete>
                          </button>
                        </th>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MangeItem;
