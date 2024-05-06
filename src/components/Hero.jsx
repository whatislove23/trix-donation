import Button from "./Button";

export default function Hero() {
  return (
    <div id="home" className="h-96 bg-hero bg-cover bg-center md:h-screen">
      <div className="h-96 bg-black bg-opacity-70 backdrop-blur-sm md:h-screen ">
        <div className="mx-auto flex h-96 max-w-screen-xl flex-col items-start justify-center  px-5 md:h-screen">
          <div className="mb-6 flex flex-col justify-center gap-2  lg:mb-9">
            <h1 className="text-2xl font-extrabold uppercase text-white md:text-4xl">
              Trix Donation Підтримайте те, що вам важливо
            </h1>
            <p className="text-base font-normal text-white md:text-2xl ">
              Зручна централізована онлайн-платформа для збору донатів з різних
              джерел на благодійні цілі
            </p>
          </div>
          <Button className=" h-16 w-64 text-xl md:w-80 ">Підтримати</Button>
        </div>
      </div>
    </div>
  );
}
