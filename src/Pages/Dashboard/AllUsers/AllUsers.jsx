import { useQuery } from "@tanstack/react-query";

import useAxios from "../../../Hooks/useAxios";
import { FaUsers } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();

  const { data: users, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User Deleted Successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)

      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="text-center mt-3 ">
        <h3>---How Many---</h3>
        <h1 className="text-3xl text-[#151515] font-semibold mt-2">
          Manage All Users
        </h1>
      </div>

      <>
        <div className="px-16 py-8 ">
          <div className="bg-white p-6">
            <h3 className="text-2xl font-bold">
              TOTAL USERS : {users?.length}
            </h3>
            {users?.length === 0 ? (
              <p>No users</p>
            ) : (
              <div className="overflow-x-auto lg:h-[60vh] my-4 mx-auto text-white">
                <table className="table">
                  <thead>
                    <tr className="text-center font-semibold text-[16px] text-white bg-[#D1A054]">
                      <th className=" ">No</th>
                      <th className=" ">Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((user, index) => (
                      <>
                        <tr key={user._id} className=" text-center ">
                          <td className="text-black text-[16px] font-semibold ">
                            {" "}
                            {index + 1}
                          </td>
                          <td className="">
                            <div className="flex items-center text-black space-x-3">
                              {user?.name}
                            </div>
                          </td>

                          <td className="text-black bg- font-semibold">
                            {user?.email}
                          </td>

                          <td className="flex items-center justify-center">
                            {user?.role === "admin" ? (
                              <span className="text-black mt-2 bg-yellow-400 px-3 rounded-lg font-bold py-1">
                                Admin
                              </span>
                            ) : (                                                                                             
                              <button
                                onClick={() => handleMakeAdmin(user)}
                                type="submit"
                                className="btn btn-ghost mr-2 bg-[#D1A054] py-2 lg:py-3 px-3 text-white "
                              >
                                <FaUsers className="text-2xl"></FaUsers>
                              </button>
                            )}
                          </td>

                          <th>
                            <button
                              onClick={() => handleDelete(user._id)}
                              type="submit"
                              className="btn btn-ghost mr-2 bg-[#B91C1C] py-2 lg:py-3 px-3 text-white "
                            >
                              <AiOutlineDelete className="text-2xl"></AiOutlineDelete>
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
      </>
    </div>
  );
};

export default AllUsers;
