export function Input({ label, icon, rightIcon, ...props }) {
  return (
    <div className="relative">
      {icon && (
        <span className="text-secondary absolute top-1/2 left-4 -translate-y-1/2">
          {icon}
        </span>
      )}

      <input className="input-field w-full pr-11 pl-11" {...props} />

      {rightIcon && (
        <button
          type="button"
          className="text-secondary absolute top-1/2 right-4 -translate-y-1/2"
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
}
