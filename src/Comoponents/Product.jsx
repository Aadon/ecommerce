import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../Contexts/CartContext";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart} = useContext(CartContext);

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center rounded-md items-center w-12 h-12 text-white bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl rounded-md"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className="">
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 font-poppins">{title}</h2>
        </Link>

        <div className="font-semibold font-poppins text-gray-600">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
