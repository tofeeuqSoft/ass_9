exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Post is created successfully' });
};
exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Post information' });
};
exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Post is deleted successfully' });
};
exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Post is updated successfully' });
};