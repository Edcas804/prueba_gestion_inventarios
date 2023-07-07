import {useEffect, useState} from "react";
import useApi from "../../hooks/useApi.js";
import {CONFIG} from "../../config.js";
import {NavLink, useLocation} from "react-router-dom";
import {
    TrashIcon,
    PencilSquareIcon,
    MagnifyingGlassIcon
} from "@heroicons/react/20/solid/index.js";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const {pathname} = useLocation()
    const api = useApi()
    const deleteItem = (e, id) => {
        e.preventDefault()
        if (confirm(`Seguro que desea eliminar el producto con id ${id}?`) == true) {
            console.log('eliminando', id)
            api.delete(`${CONFIG.api.baseUrl}/product/${id}`)
                .then(res => {
                    if (res.status === 204) {
                        alert('eliminado con exito')
                        setIsDeleted(id)
                    }else{
                        alert('no se pudo eliminar')
                    }
                })
        }

    }
    useEffect(() => {
        api.get(`${CONFIG.api.baseUrl}/product`)
            .then(res => {
                if (res.data.success) {
                    setProducts(res.data.data)
                }
            })
    }, [isDeleted])
    return (
        <>
            <div className="shadow-sm shadow-slate-400 rounded-lg p-3">
                <div className="flex">
                    <button className="m-3"><NavLink to={`${pathname}/new`}>Nuevo</NavLink></button>
                </div>
                <table className="w-full text-sm text-left text-gray-500 white-bg">
                    <thead className="text-xs uppercase text-white">
                        <tr className="bg-cyan-500">
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Nombre</th>
                            <th className="px-6 py-3">Categoría</th>
                            <th className="px-6 py-3">Precio</th>
                            <th className="px-6 py-3">Referencia</th>
                            <th className="px-6 py-3" className="px-6 py-3">Peso</th>
                            <th className="px-6 py-3">Stock</th>
                            <th className="px-6 py-3">Última venta</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="dark-color white-bg capitalize">
                    {
                        products.map((product) => (
                            <tr key={product.id} className="border-b-2 border-slate-200">
                                <td className="px-6 py-3">{product.id}</td>
                                <td className="px-6 py-3">{product.name}</td>
                                <td className="px-6 py-3">{product.category}</td>
                                <td className="px-6 py-3">{product.price}</td>
                                <td className="px-6 py-3">{product.reference}</td>
                                <td className="px-6 py-3">{product.weight}</td>
                                <td className="px-6 py-3">{product.stock}</td>
                                <td className="px-6 py-3">{product.last_sale ?? 'sin ventas'}</td>
                                <td className="px-6 py-3">
                                    <div className="flex gap-2">
                                        <NavLink to={`${pathname}/${product.id}`}>
                                            <MagnifyingGlassIcon className="w-5 text-cyan-500"></MagnifyingGlassIcon>
                                        </NavLink>
                                        <NavLink to={`${pathname}/update/${product.id}`}>
                                            <PencilSquareIcon className="w-5"></PencilSquareIcon>
                                        </NavLink>
                                        <span onClick={(e) => deleteItem(e,product.id)}>
                                            <TrashIcon className="w-5 text-red-500" ></TrashIcon>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Product