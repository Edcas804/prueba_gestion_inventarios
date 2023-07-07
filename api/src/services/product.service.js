const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Status } = require('../db/models/status.model');
class ProductService {

    constructor() {
        this.model = models.Product;
        this.defaultLimit = 5;
        this.visibleAttributes = [ 'id', 'name', 'reference', 'price', 'weight', 'category', 'stock', 'last_sale'];
    }


    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            throw boom.badData('Datos inválidos');
        }
    }

    async find(offset = null, limit = null) {
        try {
            return await this.model.findAll({
                where: {
                    status: Status.STATUS_ACTIVE,
                },
                attributes: this.visibleAttributes,
                order: [['id']],
                limit: limit,
                offset: offset,
            });
        } catch (error) {
            throw boom.notFound('Registro no encontrado');
        }
    }

    async findOne(id) {

        const data = await this.model.findByPk(id, {
            attributes: this.visibleAttributes
        });

        if (!data) {
            throw boom.notFound('Registro no encontrado');
        }
        return data;
    }

    async update(id, changes) {
        const model = await this.findOne(id);

        const updated = await model.update(changes);
        return { id: updated.id };
    }

    async delete(id) {
        await this.update(id, { status: Status.STATUS_INACTIVE });
    }
}

module.exports = ProductService;
