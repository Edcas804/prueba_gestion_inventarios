import {useEffect, useRef, useState} from "react"
import {useNavigate, useParams} from "react-router-dom";
import Title from "../../components/Title.jsx"
import useApi from "../../hooks/useApi.js";
import {CONFIG} from "../../config.js";
import ProductForm from "../../components/Forms/ProductForm.jsx";



const ProductUpdate = () => {
    const [saved, setSaved] = useState(true)
    const [isSend, setIsSend] = useState(false)
    const divForm = useRef(null)
    const {id} = useParams()
    const api = useApi()
    const navigate = useNavigate()
    const [product, setProduct] = useState({});

    const updateData = (values) => {
        setIsSend(true)

        api.post(`${CONFIG.api.baseUrl}/product/${id}`, values)
            .then(res => {
                if(res.data.success){
                    setSaved(true)
                    divForm.current.firstChild.reset()
                    alert('se ha actualizado el registro')
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
            <Title title={'Editar producto'}/>
            <div ref={divForm} >
                <ProductForm dataHandler={updateData} data={product} saved={saved} isSend={isSend}/>
            </div>
        </div>
    )
}
export default ProductUpdate
