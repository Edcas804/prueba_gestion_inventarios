import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../Home";
import Product from "../Product";
import ProductNew from "../Product/ProductNew";
import ProductView from "../Product/ProductView";
import ProductUpdate from "../Product/ProductUpdate";

/**
 * Main app router
 * @type {Router}
 */
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/product" element={<Product />} />
                <Route path="/product/new" element={<ProductNew />}/>
                <Route path="/product/:id" element={<ProductView />}/>
                <Route path="/product/update/:id" element={<ProductUpdate />}/>
            </Route>
            <Route path="*" element={<p>Not Found 404</p>}/>
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App