const variants = {
  default: 'badge badge-default',
  secondary: 'badge badge-secondary',
  destructive: 'badge badge-destructive',
  outline: 'badge badge-outline',
};

export function Badge({ variant = 'default', className = '', children, ...props }) {
  return <span className={`${variants[variant] || variants.default} ${className}`} {...props}>{children}</span>;
}
