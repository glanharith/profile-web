import { Link } from "react-scroll"

export default function Navbar() {
    return(
        <nav className="bg-white sticky top-0 z-50" style={{ paddingTop: 7, paddingLeft: 20, paddingBottom: 10, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:border-0" id="navbar-cta">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                    <button className="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-lg">
                    <Link
                        className="nav-txt"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Home
                    </Link>
                    </button>
                </li>
                <li>
                    <button className="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-lg">
                    <Link
                        className="nav-txt"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        About
                    </Link>
                    </button>
                </li>
                <li>
                    <button className="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-lg">
                    <Link
                        className="nav-txt"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Project
                    </Link>
                    </button>
                </li>
                </ul>
            </div>
        </nav>

    )
}