import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { image, name, price, recipe, _id } = item;
  const axiosSecure = useAxios();
  const { refetch } = useCart();

  const handleAddToCart = () => {
    if (user) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        image,
        name,
        price,
        recipe,
      };

      axiosSecure
        .post("/carts", cartItem)

        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });

          
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please Login to add to the cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="card border lg:h-[470px] bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={image}
            alt="Shoes"
            className="w-full h-[270px] rounded-xl"
          />
        </figure>
        <p className="absolute right-0 bg-slate-600 text-white font-semibold px-6 rounded-md">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
