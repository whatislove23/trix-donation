export default function Title({ children, className }) {
  const style =
    "text-text-100 text-2xl md:text-3xl lg:text-[40px] text-center font-semibold uppercase " +
    className;
  return <h2 className={style}>{children}</h2>;
}
