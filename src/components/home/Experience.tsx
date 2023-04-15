import { IExperiences } from "@types";

export function Experience({ title, details }) {
  return (
    <section class="flex flex-col items-start justify-between dark:text-light sm:flex-row">
      <h2 class="mt-16 w-[15rem]">{title}</h2>
      <div class="w-full">
        {
          details.map((item) => (
            <div class="my-16">
              <div class="flex flex-wrap items-center justify-between">
                <h3 class="text-xl font-semibold">{item.name}</h3>
                <p class="dark:text-gray text-sm">
                  {item.startDate} - {item.endDate}
                </p>
              </div>
              <p class="!text-blue mt-3 text-sm">{item.location}</p>
              <ul class="mt-3 list-inside list-disc">
                {item.description.map((item) => (
                  <li class="dark:text-gray">{item}</li>
                ))}
              </ul>
              {item.skills && (
                <div class="mt-3 flex flex-wrap">
                  {item.skills.map((item) => (
                    <span class="dark:text-gray mb-2 mr-2 rounded-full bg-zinc-200 px-2 py-1 text-sm dark:bg-zinc-800">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        }
      </div>
    </section>
  );
}
