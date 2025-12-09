import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;

  return (
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
                imageIdx === idx && "outline outline-2 outline-slate-400 outline-offset-2"
              )}
            ></div>
            <div className={clsx("mt-1", imageIdx === idx ? "text-slate-700" : "text-slate-500")}>{image.pot_color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
