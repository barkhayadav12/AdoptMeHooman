const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const multer=require('multer')
const path = require("path");

//connecting to mongoose

const petModel=require('./models/info')
mongoose.connect('mongodb+srv://barkhayadav128:barkhayadav@furrymate.uctaxwm.mongodb.net/?retryWrites=true&w=majority')

const app=express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "Public/Images");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({
    storage: storage,
  });
  

app.post('/create',upload.single('photo'),(req,res)=>{
    petModel.create({name:req.body.name,age:req.body.age,email:req.body.email,city:req.body.city,state:req.body.state,country:req.body.country,contactNumber:req.body.contactNumber,sex:req.body.sex,petType:req.body.petType,petName:req.body.petName,petColor:req.body.petColor,petBreed:req.body.petBreed, photo: req.file.filename })
    .then(result=>res.json("Success"))
    .catch(err=>res.json(err))
})

app.get('/viewPost',(req,res)=>{
    petModel.find()
    .then((post)=>res.json(post))
    .catch(err=>res.json(err))
})

app.get('/adoptme/:id',(req,res)=>{
    const id=req.params.id;
    petModel.findById({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3000,()=>{
    console.log(`server is running on port 3000`);
})