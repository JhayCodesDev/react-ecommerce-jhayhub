export function Button({children, className = "", ...props}) {
  return (
    <button
      className={`btn-primary cust-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}