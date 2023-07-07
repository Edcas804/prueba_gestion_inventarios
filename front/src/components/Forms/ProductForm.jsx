import {Field, Form, Formik} from "formik";
import {ProductSchema} from "../../lib/schemas.js";
import {useEffect, useState} from "react";
import {object} from "yup";

const labels = {
    name: "Nombre",
    reference: "Referencia",
    category: "Categoría",
    stock: "Stock",
    weight: "Peso",
    price: "Precio",
}
const initialProduct = {
    name: "",
    reference: "",
    category: "",
    stock: "",
    weight: "",
    price: "",
}

const ProductForm = ({dataHandler, data = {}, saved = true, isSend = false, readOnly = false}) => {
    const [productValues, setProductValues] = useState(initialProduct);
    useEffect(() => {
        if (Object.entries(data).length !== 0) setProductValues(data)
    }, [data])
    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={productValues}
                validationSchema={ProductSchema}
                onSubmit={(values) => dataHandler(values)}
            >
                {({errors, touched}) => (
                    <Form
                        className="w-full grid grid-cols-12"
                    >
                        {
                            Object.keys(initialProduct).map(field => (
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4" key={field}>
                                    <label htmlFor="nombres"
                                           className='block capitalize col-span-12'>{labels[field]}: </label>
                                    <Field name={field} id={field} placeholder={labels[field]} readOnly={readOnly}/>
                                    {
                                        touched[field]
                                        && errors[field]
                                        && (<div className="showErrors"> {errors[field]}</div>)
                                    }
                                </div>
                            ))
                        }

                        <div className='col-span-12 flex items-center justify-center py-3'>
                            {isSend &&
                                <button type="submit" disabled>
                                    Enviando...
                                    <p className="sending">
                                        <i className="bi bi-arrow-clockwise"></i>
                                    </p>
                                </button>
                            }
                            {!isSend &&
                                <button type="submit" disabled={readOnly ?? false}>
                                    Guardar Datos
                                    <i className="bi bi-check2-circle"></i>
                                </button>
                            }
                            {!saved && (<div className="showErrors">
                                    Error al guardar, verifica la información e
                                    intenta nuevamente
                                </div>
                            )
                            }
                        </div>
                    </Form>)}
            </Formik>
        </>
    )
}

export default ProductForm