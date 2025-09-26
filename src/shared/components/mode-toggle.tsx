import { Theme, useTheme } from "@/app/providers";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { JSX } from "react/jsx-runtime";

export function ModeToggle() {
  const { toggleTheme, theme } = useTheme();
  const handleThemeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX: x, clientY: y } = event;
    const newMode = event.currentTarget.value as Theme;
    toggleTheme(newMode, { x, y });
  };

  const icons: Record<Theme, JSX.Element> = {
    light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
    dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
    system: <Laptop className="h-[1.2rem] w-[1.2rem]" />,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          {icons[theme]}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Button
            value={"light"}
            className={"w-full cursor-pointer justify-start"}
            onClick={handleThemeToggle}
            variant={"ghost"}
          >
            Light
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            value={"dark"}
            className={"w-full cursor-pointer justify-start"}
            onClick={handleThemeToggle}
            variant={"ghost"}
          >
            Dark
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            value={"system"}
            className={"w-full cursor-pointer justify-start"}
            onClick={handleThemeToggle}
            variant={"ghost"}
          >
            System
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
