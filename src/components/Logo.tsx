type LogoProps = {
  /** Text color — defaults to brand blue. Use "white" for dark backgrounds. */
  variant?: 'default' | 'white';
  className?: string;
};

export default function Logo({
  variant = 'default',
  className = '',
}: LogoProps) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#3B5FE0';
  const dotColor = variant === 'white' ? '#FFFFFF' : '#3B5FE0';

  return (
    <div
      className={`inline-flex items-center gap-0.5 select-none ${className}`}
      aria-label="WebsiteVoice"
    >
      <span
        className="text-[22px] leading-none font-extrabold tracking-tight"
        style={{ color: textColor }}
      >
        Website
      </span>
      <span
        className="text-[22px] leading-none font-extrabold tracking-tight"
        style={{ color: textColor }}
      >
        Voice
      </span>
      {/* Speech bubble dot */}
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        className="ml-0.5 -mb-0.5"
        aria-hidden="true"
      >
        <path
          d="M7 0C3.13 0 0 2.91 0 6.5C0 8.83 1.32 10.87 3.32 12.05L2.5 15.5C2.43 15.79 2.74 16.02 2.99 15.86L7.5 13H7C10.87 13 14 10.09 14 6.5C14 2.91 10.87 0 7 0Z"
          fill={dotColor}
        />
      </svg>
    </div>
  );
}
