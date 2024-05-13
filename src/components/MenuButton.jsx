import { NavLink } from 'react-router-dom';

export default function MenuButton({ children, to }) {
  return (
    <NavLink
      to={to}
      className={
        'h-10 w-full max-w-56 border-2 border-gray-300 bg-transparent px-4 py-2 text-base text-text-200 hover:bg-transparent hover:text-text-100 '
      }
    >
      {children}
    </NavLink>
  );
}
