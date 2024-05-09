import { NavLink } from 'react-router-dom';

export default function NavBtn({ children, to }) {
  const linkStyle =
    'text-200 w-full border-2  border-bg-300 p-2  text-center font-medium uppercase  rounded-lg ';
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? linkStyle + 'border-accent-200 bg-primary-100 text-text-100' : linkStyle
      }>
      {children}
    </NavLink>
  );
}
