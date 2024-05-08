export default function Input({ type, placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={
        'w-full rounded-2xl border-2  border-bg-300 px-4 py-3 font-medium uppercase text-text-100 placeholder:text-xl placeholder:font-medium placeholder:uppercase ' +
        className
      }
    />
  );
}
