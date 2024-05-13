export default function ValueBtn({ text, value, setValue, isSelected, ...props }) {
  const style = `rounded-lg border-2 border-bg-300 p-2 uppercase text-text-200  ${isSelected && 'border-primary-200 bg-primary-100 text-text-100'}`;
  return (
    <button className={style} onClick={() => setValue(value)} {...props}>
      {text}
    </button>
  );
}
