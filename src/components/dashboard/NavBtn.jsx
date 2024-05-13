import { NavLink } from 'react-router-dom';

export default function NavBtn({ children, to, className, ...props }) {
  const linkStyle =
    'text-200 w-full border-2 p-2  text-center font-medium uppercase  rounded-lg text-text-200 ' +
    className;
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) =>
        isActive
          ? linkStyle + '  border-accent-100 bg-primary-100  text-text-100'
          : linkStyle + '  border-bg-300 '
      }
    >
      {children}
    </NavLink>
  );
}
