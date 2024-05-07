import { Link } from 'react-router-dom';

export default function Button({ children, className, to, ...props }) {
  let classes =
    className +
    '  bg-primary-200 p-2 py-5 rounded-md uppercase font-medium text-text-100  transition hover:scale-105 hover:bg-accent-200 flex items-center justify-center ' +
    className;
  return to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
