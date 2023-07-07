module.exports = (req, res) => {
    return res.status(404).json({
        success: false,
        error: 'Not found'
    });
}