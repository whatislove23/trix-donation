import AnimatedNumbers from "react-animated-numbers";
export default function StatsItem({ number, fontSize, description }) {
  return (
    <div className="flex w-min flex-col items-center justify-center">
      <AnimatedNumbers
        includeComma
        className="w-full lg:h-16"
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={number}
        fontStyle={{
          fontWeight: 800,
          fontSize: fontSize,
          color: "#333333",
        }}
      />
      <p className="text-center text-xs font-semibold text-text-200 md:text-xl lg:text-2xl">
        {description}
      </p>
    </div>
  );
}
