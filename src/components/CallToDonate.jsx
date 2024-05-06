import Button from "./Button";
import Title from "./Title";

export default function CallToDonate() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center p-4">
      <Title className="">
        <span className="text-primary-200">Донать</span> З trix donation
      </Title>
      <p className="mt-2 text-center  font-semibold uppercase text-primary-200 md:text-3xl lg:text-[40px]">
        Зручно, ефективно, з нагадуванням
      </p>
      <Button
        className={
          " mt-5 w-full  max-w-64 text-xl md:max-w-72 lg:mt-8 lg:max-w-[400px]"
        }
      >
        Підтримати
      </Button>
      <a
        href="#"
        className="mt-5 text-center font-light text-text-200 lg:mt-6 "
      >
        Завантажуйте додаток Trix Donation і долучайтеся до добрих справ!
      </a>
    </div>
  );
}
