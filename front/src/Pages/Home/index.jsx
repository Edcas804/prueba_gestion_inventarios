import {isTSIntersectionType} from "eslint-plugin-react/lib/util/ast.js";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center border-2 border-cyan-500 h-[500px] rounded-lg">
            <h1 className="text-8xl text-cyan-500">Sistema Gestión de inventarios</h1>
            <div className="flex gap-2 m-3">
                <button><NavLink to="/product">Gestión productos</NavLink></button>
                <button><NavLink to="/">Ventas</NavLink></button>
            </div>
        </section>
    )

}

export default Home