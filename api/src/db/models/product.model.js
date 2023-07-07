const { Model, DataTypes, Sequelize } = require("sequelize")
const { Status } = require("./status.model")

const TABLE_NAME = "product"
const MODEL_NAME = "Product"

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    reference: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.STRING
    },
    weight: {
        allowNull: false,
        type: DataTypes.STRING
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        type: DataTypes.BIGINT,
        defaultValue: Status.STATUS_ACTIVE
    },
    lastSale: {
        allowNull: true,
        type: DataTypes.DATE,
        field: "last_sale"
    },
    createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: DataTypes.NOW
    }
}

class Product extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: MODEL_NAME,
            //schema: 'inventario',
            timestamps: false
        }
    }
}

module.exports = {
    TABLE_NAME,
    ProductSchema,
    Product
}
