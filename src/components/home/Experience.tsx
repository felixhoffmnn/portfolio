import { IExperience } from "@types";
import { useState } from "react";

export function Experience({ item }: { item: IExperience }): JSX.Element {
  return (
    <div className="my-16 grid gap-3">
      <div className="flex flex-wrap items-center justify-between gap-1">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-sm text-zinc-500">
          {item.startDate} - {item.endDate}
        </p>
      </div>
      <p className=" text-sm text-cyan-500 dark:text-cyan-400">{item.location}</p>
      <ul className="list-inside list-disc">
        {item.description.map((item) => (
          <li className="text-zinc-800 dark:text-zinc-300" key={`key-${item}`}>
            {item}
          </li>
        ))}
      </ul>
      {item.skills && (
        <div className="mt-2 flex flex-wrap">
          {item.skills.map((item) => (
            <span
              className="mb-2 mr-2 rounded-full bg-zinc-200 px-3 py-1 text-sm dark:bg-zinc-700 dark:text-zinc-200"
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
        className="absolut dark:text-gray inline-flex -translate-y-8 items-center text-center text-sm font-semibold"
        onClick={() => setShowMore(!showMore)}
      >
        <svg
          className="mr-2 h-4 w-4"
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
