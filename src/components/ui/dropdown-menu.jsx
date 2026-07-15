import { useState, createContext, useContext } from 'react';

const DropdownContext = createContext();

export function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div style={{ position: 'relative', display: 'inline-flex' }}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({ children, asChild }) {
  const { open, setOpen } = useContext(DropdownContext);
  if (asChild) {
    return <span onClick={() => setOpen(!open)}>{children}</span>;
  }
  return <button className="dropdown-trigger" onClick={() => setOpen(!open)}>{children}</button>;
}

export function DropdownMenuContent({ children, align = 'start' }) {
  const { open, setOpen } = useContext(DropdownContext);
  if (!open) return null;
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setOpen(false)} />
      <div className="dropdown-content" style={align === 'end' ? { right: 0 } : { left: 0 }}>
        {children}
      </div>
    </>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  const { setOpen } = useContext(DropdownContext);
  return (
    <button className="dropdown-item" onClick={() => { onClick?.(); setOpen(false); }}>
      {children}
    </button>
  );
}
