const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('myDB', 'root', 'admin', {
  host: '127.0.0.1',
  dialect: 'mysql'
});
const userRoutes = require('./routes/userRoutes');
const faqRoutes = require('./routes/faqRoutes');
const seminarRoutes = require('./routes/seminarRoutes');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes); 
app.use('/api/faqs', faqRoutes);
app.use('/api/seminars', seminarRoutes);


sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const connectDB = require('./db');
// require('dotenv').config();

// //Routes
// const productRoutes = require('./routes/productRoutes');
// const coinRoutes = require('./routes/coinRoutes');

// const app = express();
// // console.log(process.env.MONGODB_URI);
// console.log(mongoose.version);
// app.use(cors());
// app.use(bodyParser.json());
// connectDB();

// // app.use('/api/products', productRoutes);
// app.use('/api/coins', coinRoutes);

// // app.get('/users', async (req, res) => {
// //   try {
// //     const users = await User.find();
// //     res.json(users);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server listening on port ${port}`));

