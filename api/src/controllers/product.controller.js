const express = require('express');
const boom = require('@hapi/boom');
const ProductService = require('../services/product.service');
const {validationResult} = require('express-validator');
const service = new ProductService();
async function get(req, res, next) {
    try {
        const data = await service.find();
        res.json({success: true, totalRecords: data.length, data: data});
    } catch (error) {
        next(error);
    }
}
async function getById(req, res, next) {
    try {
        const { id } = req.params;
        if(isNaN(id)){
            throw boom.badRequest('invalid params')
        }
        const Contact = await service.findOne(id);
        res.json({ success: true, data: Contact });
    } catch (error) {
        next(error);
    }
}
async function getByPage(req, res, next) {
    try {
        const {page} = req.params;
        if(isNaN(page)){
            throw boom.badRequest('invalid params')
        }
        const offset =
            page >= 1 ? page * service.defaultLimit - service.defaultLimit : null;
        const models = await service.find(offset, service.defaultLimit);
        const count = await service.find();
        res.json({
            success: true,
            totalRecords: count.length,
            recordsDisplayed: models.length,
            data: models,
        });
    } catch (error) {
        next(error);
    }
}

async function store(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw boom.badData('Datos erroneos...', errors.array());
        }
        const body = req.body;
        const data = await service.create(body);
        res.status(200).json({success: true, data: data});
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const {id} = req.params;
        const body = req.body;
        const data = await service.update(id, body);
        res.status(201).json({success: true, data: data});
    } catch (error) {
        next(error);
    }
}

async function _delete(req, res, next) {
    try {
        const {id} = req.params;
        await service.delete(id);
        res.status(204).json({id});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    get,
    store,
    update,
    _delete,
    getById,
    getByPage
};