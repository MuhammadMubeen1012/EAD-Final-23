const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectToDB = require("./config/database");
const Recipe = require('./models/Recipe')
const multer = require('multer');
const cors = require("cors");

dotenv.config({ path: "./config/.env" });

app.use(express.json());

connectToDB()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + "." + file.originalname.split(".")[1]
    );
  },
});

let upload = multer({ storage }).single("image");

//routes and function 
app.get("/recipes" , async (req,res) => {
    // res.send("Getting Recipes")

    const recipes = await Recipe.find()

    if(recipes){
        res.status(200).json({
            success: true, 
            recipes: recipes
        })
    } else {
        res.status(400).json({
            success: false
        })
    }
})

app.get("/recipe/:id" , async (req,res) => {
    // res.send("Get recipe by ID")
    const recipe = await Recipe.findById(req.params.id)

    if(recipe){
        res.status(200).json({
            success: true, 
            recipe: recipe
        })
    } else {
        res.status(400).json({
          success: false,
        });
    }
})

app.get("/recipe/search", async (req, res) => {
  // res.send("Get recipe by ID")
  const recipe = await Recipe.find({title: req.body.title});

  if (recipe) {
    res.status(200).json({
      success: true,
      recipe: recipe,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});


app.post("/recipe/add", async (req, res) => {
//   res.send("Adding Recipe");

    const data = {
        title: req.body.title,
        description: req.body.description, 
        ingredients: req.body.ingredients, 
        instructions: req.body.instructions, 
        image: req.body.image
    }

    const recipe = await Recipe.create(data)

    if(recipe){
        res.status(200).json({
            success: true
        })
    } else {
        res.status(400).json({
          success: false,
        });
    }
});

app.put("/recipe/update/:id", upload , async (req, res) => {
//   res.send("Updating Recipes");

    const data = {
      title: req.body.title,
      description: req.body.description,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      image: req.body.image,
    };

    const recipe = await Recipe.findByIdAndUpdate(req.params.id , data)

    if (recipe) {
      res.status(200).json({
        success: true,
        recipe: recipe
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }

});

app.delete("/recipe/delete/:id", async (req, res) => {
//   res.send("Deleting Recipes");
const recipe = await Recipe.findByIdAndRemove(req.params.id , data)

    if (recipe) {
      res.status(200).json({
        success: true,
        recipe: recipe
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }


});


module.exports = app
