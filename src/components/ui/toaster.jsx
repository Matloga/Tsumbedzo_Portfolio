import { useToast } from '@/lib/use-toast';
import { X } from 'lucide-react';

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="toast-viewport">
      {toasts.map(({ id, title, description, variant }) => (
        <div key={id} className={`toast ${variant === 'destructive' ? 'toast-destructive' : ''}`}>
          <div>
            {title && <div className="toast-title">{title}</div>}
            {description && <div className="toast-description">{description}</div>}
          </div>
          <button className="toast-close" onClick={() => dismiss(id)}>
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
