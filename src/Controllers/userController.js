exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'User is created successfully' });
};
exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'User information' });
};
exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'User is deleted successfully' });
};
exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'User is updated successfully' });
};