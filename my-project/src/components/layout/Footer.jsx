import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Our Products': [
      { label: 'Office Desks', href: '#' },
      { label: 'Ergonomic Chairs', href: '#' },
      { label: 'Storage Solutions', href: '#' },
    ],
    'Categories': [
      { label: 'Lighting', href: '#' },
      { label: 'Accessories', href: '#' },
      { label: 'Workstations', href: '#' },
    ],
    Resources: [
      { label: 'Buying Guide', href: '#' },
      { label: 'Setup Tips', href: '#' },
      { label: 'Warranty Info', href: '#' },
    ],
    Company: [
      { label: 'About OfficeHub', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    Support: [
      { label: 'Contact Us', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-neutral-100 py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg text-neutral-900 mb-4">OfficeHub</p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">instagram</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">facebook</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">twitter</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">linkedin</a>
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
