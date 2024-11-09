const User = require('../models/userModel');
const Transaction = require('../models/transactionModel');


exports.topup = async (req, res, next) => {
  try {
    const { user_id, amount } = req.body;

    if (amount <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }

    let user = await User.findOne({ where: { user_id } });
    
    if (!user) {
      user = await User.create({
        user_id,
        balance: 0, 
      });
    }

    user.balance += amount;
    await user.save();

    const transaction = await Transaction.create({
      user_id,
      amount,
      type: 'topup',
    });

    res.status(200).json({
      message: 'Top-up successful',
      new_balance: user.balance,
      transaction_id: transaction.id, 
    });
  } catch (err) {
    next(err);
  }
};


exports.deduct = async (req, res, next) => {
  const { user_id, amount } = req.body;
  try {
    if (amount <= 0) throw new Error('Amount must be greater than 0');

    const user = await User.findOne({ where: { user_id } });
    if (!user || user.balance < amount) throw new Error('Insufficient balance');

    user.balance -= amount;
    await user.save();

    const transaction = await Transaction.create({ user_id, amount, type: 'deduct' });

    res.status(200).json({
      status: true,
      new_balance: user.balance,
      transaction_id: transaction.id,
    });
  } catch (error) {
    next(error);
  }
};

exports.getBalance = async (req, res, next) => {
  const { user_id } = req.query;
  try {
    const user = await User.findOne({ where: { user_id } });
    if (!user) throw new Error('User not found');

    res.status(200).json({ balance: user.balance });
  } catch (error) {
    next(error);
  }
};
