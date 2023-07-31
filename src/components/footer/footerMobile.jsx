import { Link } from "react-router-dom";

const FooterMobile = () => {
  const menu = [
    { link: "Home", route: "/" },
    { link: "About", route: "/" },
    { link: "Services", route: "/services" },
    { link: "Portafolio", route: "/" },
  ];

  return (
    <footer className="flex flex-col justify-center p-4 dark:bg-primary-color-dm">
      <div className="flex flex-col items-center justify-center pb-4">
        <h1 className="dark:text-white text-2xl font-bold mb-4">LOGO</h1>
        <ul className="flex gap-4 dark:text-white">
          {menu.map((item, index) => (
            <li key={index}>
              <Link to={item.route}>{item.link}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col dark:text-white">
        <div className="mb-4">
          <div className="h-[1px] w-full bg-gray-500"></div>
        </div>

        <div className="flex flex-col items-center">
          <input
            className="w-full px-2 py-1 mb-2"
            type="text"
            placeholder="Your Email"
          />
          <button className="px-4 py-2 bg-blue-500 text-white">Subscribe</button>
        </div>

        <div className="flex justify-center mt-4">
          <p className="text-gray-500 text-sm">© 2023 Tech Masters Web, All rights reserved.</p>
        </div>

        <div className="flex justify-center mt-2 gap-4">
          <p className="text-gray-500 text-sm">Facebook</p>
          <p className="text-gray-500 text-sm">Instagram</p>
          <p className="text-gray-500 text-sm">Github</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
