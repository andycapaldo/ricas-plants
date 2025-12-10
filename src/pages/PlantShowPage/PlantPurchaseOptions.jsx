import { useState } from "react";
import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";
import * as cartService from "services/cart";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="my-10">
        <div className="text-emerald-700 flex">
          <i className="fa-solid fa-brush text-2xl mr-2"></i>
          <div className="text-lg">Pot Color</div>
        </div>
        <div className="flex my-4">
          {plant.images.map((image, idx) => (
            <div
              key={image.pot_color}
              className="mx-2 flex flex-col items-center"
              onMouseEnter={() => setImageIdx(idx)}
            >
              <div
                className={clsx(
                  "rounded-full w-10 h-10",
                  POT_COLORS[image.pot_color],
                  imageIdx === idx &&
                    "outline outline-2 outline-slate-400 outline-offset-2"
                )}
              ></div>
              <div
                className={clsx(
                  "mt-1",
                  imageIdx === idx ? "text-slate-700" : "text-slate-500"
                )}
              >
                {image.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="rounded-full flex items-center text-xl text-slate-500 border-2 border-slate-300 px-3 py-4">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className="rounded-full bg-emerald-700 text-white text-xl flex flex-1 justify-center items-center ml-2 hover:bg-emerald-800"
          onClick={async () => {
            setIsLoading(true);
            const response = await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIdx].pot_color,
            });
            setIsLoading(false);
            console.log(response.status);
          }}
        >
          {
            isLoading ?
            <i className="mr-2 text-2xl fa-solid fa-spinner animate-spin"></i> :
            <i className="mr-2 text-2xl fa-solid fa-cart-plus"></i>
          }
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
