export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-full bg-gray-900"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        style={{ width: size * 0.55, height: size * 0.55 }}
      >
        <path
          d="M6 13c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 13c0-1.7 1.3-3 3-3s3 1.3 3 3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="13.5" r="1.2" fill="white" />
      </svg>
    </div>
  );
}
