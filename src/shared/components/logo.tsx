import { Link } from "@tanstack/react-router";

interface LogoProps {
  src?: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
  url?: string;
  className?: string;
  showTitle?: boolean;
}

export default function Logo(props: LogoProps) {
  const logo = {
    url: props.url ?? "/",
    src: props.src,
    alt: props.alt ?? "Logo",
    width: props.width ?? 150,
    height: props.height ?? 27,
    text: props.title ?? "Logo",
  };

  const logoSrc = logo.src;

  return (
    <Link to={`/`} className="flex items-center gap-2">
      {logoSrc && !props.showTitle ? (
        <img
          width={logo.width}
          height={logo.height}
          src={logoSrc}
          alt={logo.alt}
          className={props.className}
        />
      ) : (
        <h1 className={"text-2xl font-semibold"}>{logo.text}</h1>
      )}
    </Link>
  );
}
