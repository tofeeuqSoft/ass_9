exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'SubAdmin is created successfully' });
};
exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'SubAdmin information' });
};
exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'SubAdmin is deleted successfully' });
};
exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', message: 'SubAdmin is updated successfully' });
};