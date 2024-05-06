import AboutCard from "./AboutCard";
import Title from "./Title";

const aboutCards = [
  {
    id: 1,
    title: "Швидкі та безпечні пожертви",
    description:
      "Зробіть пожертву кількома кліками за допомогою зручних інструментів Trix Donation.",
  },
  {
    id: 2,
    title: "Відстежуйте вплив ваших пожертв",
    description:
      "Завдяки детальним звітам ви можете бачити, як використовуються ваші кошти",
  },
  {
    id: 3,
    title: "Підтримуйте справи, які вам близькі",
    description:
      "Знайдіть збори коштів на різноманітні благодійні цілі, які відповідають вашим інтересам.",
  },
  {
    id: 4,
    title: "Досягніть більшої аудиторії",
    description:
      "Опублікуйте свій збір коштів на платформі та отримайте доступ до широкої спільноти потенційних донорів.",
  },
  {
    id: 5,
    title: "Легко створюйте та керуйте зборами коштів",
    description:
      "Зручний інтерфейс  дозволяє швидко створити та керувати збором коштів",
  },
  {
    id: 6,
    title: "Підвищуйте довіру до своєї діяльності",
    description:
      "Прозорі звіти та система верифікації допоможуть вам підвищити довіру потенційних донорів.",
  },
];

function About() {
  return (
    <div id="about" className="max-w-screen-xl mx-auto">
      <Title>
        <span className="text-primary-200">Trix Donation </span> – Платформа для
        легкого та надійного збору коштів!
      </Title>
      <div className="grid grid-cols-3 gap-7 mt-14">
        {aboutCards.map((element) => (
          <AboutCard key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
}

export default About;
