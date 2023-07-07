const { check } = require('express-validator')

const createProductSchema= [
    check('name').exists().isLength({ min: 3 }),
    check('reference').exists(),
    check('price').exists(),
    check('weight').exists(),
    check('category').exists(),
    check('stock').exists().isNumeric()
]
const getProductSchema = [
    check('id').exists().isNumeric()
]
module.exports = {
    createProductSchema,
    getProductSchema
}