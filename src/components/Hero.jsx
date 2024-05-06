import Button from "./Button";

export default function Hero() {
  return (
    <div className="h-screen bg-hero">
      <div className="h-screen backdrop-blur-sm bg-black bg-opacity-70 ">
        <div className="max-w-screen-xl mx-auto flex flex-col items-start justify-center h-screen">
          <div className="flex flex-col gap-2 mb-9">
            <h1 className="text-4xl uppercase text-white font-extrabold">
              Trix Donation Підтримайте те, що вам важливо
            </h1>
            <p className="text-white text-2xl font-normal ">
              Зручна централізована онлайн-платформа для збору донатів з різних
              джерел на благодійні цілі
            </p>
          </div>
          <Button className="w-80">Підтримати</Button>
        </div>
      </div>
    </div>
  );
}
