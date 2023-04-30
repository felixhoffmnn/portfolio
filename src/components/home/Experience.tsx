import { IExperience } from "@/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function Experience({ item }: { item: IExperience }): JSX.Element {
  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center justify-between gap-1">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">
          {item.startDate} - {item.endDate}
        </p>
      </div>
      <p className=" text-sm text-cyan-500">{item.location}</p>
      <ul className="list-inside list-disc">
        {item.description.map((item) => (
          <li key={`key-${item}`}>{item}</li>
        ))}
      </ul>
      {item.skills && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.skills.map((item) => (
            <Badge variant="secondary" key={`key-${item}`}>
              {item}
            </Badge>
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
      {showMore && (
        <div className="mt-16 space-y-16">
          {details.slice(defaultNumEntries).map((item) => (
            <Experience item={item} key={`key-${item.name}`} />
          ))}
        </div>
      )}
      <Button className="mt-8 gap-2 p-0" variant="link" onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <ArrowUp size={iconSize} aria-label="Mehr Anzeigen Icon" />
        ) : (
          <ArrowDown size={iconSize} aria-label="Mehr Anzeigen Icon" />
        )}
        {showMore ? "Weniger Anzeigen" : "Mehr Anzeigen"}
      </Button>
    </>
  );
}
