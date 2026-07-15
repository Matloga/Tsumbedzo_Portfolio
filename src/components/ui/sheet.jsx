import { useState, createContext, useContext, useCallback } from 'react';
import { X } from 'lucide-react';

const SheetContext = createContext();

export function Sheet({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({ children, asChild }) {
  const { setOpen } = useContext(SheetContext);
  if (asChild) {
    return <span onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>{children}</span>;
  }
  return <button onClick={() => setOpen(true)}>{children}</button>;
}

export function SheetContent({ side = 'right', children }) {
  const { open, setOpen } = useContext(SheetContext);
  if (!open) return null;
  return (
    <>
      <div className="sheet-overlay" onClick={() => setOpen(false)} />
      <div className={`sheet-content sheet-${side}`}>
        <button className="sheet-close" onClick={() => setOpen(false)}>
          <X size={16} />
        </button>
        {children}
      </div>
    </>
  );
}
