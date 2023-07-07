import {useRef, useState} from "react"
import {useNavigate} from "react-router-dom";
import Title from "../../components/Title.jsx"
import useApi from "../../hooks/useApi.js";
import {CONFIG} from "../../config.js";
import ProductForm from "../../components/Forms/ProductForm.jsx";



const ProductNew = () => {
    const [saved, setSaved] = useState(true)
    const [isSend, setIsSend] = useState(false)
    const divForm = useRef(null)
    const api = useApi()
    const navigate = useNavigate()

    const sendData = (values) => {
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
    return (
        <div className='h-full'>
            <Title title={'Nuevo producto'}/>
            <div ref={divForm} >
                <ProductForm dataHandler={sendData} saved={saved} isSend={isSend}/>
            </div>
        </div>
    )
}
export default ProductNew