export function Label({ className = '', children, ...props }) {
  return <label className={`label ${className}`} {...props}>{children}</label>;
}
