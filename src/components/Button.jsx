export default function Button({ children, className }) {
  let classes =
    className +
    "  bg-primary-200 p-2 py-5 rounded-md uppercase font-medium text-text-100  transition hover:scale-105 hover:bg-accent-200 flex items-center justify-center " +
    className;
  return <button className={classes}>{children}</button>;
}
