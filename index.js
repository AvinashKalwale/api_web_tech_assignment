const express = require('express');
const mongoose = require('mongoose');
const PORT = 3005;

const postRoutes = require("./routes/postdata")
const getRoutes = require("./routes/getData")

const app = express();
mongoose.connect('mongodb://localhost:27017', () => console.log('Database is connected'))


// app.listen(PORT, () => console.log('Server is on PORT', PORT));
app.use("/",postRoutes);
app.use("/",getRoutes);

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})

 