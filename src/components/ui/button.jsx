import React from 'react';

const variants = {
  default: 'btn btn-default',
  destructive: 'btn btn-destructive',
  outline: 'btn btn-outline',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-ghost',
  link: 'btn btn-link',
};

const sizes = {
  default: 'btn-md',
  sm: 'btn-sm',
  lg: 'btn-lg',
  icon: 'btn-icon',
};

export function Button({ variant = 'default', size = 'default', className = '', asChild, children, ...props }) {
  const classes = `${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`.trim();
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: classes, ...props });
  }
  return <button className={classes} {...props}>{children}</button>;
}
