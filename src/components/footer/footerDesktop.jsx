import { Link } from "react-router-dom"

const FooterDesktop = () => {
    const menu = [
        {link: "Home", route: "/"},
        {link: "About", route: "/"},
        {link: "Services", route: "/services"},
        {link: "Portafolio", route: "/"}
    ]
    return(
        <footer className="flex flex-col justify-center h-[150px] p-8 dark:bg-primary-color-dm">
            <div className="flex py-8 px-4 justify-around">
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
                    <input type="text" placeholder="Your Email" />
                    <button>Suscribe</button>
                </div>
            </div>

            <div className="flex flex-col dark:text-white">
                <div className="mb-8">
                    <div className="h-[1px] flex-grow bg-gray-500 mx-10"></div>
                </div>

                <div className="flex justify-between mx-14">
                    <div>
                        <h1>© 2023 Tech Masters Web, All rights reserved.</h1>
                    </div>
                    <div className="flex gap-6">
                        <p>facebook</p>
                        <p>facebook</p>
                        <p>facebook</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterDesktop