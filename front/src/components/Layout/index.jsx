import {Outlet} from "react-router-dom";
import Header from "../Header.jsx";

const Layout = () => {
    return (
        <div className="flex flex-col items-center box-border relative">
            <section
                className="flex flex-col w-5/6 white-bg p-2 box-border rounded-2xl relative">
                <Header/>
                <Outlet/>
            </section>
        </div>
    )
}

export default Layout
