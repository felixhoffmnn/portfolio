import { IExperience } from "@/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export function Experience({ item }: { item: IExperience }): JSX.Element {
  return (
    <div className="mb-16 grid gap-3">
      <div className="flex flex-wrap items-center justify-between gap-1">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">
          {item.startDate} - {item.endDate}
        </p>
      </div>
      <p className=" text-sm text-accent-foreground">{item.location}</p>
      <ul className="list-inside list-disc">
        {item.description.map((item) => (
          <li className="text-zinc-800 dark:text-zinc-300" key={`key-${item}`}>
            {item}
          </li>
        ))}
      </ul>
      {item.skills && (
        <div className="mt-3 flex flex-wrap">
          {item.skills.map((item) => (
            <span className="mb-2 mr-2 rounded-full bg-muted px-3 py-1.5 text-sm shadow-sm" key={`key-${item}`}>
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
  const iconSize = 18;
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore && details.slice(defaultNumEntries).map((item) => <Experience item={item} key={`key-${item.name}`} />)}
      <Button className="-translate-y-8 gap-2 p-0" variant="link" onClick={() => setShowMore(!showMore)}>
        {showMore ? <ArrowUp size={iconSize} /> : <ArrowDown size={iconSize} />}
        {showMore ? "Weniger Anzeigen" : "Mehr Anzeigen"}
      </Button>
    </>
  );
}
