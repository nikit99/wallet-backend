module.exports = (req, res, next) => {
    const { user_id, amount } = req.body;
    if (!user_id || (amount !== undefined && typeof amount !== 'number')) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    next();
  };
  