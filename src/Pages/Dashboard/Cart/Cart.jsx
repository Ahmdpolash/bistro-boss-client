import React from "react";
import useCart from "../../../Hooks/useCart";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, refetch } = useCart();

  const totalPrice = data?.reduce((total, item) => total + item.price, 0);
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
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount > 0) {
            refetch();

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
        <h3>---My Cart---</h3>
        <h1 className="text-3xl text-[#151515] font-semibold mt-2">
          WANNA ADD MORE?
        </h1>
      </div>

      <div className="px-16 py-8 ">
        <div className="bg-white px-6 py-2">
          <div className="flex p-4  justify-between">
            <h1 className="text-[30px] text-[#151515] font-semibold">
              Total Orders : {data?.length}
            </h1>
            <h1 className="text-[30px] text-[#151515] font-semibold">
              Total Price : ${totalPrice}
            </h1>
            {data?.length ? (
              <Link to="/dashboard/payment">
                <button className="px-5 py-3 rounded-md bg-[#D1A054] text-white">
                  Pay
                </button>
              </Link>
            ) : (
              <button disabled className="px-5 py-3  btn btn-primary">
                Pay
              </button>
            )}
          </div>

          <div>
            {data?.length === 0 ? (
              <p>No Data</p>
            ) : (
              <div className="overflow-x-auto lg:h-[60vh] my-4 mx-auto text-white">
                <table className="table">
                  <thead>
                    <tr className="text-center font-semibold text-[16px] text-white bg-[#D1A054]">
                      <th className=" ">No</th>
                      <th className=" ">Item Image</th>
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item, index) => (
                      <>
                        <tr key={item._id} className=" text-center ">
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
                                    src={item.image}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="text-black bg- font-semibold">
                            {item.name}
                          </td>

                          <td className="flex items-center justify-center">
                            <h2 className="text-black font-semibold mt-4">
                              ${item?.price}
                            </h2>
                          </td>

                          <th>
                            <button
                              onClick={() => handleDelete(item._id)}
                              type="submit"
                              className="btn btn-ghost mr-2 bg-red-500 py-2 lg:py-3 px-3 text-white "
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
      </div>
    </div>
  );
};

export default Cart;
