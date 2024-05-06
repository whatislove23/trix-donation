export default function AboutCard({ title, description }) {
  return (
    <div className="flex  gap-2 overflow-hidden rounded-lg bg-bg-200 shadow-lg">
      <div className="w-2 bg-bg-300 md:w-5"></div>
      <div className="my-2 mr-5 flex  w-full flex-col gap-2  md:my-5 md:mr-5">
        <h3 className="text-xl font-semibold text-text-100 md:text-2xl">
          {title}
        </h3>
        <p className="text-xl font-medium text-text-200">{description}</p>
      </div>
    </div>
  );
}
