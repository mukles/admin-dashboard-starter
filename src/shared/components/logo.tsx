import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { ENV } from "../constant";

// interface LogoProps {
//   src?: string;
//   alt?: string;
//   title?: string;
//   width?: number;
//   height?: number;
//   url?: string;
//   className?: string;
//   showTitle?: boolean;
// }

export default function Logo() {
  return (
    <Link to={`/`} className="flex items-center gap-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
          <Shield className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">
            {ENV.APP_NAME}
          </h1>
          <p className="text-xs text-muted-foreground">Management System</p>
        </div>
      </div>
    </Link>
  );
}
