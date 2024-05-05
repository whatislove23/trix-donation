export default function AboutCard({ title, description }) {
  return (
    <div className="bg-bg-200  rounded-lg flex overflow-hidden gap-2 shadow-lg">
      <div className="w-5 bg-bg-300"></div>
      <div className="flex flex-col gap-2 my-5 mr-5 w-full">
        <h3 className="text-text-100 font-semibold text-2xl">{title}</h3>
        <p className="text-text-200 font-medium text-xl">{description}</p>
      </div>
    </div>
  );
}
