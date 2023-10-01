exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Admin is created successfully' });
};
exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Admin information' });
};
exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Admin is deleted successfully' });
};
exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'Admin is updated successfully' });
};