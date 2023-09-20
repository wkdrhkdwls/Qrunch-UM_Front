import React from 'react';

function Sidebar() {
  const hrefLink = [
    { id: 1, text: 'PDF' },
    { id: 2, text: 'URL' },
    { id: 3, text: 'TEXT' },
  ];

  return (
    <div id="sidebar" className={`z-5 px-12  bg-[#21201E] w-[274px] h-full left-0 top-0 sm:h-16 sm:w-full fixed`}>
      <ul className="text-center font-bold text-[#FCE850] mt-20 text-2xl sm:text-[16px]  sm:-mt-4  sm:flex sm:flex-row sm:justify-between ">
        {hrefLink.map((link) => (
          <button key={link.id} className="flex flex-col my-8 sm:ml-2">
            {link.text}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
