import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full border-b-2 border-slate-200 mb-5">
            <nav>
                <ul className="flex gap-4 py-4 px-1">
                    <li className="hover:underline">
                        <NavLink to="/">INICIO</NavLink>
                    </li>
                    <li className="hover:underline">
                        <NavLink to="/product">GESTIÓN PRODUCTOS</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header