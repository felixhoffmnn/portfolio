import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? (storedTheme as "theme-light" | "dark" | "system") : "theme-light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    // Update theme state and the class on the body
    if (theme === "theme-light") {
      setThemeState("dark");
      document.body.classList.add("dark");
    } else if (theme === "dark") {
      setThemeState("theme-light");
      document.body.classList.remove("dark");
    }
  }

  return (
    <Button variant="ghost" size="icon-sm" aria-label="Theme Switch" onClick={() => toggleTheme()}>
      {theme === "theme-light" ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
}
