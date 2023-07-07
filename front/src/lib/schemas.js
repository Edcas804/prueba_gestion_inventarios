import * as Yup from "yup"
export const ProductSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "Demasiado corto")
        .max(60, "Demasiado largo")
        .required("Requerido"),
    reference: Yup.string()
        .min(4, "Demasiado corto")
        .max(60, "Demasiado largo")
        .required("Requerido"),
    weight: Yup.string()
        .min(1, "Demasiado corto")
        .max(10, "Demasiado largo")
        .required("Requerido"),
    category: Yup.string().max(100, "Demasiado largo").required("Requerido"),
    price: Yup.string().max(50, "Demasiado largo").required("Requerido"),
    stock: Yup.number().required("Requerido").integer("Solo es posible ingresar números").positive("Solo números positivos"),
})