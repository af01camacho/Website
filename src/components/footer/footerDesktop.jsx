import { Link } from "react-router-dom";

const FooterDesktop = () => {
  const menu = [
    { link: "Home", route: "/" },
    { link: "About", route: "/" },
    { link: "Services", route: "/services" },
    { link: "Portafolio", route: "/" },
  ];
  return (
    <footer className="flex flex-col justify-center h-[180px] p-8 dark:bg-primary-color-dm">
      <div className="flex py-8 px-4 justify-around items-center">
        <div className="dark:text-white">
          <h1>LOGO</h1>
        </div>
        <div>
          <ul className="flex gap-6 dark:text-white">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.route}>{item.link}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="dark:text-white dark:bg-gray-500 border rounded-md border-gray-200 dark:border-none">
          <input  type="text" className="py-2 px-2 outline-none bg-transparent" placeholder="Your Email" />
          <button className="px-4 py-2 bg-btn-color rounded-md text-white">Suscribe</button>
        </div>
      </div>

      <div className="flex flex-col text-gray-500 dark:text-white mb-8">
        <div className="mb-8">
          <div className="h-[1px] bg-gray-500 flex-grow  mx-10"></div>
        </div>

        <div className="flex justify-between mx-14 text-sm items-center">
          <div>
            <p className="">
              © 2023 Tech Masters Web, All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <p className="">Facebook</p>
            <p className="">Instagram</p>
            <p className="">Github</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
