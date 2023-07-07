import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {CONFIG} from "../../config.js";
import useApi from "../../hooks/useApi.js";
import Title from "../../components/Title.jsx";
import ProductForm from "../../components/Forms/ProductForm.jsx";

const ProductView = () => {
    const [saved, setSaved] = useState(true)
    const [isSend, setIsSend] = useState(false)
    const {id} = useParams()
    const api = useApi()
    const [product, setProduct] = useState({});

    const updateData = (values) => {
        setIsSend(true)
        api.post(`${CONFIG.api.baseUrl}/product`, values)
            .then(res => {
                if(res.data.success){
                    setSaved(true)
                    divForm.current.firstChild.reset()
                    alert('se ha guardado el registro')
                    navigate('/product')
                }else{
                    setSaved(false)
                }
            })
    }
    useEffect(() => {
        api.get(`${CONFIG.api.baseUrl}/product/${id}`)
            .then(res => {
                if(res.data.success){
                    setProduct(res.data.data)
                }
            })
    }, [])
    return (
        <div className='h-full'>
            <Title title={'Ver producto'}/>
            <div>
                {
                    <ProductForm sendData={updateData} data={product} readOnly={true}/>
                }
            </div>
        </div>
    )
}

export default ProductView