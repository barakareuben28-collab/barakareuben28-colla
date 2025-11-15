import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Our Products': [
      { label: 'Favourite Things', href: '#' },
      { label: 'The Support Suite', href: '#' },
      { label: 'The Sales Suite', href: '#' },
    ],
    'Top Features': [
      { label: 'Support', href: '#' },
      { label: 'Guide', href: '#' },
      { label: 'Ticketing System', href: '#' },
    ],
    Resources: [
      { label: 'Knowledge Base', href: '#' },
      { label: 'Community Forums', href: '#' },
      { label: 'Help Desk Software', href: '#' },
    ],
    Company: [
      { label: 'Product Support', href: '#' },
      { label: 'Request Demo', href: '#' },
      { label: 'Library', href: '#' },
    ],
    'For Enterprise': [
      { label: 'About Us', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Investors', href: '#' },
      { label: 'Events', href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-neutral-100 py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg text-neutral-900 mb-4">weCan</p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">instagram</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">facebook</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">twitter</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">github</a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-semibold text-neutral-900 mb-4 text-sm">{category}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © {currentYear} NameBrand - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
