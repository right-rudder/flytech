import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function MobileNavbar({ navbarLinks }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 text-white bg-primary-600"
        aria-label="Toggle mobile menu"
      >
        {open ? "Close" : "Menu"}
      </button>

      <ul
        className={`absolute w-full bg-neutral-900 transition-max-h duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        {navbarLinks.map((item, index) => (
          <li key={index} className="border-b border-primary-50/20">
            <div
              className="flex justify-between p-5 cursor-pointer text-white"
              onClick={() => toggleSubmenu(index)}
            >
              <span>{item.name}</span>
              {item.submenu && (
                <IoIosArrowForward
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-90" : "-rotate-90"
                  }`}
                />
              )}
            </div>

            {item.submenu && (
              <ul
                className={`overflow-hidden transition-max-h duration-500 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {item.submenu.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="pl-5 py-2 border-b border-primary-50/20"
                  >
                    {sub.link ? (
                      <a href={sub.link}>{sub.name}</a>
                    ) : (
                      <span>{sub.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
