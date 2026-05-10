type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-[28%] bg-logo-gradient font-extrabold leading-none text-white shadow-glow ${className ?? ''}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.42,
        letterSpacing: '-0.04em',
      }}
    >
      FE
    </span>
  );
}
