import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxios from "../../Hooks/useAxios";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Update = () => {
  const menu = useLoaderData();
  console.log(menu);

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    console.log(imageFile);
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      //sent the menu item data with the img url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${menu._id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: `${data?.name} is updated to the menu`,
          icon: "success",
        });
      }
    }
    console.log("with img url", res.data);
  };

  return (
    <div>
      <div className="">
        <div className="text-center mt-6">
          <h1 className="text-3xl text-[#151515] font-semibold mt-2">
            Update Item
          </h1>
        </div>

        <div className="px-4 mt-4 lg:px-16 mx-auto max-w-6xl w-full ">
          <form className="bg-[#D1A054] p-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-white" htmlFor="Category Name">
                Recipe name*
              </label>
              <input
                {...register("name")}
                defaultValue={menu.name}
                type="text"
                className="w-full py-2 px-3  border border-[#E8E8E8] mb-2 my-2 rounded-md "
                placeholder="Recipe Name"
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-full">
                <label htmlFor="Category Name">Category*</label>
                <br />

                <select
                  {...register("category")}
                  defaultValue={menu.category}
                  className="select select-bordered my-2 w-full "
                >
                  <option disabled value=" " selected>
                    Select a Category.
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="dessert">Dessert</option>
                  <option value="soup">Soup</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="Category Name">Price*</label>
                <input
                  type="text"
                  defaultValue={menu.price}
                  {...register("price")}
                  className="w-full py-3 px-3  border border-[#E8E8E8] mb-2 my-2 rounded-md "
                  placeholder="Price"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="Category Name">Recipe Details*</label>

              <textarea
                {...register("recipe")}
                type="text"
                defaultValue={menu.recipe}
                className="border w-full px-2 my-2"
                name="recipe"
                cols="30"
                placeholder="Recipe Details"
                rows="10"
              ></textarea>
            </div>
            <input {...register("image")} type="file" name="image" id="image" />{" "}
            <br />
            <button
              type="submit"
              className="px-6  mx-auto py-3 rounded-md mt-4 flex font-semibold items-center gap-2 bg-[#B58130] text-white"
            >
              Update Recipe Details <FaUtensils />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
