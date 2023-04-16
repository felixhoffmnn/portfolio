import { IExperience } from "@types";
import { useState } from "react";

export function Experience({ item }: { item: IExperience }): JSX.Element {
  return (
    <div className="my-16">
      <div className="flex flex-wrap items-center justify-between">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-sm dark:text-gray">
          {item.startDate} - {item.endDate}
        </p>
      </div>
      <p className="mt-3 text-sm !text-blue">{item.location}</p>
      <ul className="mt-3 list-inside list-disc">
        {item.description.map((item) => (
          <li className="dark:text-gray" key={`key-${item}`}>
            {item}
          </li>
        ))}
      </ul>
      {item.skills && (
        <div className="mt-3 flex flex-wrap">
          {item.skills.map((item) => (
            <span
              className="mb-2 mr-2 rounded-full bg-zinc-200 px-2 py-1 text-sm dark:bg-zinc-800 dark:text-gray"
              key={`key-${item}`}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ExperienceGroup({
  defaultNumEntries,
  details,
}: {
  defaultNumEntries: number;
  details: IExperience[];
}): JSX.Element {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore && details.slice(defaultNumEntries).map((item) => <Experience item={item} key={`key-${item.name}`} />)}
      <button
        type="button"
        className="inline-flex -translate-y-8 items-center text-center text-sm font-semibold dark:text-gray"
        onClick={() => setShowMore(!showMore)}
      >
        <svg
          className="-ml-1 mr-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {showMore ? (
            <path d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
        {showMore ? "Weniger Anzeigen" : "Mehr Anzeigen"}
      </button>
    </>
  );
}
