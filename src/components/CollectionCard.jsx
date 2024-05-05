import pogressStyle from "../components/Progres.module.css";
import Button from "./Button";

export default function CollectionCard(props) {
  const { title, description, collected, goal } = props;
  return (
    <div className="rounded-[38px] p-7 border-2 border-bg-300 flex flex-col gap-5 min-w-[350px]">
      <div className="w-full h-[300px] overflow-hidden rounded-lg object-cover">
        <img
          className="w-full h-full"
          src="https://suprotyv.com/wp-content/uploads/2023/02/DJI-Mavic-3.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-2xl text-text-100">{title}</h3>
        <p className="text-text-200 font-semibold text-sm  line-clamp-4 overflow-hidden h-20">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-text-100 font-semibold ">₴{collected}</p>
          <p className="text-text-200 font-semibold "> ₴{goal}</p>
        </div>
        <progress
          className={pogressStyle.progress}
          max={goal}
          value={collected}
        ></progress>
      </div>
      <Button className="h-9  font-medium text-base px-6 py-2 max-w-min">
        Підтримати
      </Button>
    </div>
  );
}
