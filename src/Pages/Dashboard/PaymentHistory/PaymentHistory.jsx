import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: payments } = useQuery({
    queryKey: ["payments", user?.email],

    enabled: !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <>
      <div className="">
        <div className="text-center mt-3 ">
          <h3>---At a Glance!---</h3>
          <h1 className="text-3xl text-[#151515] font-semibold mt-2">
            PAYMENT HISTORY
          </h1>
        </div>

        <div className="px-16 py-8 ">
          <div className="bg-white px-6 py-2">
            <h1 className="text-[30px] text-[#151515] font-semibold">
              Total Orders : {payments?.length}
            </h1>

            <div>
              {payments?.length === 0 ? (
                <p>No payments</p>
              ) : (
                <div className="overflow-x-auto lg:h-[60vh] my-4 mx-auto text-white">
                  <table className="table">
                    <thead>
                      <tr className="text-center font-semibold text-[16px] text-white bg-[#D1A054]">
                        <th className=" ">No</th>
                        <th className=" ">Email</th>
                        <th>Transaction Id</th>
                        <th>Total Price</th>
                        <th>Payment Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments?.map((menu, index) => (
                        <>
                          <tr key={menu._id} className=" text-center ">
                            <td className="text-black text-[16px] font-semibold ">
                              {" "}
                              {index + 1}
                            </td>
                            <td className="text-black text-[16px] font-semibold">
                              <div className="flex menus-center space-x-3">
                                {menu.email}
                              </div>
                            </td>

                            <td className="text-black bg- font-semibold">
                              {menu.transactionId}
                            </td>

                            <td className="flex menus-center justify-center">
                              <h2 className="text-black font-semibold mt-4">
                                ${menu?.price}
                              </h2>
                            </td>

                            <th>
                              <h2 className="text-black font-semibold mt-4">
                                {menu.date}
                              </h2>
                            </th>
                            <td>
                              <h2 className="text-white bg-green-400 py-1 px-2 rounded-md font-semibold mt-4">
                                {menu.status}
                              </h2>
                            </td>
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
    </>
  );
};

export default PaymentHistory;
