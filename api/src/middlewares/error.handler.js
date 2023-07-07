function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const {output} = err;
        const dataErrors = err.data ? err.data : [];
        return res
            .status(output.statusCode)
            .json({success: false, ...output.payload, data: dataErrors});
    } else {
        next(err);
    }
}

module.exports = {boomErrorHandler};