import React, { useEffect, useRef } from 'react';
const base = import.meta.env.BASE_URL;

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}


const Drawer: React.FC<DrawerProps> = ({ open, onClose, navLinks }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Auto-close on popstate (browser navigation)
  useEffect(() => {
    if (!open) return;
    const handlePopState = () => {
      onClose();
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [open, onClose]);


  // Focus trap, initial focus, and ESC to close
  useEffect(() => {
    if (!open) return;
    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        // Trap focus
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);

  // Auto-close instantly on any nav link click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();
  };

  return (
    <div
      className={`drawer-overlay${open ? ' open' : ''}`}
      aria-hidden={!open}
      tabIndex={-1}
    >
      <div
        className={`drawer${open ? ' open' : ''}`}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation menu"
        tabIndex={-1}
      >
        <button
          className="drawer-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <span className="material-icons" aria-hidden="true">close</span>
        </button>
        <nav className="drawer-nav" aria-label="Main navigation">
          <div className="w-[100px] h-[100px] bg-green-400 items-center justify-center flex rounded-full">
            <img
              className="w-[85px] h-[85px]"
              src={`${base}featured_seasonal_and_gifts.svg`}
              alt="Gift Icon"/>
          </div>
          <span>Graphic design is my passion</span>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick} tabIndex={open ? 0 : -1}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
