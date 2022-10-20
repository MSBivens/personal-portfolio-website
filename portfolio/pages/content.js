import ContentCard from "../components/ContentCard";
import { contents } from "../data";

export default function Content() {
  return (
    <div className="px-5 py-2 overflow-y-scroll flex flex-col flex-grow ">
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {contents.map((content) => (
          <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ContentCard content={content} key={content.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
