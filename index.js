const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose")
const multer = require('multer');
const fileUpload = multer();
const cloudinary = require('cloudinary');
const eventoRoutes = require("./routes/eventosRoutes");

const app = express();
const port = 5001;
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://grupoWeb:grupoWeb@cluster0.1cxeafx.mongodb.net/examenWebReal").then(()=>
      console.log("Hemos conectado con mongoDB")
    ).catch((error)=>
      console.error(error)
    )
  
    app.use("/eventos", eventoRoutes);

  app.get("/",(req,res) =>{
    res.send("Esta es la API prueba")}
  )
  
  app.listen(port, console.log("Servidor Backend escuchando en el puerto ", port))