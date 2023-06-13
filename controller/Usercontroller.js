const { User } = require('../models/model');

const UserController = {
  getAll: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req, res) => {
    var user = new User({
      title: req.body.title,
      category: req.body.category,
      time: req.body.time,
      date: req.body.date,
      completed: req.body.completed,
      note: req.body.note,
    });

    user.save()
      .then((savedUser) => {
        res.json(savedUser);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  
  update: (req, res) => {
    const userId = req.params.id;
    User.findByIdAndUpdate(userId, req.body, { new: true })
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    const userId = req.params.id;
    console.log(userId);

    User.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },delete: (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
      .then((deletedUser) => {
        if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(deletedUser);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
}

module.exports = UserController;
