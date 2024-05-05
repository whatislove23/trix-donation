import Button from "./Button";
import Title from "./Title";

export default function CallToDonate() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
      <Title className="">
        <span className="text-primary-200">Донать</span> З trix donation
        <br />
        <span className="text-primary-200">
          Зручно, ефективно, з нагадуванням
        </span>
      </Title>
      <Button className={"max-w-[400px] w-full mt-8"}>Підтримати</Button>
      <a href="#" className="font-light text-text-200 mt-6">
        Завантажуйте додаток Trix Donation і долучайтеся до добрих справ!
      </a>
    </div>
  );
}
