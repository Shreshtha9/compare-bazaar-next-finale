'use client'
import React from 'react';
import '../styles/Dropdown.css';
import Link from 'next/link';

const Dropdown = ({ activeDropdown, isMobile, setActiveDropdown, activeNavItem }) => {
  const allSectionsContent = [
    {
      id: 'marketing',
      title: "Marketing",
      items: [
        { name: "Best CRM Software", link: "/Marketing/Best-crm-software" },
        { name: "Best Email Marketing Services", link: "/Marketing/Best-email-marketing-services" },
        { name: "Best Website Building Platforms", link: "/Marketing/Best-website-building-platform" }
      ]
    },
    {
      id: 'technology',
      title: "Technology",
      items: [
        { name: "Business Phone Systems", link: "/Technology-main/Business-phone-systems" },
        { name: "GPS Fleet Management Software", link: "/Technology-main/Business-phone-systems" },
        { name: "Best Employee Management Software", link: "/Technology-main/Business-phone-systems" },
        { name: "Best Payroll System", link: "/Technology-main/Business-phone-systems" }
      ]
    },
    
    {
      id: 'sales',
      title: "Sales",
      items: [
        { name: "Best CRM Software", link: "/Sales/Best-crm-software" },
        { name: "Best Call Center Management Software", link: "/Technology-main/Business-phone-systems" },
        { name: "Best Project Management Software", link: "/Technology-main/Business-phone-systems" }
      ]
    },
    {
      id: 'blog',
      title: "Resources",
      items: [
        { name: "WhitePaper", link: "#" },
        { name: "Blogs", link: "#" }
      ]
    },
    {
      id: 'contact',
      title: "Contact Us",
      items: [
        { name: "Contact", link: "#" },
        { name: "About us", link: "#" },
        { name: "Careers", link: "#" }
      ]
    }
  ];

  return (
    <>
    {/* Desktop dropdown */}
    {!isMobile && activeDropdown && (
      <div className="mega-dropdown" onMouseLeave={() => setActiveDropdown(null)}>
        <div className="mega-dropdown-inner">
          <div className="mega-dropdown-sections">
            {allSectionsContent.map((section) => (
              <div 
                key={section.id}
                className={`mega-dropdown-section ${activeNavItem === section.id ? 'active-section-group' : ''}`}
              >
                <h3 className={`mega-dropdown-title ${activeNavItem === section.id ? 'active-section' : ''}`}>
                  {section.title}
                </h3>
                <ul className="mega-dropdown-items">
                  {section.items.map((item) => (
                    <li key={item.link}>
                      {item.link.startsWith('http') ? (
                        <a 
                          href={item.link}
                          className="mega-dropdown-item"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="mega-dropdown-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Mobile dropdown */}
    {isMobile && activeDropdown && (
      <div className="mobile-dropdown">
        {allSectionsContent
          .find((section) => section.id === activeDropdown)
          ?.items.map((item) => (
            <div key={item.link} className="mobile-dropdown-item px-4 py-2 border-b">
              {item.link.startsWith('http') ? (
              <a 
                href={item.link}
                className="mega-dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveDropdown(null)}
              >
                {item.name}
              </a>
              ) : (
                <Link
                  href={item.link}
                  className="text-blue-600"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
      </div>
    )}
    </>
  );
};

export default Dropdown;