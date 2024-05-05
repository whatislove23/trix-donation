import Button from "./Button";
import Title from "./Title";

export default function Join() {
  return (
    <div className="h-screen bg-[url('./public/static/images/bg-join.png')] bg-no-repeat bg-cover">
      <div className="h-screen bg-black bg-opacity-50 ">
        <div className="max-w-screen-xl mx-auto flex flex-col items-сenter justify-center h-screen">
          <Title className="text-white">
            ДОЛУЧАЙСЯ ЯК <span className="text-primary-200">ВОЛОНТЕР</span> ЧИ{" "}
            <span className="text-primary-200">ФОНД</span>
          </Title>
          <div className="flex justify-between mt-14">
            <div className="text-white max-w-[514px]  flex flex-col gap-3">
              <h3 className="font-semibold text-4xl">Волонтер</h3>
              <p className="font-medium text-2xl">
                Донатери будуть отримувати сповіщення про нагадування донатити
              </p>
              <p className="font-medium text-2xl">
                Донатери зможуть створити підписку на донати
              </p>
              <p className="font-medium text-2xl">
                Збори будуть закриватись поступово
              </p>
              <p className="font-medium text-2xl">
                Можливість додавати звіти та демонтсрувати скільки зборів було
                закрито саме волонтером
              </p>
            </div>

            <div className="text-white max-w-[514px]  flex flex-col gap-3">
              <h3 className="font-semibold text-4xl">Фонди</h3>
              <p className="font-medium text-2xl">
                Створення різноманітних зборів
              </p>
              <p className="font-medium text-2xl">
                Розбиття зборів на менші, аби інфлуенсери допомагали зі зборами
              </p>
              <p className="font-medium text-2xl">
                Регулярні донати завдяки підпискам та нагадування людям
              </p>
              <p className="font-medium text-2xl">
                Підвищення прозорості завдяки можливістю додавання звіту до
                кожного завершеного збору
              </p>
            </div>
          </div>
          <Button className="mt-14 w-[400px] self-center bg-white">
            Долучитись
          </Button>
        </div>
      </div>
    </div>
  );
}
