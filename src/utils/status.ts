export type ProjectStatus = "progress" | "done" | "planned";

export const statusConfig: Record<ProjectStatus, { label: string; colorClass: string }> = {
  progress: { label: "Aktiv", colorClass: "bg-status-progress/90" },
  done: { label: "Abgeschlossen", colorClass: "bg-status-done/90" },
  planned: { label: "Geplant", colorClass: "bg-status-planned/90" },
};
