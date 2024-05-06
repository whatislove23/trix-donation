import AnimatedNumbers from "react-animated-numbers";
export default function Stast() {
  return (
    <div id="stats" className="bg-gradient-to-r from-primary-100 to-accent-200 h-44 flex items-center">
      <div className="max-w-screen-xl mx-auto flex w-full justify-between">
        <div className="flex flex-col items-center">
          <AnimatedNumbers
            className="w-full h-16"
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            animateToNumber={200}
            fontStyle={{ fontWeight: 800, fontSize: 48, color: "#333333" }}
          />
          <p className="text-text-200 font-semibold text-2xl">
            Верифікованих волонтерів
          </p>
        </div>
        <div className="flex flex-col items-center">
          <AnimatedNumbers
            className="w-full h-16"
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            animateToNumber={100}
            fontStyle={{ fontWeight: 800, fontSize: 48, color: "#333333" }}
          />
          <p className="text-text-200 font-semibold text-2xl">
            Відкритих зборів
          </p>
        </div>
        <div className="flex flex-col items-center">
          <AnimatedNumbers
            className="w-full h-16"
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            animateToNumber={200}
            fontStyle={{ fontWeight: 800, fontSize: 48, color: "#333333" }}
          />
          <p className="text-text-200 font-semibold text-2xl">
            Завершених зборів
          </p>
        </div>
        <div className="flex flex-col items-center">
          <AnimatedNumbers
            className="w-full h-16"
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            animateToNumber={200000}
            fontStyle={{ fontWeight: 800, fontSize: 48, color: "#333333" }}
          />
          <p className="text-text-200 font-semibold text-2xl">
            Гривень зібрано
          </p>
        </div>
      </div>
    </div>
  );
}
