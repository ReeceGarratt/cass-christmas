import React, { useState } from 'react';
import Drawer from './Drawer';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const HamburgerNav: React.FC<{ base: string }> = ({ base }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="hamburger-btn"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span className="material-icons" aria-hidden="true">menu</span>
      </button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        navLinks={NAV_LINKS.map(l => {
          // Remove trailing slash from base (unless it's just '/')
          const cleanBase = base === '/' ? '' : base.replace(/\/$/, '');
          // Remove leading slash from path (unless root)
          const path = l.href === '/' ? '' : l.href.replace(/^\//, '');
          return {
            ...l,
            href: cleanBase + (path ? `/${path}` : '/')
          };
        })}
      />
    </>
  );
};

export default HamburgerNav;
