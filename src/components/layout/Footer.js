import React from 'react';

const Footer = () => {
  return (
    <footer className="clear-both mt-auto bg-slate-200 dark:bg-slate-700 p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex sm:flex-row sm:justify-between flex-col items-center gap-2">
          <h1>
            طراحی فرانت با &#10084;&#65039; توسط
            <a
              href="mailto:dev.mahdisaadat@gmail.com"
              className="mx-2 text-yellow-500 font-semibold dark:hover:opacity-80 hover:text-yellow-300 transition-all"
            >
              Mehtix
            </a>
          </h1>
          <h1>
            طراحی بکند با &#10084;&#65039; توسط
            <a
              href="mailto:msn.zmt81@gmail.com"
              className="mx-2 text-yellow-500 font-semibold dark:hover:opacity-80 hover:text-yellow-300 transition-all"
            >
              MsnzmT
            </a>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
