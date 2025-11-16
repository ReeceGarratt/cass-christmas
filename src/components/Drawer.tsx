import React, { useEffect, useRef } from 'react';


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

  // Focus trap and ESC to close
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
      style={{ display: open ? 'block' : 'none' }}
    >
      <div
        className={`drawer${open ? ' open' : ''}`}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <button
          className="drawer-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <span className="material-icons" aria-hidden="true">close</span>
        </button>
        <nav className="drawer-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
