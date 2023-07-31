import { Link } from "react-router-dom"

const FooterDesktop = () => {
    const menu = [
        {link: "Home", route: "/"},
        {link: "About", route: "/"},
        {link: "Services", route: "/services"},
        {link: "Portafolio", route: "/"}
    ]
    return(
        <footer className="flex flex-col justify-center h-[180px] p-8 dark:bg-primary-color-dm">
            <div className="flex py-8 px-4 justify-around items-center">
                <div className="dark:text-white">
                    <h1>LOGO</h1>
                </div>
                <div>
                    <ul className="flex gap-6 dark:text-white">
                        {menu.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to={item.route} >{item.link}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="dark:text-white">
                    <input type="text" className="py-2" placeholder="Your Email" />
                    <button className="px-4 py-2 bg-blue-500 text-white">Suscribe</button>
                </div>
            </div>

            <div className="flex flex-col dark:text-white mb-8">
                <div className="mb-8">
                    <div className="h-[1px] flex-grow bg-gray-500 mx-10"></div>
                </div>

                <div className="flex justify-between mx-14 items-center">
                    <div>
                        <p className="text-gray-500 text-sm">© 2023 Tech Masters Web, All rights reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        <p className="text-gray-500 text-sm">Facebook</p>
                        <p className="text-gray-500 text-sm">Instagram</p>
                        <p className="text-gray-500 text-sm">Github</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterDesktop