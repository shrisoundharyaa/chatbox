const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const User = require('./models/User');
const Post = require('./models/Post');
const postRoutes = require('./routes/postRoutes');  // Import your post routes

const app = express();
app.use(cors());
app.use(express.json());

// Add the routes before starting the server
app.use('/api/posts', postRoutes);  // Use the post routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize.sync({ force: true }).then(() => {
    console.log('Tables created');
}).catch(err => console.log('Error: ' + err));

