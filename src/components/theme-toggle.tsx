import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const THEME_KEY = "asif-portfolio-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    const dark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const dark = !current;
      document.documentElement.classList.toggle("dark", dark);
      window.localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
      return dark;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-background text-foreground pop-shadow transition-[transform,box-shadow,background-color] duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={2.5} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={2.5} />
      )}
    </button>
  );
}
