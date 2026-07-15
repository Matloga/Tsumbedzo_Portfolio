import { useState, useEffect, useCallback } from 'react';

let listeners = [];
let toasts = [];

function emitChange() {
  for (const listener of listeners) {
    listener(toasts);
  }
}

export function useToast() {
  const [localToasts, setLocalToasts] = useState(toasts);

  useEffect(() => {
    listeners.push(setLocalToasts);
    return () => {
      listeners = listeners.filter(l => l !== setLocalToasts);
    };
  }, []);

  const toast = useCallback(({ title, description, variant }) => {
    const id = Date.now().toString();
    toasts = [...toasts, { id, title, description, variant }];
    emitChange();
    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      emitChange();
    }, 5000);
  }, []);

  const dismiss = useCallback((id) => {
    toasts = toasts.filter(t => t.id !== id);
    emitChange();
  }, []);

  return { toasts: localToasts, toast, dismiss };
}
