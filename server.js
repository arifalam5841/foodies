// const { profile } = require('console');
// const { Cipher } = require('crypto');
let express = require("0express");
let app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;
// listing server
let server = app.listen(port, () => {
  console.log("Foodies");
});

let fs = require("fs");
// const { SocketAddress } = require("net");
const path = require("path"); //" VERY IMPORTAN " , BY USING THIS WE CAN INCULDE ANY 'FILE' WHITOUT READING THAT FILE BY 'fs'
// const { isUint16Array } = require("util/types");
let io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: "https://foodies-mu-nine.vercel.app/", // Replace with your Vercel URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

let home = path.join(__dirname, "./public"); // "__dirname" is for just a 'FOLDER' , for a file - "__filename"
app.use(express.static(home));

app.get("/", (req, res) => {
  res.send("ERROR 404");
});

// # =============== ITEMS LIST start ================  #

const items = [
  // { image: '', name: '', price: 0, cutted_price: 0, category: 'non-veg', qty_for: 0, restasurant_name: 'Aysha' },
  // { image: '', name: '', price: 0, cutted_price: 0, category: 'cold drink', qty_for: 0, restasurant_name: 'Aysha' },
  // { image: '', name: '', price: 0, cutted_price: 0, category: 'veg', qty_for: 0, restasurant_name: 'Aysha' },

  // ====================== AYSHA RESTAURENT =========================================
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/03/healthy-chicken-soup-recipe.jpg",
    name: "Chicken Soup",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.naushkitchenroutine.com/wp-content/uploads/2019/09/Mutton-Paya.png",
    name: "Mutton Paya",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://i.pinimg.com/originals/73/fc/a3/73fca37275410b7c5d1e7604b9e0dd3a.jpg",
    name: "Mutton soup",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/04/Mutton-Keema-Pirattal-1200x900.jpg",
    name: "Mutton keema",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/mutton-keema-recipe.jpg",
    name: "Mutton keema fry",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2017/08/Shireen-750x422-2-1.jpg",
    name: "Mutton keema gotala",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/hKWlaH0-jvs/maxresdefault.jpg",
    name: "Chicken Khapsa Biryani",
    price: 650,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/ chicken-kabsa-chicken-biryani-wooden-background-kabsa-is-traditional-saudi-arabian-cuisine-dish-it-cooks-with-basmati-rice-chicken-spices-tomatoes-nuts-raisins_511235-8567.jpg?w=2000",
    name: "Chicken khapsa pulav",
    price: 700,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://somethingiscookingdotcom.files.wordpress.com/2015/03/chicken-kabsa1.jpg",
    name: "Chicken khapsa fried rice",
    price: 900,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://d3gy1em549lxx2.cloudfront.net/c17c7126-bfee-4976-b357-10a779f2a0ad.JPG",
    name: "Chi. chilly khapsa Fried rice",
    price: 1050,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://lh3.googleusercontent.com/JsjU2v4fg0KkaymSAYoOZy2laPleCjlQN26f4BY1fj7_J4MSnW-lyHYDtMltXbycxXjf3DVzj7SSwyFc3-VeTwGOvzBlKEaD6GDUOUxZ6A=w512-rw",
    name: "Chi. Schz. Khapsa Fried Rice",
    price: 970,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/43/2022/02/24/24606-persian-rice-mfs_146.jpg",
    name: "Chi. Irani Khapsa Fried Rice",
    price: 1000,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://theodehlicious.com/wp-content/uploads/2022/07/Chicken-Biryani-NEW.jpg",
    name: "Chi. Arabian Khapsa Fried rice",
    price: 1100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "",
    name: "Chicken seekh kabab",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "",
    name: "Tandoori chicken",
    price: 300,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  // AYSHA
  // { image: '', name: '', price: 0, cutted_price: 0, category: 'non-veg', qty_for: 1, restasurant_name: 'Aysha' },
  {
    image:
      "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Full-Tandoori-Chicken---SK-Khazana.jpg",
    name: "Chicken Arbi Tandoori",
    price: 350,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Full-Tandoori-Chicken---SK-Khazana.jpg",
    name: "Chicken Arbi Tandoori - HALF",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://kfoods.com/images1/newrecipeicon/chicken-seekh-kebab_5125.jpg",
    name: "Chicken Seekh Kabab",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg",
    name: "Tandoori Chicken",
    price: 300,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg",
    name: "Tandoori Chicken - HALF",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/6GUgylg5sIU/sddefault.jpg",
    name: "Tandoori schz. Fry",
    price: 350,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/6GUgylg5sIU/sddefault.jpg",
    name: "Tandoori schz. Fry - HALF",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://lh3.googleusercontent.com/MJZxC19gms5_vHz3d_9NQ2qx-BwVmyuAxp26TJjAvgq8cr9KKajZOjILfbKBBE3Bfz2ftjk4ydfX3TzEDNGLLa_P8c7xTT1UwmFrsrKg=w512-rw",
    name: "Chicken Tiranga kabab(12pc)",
    price: 500,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.awesomecuisine.com/wp-content/uploads/2014/03/chicken-tikka.jpg",
    name: "Chicken Tikka(6pc)",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://media-cdn.greatbritishchefs.com/media/x3ykkboh/img16453.jpg",
    name: "Chicken Tangadi kabab(2pc)",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2019/09/1-10.jpg",
    name: "Chicken Kalimirch kabab(6pc)",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzk-iEwf66lUixxVxQ2bicZbfcvjsmrWtBQ&usqp=CAU",
    name: "Fish Tandoori",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food_400.jpg",
    name: "Paneer Tikka Dry(6pc)",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://kfisauces.com/wp-content/uploads/2017/05/Hariyali-Paneer.jpg",
    name: "Paneer Hariyali Tikka(6pc)",
    price: 190,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jucXll3qZ_IR1-3xoEfwVKiEmWFRatQq56Oqm6R9RzJnKnKxD2Ee7-kHytbpFY87GdU&usqp=CAU",
    name: "Paneer Malai Tikka",
    price: 190,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.simplyrecipes.com/thmb/-QzmQynep4nIQ3tncO0v3_xpPd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg",
    name: "Butter Chicken (boneless)",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-tikka-masala-jpg-1526059261.jpg",
    name: "Chicken Tikka Masala (boneless)",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://theyummydelights.com/wp-content/uploads/2019/07/hyderabadi-chicken-masala-9.jpg",
    name: "Chicken Hyderabadi (boneless)",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myheartbeets.com/wp-content/uploads/2020/01/instant-pot-punjabi-chicken-patiala.jpg",
    name: "Chicken Patiyala (boneless)",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEwlfPpGSDMaarTl3S2R9ctaM0KFvT_-vxA&usqp=CAU",
    name: "Chicken Tiranga (boneless)",
    price: 340,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.poultryrecipes.co.in/media/cache/Lazeez_murgh_tikka_masala_608x385.jpg",
    name: "Chicken Lazeez (boneless)",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ63gLbAzG1aDaTRBpfX4XilayESO7LPIyiA&usqp=CAU",
    name: "Chicken Lajawab (boneless)",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/582797fe09acbf2d/680x482cq70/chicken-lava-foto-resep-utama.jpg",
    name: "Chicken Lawa (boneless)",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://lh3.googleusercontent.com/PnTb0ZrYSVjGgwA0TMjjyGr8609ejT9QO9PCwnzcSDlmfmTEx0GHM8hmeM49auZMdCEPhGQvx0I1WvbuVVer0IOP5uI=w300-rw",
    name: "Chicken Shahenshah (boneless)",
    price: 300,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://lh3.googleusercontent.com/Q-KZcqf0K_5KTtYGK0yD7iYehnBZFL0h_nnCIXZ1xVQoaOK8CxonETm3m-Kv-vofXFIS-zpWerFu-ZmA5FjfXfVmXXTlzE8dKsLAbog=w512-rw",
    name: "Chicken Chingari (boneless)",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTTCZ99a1LVQbJE0Zn-suU5-I1oUwusWwDN-u3IqppgkQm0fcDUP_TJ0P5U-ZHA4vCkw&usqp=CAU",
    name: "Chicken Afgani (boneless)",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://allchickenrecipe.com/wp-content/uploads/2021/09/Handi-Chicken.jpg",
    name: "Chicken Handi (bone)",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/chicken-korma-recipe-500x500.jpg",
    name: "Chicken Korma (bone)",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/12/shutterstock_1153329448.jpg",
    name: "Chicken Masala (bone)",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://tasteofindiamanali.in/wp-content/uploads/2021/08/chicken-saag.jpg",
    name: "Chicken Saagwala ",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://c.ndtvimg.com/2022-10/l46p34p_chicken-curry_625x300_30_October_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    name: "Chicken Rashid",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/snwmGtnI92Y/maxresdefault.jpg",
    name: "Chicken Seekh kabab Masala",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://madhurasrecipe.com/wp-content/uploads/2020/10/Tawa-Chicken-1-585x409.jpg",
    name: "Chicken Tawa Fry",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/PAKISTANI_BHUNA_GOSHT.jpg",
    name: "Mutton Bhuna Gosht",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://d3j4nopn8wm92b.cloudfront.net/sites/default/files/styles/recipe_main/public/Dabba%20gosht.jpg?itok=okPks9CH",
    name: "Mutton Dabba Gosht(boneless)",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/Db62VZ43hUY/maxresdefault.jpg",
    name: "Mutton Boti Kabab Masala",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://tastedrecipes.com/wp-content/uploads/2019/08/mutton-paya-2-1.jpg",
    name: "Mutton Hyderabadi (boneless)",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.awesomecuisine.com/content_images/1/Lamb_Coconut_Milk.jpg",
    name: "Mutton Lazeez (boneless)",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIScsUefScjHmZkhTZeLtkDrpycIRm7aZlhw&usqp=CAU",
    name: "Mutton Shaheshah (bone)",
    price: 360,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://tastedrecipes.com/wp-content/uploads/2019/11/mutton-afghani-gravy.png",
    name: "Mutton Afgani (bone)",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.dainikprabhat.com/wp-content/uploads/2021/06/MUTTON-HANDI.jpg",
    name: "Mutton Handi (bone)",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://c.ndtvimg.com/2022-04/vihm0fno_mutton-fry_625x300_12_April_22.jpg",
    name: "Mutton Spl. Fry (bone)",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://s1.dmcdn.net/v/GYH3Y1ZeNqKHYnKMG/x1080",
    name: "Mutton Dal Gosht (bone)",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://images.slurrp.com/prod/recipe_images/whiskaffair/mutton-rara-recipe-1617380209_BHQRTBV6AKCXALM062SU.webp",
    name: "Mutton Rashida",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-13.jpg",
    name: "Mutton Rogan Josh",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/euQ4vBMvA8c/maxresdefault.jpg",
    name: "Mutton Tawa Fry",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://frombowltosoul.com/wp-content/uploads/2018/12/IMG_5950.jpg",
    name: "Mutton Creamy Dry (fry)",
    price: 270,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/shutterstock_1903959760.jpg",
    name: "Fish Fry Pomfret (1pc)",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://vismaifood.com/storage/app/uploads/public/287/b6d/6c1/thumb__700_0_0_0_auto.jpg",
    name: "Fish Masala(1pc)",
    price: 260,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/03/76_Masala-Fish-Curry-1200x900.jpg",
    name: "Fish Curry(1pc)",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://3.bp.blogspot.com/-sp08rAc9sLw/UTeqLhG_KDI/AAAAAAAAAvo/RKF9xNBeuWU/s1600/D5DE9B09-90FC-4817-AE3A-8858DD886398.JPG",
    name: "Prawns Koliwada Fry",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2022/08/Prawn-masala-recipe.jpg",
    name: "Prawns Masala",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://vismaifood.com/storage/app/uploads/public/8c6/190/485/thumb__700_0_0_0_auto.jpg",
    name: "Prawns Curry",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2020/04/1-36.jpg",
    name: "Prawns Tawa Fry",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://static01.nyt.com/images/2020/03/04/dining/tr-egg-curry/merlin_169211805_227972c0-43d1-4f25-9643-9568331d8adb-threeByTwoMediumAt2X.jpg",
    name: "Egg Masala",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUK2tnmEG4o5cGSI-ci_teMW5-2GBAuF1pg&usqp=CAU",
    name: "Egg Masala Fry",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_1548758192.jpg",
    name: "Egg Curry",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.onceuponachef.com/images/2017/10/How-To-Make-Hard-Boiled-Eggs.jpg",
    name: "Egg Boiled(2pc)",
    price: 20,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1J_XOcHXsAk7fhXvCrMSPxXieYrcoqQ47jQ&usqp=CAU",
    name: "Egg omelette (double)",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3quoxLyA1v-jl1C-MbWW3KHIA1EUZ4t3eQ&usqp=CAU",
    name: "Egg Half Fry(double)",
    price: 60,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://media.vogue.in/wp-content/uploads/2020/10/Egg-bhurji-1920x1080.jpg",
    name: "Egg Bhurji (double)",
    price: 65,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/f36309169695a643/1200x630cq70/photo.jpg",
    name: "Brain Masala Fry",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://4.bp.blogspot.com/-16lsZmlxXFE/UxvskgBGRKI/AAAAAAAAGwc/SnF1Oa-9qR4/s1600/brain+f2.JPG",
    name: "Brain Bhurji",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://www.masala.tv/wp-content/uploads/2016/10/1-3.jpg",
    name: "Brain Tawa Fry",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38Z7OkhQyOBYEJdDGYiWuKdBh5FLybplZ9Q&usqp=CAU",
    name: "Brain Plain Fry",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/2c0885aa0f37fb43/1200x630cq70/photo.jpg",
    name: "Paneer Kolhapuri",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://tastedrecipes.com/wp-content/uploads/2021/12/paneer-angara-5.jpg",
    name: "Paneer Angara",
    price: 210,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img.taste.com.au/1xpeJEYD/taste/2019/06/one-pan-paneer-and-spinach-tikka-masala-150801-1.jpg",
    name: "Paneer Tikka Masala",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Vegetables_Gravy/Paneer_Makhani_Recipe-4.jpg",
    name: "Paneer Makhanwala",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://imagevars.gulfnews.com/2021/08/30/Paneer-Masala-_17b9680cdfb_medium.jpg",
    name: "Paneer Masala",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://c.ndtvimg.com/2019-02/b5rjr4m8_paneer-bhurji_625x300_02_February_19.jpg",
    name: "Paneer Bhurji",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://static.toiimg.com/thumb/53251884.cms?width=1200&height=900",
    name: "Paneer Mutter",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe.jpg",
    name: "Paneer Palak",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/01/50_Channa-Masala.jpg",
    name: "Chana Masala",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.thecuriouschickpea.com/wp-content/uploads/2020/02/aloo-matar-11-480x360.jpg",
    name: "Aloo Mutter",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://parulkirecipes.com/wp-content/uploads/2015/09/aloo-palak-1.jpg",
    name: "Aloo Palak",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjGTR4b0q6vrmQLNJnm73bw0MhiKWN4HeTg&usqp=CAU",
    name: "Dal Fry",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://maunikagowardhan.co.uk/wp-content/uploads/2017/11/Black-Dal-Makhani-scaled.jpg",
    name: "Dal Makhanwala",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://media.dinedelicious.in/wp-content/uploads/2020/09/Dhaba-Style-Toor-Dal-Tadka-7.jpg",
    name: "Dal Tadka",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Tandoori-Roti---SK-Khazana.jpg",
    name: "Tandoori Roti",
    price: 10,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://cdn.shpy.in/39943/1623047819928_SKU-0035_0.png?",
    name: "Tandoori Butter Roti",
    price: 18,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHrTSmOrBXsjxGsMttXcD9qBGippsq2cTrp-dMvOvttICNRKTh1Yiqu7na_xEUAjDvSc&usqp=CAU",
    name: "Tandoori Butter Paratha",
    price: 30,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/0a7a36cf0061bf37/1200x630cq70/photo.jpg",
    name: "Tandoori Naan",
    price: 28,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.manjulaskitchen.com/wp-content/uploads/tawa_naan_bread.jpg",
    name: "Tandoori Butter naan",
    price: 35,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://www.tastepak.com/images-o/images/aloo-paratha-method.jpg",
    name: "Paratha Oil Fry",
    price: 20,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://inquiringchef.com/wp-content/uploads/2011/07/img_20432.jpg",
    name: "Cheese Naan",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/2153_1_1.jpg",
    name: "Chichen Biryani",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/2153_1_1.jpg",
    name: "Chicken Biryani - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcFX8parsOlO7cKryhFyg3x9WdhTPqxxNpw&usqp=CAU",
    name: "Chicken Tikka Biryani",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://bfoodale.com/uploads/2021/12/Mutton-Biryani.jpg",
    name: "Mutton Biryani",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://bfoodale.com/uploads/2021/12/Mutton-Biryani.jpg",
    name: "Mutton Biryani - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3J3waoN3-qC6vWz7VmoA0tHldOMapTN6PA&usqp=CAU",
    name: "Prawns Biryani",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://www.masala.tv/wp-content/uploads/2020/12/fish-biryanii.jpg",
    name: "Fish Biryani",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://c.ndtvimg.com/2022-09/idf0neug_egg-biryani_625x300_15_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    name: "Egg Biryani",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/a7f2c814ba758eee/1200x630cq70/photo.jpg",
    name: "Chicken Pulav",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx40oX63xEvV39a9t1OSQVLxN-xPpb0XuUA&usqp=CAU",
    name: "Prawns Pulav",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummyoyummy.com/wp-content/uploads/2018/05/DSC_0071-1.jpg",
    name: "Egg Pulav",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.sharmispassions.com/wp-content/uploads/2014/07/VegPulao1-480x270.jpg",
    name: "Pulav",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/ALH34/primary/1_1.jpg",
    name: "Paneer Tikka Biryani",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://coffeewoffee.in/wp-content/uploads/2021/01/plain-rice-2.jpg",
    name: "Plain Rice",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://coffeewoffee.in/wp-content/uploads/2021/01/plain-rice-2.jpg",
    name: "Plain Rice - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.thespruceeats.com/thmb/5YLtjKvnv58uIF2WiPszY2Icg-Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-546858143-58bd12ff3df78c353cc6cece.jpg",
    name: "Steam rice",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myvegetarianroots.com/wp-content/uploads/2022/02/DSC_0020.jpeg",
    name: "Jeera rice",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myvegetarianroots.com/wp-content/uploads/2022/02/DSC_0020.jpeg",
    name: "Jeera rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.foodie-trail.com/wp-content/uploads/2021/08/PHOTO-2021-07-06-22-47-03.jpg",
    name: "Dal Khichadi",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/7ef896420bbd3b92/1200x630cq70/photo.jpg",
    name: "Dal Khichadi Tadka",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
    name: "Chicken Manchow Soup",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://lh3.googleusercontent.com/YTVpIgeFR16HH18fuWAcCtvznNgP_QM7D8fnbEIzhtA0ckW9hLO-rsrRCfbWlOckBJaBNjdL81dtqvzFIBGJnu4WBolpBmtu_A",
    name: "Chicken Hot-n-Sour soup",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/chicken-and-sweet-corn-soup/main-header.jpg",
    name: "Chicken Sweet Corn soup",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/T4pzDUuPrg0/maxresdefault.jpg",
    name: "Chicken Clear soup",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://food-images.files.bbci.co.uk/food/recipes/easy_chicken_noodle_soup_73271_16x9.jpg",
    name: "Chicken Noodles Soup",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://images.slurrp.com/prod/articles/xucxv5bi3t.webp?impolicy=slurrp-20210601&width=1200&height=675",
    name: "Chicken Lung Fung Soup",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img.taste.com.au/dpJi0iAh/taste/2016/11/cream-of-chicken-soup-41690-1.jpeg",
    name: "Chicken Cream of Soup",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/manchow-soup-recipe.jpg",
    name: "Manchow Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://aartimadan.com/wp-content/uploads/2020/11/hot-and-sour-soup.jpg",
    name: "Hot-n-Sour Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://static.toiimg.com/thumb/58357074.cms?width=1200&height=900",
    name: "Clear Soup",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.errenskitchen.com/wp-content/uploads/2018/08/Quick-Easy-Chinese-Noodle-Soup1200.jpg",
    name: "Noodles Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2017/12/Homemade-Creamy-Vegetable-Soup-2-1.jpg",
    name: "Cream of Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://lh3.googleusercontent.com/EB5xcXs6o_vOkKAF-n8oHOD2ZnbApBuaS4BDtq9EMQtOYRgGv4gOZi2-lBfRdBhy49YGeCHLqtFlnKXQRFCkEAgDh6saOER2Vg",
    name: "Chicken Sizzlers Dry",
    price: 290,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2020/01/Chinese-Lemon-Chicken.jpg",
    name: "Chicken Lemon Crispy Dry",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://recipesaresimple.com/wp-content/uploads/2013/07/Kozhi-Roast2.jpg",
    name: "Chicken Roasted Chilly (bone)",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/kfc-chicken-recipe.jpg",
    name: "Chicken Crispy",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://i2.wp.com/www.deathbygluttony.com/wp-content/uploads/2020/10/chilli-chicken-4-scaled.jpg?resize=750%2C500",
    name: "Chicken chilly dry",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://tastypics.s3.us-west-1.amazonaws.com/a30f207304f8461eb193319491847e7e.jpg",
    name: "Chicken Manchurian Dry",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://scrummylane.com/wp-content/uploads/2021/11/Shanghai-chicken-10.jpg",
    name: "Chicken Shanghai Dry",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Salt-and-Pepper-Chicken-wide-FS-and-Foodporn.jpg",
    name: "Chicken Pepper Salt Dry",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2019/10/easy-chinese-chilli-chicken-dry-4.jpg",
    name: "Chicken Schz. Dry",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0668/2207/articles/img_1746_2000x.jpg?v=1623777319",
    name: "Chicken Lollipop (6pc)",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/7cMekeqxKmU/maxresdefault.jpg",
    name: "Chicken Lollipop Schz. Dry (6pc)",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.flavorsofmumbai.com/wp-content/uploads/2014/12/Prawn-Chilli-Fry-recipe-7-1280x720.jpg",
    name: "Prawns Chilly Dry",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/10/1-67.jpg",
    name: "Prawns Manchiran Dry",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.flavorsofmumbai.com/wp-content/uploads/2011/06/buttery-Butter-Garlic-Prawns.jpg",
    name: "Prawns Garlic Dry",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.bearnakedfood.com/wp-content/uploads/2017/05/DSCF5445.jpg",
    name: "Prawns Ginger Dry",
    price: 260,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://everbake.co/wp-content/uploads/2021/07/MANCHURIAN-DRY-CLOSE-UP.jpg",
    name: "Manchurian Dry",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg",
    name: "Paneer Chilly Dry",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://d3aew4oo17ml6.cloudfront.net/images/photos/thumbnailfull/photos-2014-5-30-9-30-35.jpg?v=1.1.0",
    name: "Paneer Manchurian Dry",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://media.dinedelicious.in/wp-content/uploads/2020/10/Chilli-Paneer-Dry-Recipe-No-Fry.jpg",
    name: "Paneer Crispy Dry",
    price: 220,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/3b9c6d673a81d0e8/1200x630cq70/photo.jpg",
    name: "Chinese Bhel",
    price: 110,
    cutted_price: 0,
    category: " veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://mealhub.in/wp-content/uploads/2021/04/chilli.jpg",
    name: "Chicken Chilly Gravy",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://hamariweb.com/recipes/images/recipeimages/9910.jpg",
    name: "Chicken Manchurian Gravy",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://verygoodrecipes.com/images/blogs/ente-thattukada/coriander-chicken-curry.640x480.jpg",
    name: "Chicken Coriander Gravy",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://spiceeats.com/wp-content/uploads/2020/07/Sweet-and-Sour-Chicken.jpg",
    name: "Chicken Sweet n Sour (gravy)",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://notoutofthebox.in/wp-content/uploads/2018/02/gc1.jpg",
    name: "Chicken Garlic Gravy",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/l6Qan2nR79k/maxresdefault.jpg",
    name: "Chicken Ginger Gravy",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/11/1-6.jpg",
    name: "Chicken Schz. Gravy",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://static.toiimg.com/thumb/53222175.cms?width=1200&height=900",
    name: "Chicken Lollipop(4pc)(gravy)",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/-zFMaMMfszE/maxresdefault.jpg",
    name: "Prawns Chilly Gravy",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.kanzabiryani.com/wp-content/uploads/2021/08/PRAWNS-MANCHURIAN.jpg",
    name: "Prawns Manchiran Gravy",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/2PCdM6d2u5c/maxresdefault.jpg",
    name: "Chilly Gravy",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/2-uu7l3Qwuo/maxresdefault.jpg",
    name: "Manchurian Gravy",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://static.toiimg.com/thumb/84581130.cms?imgsize=391592&width=800&height=800",
    name: "Garlic Gravy",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://1.bp.blogspot.com/-nZVECtE4GXU/WFc-AIFgRDI/AAAAAAAAMyY/Smo6Thk2jw8XXPCi7lNGbTycVg8GPcJFQCLcB/s1600/Inji%2BKuzhambu.jpg",
    name: "Ginger Gravy",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/04/Chilli-paneer.jpg",
    name: "Paneer Chilly Gravy",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.imgur.com/VaTIEw3.jpg",
    name: "Chicken Hakka Noodles",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.imgur.com/VaTIEw3.jpg",
    name: "Chicken Hakka Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/0UCo7VY9oZ8/maxresdefault.jpg",
    name: "Chicken Schz. Hakka Noodles",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://niftyrecipe.com/uploads/youtube/parse/vh1vReOZBkQ.jpg",
    name: "Chicken Triple Schz. Noodles",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.giggsmeat.com/wp-content/uploads/2021/04/UUL5a74jR7-min-1.jpg",
    name: "Chicken American Chopsuey",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2021/07/Easy-Chicken-Chow-Mein-3.jpg",
    name: "Chicken chowmein",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/ec740968f3c6bab8/1200x630cq70/photo.jpg",
    name: "Prawns Hakka Noodles",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://premasculinary.com/wp-content/uploads/2020/03/Hakka-Noodles-Recipe-Veg-1-1024x768.jpg",
    name: "Veg Hakka Noodles",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://premasculinary.com/wp-content/uploads/2020/03/Hakka-Noodles-Recipe-Veg-1-1024x768.jpg",
    name: "Veg Hakka Noodles - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.nestleprofessional.in/sites/default/files/2022-05/Schezwan-Noodles_0.jpg",
    name: "Veg Schezwan Noodles",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://cdn.tarladalal.com/members/9306/procstepimgs/triple-schwzuan-rice_dsc2255-(47)-6-185802.jpg",
    name: "Chicken Triple Schz. Fried Rice ",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2021/06/chicken-fried-rice-recipe-720x405.jpg",
    name: "Chicken Fried Rice",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2021/06/chicken-fried-rice-recipe-720x405.jpg",
    name: "Chicken Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://images.aws.nestle.recipes/original/fbc58b823a59316090bebdd7affd85c4_A42I2439-min.jpg",
    name: "Chicken schz. Fried Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/v8oFkKrMs0U/maxresdefault.jpg",
    name: "Chicken Manchurian Fried Rice",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://images-gmi-pmc.edge-generalmills.com/95de17ce-3944-4dee-8156-9b81304676b1.jpg",
    name: "Chicken Golden Rice",
    price: 260,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/bUSJkY6n9Tk/maxresdefault.jpg",
    name: "Chicken 3 in 1 rice",
    price: 290,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.pfchangs.com/images/default-source/menu/noodles-rice/chickenfriedrice-1200x80043c765aa-5736-45d8-9fc3-13b47b92551d.jpg?sfvrsn=8e9f88d1_3",
    name: "Chicken Combination Fried Rice",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2020/02/Egg-Fried-Rice-3-480x270.jpg",
    name: "Egg Fried Rice",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/55bb9f9552b50346/1200x630cq70/photo.jpg",
    name: "Egg Schz. Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://lh3.googleusercontent.com/w5TCAkJxz3h1smtoSFGafB4pJ662-uDPw3vpJ6RwvrY7-CW034plgaNYzdpKqdv-7Yg9oYpOZxIUgT1q5ifFZevZoLW8Yap3g-WyBpOd",
    name: "Mutton Fried Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.nangaihomemadefood.com/product-images/download.jpeg/1746481000000637025/600x600",
    name: "Mutton Schz. Fried Rice",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/2f70eadbcda196ee/1200x630cq70/photo.jpg",
    name: "Prawns Schz. Fried Rice",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/q12wLxS6Ix8/maxresdefault.jpg",
    name: "Manchurian Fried Rice",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://madscookhouse.com/wp-content/uploads/2021/08/Schezwan-Chutney-1.jpg",
    name: "Extra Schezwan",
    price: 20,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2019/03/how-to-make-crispy-fried-noodles-at-home-3-1.jpg",
    name: "Extra Fry Noodles",
    price: 200,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://d3gy1em549lxx2.cloudfront.net/aea8390a-456d-4599-a4f8-bc490eb59910.JPG",
    name: "1kg Chicken Tikka Biryani",
    price: 1500,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/5TpxmFihoTI/maxresdefault.jpg",
    name: "1kg Khichda",
    price: 1250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/JRybh4F9LAE/maxresdefault.jpg",
    name: "1kg Dal Gosht",
    price: 1500,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://saltandbaker.com/wp-content/uploads/2019/12/Indian-Butter-Chicken-Recipe-featured-500x375.jpg",
    name: "1kg Butter Chicken",
    price: 1200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://food-images.files.bbci.co.uk/food/recipes/chicken_korma_09900_16x9.jpg",
    name: "1kg Chicken Korma",
    price: 1000,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://static.toiimg.com/thumb/52554168.cms?width=1200&height=900",
    name: "1kg Mutton Korma",
    price: 1500,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image: "https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg",
    name: "1kg Chicken Chilly",
    price: 600,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://i0.wp.com/www.hungrysoulbyabha.com/wp-content/uploads/2020/08/20200725-IMG_4571-scaled.jpg?fit=2560%2C1707&ssl=1",
    name: "1kg Paneer Butter Masala",
    price: 1100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/03/79.-Chicken-keema-kuruma.jpg",
    name: "1kg Kheema",
    price: 800,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
    name: "1kg Jeera Rice",
    price: 450,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2022/01/Biryani-Rice-1300x865.jpg?v=1642041505",
    name: "1kg Biryani Rice",
    price: 400,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Aysha",
  },
  // { image: '', name: '', price: 0, cutted_price: 0, category: 'non-veg', qty_for: 1, restasurant_name: 'Aysha' },

  // TASTE KING -------------------------
  {
    image: "https://i.ndtvimg.com/i/2015-02/meat-pizza_625x350_41424681507.jpg",
    name: "Chicken Cheese Pizza",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg",
    name: "Chicken Double Cheese Pizza",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://naziacooks.com/wp-content/uploads/2020/07/peri-peri-pizza_tn2.jpg",
    name: "Chicken Peri Peri Pizza",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://kfoods.com/images1/newrecipeicon/hot-and-spicy-pizza_4958.jpg",
    name: "Chicken Hot & Spicy Pizza",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Chicken_Barbecue_Pizza_Recipe_new.jpg",
    name: "Chicken BBQ Pizza",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://images-gmi-pmc.edge-generalmills.com/f2f39286-97d4-4598-b2b2-bae8872aa943.jpg",
    name: "Chicken Mexican Pizza",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/pWGi3sae0w4/maxresdefault.jpg",
    name: "Chicken Tandoori Pizza",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg",
    name: "Cheese Pizza",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://img.tastelife.tv/assets/uploads/2022/06/Found_a_new_way_to_make_Double_Cheese_Pizza_No_kneading_Incredibly_easy_Best_pizza_in_the_world_10x7-684x480.jpg",
    name: "Double Cheese Pizza",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.dominos.com.au/ManagedAssets/AU/product/P223/AU_P223_en_hero_4055.jpg?v-233754517",
    name: "Peri Peri Pizza",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://brobible.com/wp-content/uploads/2022/01/pizza-hut-spicy-lovers-pizza-review-1.jpeg",
    name: "Hot & Spicy Pizza",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/3/5/0/CC_campus-eats-pulled-pork-bbq-pizza-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1362506747442.jpeg",
    name: "BBQ Pizza",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.gannett-cdn.com/presto/2022/05/17/PPHX/b3f2a5eb-295f-43ec-b18d-c21e7ec200b9-mexican_pizza._senior-muertos.-al-pastor-pizza.jpg?crop=1999,1125,x0,y185&width=1999&height=1125&format=pjpg&auto=webp",
    name: "Mexican Pizza",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2016/06/pepper-delight-tandoori-chicken-pizza-3.jpg?resize=3728%2C3696",
    name: "Tandoori Pizza",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://www.chhappanbhog.com/wp-content/uploads/2021/08/Tikki.jpg",
    name: "Aloo Tikki",
    price: 40,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://i.pinimg.com/originals/4d/35/11/4d351198b810f7e9b6f1ab862fd8013f.jpg",
    name: "Chicken Zinger Burger",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.familyfoodonthetable.com/wp-content/uploads/2016/05/Cheddar-chicken-burgers-3-720x540.jpg",
    name: "Chicken Cheese Burger",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://cdn3.mydukaan.io/app/image/700x700/?url=https://projecteagle.s3.ap-south-1.amazonaws.com/images/ca55c04e-0874-4731-8942-0e6bf25804bb.jpg",
    name: "Chicken Schz. Burger",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.howsweeteats.com/wp-content/uploads/2011/04/bbqburgers-6.jpg",
    name: "Chicken BBQ Burger",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://mccormick.widen.net/content/ufuxobl3aq/jpeg/Franks_Photo_Spicy_Grilled_Chicken_Cheeseburger_with_the_Works_Horizontal_2000x1125_180321.jpg?w=2000&h=1125&keep=c&crop=yes&quality=80&x.app=portals",
    name: "Chicken Spicy Burger",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://img.rasset.ie/0015cf21-1600.jpg",
    name: "Chicken Tandoori Burger",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://static.toiimg.com/thumb/61673998.cms?width=1200&height=900",
    name: "Chicken Pizza Burger",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-chicken-burger-092a6e0.jpg?quality=90&webp=true&resize=440,400",
    name: "Chicken Mexican Burger",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://parcelwalaa.in/wp-content/uploads/2021/08/IMG_20210804_221653.jpg",
    name: "Cheese Burger",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2012/06/7420282422_cf8d53ba68_z-410x273.jpg",
    name: "Schz. Burger",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg",
    name: "BBQ Burger",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.gardengourmet.co.uk/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg",
    name: "Spicy Burger",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.awesomecuisine.com/wp-content/uploads/2015/12/Tandoori-Chicken-Burger.jpg",
    name: "Tandoori Burger",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://dfwblobstorage.blob.core.windows.net/images/Recipe/best-pepperoni-pizza-burgers.jpg",
    name: "Pizza Burger",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://dfwblobstorage.blob.core.windows.net/images/Recipe/loaded-mexican-burgers.jpg",
    name: "Mexican Burger",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://ohthatsgood.com/wp-content/uploads/2022/08/Chicken-Lollipop-1200x1200-1-500x375.jpg",
    name: "Chicken Lollipop(3pc)",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/07/1-39.jpeg",
    name: "Chicken Lollipop(6pc)",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://media.vogue.in/wp-content/uploads/2020/11/Chilli-chicken-1920x1080.jpg",
    name: "Chicken Chilly",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/11/1-6.jpg",
    name: "Chicken Schezwan",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://indianpakwan.com/wp-content/uploads/2021/01/Chicken-manchurian-1200x676.jpg",
    name: "Chicken Manchurian",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://allwaysdelicious.com/wp-content/uploads/2021/02/salt-and-pepper-chicken-la-horiz-4.jpg",
    name: "Chicken Salt & Pepper",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2021/05/Chicken-65-Spicy-Crispy-3.jpg",
    name: "Chicken 65",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/RMkFcToNXYs/maxresdefault.jpg",
    name: "Chicken Chrispy",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://recipe30.com/wp-content/uploads/2017/02/spicy-fried-garlic-chicken.jpg",
    name: "Chicken Garlic",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1-27.jpg",
    name: "Paneer Chilly",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.lifeberrys.com/img/article/schezwan-momo1-1629106594-lb.jpg",
    name: "Paneer Schezwan",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://theindianclaypot.com/content/images/wp-content/uploads/2020/10/paneer-manchurian.jpg",
    name: "Paneer Manchurian",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/FlEYjxBhQGM/maxresdefault.jpg",
    name: "Paneer Salt & Pepper",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/5043dadfed9d9dc0/1200x630cq70/photo.jpg",
    name: "Paneer Chrispy",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/garlic-paneer.jpg",
    name: "Paneer Garlic",
    price: 200,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://www.tefal-me.com/medias/Upgrade-your-regular-fries-with-our-3-recipes.jpg?context=bWFzdGVyfHJvb3R8MzkwOTAxfGltYWdlL2pwZWd8aDRjL2hiMy8xMzA5Mzg4NTE0OTIxNC5qcGd8NjliOGUyOTRhNjIzYTA0ZDc1NmM4MzkyYjRlOGFhM2E3ZmJkNzlhZWNiNTVkMWQ2NWM5Y2I2OGQyMTIyOGEzNg",
    name: "Regular Fries",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://lh3.googleusercontent.com/3AnoMX9Z3rMz8WnW8kAwj3z_En6NkDaA7qHC5DGA8utzfRVfbDE2gH4lRBcmgTXNaRZ2fx0daa3reGVtOcSw9Z5m8SHqZ8qCAUd1PCnyiA",
    name: "Peri Peri Fries",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/c52f5898a7f48a8c/1200x630cq70/photo.jpg",
    name: "Mayo Fries",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.imgur.com/u8ARJXy.jpg",
    name: "Cheese Fries",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.goldenphoenixbrand.com/cms-data/gallery/blog/recipes/sweet-mesquite-bbq-french-fries/sweet-mesquite-bbq-french-fries.jpg",
    name: "BBQ Fries",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://growninidaho.com/wp-content/uploads/2020/06/GII-Recipe-Thumb-MexStreetCornFries-1280x720-1.jpg",
    name: "Mexican Fries",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://fromykitchen.com/wp-content/uploads/2020/01/DSC_0076.jpg",
    name: "Tandoori Fries",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://feenix.co.in/wp-content/uploads/2022/07/1-1.jpg ",
    name: "Large Fries",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://media.vogue.in/wp-content/uploads/2020/11/Egg-fried-rice.jpg",
    name: "Egg Fried Rice",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900",
    name: "Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/19856895/a7d67f0476501108a422350e6231c863.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Royal Fried Rice",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/qDbmxGtrgz0/maxresdefault.jpg",
    name: "Schez. Rice",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://i0.wp.com/spicykitchen.net/wp-content/uploads/2020/12/IMG_20201209_130738.jpg?resize=760%2C428&ssl=1",
    name: "Combination Rice",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://mefoodatarian.files.wordpress.com/2013/01/dsc07775.jpg",
    name: "Manchurian Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/chicken-fried-rice-e54d23ea-751f-4497-8c96-dc9fabc644c8_s900x0_c2263x1316_l0x1032.jpg",
    name: "Shanghai Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://2.bp.blogspot.com/-JGGM4QuPu6o/WJF5lvVDxXI/AAAAAAAAXIw/aOFYNgBbmtUA5ZQMeKMAqLvkRmh3jhNiACLcB/s1600/Chilli%2BGarlic%2BVegetable%2BRice%2B%25283%2529%2B-%2B1.jpg",
    name: "Chicken Chilli Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/dad/42595de3c3002ab46936175b80d08dad.jpg?fit=around|130:130&crop=130:130;*,*",
    name: "Packing Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/triple-schezwan-fried-rice-is-lip-smacking-complete-meal-combination-rice-chickenegg-crispy-fried-noodles-served-with-spicy-fragrant-schezwan-gravy-indian-cuisine-selective-focus_726363-276.jpg?w=2000",
    name: "Triple Rice",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://images-gmi-pmc.edge-generalmills.com/75a7343a-1520-4e95-a13f-e61b5fc5b741.jpg",
    name: "Garlic Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://media.vogue.in/wp-content/uploads/2020/11/Egg-fried-rice.jpg",
    name: "Egg Fried Rice - HALF",
    price: 60,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900",
    name: "Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/19856895/a7d67f0476501108a422350e6231c863.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Royal Fried Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/qDbmxGtrgz0/maxresdefault.jpg",
    name: "Schez. Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://i0.wp.com/spicykitchen.net/wp-content/uploads/2020/12/IMG_20201209_130738.jpg?resize=760%2C428&ssl=1",
    name: "Combination Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://mefoodatarian.files.wordpress.com/2013/01/dsc07775.jpg",
    name: "Manchurian Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/chicken-fried-rice-e54d23ea-751f-4497-8c96-dc9fabc644c8_s900x0_c2263x1316_l0x1032.jpg",
    name: "Shanghai Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://2.bp.blogspot.com/-JGGM4QuPu6o/WJF5lvVDxXI/AAAAAAAAXIw/aOFYNgBbmtUA5ZQMeKMAqLvkRmh3jhNiACLcB/s1600/Chilli%2BGarlic%2BVegetable%2BRice%2B%25283%2529%2B-%2B1.jpg",
    name: "Chicken Chilli Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/dad/42595de3c3002ab46936175b80d08dad.jpg?fit=around|130:130&crop=130:130;*,*",
    name: "Packing Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/triple-schezwan-fried-rice-is-lip-smacking-complete-meal-combination-rice-chickenegg-crispy-fried-noodles-served-with-spicy-fragrant-schezwan-gravy-indian-cuisine-selective-focus_726363-276.jpg?w=2000",
    name: "Triple Rice - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://images-gmi-pmc.edge-generalmills.com/75a7343a-1520-4e95-a13f-e61b5fc5b741.jpg",
    name: "Garlic Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://img.clearcals.com/recipes/9aed609f98a8850328143371b69e296efbf2f26a/medium.jpg",
    name: "Paneer Fried Rice",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/fried-rice-1-1300x867.jpg?v=1619920385",
    name: "Fried Rice",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://vishalexpress.in/wp-content/uploads/2021/10/FRIED-RICE-VEG-Cropped.jpg",
    name: "Royal Fried Rice",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/schezwan-fried-rice-recipe-480x270.jpg",
    name: "Schez. Rice",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2009%2F10%2F20%2F429048911_5755135168001_5755130236001-vs.jpg",
    name: "Combination Rice",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/cdaa443a2dbe021b/1200x630cq70/photo.jpg",
    name: "Manchurian Rice",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/16JahDjXR_I/hqdefault.jpg",
    name: "Shanghai Rice",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/cqLZ8j8DA_I/maxresdefault.jpg",
    name: "Chilli Rice",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://niftyrecipe.com/uploads/youtube/parse/vh1vReOZBkQ.jpg",
    name: "Triple Rice",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/keYtrQy1OVM/maxresdefault.jpg",
    name: "Garlic Rice",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://img.clearcals.com/recipes/9aed609f98a8850328143371b69e296efbf2f26a/medium.jpg",
    name: "Paneer Fried Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/fried-rice-1-1300x867.jpg?v=1619920385",
    name: "Fried Rice - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://vishalexpress.in/wp-content/uploads/2021/10/FRIED-RICE-VEG-Cropped.jpg",
    name: "Royal Fried Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/schezwan-fried-rice-recipe-480x270.jpg",
    name: "Schez. Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2009%2F10%2F20%2F429048911_5755135168001_5755130236001-vs.jpg",
    name: "Combination Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/cdaa443a2dbe021b/1200x630cq70/photo.jpg",
    name: "Manchurian Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/16JahDjXR_I/hqdefault.jpg",
    name: "Shanghai Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/cqLZ8j8DA_I/maxresdefault.jpg",
    name: "Chilli Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://niftyrecipe.com/uploads/youtube/parse/vh1vReOZBkQ.jpg",
    name: "Triple Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/keYtrQy1OVM/maxresdefault.jpg",
    name: "Garlic Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0076/4339/8233/files/chinese-egg-fried-noodles-recipe.png?v=1646302544",
    name: "Egg Noodles",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://static.toiimg.com/thumb/75356205.cms?width=1200&height=900",
    name: "Chicken Noodles",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://c.ndtvimg.com/2022-07/dkn3v8lo_chicken-noodles_625x300_25_July_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
    name: "Royal Fried Noodles",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vtkh0nghv7mz4mp9b4t9",
    name: "Schez. Noodles",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/ZjPGBYZP-Do/maxresdefault.jpg",
    name: "Combination Noodles",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/TcMKi7r6gXs/maxresdefault.jpg",
    name: "Manchurian Noodles",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg",
    name: "Shanghai Noodles",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0560/8954/2833/products/2_0ca61ee8-44bc-41cc-827a-d85131102dda_2400x.jpg?v=1665998505",
    name: "Chicken Chilli Noodles",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://im.hunt.in/local/Gallery/3018553/l/3018553_615a7.jpg",
    name: "Triple Noodles",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.recipemasters.in/wp-content/uploads/2015/06/Chiili-garlic-chicken-noodles1.jpeg",
    name: "Garlic Noodles",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0076/4339/8233/files/chinese-egg-fried-noodles-recipe.png?v=1646302544",
    name: "Egg Noodles - HALF",
    price: 60,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://static.toiimg.com/thumb/75356205.cms?width=1200&height=900",
    name: "Chicken Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://c.ndtvimg.com/2022-07/dkn3v8lo_chicken-noodles_625x300_25_July_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
    name: "Royal Fried Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vtkh0nghv7mz4mp9b4t9",
    name: "Schez. Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/ZjPGBYZP-Do/maxresdefault.jpg",
    name: "Combination Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/TcMKi7r6gXs/maxresdefault.jpg",
    name: "Manchurian Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg",
    name: "Shanghai Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0560/8954/2833/products/2_0ca61ee8-44bc-41cc-827a-d85131102dda_2400x.jpg?v=1665998505",
    name: "Chicken Chilli Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://im.hunt.in/local/Gallery/3018553/l/3018553_615a7.jpg",
    name: "Triple Rice - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.recipemasters.in/wp-content/uploads/2015/06/Chiili-garlic-chicken-noodles1.jpeg",
    name: "Garlic Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://lh3.googleusercontent.com/9q3qSdV1zql7pmoi5aQ2yM0vZJxCD7ZJnMStQFWWlZWYArBdI_mfmVWT7Eu1WWlyicymFlGBtDfFia1DP3ME2egNAI9WBUSRuz2dlHPu=w512-rw",
    name: "Paneer Noodles",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2015/05/noodles_food_1.jpg",
    name: "Noodles",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/59779bc11e5b6c85f3cae024/1591555396653-VP2L0XD6E0EG2G8QPM12/Chow+Mein",
    name: "Royal Fried Noodles",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/03/99/82/32/360_F_399823213_4vtZyoSSdB1m6UP93LXWogg2UCNkoiZi.jpg",
    name: "Schez. Noodles",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/05/veg-noodles-recipe-1-680x453.jpg.webp",
    name: "Combination Noodles",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg",
    name: "Manchurian Noodles",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2020/09/Chilli-Garlic-Noodles-3.jpg",
    name: "Chilli Noodles",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/KWVArxvD0fg/maxresdefault.jpg",
    name: "Triple Noodles",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://lh3.googleusercontent.com/9q3qSdV1zql7pmoi5aQ2yM0vZJxCD7ZJnMStQFWWlZWYArBdI_mfmVWT7Eu1WWlyicymFlGBtDfFia1DP3ME2egNAI9WBUSRuz2dlHPu=w512-rw",
    name: "Paneer Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2015/05/noodles_food_1.jpg",
    name: "Noodles - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/59779bc11e5b6c85f3cae024/1591555396653-VP2L0XD6E0EG2G8QPM12/Chow+Mein",
    name: "Royal Fried Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/03/99/82/32/360_F_399823213_4vtZyoSSdB1m6UP93LXWogg2UCNkoiZi.jpg",
    name: "Schez. Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/05/veg-noodles-recipe-1-680x453.jpg.webp",
    name: "Combination Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg",
    name: "Manchurian Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2020/09/Chilli-Garlic-Noodles-3.jpg",
    name: "Chilli Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://i.ytimg.com/vi/KWVArxvD0fg/maxresdefault.jpg",
    name: "Triple Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://www.paintthekitchenred.com/wp-content/uploads/2022/03/Air-fryer-popcorn-chicken-L1-Paint-the-Kitchen-Red-scaled.jpg",
    name: "Chicken Popcorn(12pc)",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://mymorningmocha.com/wp-content/uploads/2022/01/KFC-Style-Popcorn-Chicken-Recipe-Opengraph.jpg",
    name: "Chicken Popcorn(25pc)",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
    name: "Manchurian Soup",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/1132_1.jpg",
    name: "Sweet Corn Soup",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.pressurecookrecipes.com/wp-content/uploads/2023/02/instant-pot-hot-and-sour-soup.jpg",
    name: "Hot & Sour Soup",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Veg-Manchow-Soup-scaled.jpeg?v=1621618246",
    name: "Manchurian Soup",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://www.sailusfood.com/wp-content/uploads/2012/02/sweet-corn-soup.jpg",
    name: "Sweet Corn Soup",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image: "https://static.toiimg.com/thumb/62379354.cms?width=1200&height=900",
    name: "Hot & Sour Soup",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Taste King",
  },
  {
    image:
      "https://tastedrecipes.com/wp-content/uploads/2019/05/mango-milkshake.jpg",
    name: "Mango Milkshake",
    price: 40,
    cutted_price: 0,
    category: "Shake",
    qty_for: 1,
    restasurant_name: "Taste King",
  },

  // { image: '', name: '', price: 0, cutted_price: 0, category: 'non-veg', qty_for: 1, restasurant_name: 'Taste King' },

  // KHRSH CHINESE -----------------------
  {
    image:
      "https://www.wikihow.com/images/f/f7/Make-Vegetable-Soup-Step-14-Version-3.jpg",
    name: "Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg",
    name: "Manchawn Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://aartimadan.com/wp-content/uploads/2020/11/hot-and-sour-soup.jpg",
    name: "Hot & Soure Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://static.toiimg.com/thumb/53541619.cms?width=1200&height=900",
    name: "Clear Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://cookwithparul.com/wp-content/uploads/2021/01/veg-manchow-soup-recipe-480x270.jpg",
    name: "Manchurian Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.wikihow.com/images/f/f7/Make-Vegetable-Soup-Step-14-Version-3.jpg",
    name: "Soup - HALF",
    price: 40,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg",
    name: "Manchawn Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://aartimadan.com/wp-content/uploads/2020/11/hot-and-sour-soup.jpg",
    name: "Hot & Soure Soup - HALF",
    price: 40,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://static.toiimg.com/thumb/53541619.cms?width=1200&height=900",
    name: "Clear Soup - HALF",
    price: 40,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://cookwithparul.com/wp-content/uploads/2021/01/veg-manchow-soup-recipe-480x270.jpg",
    name: "Manchurian Soup - HALF",
    price: 40,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg",
    name: "Paneer Chill Dry",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/qu_VRYQccOg/maxresdefault.jpg",
    name: "Paneer Chilly Gravy",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.rachnas-kitchen.com/wp-content/uploads/2015/03/Kadai-paneer.jpg",
    name: "Paneer Karancha",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/a2bcebcdbb8cbd47/680x482cq70/thai-crispy-tofupaneer-in-sweet-and-sour-sauce-recipe-main-photo.jpg",
    name: "Paneer Crispy",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://images.aws.nestle.recipes/resized/c18b6d3f9ef78b35741213513a8c7668_Paneer_65_Plating_944_531.jpg",
    name: "Paneer 65",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.dwarakaorganic.com/wp-content/uploads/2021/12/Gobi-Manchurian.jpg",
    name: "Gobi Manchurian",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/10/Honey-Chilli-Potatoes-1.jpg",
    name: "Potato Chilly",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg",
    name: "Paneer Chill Dry - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/qu_VRYQccOg/maxresdefault.jpg",
    name: "Paneer Chilly Gravy - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.rachnas-kitchen.com/wp-content/uploads/2015/03/Kadai-paneer.jpg",
    name: "Paneer Karancha - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/a2bcebcdbb8cbd47/680x482cq70/thai-crispy-tofupaneer-in-sweet-and-sour-sauce-recipe-main-photo.jpg",
    name: "Paneer Crispy - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://images.aws.nestle.recipes/resized/c18b6d3f9ef78b35741213513a8c7668_Paneer_65_Plating_944_531.jpg",
    name: "Paneer 65 - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.dwarakaorganic.com/wp-content/uploads/2021/12/Gobi-Manchurian.jpg",
    name: "Gobi Manchurian - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/10/Honey-Chilli-Potatoes-1.jpg",
    name: "Potato Chilly - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.seriouseats.com/thmb/tuMCogfAOy2zNdVqE7ydUwuru9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegetable-fried-rice-recipe-hero-2-fed2a62b8bce4c51b945d9c24c2edb68.jpg",
    name: "Fried Rice",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/c43/fffc030c01cb506b9e0bd56ca32d9c43.jpg",
    name: "Schz. Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://cdn3.mydukaan.io/app/image/700x700/?url=https://projecteagle.s3.ap-south-1.amazonaws.com/images/96cd4349-1e82-4f56-8444-987eb77d2a02.jpg",
    name: "Triple Rice",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://lh3.googleusercontent.com/oyTqC9yLepESPNnzrWz_mE2la6pcJO39C0g7W8sTq1gVeW-mPzdHGCMunV2uwhlRA7JbZdlX07lLVn0WLDX8rwV3t23h3MtL7XD3U_s=w512-rw",
    name: "Schz. Triple Rice",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.seriouseats.com/thmb/tuMCogfAOy2zNdVqE7ydUwuru9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegetable-fried-rice-recipe-hero-2-fed2a62b8bce4c51b945d9c24c2edb68.jpg",
    name: "Fried Rice - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/c43/fffc030c01cb506b9e0bd56ca32d9c43.jpg",
    name: "Schz. Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://cdn3.mydukaan.io/app/image/700x700/?url=https://projecteagle.s3.ap-south-1.amazonaws.com/images/96cd4349-1e82-4f56-8444-987eb77d2a02.jpg",
    name: "Triple Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://lh3.googleusercontent.com/oyTqC9yLepESPNnzrWz_mE2la6pcJO39C0g7W8sTq1gVeW-mPzdHGCMunV2uwhlRA7JbZdlX07lLVn0WLDX8rwV3t23h3MtL7XD3U_s=w512-rw",
    name: "Schz. Triple Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/43/2023/01/12/270770-garlic-noodles-ddmfs-4x3-0189.jpg",
    name: "Noodles",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-38.jpg",
    name: "Schz. Noodles",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://in.lkk.com/-/media/in-site---homecook/recipe/thumbnail/triple-schezwan-fried-rice--in.jpg?bc=white&hash=C069FEB0F1F4FB93B0C7944CB445EC007AF835C5&v=638135344751597424",
    name: "Triple Noodles",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://niftyrecipe.com/uploads/youtube/parse/vh1vReOZBkQ.jpg",
    name: "Schz. Triple Noodles",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/43/2023/01/12/270770-garlic-noodles-ddmfs-4x3-0189.jpg",
    name: "Noodles - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-38.jpg",
    name: "Schz. Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://in.lkk.com/-/media/in-site---homecook/recipe/thumbnail/triple-schezwan-fried-rice--in.jpg?bc=white&hash=C069FEB0F1F4FB93B0C7944CB445EC007AF835C5&v=638135344751597424",
    name: "Triple Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://niftyrecipe.com/uploads/youtube/parse/vh1vReOZBkQ.jpg",
    name: "Schz. Triple Noodles - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/chicken-fried-rice-e54d23ea-751f-4497-8c96-dc9fabc644c8_s900x0_c2263x1316_l0x1032.jpg",
    name: "Chicken Special Rice",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.indianrecipeinfo.com/wp-content/uploads/2020/11/Chicken-Fried-Rice-Recipe-Restaurant-Style.jpg",
    name: "Chicken Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/8YB2UTlxc4k/maxresdefault.jpg",
    name: "Chicken Schz. Rice",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://i0.wp.com/www.foodorderkar.com/wp-content/uploads/2021/07/images282829-2-1.jpeg?fit=640%2C480&ssl=1",
    name: "Chicken Schz. Triple Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/v8oFkKrMs0U/maxresdefault.jpg",
    name: "Chicken Manchurian Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900",
    name: "Chicken Combination Rice",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://kfoods.com/images1/newrecipeicon/chicken-chilli-with-garlic-rice_11976.jpg",
    name: "Chicken Chilli Rice",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/JCInKRDH-cU/maxresdefault.jpg",
    name: "Chicken Garlic Rice",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/chicken-fried-rice-e54d23ea-751f-4497-8c96-dc9fabc644c8_s900x0_c2263x1316_l0x1032.jpg",
    name: "Chicken Special Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.indianrecipeinfo.com/wp-content/uploads/2020/11/Chicken-Fried-Rice-Recipe-Restaurant-Style.jpg",
    name: "Chicken Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/8YB2UTlxc4k/maxresdefault.jpg",
    name: "Chicken Schz. Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://i0.wp.com/www.foodorderkar.com/wp-content/uploads/2021/07/images282829-2-1.jpeg?fit=640%2C480&ssl=1",
    name: "Chicken Schz. Triple Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/v8oFkKrMs0U/maxresdefault.jpg",
    name: "Chicken Manchurian Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900",
    name: "Chicken Combination Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://kfoods.com/images1/newrecipeicon/chicken-chilli-with-garlic-rice_11976.jpg",
    name: "Chicken Chilli Rice - HALF",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/JCInKRDH-cU/maxresdefault.jpg",
    name: "Chicken Garlic Rice - HALF",
    price: 900,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://adm.darbar.sg//Dynamic/Products/179/Images/ChickenScezwanNoodles8e0397.jpg",
    name: "Chicken Schz. Noodles",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://lh3.googleusercontent.com/YKhEbvM0REmcJt0ebXVrQLMIorCjkbFZAoQc7xULFqonkSd67aW7H6HeBSmW1q1CnGjwal4JySDjf2HcMS705yS64WekuMxtrmw2sMYf=w512-rw",
    name: "Chicken Schz. Triple Noodles",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://images.slurrp.com/prod/articles/bxd6x97zogd.webp",
    name: "Chicken Manchurian Noodles",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://img.taste.com.au/JyE2sDy1/taste/2017/07/fyfu10_curtis-stones-stir-fried-noodles-with-chicken_1980x1320-128692-1.jpg",
    name: "Chicken Combination Noodles",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/dd/64/76/prawn-chicken-chilli.jpg",
    name: "Chicken Chilli Noodles",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.recipemasters.in/wp-content/uploads/2015/06/Chiili-garlic-chicken-noodles1.jpeg",
    name: "Chicken Garlic Noodles",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://adm.darbar.sg//Dynamic/Products/179/Images/ChickenScezwanNoodles8e0397.jpg",
    name: "Chicken Schz. Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://lh3.googleusercontent.com/YKhEbvM0REmcJt0ebXVrQLMIorCjkbFZAoQc7xULFqonkSd67aW7H6HeBSmW1q1CnGjwal4JySDjf2HcMS705yS64WekuMxtrmw2sMYf=w512-rw",
    name: "Chicken Schz. Triple Noodles - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://images.slurrp.com/prod/articles/bxd6x97zogd.webp",
    name: "Chicken Manchurian Noodles - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://img.taste.com.au/JyE2sDy1/taste/2017/07/fyfu10_curtis-stones-stir-fried-noodles-with-chicken_1980x1320-128692-1.jpg",
    name: "Chicken Combination Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/dd/64/76/prawn-chicken-chilli.jpg",
    name: "Chicken Chilli Noodles - HALF",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.recipemasters.in/wp-content/uploads/2015/06/Chiili-garlic-chicken-noodles1.jpeg",
    name: "Chicken Garlic Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.seriouseats.com/thmb/2nouHHsjM0bN1vwXMOZGUkLFsJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",
    name: "Chicken Soup",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/e1506085a0265946/1200x630cq70/photo.jpg",
    name: "Chicken Manchawn Soup",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.thespruceeats.com/thmb/DpOEqSvdCtnHzq1k5HwoSdHtYsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/seaweed-egg-drop-soup-4173135-Step_4-fcafc5d8fde84338a7803aa24a8337a2.jpg",
    name: "Egg Soup",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/04/Manchow-soup.jpg",
    name: "Schz. Soup",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://theindianclaypot.com/content/images/wp-content/uploads/2016/12/chicken-soup-smaller.jpg",
    name: "Clear Soup",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.seriouseats.com/thmb/2nouHHsjM0bN1vwXMOZGUkLFsJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",
    name: "Chicken Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/e1506085a0265946/1200x630cq70/photo.jpg",
    name: "Chicken Manchawn Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.thespruceeats.com/thmb/DpOEqSvdCtnHzq1k5HwoSdHtYsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/seaweed-egg-drop-soup-4173135-Step_4-fcafc5d8fde84338a7803aa24a8337a2.jpg",
    name: "Egg Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/04/Manchow-soup.jpg",
    name: "Schz. Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://theindianclaypot.com/content/images/wp-content/uploads/2016/12/chicken-soup-smaller.jpg",
    name: "Clear Soup - HALF",
    price: 60,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/03/1-19.jpg",
    name: "Chicken Chilly Dry",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/2PCdM6d2u5c/maxresdefault.jpg",
    name: "Chicken Chilly Gravy",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://kudlarecipes.com/wp-content/uploads/2017/10/Chicken-Nuggets-1-768x432.png",
    name: "Chicken Lollipop Oil Fry",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://1.bp.blogspot.com/-ESqg52zt2IM/XjChYbssYGI/AAAAAAAANsU/3NgdqeXhDoMpzzH0X2M84RTriezwTB0egCLcBGAsYHQ/s1600/rps20200129_023159.jpg",
    name: "Chicken Lollipop Gravy",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg",
    name: "Chicken Crispy",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://bonmasala.com/wp-content/uploads/2022/06/Chicken-65-recipe.webp",
    name: "Chicken 65",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/O5MvIQidUVA/maxresdefault.jpg",
    name: "Chicken Fry(1kg)",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.seema.com/wp-content/uploads/2021/08/shutterstock_1199926645-scaled.jpg",
    name: "Tandoori",
    price: 300,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/03/1-19.jpg",
    name: "Chicken Chilly Dry - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/2PCdM6d2u5c/maxresdefault.jpg",
    name: "Chicken Chilly Gravy - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://kudlarecipes.com/wp-content/uploads/2017/10/Chicken-Nuggets-1-768x432.png",
    name: "Chicken Lollipop Oil Fry - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://1.bp.blogspot.com/-ESqg52zt2IM/XjChYbssYGI/AAAAAAAANsU/3NgdqeXhDoMpzzH0X2M84RTriezwTB0egCLcBGAsYHQ/s1600/rps20200129_023159.jpg",
    name: "Chicken Lollipop Gravy - HALF",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://bonmasala.com/wp-content/uploads/2022/06/Chicken-65-recipe.webp",
    name: "Chicken 65 - HALF",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image: "https://i.ytimg.com/vi/O5MvIQidUVA/maxresdefault.jpg",
    name: "Chicken Fry(1/2 kg)",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },
  {
    image:
      "https://www.seema.com/wp-content/uploads/2021/08/shutterstock_1199926645-scaled.jpg",
    name: "Tandoori - HALF",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Khrish Chinese",
  },

  // { image: '', name: '', price: 0, cutted_price: 0, category: 'non-veg', qty_for: 1, restasurant_name: 'Khrish Chinese' },

  // METRO SPICY -----------------------
  {
    image:
      "https://burans.in/storage/products/August2021/0veEDI5iaOec3zWQeWrp.jpg",
    name: "Chicken Hot Gralic",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://dozuscook.com/wp-content/uploads/2022/04/garlic-chicken-recipe-10.jpg",
    name: "Chicken Butter Gralic",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7LYXEizLp_5ByHk27SDN43pcdyinT0EJQQ&usqp=CAU",
    name: "Chicken Shanghai",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://hintofhelen.com/wp-content/uploads/2017/09/Salt-and-pepper-chicken-Hint-of-Helen-3-480x360.jpg",
    name: "Chicken Salt & Pepper",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/garlic-paneer.jpg",
    name: "Paneer Hot Garlic",
    price: 190,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://shuddhdairy.com.au/wp-content/uploads/2022/04/Shuddh_Butter-Garlic-Paneer.jpg",
    name: "Paneer Butter Garlic",
    price: 200,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://pipingpotcurry.com/wp-content/uploads/2019/09/Paneer-Jalfrezi-Piping-Pot-Curry-12.jpg",
    name: "Paneer Red Papper",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/2O8jFqaILsY/maxresdefault.jpg",
    name: "Paneer Salt & Papper",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.kfcrecipe.com/wp-content/uploads/2022/08/Chicken-Lollipop-2.jpg",
    name: "Chicken Lollipop(8pc)",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.palatesdesire.com/wp-content/uploads/2016/04/Chicken_lollipop@palates-_Desire-scaled.jpg",
    name: "Chicken Lollipop(4pc)",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_761402230-750x750.jpg",
    name: "Chicken Lollipop Dry",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_761402230-750x750.jpg",
    name: "Chicken Lollipop Dry - HALF",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/03/1-19.jpg",
    name: "Chicken Chilly Dry",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/03/1-19.jpg",
    name: "Chicken Chilly Dry - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2020/02/Chicken-Manchurian-dryy.jpg",
    name: "Chicken Manchurian Dry",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://mymorningmocha.com/wp-content/uploads/2022/04/Easy-Crispy-Chilli-Chicken-Recipe.jpeg",
    name: "Chicken Crispy",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2021/05/Chicken-65-Spicy-Crispy-3.jpg",
    name: "Chicken 65",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/11/1-6.jpg",
    name: "Chicken Schz.",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://static.toiimg.com/thumb/74227343.cms?width=680&height=512&imgsize=1692355",
    name: "Tandoori Chilli",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://1.bp.blogspot.com/-L_6YJTUXN1Q/T8dhEKyBqZI/AAAAAAAAOGM/7BtIfxS5o3I/s1600/Prawn+Masala+Fry+(2)+-+1.jpg",
    name: "prawns Tawa Fry",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://famousdishes.in/wp-content/uploads/2020/09/14.jpg",
    name: "Bombil Tawa Fry",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://3.bp.blogspot.com/-sp08rAc9sLw/UTeqLhG_KDI/AAAAAAAAAvo/RKF9xNBeuWU/s1600/D5DE9B09-90FC-4817-AE3A-8858DD886398.JPG",
    name: "Prawns Koliwada",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://i.pinimg.com/originals/20/6d/44/206d443cb9e95795cb343087ff692017.jpg",
    name: "Paneer Chilly Dry",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/a2bcebcdbb8cbd47/680x482cq70/thai-crispy-tofupaneer-in-sweet-and-sour-sauce-recipe-main-photo.jpg",
    name: "Paneer Crispy",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg",
    name: "Veg Chilly Dry",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://madhurasrecipe.com/wp-content/uploads/2020/10/Veg-Crispy-feature-585x426.jpg",
    name: "Veg Crispy",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://tandoorikitchen.in/wp-content/uploads/2022/02/chilli-mushroom-dry-or-gravy-1-e1646051565586.jpg",
    name: "Mashroom Chilly Dry",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2021/Mushroom_Manchurian_Recipe_Dry_Indo_Chinese_Indian_Chinese_10.jpg",
    name: "Mashroom Manchurian Dry",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.health-total.com/wp-content/uploads/2019/11/mix-veg-soup.jpg",
    name: "Metro Spicy Veg Soup",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://im.rediff.com/getahead/2016/jan/13paya-soup.jpg",
    name: "Metro Spicy non-veg Soup",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://twoplaidaprons.com/wp-content/uploads/2022/07/hot-and-sour-soup-thumbnail-500x375.jpg",
    name: "Hot-N-Sour Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://twoplaidaprons.com/wp-content/uploads/2022/07/hot-and-sour-soup-thumbnail-500x375.jpg",
    name: "Hot-N-Sour Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image: "https://i.ytimg.com/vi/T4pzDUuPrg0/maxresdefault.jpg",
    name: "Chicken Clear Soup",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/fe3af63bda05ff2c/1200x630cq70/photo.jpg",
    name: "Veg Clear Soup",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://girlandthekitchen.com/wp-content/uploads/2021/04/Easy-Chinese-Noodle-Soup-3-of-8.jpg",
    name: "Chicken Noodles Soup",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://girlandthekitchen.com/wp-content/uploads/2021/04/Easy-Chinese-Noodle-Soup-3-of-8.jpg",
    name: "Chicken Noodles Soup - HALF",
    price: 60,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/2281_1_1.jpg",
    name: "Veg Noodles Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/2281_1_1.jpg",
    name: "Veg Noodles Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img.taste.com.au/B4zjYcXq/taste/2016/11/chicken-with-mushroom-soup-55941-1.jpeg",
    name: "Mushroom Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img.taste.com.au/B4zjYcXq/taste/2016/11/chicken-with-mushroom-soup-55941-1.jpeg",
    name: "Mushroom Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.seriouseats.com/thmb/Gi-6GV26JfSSlqhWSCNgOGL1bAc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/15-minute-creamy-tomato-soup-vegan-recipe-hero-01_1-19875e4289354e5c981c96189f707c62.JPG",
    name: "Tomatto Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/04/Cabbage-manchurian.jpg",
    name: "Manchurian Gravy",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/05/1-30.jpg",
    name: "Paneer Machurian Gravy",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/qu_VRYQccOg/maxresdefault.jpg",
    name: "Paneer Chilly Gravy",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.yummytummyaarthi.com/wp-content/uploads/2017/09/1..jpg",
    name: "Mushroom Chilli Gravy",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://images-gmi-pmc.edge-generalmills.com/338f16c8-9f80-4a44-ab22-6a3e9a2efdb2.jpg",
    name: "Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://sherebengal.com/wp-content/uploads/2017/09/Schezwan-mixed-fried-rice.jpg",
    name: "Schz. Rice",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/cdaa443a2dbe021b/1200x630cq70/photo.jpg",
    name: "Manchurian Rice",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://s1.dmcdn.net/v/U8RtW1YzB6IDSm9eR/x1080",
    name: "Triple Schz. Rice",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.foodleclub.com/wp-content/uploads/2021/11/spicy-mushroom-fried-rice-2.jpg",
    name: "Mushroom Fried Rice",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-fried-rice-recipe.jpg",
    name: "Paneer Chilly Combination Rice",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://images-gmi-pmc.edge-generalmills.com/338f16c8-9f80-4a44-ab22-6a3e9a2efdb2.jpg",
    name: "Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://sherebengal.com/wp-content/uploads/2017/09/Schezwan-mixed-fried-rice.jpg",
    name: "Schz. Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/cdaa443a2dbe021b/1200x630cq70/photo.jpg",
    name: "Manchurian Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://s1.dmcdn.net/v/U8RtW1YzB6IDSm9eR/x1080",
    name: "Triple Schz. Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.foodleclub.com/wp-content/uploads/2021/11/spicy-mushroom-fried-rice-2.jpg",
    name: "Mushroom Fried Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-fried-rice-recipe.jpg",
    name: "Paneer Chilly Combination Rice - HALF",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Veg_Hakka_Noodles_recipe_10_1600.jpg",
    name: "Hakka Noodles",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2020/11/Spicy-Schezwan-noodles.jpg",
    name: "Schz. Noodles",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.indrani-will-teach.com/wp-content/uploads/2020/09/IMG_20200901_074120.jpg",
    name: "Triple Schz. Noodles",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg",
    name: "Manchurian Noodles",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Veg_Hakka_Noodles_recipe_10_1600.jpg",
    name: "Hakka Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2020/11/Spicy-Schezwan-noodles.jpg",
    name: "Schz. Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.indrani-will-teach.com/wp-content/uploads/2020/09/IMG_20200901_074120.jpg",
    name: "Triple Schz. Noodles - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg",
    name: "Manchurian Noodles - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image: "https://i.ytimg.com/vi/2PCdM6d2u5c/maxresdefault.jpg",
    name: "Chicken Chilly Gravy",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/17/67/29/apple-chicken-lollypop.jpg",
    name: "Chicken Lollipop Gravy",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image: "https://i.ytimg.com/vi/2PCdM6d2u5c/maxresdefault.jpg",
    name: "Chicken Chilly Gravy - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/17/67/29/apple-chicken-lollypop.jpg",
    name: "Chicken Lollipop Gravy - HALF",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://cdn3.mydukaan.io/app/image/1000x1000/?url=https://mydukaan-prod-new.s3.amazonaws.com/master/products/chicken-hakka-noodles.jpg",
    name: "Chicken Hakka Noodles",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.recipehub.in/wp-content/uploads/2020/06/schezwan-chicken-noodles3website.jpg",
    name: "Chicken Schz. Noodles",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/de9c8230b59d2fa4/1200x630cq70/photo.jpg",
    name: "Mix Hakka Noodles",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/m1Ud225M4gU/maxresdefault.jpg",
    name: "Chicken Triple Noodles",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/J7I0d20aTd4/maxresdefault.jpg",
    name: "Chicken Manchurian Noodles",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://cdn3.mydukaan.io/app/image/1000x1000/?url=https://mydukaan-prod-new.s3.amazonaws.com/master/products/chicken-hakka-noodles.jpg",
    name: "Chicken Hakka Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.recipehub.in/wp-content/uploads/2020/06/schezwan-chicken-noodles3website.jpg",
    name: "Chicken Schz. Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/de9c8230b59d2fa4/1200x630cq70/photo.jpg",
    name: "Mix Hakka Noodles - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/m1Ud225M4gU/maxresdefault.jpg",
    name: "Chicken Triple Noodles - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/J7I0d20aTd4/maxresdefault.jpg",
    name: "Chicken Manchurian Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://food-images.files.bbci.co.uk/food/recipes/chicken_egg_fried_rice_50450_16x9.jpg",
    name: "Chicken Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://christieathome.com/wp-content/uploads/2021/07/Egg-Fried-Rice-5-500x375.jpg",
    name: "Egg Fried Rice",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/_TgNmKDd40w/maxresdefault.jpg",
    name: "Mix Fried Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/tasty-schezwan-chicken-fried-rice-tomato-sauce-served-white-bowl-over-rustic-wooden-background-indian-cuisine-tasty-223918783.jpg",
    name: "Chicken Schz. Rice",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/m1Ud225M4gU/maxresdefault.jpg",
    name: "Chicken Triple Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://food-images.files.bbci.co.uk/food/recipes/chicken_egg_fried_rice_50450_16x9.jpg",
    name: "Chicken Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://christieathome.com/wp-content/uploads/2021/07/Egg-Fried-Rice-5-500x375.jpg",
    name: "Egg Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/_TgNmKDd40w/maxresdefault.jpg",
    name: "Mix Fried Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/tasty-schezwan-chicken-fried-rice-tomato-sauce-served-white-bowl-over-rustic-wooden-background-indian-cuisine-tasty-223918783.jpg",
    name: "Chicken Schz. Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/m1Ud225M4gU/maxresdefault.jpg",
    name: "Chicken Triple Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  {
    image:
      "https://www.spicebangla.com/wp-content/uploads/2020/01/Tandoori-Chicken-scaled-1.jpg",
    name: "Chicken Tandoori",
    price: 300,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.spicebangla.com/wp-content/uploads/2020/01/Tandoori-Chicken-scaled-1.jpg",
    name: "Chicken Tandoori - HALF",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.ndtv.com/cooks/images/chicken.seekh.jpg",
    name: "Chicken Seekh Kabab",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://spicecravings.com/wp-content/uploads/2018/05/Tandoori-Chicken-3-500x500.jpg",
    name: "Chicken Leg Tandoori",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.eitanbernath.com/wp-content/uploads/2020/10/Chicken-Tikka-LOW-RES-1-1200x900.jpg",
    name: "Chicken Tikka(6pc)",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/W1pNwLSAajQ/maxresdefault.jpg",
    name: "Chicken Reshmi Kabab(6pc)",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://media-cdn.greatbritishchefs.com/media/x3ykkboh/img16453.jpg",
    name: "Chicken Tangdi Kabab",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://vaya.in/recipes/wp-content/uploads/2019/01/Hariyali-Chicken-Kabab.jpg",
    name: "Chicken Hariyali Kabab",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food_400.jpg",
    name: "Paneer Tikka(6pc)",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.cookingcarnival.com/wp-content/uploads/2020/05/Tandoori-roti-7-500x375.jpg",
    name: "Tandoori Roti",
    price: 10,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://sherebengal.com/wp-content/uploads/2017/09/Butter-Tandoori-Roti-1pc.jpg",
    name: "Butter Roti",
    price: 15,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/gy1gYA81UQ0/maxresdefault.jpg",
    name: "Naan Roti",
    price: 20,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.seriouseats.com/thmb/tRWGfWOQV3O7P1YveeDtNRS1JBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__01__20210106-aloo-parathas-nik-sharma-13-52b77ba4cbad4c4f844f2f88910b2b53.jpg",
    name: "Paratha",
    price: 25,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.manjulaskitchen.com/wp-content/uploads/punjabi_aloo_paratha.jpg",
    name: "Aloo Paratha",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://c.recipeland.com/images/r/4644/cbb70263689638052e27_1024.jpg",
    name: "Paneer Paratha",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2022/08/Homemade-Lachha-Paratha-3.jpg",
    name: "Lachha Paratha",
    price: 30,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/640px-%22Hyderabadi_Dum_Biryani%22.jpg",
    name: "Chicken Biryani",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/640px-%22Hyderabadi_Dum_Biryani%22.jpg",
    name: "Chicken Biryani - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2021/03/Chicken-tikka-biryani.jpg",
    name: "Chicken Tikka Biryani",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2021/03/Chicken-tikka-biryani.jpg",
    name: "Chicken Tikka Biryani - HALF",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Gosht-Biryani-1300x868.jpeg?v=1625193165",
    name: "Mutton Biryani",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Gosht-Biryani-1300x868.jpeg?v=1625193165",
    name: "Mutton Biryani - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://vismaifood.com/storage/app/uploads/public/0ae/185/cba/thumb__700_0_0_0_auto.jpg",
    name: "Prawns Biryani",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2020/12/EGG-BHAJI-BIRYANI-.jpg?fit=1200%2C675&ssl=1",
    name: "Egg Biryani",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://static.toiimg.com/thumb/61225708.cms?width=1200&height=900",
    name: "Chicken Pulav",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://vismaifood.com/storage/app/uploads/public/273/55a/b83/thumb__700_0_0_0_auto.jpg",
    name: "Mutton Pulav",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://4.bp.blogspot.com/-qWzc-7lpAXk/WIEb8Z55zmI/AAAAAAAACdE/iewzgRqTP2Q-TdRenIB3zLueuE9rW2nIQCLcB/s1600/vegetable%2Bpulao.JPG",
    name: "Veg Pulav",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/06/veg-biryani-recipe.jpg",
    name: "Veg Biryani",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/S8epCWvnyPk/maxresdefault.jpg",
    name: "Paneer Tikka Biryani",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.dokan.co.in/wp-content/uploads/2021/02/Chinese-Steamed-Rice-2.jpg",
    name: "Plain Rice",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.dokan.co.in/wp-content/uploads/2021/02/Chinese-Steamed-Rice-2.jpg",
    name: "Plain Rice - HALF",
    price: 40,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://static.toiimg.com/thumb/54504752.cms?width=1200&height=900",
    name: "Steam Rice",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
    name: "Jeera Rice",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
    name: "Jeera Rice - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2022/09/khitchdi-recipe.png?v=1662796662",
    name: "Dal Khichadi",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://static.toiimg.com/thumb/52568357.cms?width=1200&height=900",
    name: "Mutton Biryani(1kg)",
    price: 1200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop-500x375.jpg",
    name: "Chicken Biryani(1kg)",
    price: 800,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/NtuIRDuIvgs/maxresdefault.jpg",
    name: "Veg Biryani(1kg)",
    price: 700,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.recipehub.in/wp-content/uploads/2019/09/veg-pulao9website.jpg",
    name: "Veg Pulav(1kg)",
    price: 700,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.indidiet.com/wp-content/uploads/2017/11/IMG_20171107_1254382.jpg",
    name: "Murg Masalam",
    price: 490,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.indidiet.com/wp-content/uploads/2017/11/IMG_20171107_1254382.jpg",
    name: "Murg Masalam - HALF",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://static.toiimg.com/thumb/75543821.cms?width=1200&height=900",
    name: "Chicken Handi",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/tFq4OGfuVvo/maxresdefault.jpg",
    name: "Chicken Handi Angara",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.faskitchen.com/wp-content/uploads/2017/02/close-up-view-of-mutton-handi-recipe.jpg",
    name: "Mutton Handi",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/07/Aagri-Mutton-03-1024x610.jpg?resize=1024%2C610",
    name: "Mutton Handi Agri",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/P3afbrGjFvA/maxresdefault.jpg",
    name: "Prawns Handi",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/06/kadai-chicken-recipe.jpg",
    name: "Chicken Kadai",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://recipesaresimple.com/wp-content/uploads/2021/10/CRAZY-Butter-Chicken-MASALA-1.jpeg",
    name: "Chicken Masala",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/640px-Chicken_makhani.jpg",
    name: "Butter Chicken",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://hattyfoods.com/wp-content/uploads/2022/02/Chicken-sukka-recipe.jpg",
    name: "Chicken Sukha",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/12/shutterstock_1528128245-750x500.jpg",
    name: "Chicken Kheema",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://i.pinimg.com/originals/90/00/b4/9000b4dffb2ea7018e801cf82b6bd85e.jpg",
    name: "Chicken Masala Fry",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/43/2023/01/31/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572.jpg",
    name: "Chicken Tikka Masala",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2021/02/Punjabi-Egg-Curry-2-3.jpg",
    name: "Egg Masala",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://cdn-fjknb.nitrocdn.com/sYJEeGkHVBiftWuTfZsKGWIHyaufcHUS/assets/static/optimized/rev-612f1f8/wp-content/uploads/2021/05/Shahi-Mutton.jpg",
    name: "Mutton Masala",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://i.ytimg.com/vi/M4NPs5FBI2Y/maxresdefault.jpg",
    name: "Mutton Masala Fry",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/631a4673d1d9c8ea/1200x630cq70/photo.jpg",
    name: "Mutton Kolhapuri",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://static.toiimg.com/thumb/75543452.cms?width=573&height=430",
    name: "Mutton Kheema",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.ndtv.com/cooks/images/Mutton.Kadai-620.jpg",
    name: "Mutton Kadai",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://kfoods.com/images1/newrecipeicon/tawa-mutton-by-shireen-anwar_4068.jpg",
    name: "Mutton Tawa",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2022/08/Prawn-masala-recipe.jpg",
    name: "Prawns Masala",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/12/1-8.jpg",
    name: "Prawns Masala Fry",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.thecuriouschickpea.com/wp-content/uploads/2020/02/aloo-matar-11-480x360.jpg",
    name: "Aloo Mutter",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.manjulaskitchen.com/wp-content/uploads/aloo_palak.jpg",
    name: "Aloo Palak",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://foodiewish.com/wp-content/uploads/2020/05/Aloo-Gobi-Recipe.jpg",
    name: "Aloo Gobi",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.ticklingpalates.com/wp-content/uploads/2022/07/chana-masala-recipe-500x375.jpg",
    name: "Chana Masala",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.chefajaychopra.com/assets/img/recipe/1-1669465240Vegkolhapurirecipewebp.webp",
    name: "Veg Kolhapuri",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://indianvegrecipe.com/wp-content/uploads/2019/08/veg-handi-recipe-2.jpg",
    name: "Veg Handi",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/c2d0fb5edd71197b/1200x630cq70/photo.jpg",
    name: "Baby Corn Mushroom masala",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://mayagroupjaipur.files.wordpress.com/2015/08/11811517_861873450549054_4371950312501970428_n.jpg",
    name: "Baby Corn Mushroom Handi",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.cookingwithsiddhi.com/wp-content/uploads/2017/12/dal-fry-tadka.jpg",
    name: "Dal Fry",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.onearabvegan.com/wp-content/uploads/2017/08/easy-vegan-dal-tadka-1.jpg",
    name: "Dal Tadka",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.seriouseats.com/thmb/lhYY8CqBJoDwxj57KFAiY9pORhI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220629-PalakPaneer-Amanda-Suarez-hero-a2fdf0f3ff5141dfbf44d3977678c578.JPG",
    name: "Paneer Palak",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://static.toiimg.com/thumb/53251884.cms?width=1200&height=900",
    name: "Paneer Mutter",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg",
    name: "Paneer Butter Masala",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/06/Paneer-Tikka-Masala-Recipe-Step-By-Step-Instructions.jpg?fit=806%2C640&quality=65&strip=all&ssl=1",
    name: "Paneer Tikka Masala",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2019/02/Mushroom-Masala-4-500x375.jpg",
    name: "Mushroom Masala",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/e4bab233516d4718/680x482cq70/mushroom-butter-masala-curry-mushroom-makhani-recipe-main-photo.jpg",
    name: "Mushroom Makhanwala",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },
  {
    image: "https://www.ndtv.com/cooks/images/Mushroom-620.jpg",
    name: "Mushroom Handi",
    price: 160,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Metro Spicy",
  },

  // { image: '', name: '', price: 0, cutted_price: 0, category: 'non-veg', qty_for: 1, restasurant_name: 'Metro Spicy' },

  // Kamaal's =====================================
  {
    image:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/507936866/fc91a707-add6-4b7d-bc24-82fc679c76df/3c67801a-497d-42ed-b50a-1e5ccfe139b3/1292x727/match/image.jpg",
    name: "Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg",
    name: "Manchow Soup",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://aartimadan.com/wp-content/uploads/2020/11/hot-and-sour-soup.jpg",
    name: "Hot & Sour Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://recipes.timesofindia.com/thumb/58357074.cms?width=1200&height=900",
    name: "Clear Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/04/Manchow-soup.jpg",
    name: "Manchurian Soup",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/507936866/fc91a707-add6-4b7d-bc24-82fc679c76df/3c67801a-497d-42ed-b50a-1e5ccfe139b3/1292x727/match/image.jpg",
    name: "Soup - HALF",
    price: 40,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg",
    name: "Manchow Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://aartimadan.com/wp-content/uploads/2020/11/hot-and-sour-soup.jpg",
    name: "Hot & Sour Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://recipes.timesofindia.com/thumb/58357074.cms?width=1200&height=900",
    name: "Clear Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/04/Manchow-soup.jpg",
    name: "Manchurian Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://www.seriouseats.com/thmb/2nouHHsjM0bN1vwXMOZGUkLFsJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",
    name: "Chicken Soup",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://recipes.timesofindia.com/thumb/msid-62378548,width-1600,height-900/62378548.jpg",
    name: "Chicken Manchow Soup",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://assets.bonappetit.com/photos/5ebebfcc0c15fbb604578f25/4:3/w_2008,h_1506,c_limit/Basically-EggDrop-02.jpg",
    name: "Egg Soup",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://theindianclaypot.com/content/images/wp-content/uploads/2016/12/chicken-soup-smaller.jpg",
    name: "Clear Soup",
    price: 80,
    cutted_price: 80,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://1.bp.blogspot.com/-NNJ3eay59Hw/XbMoy06vv7I/AAAAAAAAL_s/Mrq-yj0NI7YP_DUYxd_rQOgfSK7qDs_1QCLcBGAsYHQ/s1600/IMG_20191025_214036.jpg",
    name: "Chicken Hot & Sour Soup",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://www.seriouseats.com/thmb/2nouHHsjM0bN1vwXMOZGUkLFsJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",
    name: "Chicken Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://recipes.timesofindia.com/thumb/msid-62378548,width-1600,height-900/62378548.jpg",
    name: "Chicken Manchow Soup - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://assets.bonappetit.com/photos/5ebebfcc0c15fbb604578f25/4:3/w_2008,h_1506,c_limit/Basically-EggDrop-02.jpg",
    name: "Egg Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://theindianclaypot.com/content/images/wp-content/uploads/2016/12/chicken-soup-smaller.jpg",
    name: "Clear Soup - HALF",
    price: 50,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://1.bp.blogspot.com/-NNJ3eay59Hw/XbMoy06vv7I/AAAAAAAAL_s/Mrq-yj0NI7YP_DUYxd_rQOgfSK7qDs_1QCLcBGAsYHQ/s1600/IMG_20191025_214036.jpg",
    name: "Chicken Hot & Sour Soup - HALF",
    price: 60,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://1.bp.blogspot.com/-KeCawc8_1Xk/XQ_u6jCkWwI/AAAAAAAAJGg/K6R3tsNEhpobjcEZd-dlzU3VXny7lkGngCLcBGAs/s1600/IMG_20190616_203154.jpg",
    name: "Paneer Chilli Dry",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://img.food.boxspace.in/image/rbk_5d053e7de351a/xhdpi.jpg",
    name: "Paneer Chilli Gravy",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/UC2kVqHx5Tw/maxresdefault.jpg",
    name: "Paneer Crispy",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/gcqZteUmQko/maxresdefault.jpg",
    name: "Paneer 65",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://1.bp.blogspot.com/-KeCawc8_1Xk/XQ_u6jCkWwI/AAAAAAAAJGg/K6R3tsNEhpobjcEZd-dlzU3VXny7lkGngCLcBGAs/s1600/IMG_20190616_203154.jpg",
    name: "Paneer Chilli Dry - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://img.food.boxspace.in/image/rbk_5d053e7de351a/xhdpi.jpg",
    name: "Paneer Chilli Gravy - HAFL",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/UC2kVqHx5Tw/maxresdefault.jpg",
    name: "Paneer Crispy - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/gcqZteUmQko/maxresdefault.jpg",
    name: "Paneer 65 - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/03/easy-chilli-chicken-recipe-735x490.jpg",
    name: "Chicken Chilli Dry",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://i.pinimg.com/564x/74/20/bf/7420bf1fe228f1f98e0fad61274235e3.jpg",
    name: "Chicken Chilli Gravy",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.yummyfoodrecipes.in/resources/picture/org/Crispy-Chicken-Recipe.jpg",
    name: "Chicken Crispy",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/75ced910a999cc66/1200x630cq70/photo.jpg",
    name: "Chicken 65",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://kudlarecipes.com/wp-content/uploads/2017/10/Chicken-Nuggets-1-768x432.png",
    name: "Chicken Lollipop Oil Fry",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2019/12/Chicken-lollipop-with-Hot-garlic-sauce-EWS.jpg",
    name: "Chicken Lollipop Gravy",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/Z6UEyoB427A/maxresdefault.jpg",
    name: "Chicken Honey Crispy",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/03/easy-chilli-chicken-recipe-735x490.jpg",
    name: "Chicken Chilli Dry - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://i.pinimg.com/564x/74/20/bf/7420bf1fe228f1f98e0fad61274235e3.jpg",
    name: "Chicken Chilli Gravy - HAFL",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.yummyfoodrecipes.in/resources/picture/org/Crispy-Chicken-Recipe.jpg",
    name: "Chicken Crispy - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/75ced910a999cc66/1200x630cq70/photo.jpg",
    name: "Chicken 65 - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://kudlarecipes.com/wp-content/uploads/2017/10/Chicken-Nuggets-1-768x432.png",
    name: "Chicken Lollipop Oil Fry - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2019/12/Chicken-lollipop-with-Hot-garlic-sauce-EWS.jpg",
    name: "Chicken Lollipop Gravy - HALF",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/Z6UEyoB427A/maxresdefault.jpg",
    name: "Chicken Honey Crispy - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://www.allrecipes.com/thmb/G96Vc_7F5Dm0csJJb2STC6tO97k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79543-fried-rice-restaurant-style-mfs-49-79b33da67e2643e8b585972cd92c5821.jpg",
    name: "Fried Rice",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://mudrafoods.in/wp-content/uploads/2021/07/VEG-SCH.-FRIED-RICE.png",
    name: "Schz. Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Veg-Triple-Schezwan-Rice.jpg",
    name: "Schz. Triple Rice",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.allrecipes.com/thmb/G96Vc_7F5Dm0csJJb2STC6tO97k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79543-fried-rice-restaurant-style-mfs-49-79b33da67e2643e8b585972cd92c5821.jpg",
    name: "Fried Rice - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://mudrafoods.in/wp-content/uploads/2021/07/VEG-SCH.-FRIED-RICE.png",
    name: "Schz. Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Veg-Triple-Schezwan-Rice.jpg",
    name: "Schz. Triple Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://images.aws.nestle.recipes/original/984a2927c718b0e9d01160918cb2f1f1_A42I2385.jpg",
    name: "Chicken Fried Rice",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/qDbmxGtrgz0/maxresdefault.jpg",
    name: "Chicken Schz. Fried Rice",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://im.hunt.in/local/Gallery/3018553/l/3018553_615a7.jpg",
    name: "Chicken Schz. Triple Fried Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://mefoodatarian.files.wordpress.com/2013/01/dsc07775.jpg",
    name: "Chicken Manchurian Fried Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://images.aws.nestle.recipes/original/984a2927c718b0e9d01160918cb2f1f1_A42I2385.jpg",
    name: "Chicken Fried Rice - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/qDbmxGtrgz0/maxresdefault.jpg",
    name: "Chicken Schz. Fried Rice - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://im.hunt.in/local/Gallery/3018553/l/3018553_615a7.jpg",
    name: "Chicken Schz. Triple Fried Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://mefoodatarian.files.wordpress.com/2013/01/dsc07775.jpg",
    name: "Chicken Manchurian Fried Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image: "https://www.yummefy.com/uploads/1663e7a66b.jpg",
    name: "Hakka Noodles",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-38.jpg",
    name: "Schz. Hakka Noodles",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/KWVArxvD0fg/maxresdefault.jpg",
    name: "Schz. Triple Noodles",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2016/03/one-pan-veg-noodle-and-manchurian-stir-fry-indo-chinese-recipe.1024x1024-4.jpg",
    name: "Manchurian Noodles",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image: "https://www.yummefy.com/uploads/1663e7a66b.jpg",
    name: "Hakka Noodles - HALF",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-38.jpg",
    name: "Schz. Hakka Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/KWVArxvD0fg/maxresdefault.jpg",
    name: "Schz. Triple Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2016/03/one-pan-veg-noodle-and-manchurian-stir-fry-indo-chinese-recipe.1024x1024-4.jpg",
    name: "Manchurian Noodles - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image: "https://i.imgur.com/VaTIEw3.jpg",
    name: "Chicken Hakka Noodles",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://earthlyjoyglobal.com/wp-content/uploads/2021/05/Untitled-design-1.jpg",
    name: "Chicken Schz. Noodles",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/05ZbNdQMiFI/hqdefault.jpg",
    name: "Chicken Schz. Triple Noodles",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image: "https://i.imgur.com/VaTIEw3.jpg",
    name: "Chicken Hakka Noodles - HALF",
    price: 70,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://earthlyjoyglobal.com/wp-content/uploads/2021/05/Untitled-design-1.jpg",
    name: "Chicken Schz. Noodles - HALF",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/05ZbNdQMiFI/hqdefault.jpg",
    name: "Chicken Schz. Triple Noodles - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://www.wpri.com/wp-content/uploads/sites/23/2015/10/fried-bean-burger-finished_36939968_ver1.0.jpg",
    name: "Veggie Burger Fried",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Spicy-Paneer-Burger-scaled.jpg?v=1620538034",
    name: "Crispy Paneer Burger+Fries",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://thumbs.dreamstime.com/b/chicken-burger-combo-11179623.jpg",
    name: "Chicken Burger With Fries",
    price: 90,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://bigbiterecipes.com/wp-content/uploads/2020/06/53623.jpg",
    name: "Crispy Chicken Burger+Fries",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://playswellwithbutter.com/wp-content/uploads/2022/06/Best-Ever-Grilled-Chicken-Burgers-18.jpg",
    name: "Grill Chicken Burger+Fries",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.thespruceeats.com/thmb/gTjo1gnOuBEVJsttgDW2JljvKY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shrimp-fettuccine-alfredo-recipe-5205738-hero-01-1a40571b0e3e4a17ab768b4d700c7836.jpg",
    name: "Alfrido pasta(white Sauce)",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://static.toiimg.com/thumb/60993853.cms?width=1200&height=900",
    name: "Arrabiata Pasta(Red Sauce)",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://www.victoriamag.com/wp-content/uploads/2020/10/pizza_recipe.jpg",
    name: "Mashroom Pizza(8inch)",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/-6hVr9RYLXQ/maxresdefault.jpg",
    name: "Veg Exotica(8inch)",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
    name: "Margherita Pizza(8inch)",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.imgur.com/awPw78F.jpg",
    name: "Paneer Tikka Pizza(8inch)",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://lh3.googleusercontent.com/9i9INGfzECb7XyJiTLwVLtOQobFPU24FqCZ5JlLSZyhbGVuwPuM2s_e1-ps7YTpdcZgML9UMhCHgz-iS-ZNKA7THMIbSyOc6QW_qLeW4Yg=w512-rw",
    name: "Paneer Peri-Peri Pizza(8inch)",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0608/3451/3116/products/paneer-pizza-2021-08-28-02-26-11-utc_800x.jpg?v=1644733083",
    name: "Paneer Makhani Pizza(8inch)",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://www.brotherskitchen.in/wp-content/uploads/2021/03/farmhouse-pizza-vegetarian-pizza-with-mouth-watering-toppings_1024-768-600x450.jpg",
    name: "Farmhouse(10inch)",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://australianmushrooms.com.au/wp-content/uploads/2021/11/HORT0105_Mushrooms_16x9_Pizza.png",
    name: "Mashroom Pizza(10inch)",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://lh3.googleusercontent.com/CRB9uwU25v7fVbpiKCfpmwasUyLgRCQqweMCt30mLESwOBq4n_PVk-pDxL8I96-ZpimyeALAdNWfGNOSTYWAnK-0A_6y9YFVAxb0CMEV=w512-rw",
    name: "Veg Exotica(10inch)",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg",
    name: "Margherita Pizza(10inch)",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.imgur.com/awPw78F.jpg",
    name: "Paneer Tikka Pizza(10inch)",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://pbs.twimg.com/media/DKFrc7fVoAA2Z3q.jpg",
    name: "Paneer Peri-Peri Pizza(10inch)",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/pizza-paneer-makhani-home-made-delicious-pizza_527904-931.jpg?w=2000",
    name: "Paneer Makhani Pizza(10inch)",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Chicken_Barbecue_Pizza_Recipe_new.jpg",
    name: "Barbeque Chicken Pizza(8inch)",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://www.bawarchi.com/uploads/oesuy8iicjcgb_bigger.jpg",
    name: "Chicken Tikka Pizza(8inch)",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.teaforturmeric.com/wp-content/uploads/2017/11/tandoori-chicken-pizza-4456.jpg",
    name: "Tandoori Chicken Pizza(8inch)",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://ik.imagekit.io/curefoods/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/COM559/primary/1_1.jpg",
    name: "Chicken Makhni Pizza(8inch)",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/x99gob9rvSI/maxresdefault.jpg",
    name: "Chicken Fries Pizza(8inch)",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://kohinoor-joy.com/wp-content/uploads/2021/04/butter-chicken-pizza-1.jpg",
    name: "Butter Chicken Pizza(8inch)",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Chicken_Barbecue_Pizza_Recipe_new.jpg",
    name: "Barbeque Chicken Pizza",
    name: "Barbeque Chicken Pizza(10inch)",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://www.bawarchi.com/uploads/oesuy8iicjcgb_bigger.jpg",
    name: "Chicken Tikka Pizza(10inch)",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.teaforturmeric.com/wp-content/uploads/2017/11/tandoori-chicken-pizza-4456.jpg",
    name: "Tandoori Chicken Pizza(10inch)",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://ik.imagekit.io/curefoods/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/COM559/primary/1_1.jpg",
    name: "Chicken Makhni Pizza(10inch)",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image: "https://i.ytimg.com/vi/x99gob9rvSI/maxresdefault.jpg",
    name: "Chicken Fries Pizza(10inch)",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://kohinoor-joy.com/wp-content/uploads/2021/04/butter-chicken-pizza-1.jpg",
    name: "Butter Chicken Pizza(10inch)",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.thespruceeats.com/thmb/LU-__sp56waXloMZvWpvs5aGDTM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mojito-cocktail-recipe-759319-hero-01-662400394a744a7fb1f01196ce60c05c.jpg",
    name: "Classic Mojito",
    price: 70,
    cutted_price: 0,
    category: "Cold Drink",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15162/peachmojitos.jpg",
    name: "Peach Mojito",
    price: 90,
    cutted_price: 0,
    category: "Cold Drink",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://realfood.tesco.com/media/images/mojito-4-LH-d38d1558-4985-438f-979e-a8c65c8b8a3f-0-1400x919.jpg",
    name: "Blueberry Mojito",
    price: 90,
    cutted_price: 0,
    category: "Cold Drink",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.recipegirl.com/wp-content/uploads/2016/06/Strawberry-Mojitos.jpg",
    name: "Strawberrys Mojito",
    price: 90,
    cutted_price: 0,
    category: "Cold Drink",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg",
    name: "lemon Ice Tea",
    price: 70,
    cutted_price: 0,
    category: "Tea",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://i.pinimg.com/originals/93/bc/9a/93bc9a070a854bbd2e356e483822615d.jpg",
    name: "Blueberry Ice Tea",
    price: 90,
    cutted_price: 0,
    category: "Tea",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.harryanddavid.com/blog/wp-content/uploads/2020/08/chocolate-truffle-featured-image.jpg",
    name: "Chocolate Shake",
    price: 80,
    cutted_price: 0,
    category: "Shake",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://i.pinimg.com/originals/03/60/c0/0360c05e27f88e9589f01bb951c299d6.jpg",
    name: "Kitkat Shake",
    price: 100,
    cutted_price: 0,
    category: "Shake",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/1/WU0306H_perfect-french-fries_s4x3.jpg.rend.hgtvcom.616.462.suffix/1589465976850.jpeg",
    name: "Classic Fries",
    price: 60,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://i1.wp.com/www.splashoftaste.com/wp-content/uploads/2022/05/peri-peri-fries-4.jpg",
    name: "Peri-Peri Fries",
    price: 70,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Shake_shack_cheese_fries.jpg",
    name: "Chessy Fries",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://iamhomesteader.com/wp-content/uploads/2020/01/buffalo-chicken-fries-4.jpg",
    name: "Chicken Chessy Fries",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://www.recipegirl.com/wp-content/uploads/2011/07/Iced-Coffee-11.jpg",
    name: "Plain Cold  Coffee",
    price: 70,
    cutted_price: 0,
    category: "Coffee",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://i1.wp.com/www.teacoffeecup.com/wp-content/uploads/2019/09/chocolate-cold-coffee.png?fit=2194%2C1306&ssl=1",
    name: "Chocolate Cold Coffee",
    price: 90,
    cutted_price: 0,
    category: "Coffee",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://lilluna.com/wp-content/uploads/2020/12/tomato-pizza-resize-10.jpg",
    name: "Tomato Pizza",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },
  {
    image:
      "https://vegplatter.in/files/public/images/partner/menu/15/Cheese%20Tomato%20Capsicum%20Pizza.jpg",
    name: "Capsicum Pizza",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Kamaal's",
  },

  // { image: '', name: '', price: 0, cutted_price: 0, category: '', qty_for: 1, restasurant_name: "Kamaal's" },

  // FAMOUS DUM BIRYANI ------------------------------------------------------------------------------------

  {
    image:
      "https://cdn.shopify.com/s/files/1/0447/7494/9025/articles/lndscpe.jpg?v=1662370766",
    name: "Chicken Dum Biryani",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0447/7494/9025/articles/lndscpe.jpg?v=1662370766",
    name: "Chicken Dum Biryani - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://foodalltime.com/wp-content/uploads/2018/07/Hyderabadi-Mutton-Dum-Biryani-Recipe-2F-Hyderabadi-Dum-Biryani-Recipe-1.jpg",
    name: "Mutton Dum Biryani",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://foodalltime.com/wp-content/uploads/2018/07/Hyderabadi-Mutton-Dum-Biryani-Recipe-2F-Hyderabadi-Dum-Biryani-Recipe-1.jpg",
    name: "Mutton Dum Biryani - HALF",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2021/03/Chicken-tikka-biryani.jpg",
    name: "Chicken Tikka Biryani",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2020/12/EGG-BHAJI-BIRYANI-.jpg?fit=1200%2C675&ssl=1",
    name: "Egg Biryani",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://vismaifood.com/storage/app/uploads/public/0ae/185/cba/thumb__700_0_0_0_auto.jpg",
    name: "Prawns Biryani",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://static.toiimg.com/thumb/61225708.cms?width=1200&height=900",
    name: "Chicken Pulao",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://www.ndtv.com/cooks/images/mutton.pulao.jpg",
    name: "Mutton Pulao",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://i0.wp.com/www.fatimasfabulouskitchen.com/wp-content/uploads/2020/10/IMG_2216.jpg?fit=5184%2C3456&ssl=1",
    name: "Chicken Tawa Pulao",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/28c803d3b4552829/1200x630cq70/photo.jpg",
    name: "Mutton Tawa Pulao",
    price: 270,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/1030_1.jpg",
    name: "Veg Dum Biryani",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/1030_1.jpg",
    name: "Veg Dum Biryani - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.recipehub.in/wp-content/uploads/2020/10/paneer-tikka-biryani-recipewebsite-1024x730.jpg",
    name: "Paneer Tikka Biryani",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/06/veg-pulao-recipe.jpg",
    name: "Veg Pulao",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://images.news18.com/ibnkhabar/uploads/2022/07/Paneer-Pulao.jpg",
    name: "Paneer Pulao",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
    name: "Jeera Rice",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/PANEER-TAWA-MASALA---skk.jpg",
    name: "Paneer Tawa",
    price: 200,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://veenaazmanov.com/wp-content/uploads/2021/04/Easy-Tandoori-Chicken-Recipe-11.jpg",
    name: "Chicken Tandoori",
    price: 320,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://veenaazmanov.com/wp-content/uploads/2021/04/Easy-Tandoori-Chicken-Recipe-11.jpg",
    name: "Chicken Tandoori - HALF",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/U-2hP-amIGc/maxresdefault.jpg",
    name: "Chicken Pudina Kabab",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/U-2hP-amIGc/maxresdefault.jpg",
    name: "Chicken Pudina Kabab - HALF",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/W1pNwLSAajQ/maxresdefault.jpg",
    name: "Chicken Reshmi Kabab",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/W1pNwLSAajQ/maxresdefault.jpg",
    name: "Chicken Reshmi Kabab - HALF",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://4.bp.blogspot.com/-EL51R-3NYGI/XHqxeeY8MWI/AAAAAAAAsrY/_NKznj5kuVUHWtcz4IUokDBSgl2fIbj4ACEwYBhgL/s1600/010.jpg",
    name: "Chchen Sholay Kabab",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://4.bp.blogspot.com/-EL51R-3NYGI/XHqxeeY8MWI/AAAAAAAAsrY/_NKznj5kuVUHWtcz4IUokDBSgl2fIbj4ACEwYBhgL/s1600/010.jpg",
    name: "Chchen Sholay Kabab - HALF",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://pipingpotcurry.com/wp-content/uploads/2021/04/chicken-tikka-kebab-air-fryer-Piping-Pot-Curry.webp",
    name: "Chicken Tikka Kabab",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://pipingpotcurry.com/wp-content/uploads/2021/04/chicken-tikka-kebab-air-fryer-Piping-Pot-Curry.webp",
    name: "Chicken Tikka Kabab - HALF",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://thebellyrulesthemind.net/wp-content/uploads/2019/12/Air-Fryer-Tandoori-Paneer-Tikka-7-720x405.png",
    name: "Paneer Tikka Kabab",
    price: 200,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://images.slurrp.com/prod/rich_article/ff8zddmoj5d.webp?impolicy=slurrp-20210601&width=880&height=500",
    name: "Prawns Koliwada",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2022/08/Prawn-masala-recipe.jpg",
    name: "Prawns Masala",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/lCQPZbBYcyI/maxresdefault.jpg",
    name: "Prawns Kadai",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://thecurrymommy.com/wp-content/uploads/2021/09/desi-chicken-recipe-480x270.jpg",
    name: "Chicken Nargis",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/640px-Chicken_makhani.jpg",
    name: "Butter Chicken",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://c.ndtvimg.com/2022-03/8tos2p1o_chicken_625x300_09_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
    name: "Chicken Pahadi",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/ec0b32235a7ab6e0/1200x630cq70/photo.jpg",
    name: "Chicken Murg Massalam",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://static.toiimg.com/thumb/75543821.cms?width=1200&height=900",
    name: "Chicken Handi",
    price: 170,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://pragativadi.com/wp-content/uploads/2022/04/Untitled-design-29-1.png",
    name: "Chicken Angaara With Bone",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/10/1-11.jpg",
    name: "Chicken Fry Masala",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/chicken-curry-recipe-500x375.jpg",
    name: "Chicken Curry",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/iUmt0Cy9vAo/maxresdefault.jpg",
    name: "Murg Musallam(tandoori)",
    price: 480,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.indidiet.com/wp-content/uploads/2017/11/IMG_20171107_1254382.jpg",
    name: "Murg Musallam(boneless)",
    price: 0,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://static.toiimg.com/photo/83942719.cms",
    name: "Chicken Bhuna",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://static.toiimg.com/thumb/53595368.cms?width=1200&height=900",
    name: "Chicken Tawa",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/cde0f5d52a23368e/1200x630cq70/photo.jpg",
    name: "Chicken Hyderabadi",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.pacificfoods.com/wp-content/uploads/2022/08/Chicken-tikka-masala_3.jpg",
    name: "Chicken Tikka Masala",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://lh3.googleusercontent.com/PnTb0ZrYSVjGgwA0TMjjyGr8609ejT9QO9PCwnzcSDlmfmTEx0GHM8hmeM49auZMdCEPhGQvx0I1WvbuVVer0IOP5uI=w300-rw",
    name: "CHicken Shahansha",
    price: 450,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://xantilicious.com/wp-content/uploads/2016/04/IMG_3954123.jpg",
    name: "Mutton Bhuna",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://c.ndtvimg.com/2022-03/g6eq8pa8_mutton-curry_625x300_10_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
    name: "Mutton Hyderabadi",
    price: 280,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://i.pinimg.com/originals/10/23/60/102360cf1e4fd6cb49f8acf82fb7fa1a.jpg",
    name: "Bheja Tawa",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/jjn6ciqd9mjgv0msxcm8",
    name: "Mutton Shahansha",
    price: 600,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://kfoods.com/images1/newrecipeicon/dabba-ghosht_11447.jpg",
    name: "Dabba Gosht",
    price: 270,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2016/07/1-53.jpg",
    name: "Mutton Mughlai",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/aG-QEJ4SqWE/maxresdefault.jpg",
    name: "Mutton Afgani",
    price: 230,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/asG0xjnjn7c/maxresdefault.jpg",
    name: "Mutton do Pyaaza",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://images.slurrp.com/prod/recipe_images/bawarchi/flavoursome-mutton-curry_TWL7FH2OWMTRMXFK4XZK.webp?impolicy=slurrp-20210601&width=1200&height=675",
    name: "Mutton Angaara",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://vaya.in/recipes/wp-content/uploads/2018/11/Mutton-Masala.jpg",
    name: "Mutton Fry Masala",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/11/1-11.jpg",
    name: "Mutton Masala",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.foodie-trail.com/wp-content/uploads/2021/08/PHOTO-2021-07-06-22-47-03.jpg",
    name: "Dal Khichdi",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://i.pinimg.com/originals/7e/6b/39/7e6b391a85ad503b535eeff99bb7d10b.jpg",
    name: "Veg Jaipuri",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://tastedrecipes.com/wp-content/uploads/2018/09/Veg-Makhanwala-2-848x424.jpg",
    name: "Veg Makhanawala",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://cdn.tarladalal.com/members/9306/procstepimgs/aloo-mutter-(25)-20-187317.jpg",
    name: "Aloo Mutter",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/8fWj2pgj_80/maxresdefault.jpg",
    name: "Mix Bhaji",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2022/07/Dal-fry-restaurant-style.jpg",
    name: "Dal Fry",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://myfoodstory.com/wp-content/uploads/2022/04/Veg-Kolhapuri-3.jpg",
    name: "Dal Kolhapuri",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/EU3kkqZF2vU/maxresdefault.jpg",
    name: "Dal Tadka",
    price: 120,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://zaykarecipes.com/eng/wp-content/uploads/2019/09/paneer-mushroom-makhani.jpg",
    name: "Mushroom & Paneer handi",
    price: 180,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://tastedrecipes.com/wp-content/uploads/2021/11/paneer-makhanwala-3.jpg",
    name: "Paneer Makhanwala",
    price: 190,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/EfHWhGqZia0/maxresdefault.jpg",
    name: "Paneer Methi Lasooni",
    price: 200,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Kaju-Masala-Kaju-Curry-500x375.jpg",
    name: "Kaju Masala",
    price: 250,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://experience-fresh.panasonic.eu/wp-content/uploads/2018/12/Paneer_Tikka_Masala_enjoy_181205.jpg",
    name: "Paneer Tikka Masala",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://i.ndtvimg.com/i/2017-09/paneer-makhani_620x330_51506590090.jpg",
    name: "Paneer Kadai",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/07/13/1220244-cw00986-1300x865.jpg?itok=SULpYco7",
    name: "paneer Afgani",
    price: 170,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.thesouthafrican.com/wp-content/uploads/2021/12/Veggie-soup-1.jpg",
    name: "Veg Clear Soup",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/2281_1_1.jpg",
    name: "Veg Noodles Soup",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Veg-Manchow-Soup-scaled.jpeg?v=1621618246",
    name: "Veg Manchow Soup",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://thechutneylife.com/wp-content/uploads/2018/02/Schezwan-Mushrooms-The-Chutney-Life-2-1024x683.jpg",
    name: "Mushroom Schezwan Dry",
    price: 240,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/3b6857125dd256af/680x482cq70/paneer-crispy-recipe-main-photo.jpg",
    name: "Paneer Crispy",
    price: 230,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg",
    name: "Veg Fried Rice",
    price: 130,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg",
    name: "Veg Fried Rice - HALF",
    price: 90,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/d2c64b6ff57241af/1200x630cq70/photo.jpg",
    name: "Veg Schezwan Rice",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/d2c64b6ff57241af/1200x630cq70/photo.jpg",
    name: "Veg Schezwan Rice - HALF",
    price: 110,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://thechutneylife.com/wp-content/uploads/2017/09/Veg-Hakka-Noodles-The-Chutney-Life-4.jpg",
    name: "Veg Hakka Noodles",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://thechutneylife.com/wp-content/uploads/2017/09/Veg-Hakka-Noodles-The-Chutney-Life-4.jpg",
    name: "Veg Hakka Noodles - HALF",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://foodfinger.in/wp-content/uploads/2021/04/Triple-Schezwan-Noodles-Veg-scaled.jpg",
    name: "Veg Triple Schezwan Noodles",
    price: 220,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://mycookalicious.files.wordpress.com/2012/09/clear_chicken_soup.jpg",
    name: "Chicken Clear Soup",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img.taste.com.au/h5eXsqOD/taste/2016/11/chicken-noodle-soup-80035-1.jpeg",
    name: "Chicken Noodles Soup",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://hemamagesh.com/wp-content/uploads/2020/01/hot-and-sour-chicken-soup-ftd.jpg",
    name: "Chicken Hot & Sour Soup",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_761402230-600x600.jpg",
    name: "Chicken Lollipop(8pcs)",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_761402230-600x600.jpg",
    name: "Chicken Lollipop(4pcs)",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/7cMekeqxKmU/maxresdefault.jpg",
    name: "Chicken Lollipop Schz. Dry",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/7cMekeqxKmU/maxresdefault.jpg",
    name: "Chicken Lollipop Schz. Dry - HAlf",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/aVUwe80ugi4/maxresdefault.jpg",
    name: "Chicken Chilli Manchurian Dry",
    price: 190,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/aVUwe80ugi4/maxresdefault.jpg",
    name: "Chicken Chilli Manchurian Dry - HALF",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/11/1-6.jpg",
    name: "Chicken Schz. Dry",
    price: 200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/CHICKEN-SCHEZWAN-MANCHURIAN-DRY---skk.jpg",
    name: "Chicken Schz. Dry - HALF",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://static.toiimg.com/thumb/62821360.cms?width=573&height=430 ",
    name: "Chicken 65 Dry",
    price: 210,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://static.toiimg.com/thumb/62821360.cms?width=573&height=430",
    name: "Chicken 65 Dry - HALF",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://kfoods.com/images1/newrecipeicon/prawn-manchurian_2990.jpg",
    name: "Prawns Chilli Manchurian Dry",
    price: 270,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/T2ZCVrA_V9g/maxresdefault.jpg",
    name: "Chicken Lollipop Gravy",
    price: 260,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/T2ZCVrA_V9g/maxresdefault.jpg",
    name: "Chicken Lollipop Gravy - HALF",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2013/11/schez-500x427.jpg",
    name: "Chicken Schz. Gravy",
    price: 220,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.indianrecipeinfo.com/wp-content/uploads/2020/11/Chicken-Fried-Rice-Recipe-Restaurant-Style.jpg",
    name: "Chicken Fried Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.indianrecipeinfo.com/wp-content/uploads/2020/11/Chicken-Fried-Rice-Recipe-Restaurant-Style.jpg",
    name: "Chicken Fried Rice - HALF",
    price: 100,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/qDbmxGtrgz0/maxresdefault.jpg",
    name: "Chicken Schz. Fried Rice",
    price: 160,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://i.ytimg.com/vi/qDbmxGtrgz0/maxresdefault.jpg",
    name: "Chicken Schz. Fried Rice - HALF",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://a8g4i9g5y.ssl.hwcdn.net/files/styles/hd_two_row_landscape/public/a8wn4hw/im/e1/31/1bf3e337b7052c486d993013f91b2438.jpg",
    name: "Chicken Triple Rice",
    price: 240,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2020/02/Egg-Fried-Rice-2.jpg?fit=1300%2C867&ssl=1",
    name: "Egg  Fried Rice",
    price: 140,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/ca5ad13165c7249e/1200x630cq70/photo.jpg",
    name: "Egg Schezwan Rice",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://spiceeats.com/wp-content/uploads/2020/07/Chicken-Hakka-Noodles.jpg",
    name: "Chicken Hakka Noodles",
    price: 150,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://spiceeats.com/wp-content/uploads/2020/07/Chicken-Hakka-Noodles.jpg",
    name: "Chicken Hakka Noodles - HALF",
    price: 120,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.recipehub.in/wp-content/uploads/2020/06/schezwan-chicken-noodles3website.jpg",
    name: "Chicken Schz. Noodles",
    price: 180,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.recipehub.in/wp-content/uploads/2020/06/schezwan-chicken-noodles3website.jpg",
    name: "Chicken Schz. Noodles - HALF",
    price: 130,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://lh3.googleusercontent.com/P8FiWci9N-AocBIrvD9vDxs7Rr-Ub6OaKDS-xoFwxA6kBby9bArV2w5O0JzMgu4ORsWO0XcoibzE72UfBQbxzqG3ekx6jzm3jYUeBw0o=w512-rw",
    name: "Chicken Triple Noodles",
    price: 250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://static01.nyt.com/images/2020/03/04/dining/tr-egg-curry/merlin_169211805_227972c0-43d1-4f25-9643-9568331d8adb-mediumSquareAt3X.jpg",
    name: "Egg Curry",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://images.slurrp.com/prod/recipe_images/whiskaffair/egg-bhurji-recipe-1617379977_KR2AASX65VD0XTN5MXAD.webp",
    name: "Egg Bhurji",
    price: 80,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://myvegetarianroots.com/wp-content/uploads/2020/08/DSC_0033.jpeg",
    name: "Egg Fry Masala",
    price: 110,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.sweetashoney.co/wp-content/uploads/Kale-Omelette-10.jpg",
    name: "Omelette(2pc)",
    price: 60,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/world_breakfast/Boiled_Eggs_Recipe_400.jpg",
    name: "Boiled Egg",
    price: 20,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://static.toiimg.com/thumb/82220288.cms?resizemode=4&width=1200",
    name: "Roomali Roti",
    price: 30,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img.clearcals.com/recipes/3811367fc98c91ec50a0fd1259a13497aab13cb0/medium.jpg",
    name: "Tandoori Roti(wheat)",
    price: 15,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image: "https://www.chainbaker.com/wp-content/uploads/2021/02/IMG_2985.jpg",
    name: "Butter Roti",
    price: 20,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/62f4ac9660170fccac04fb43-78641fb1-a8572387.jpg",
    name: "Plain Naan",
    price: 35,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://rookiewithacookie.com/wp-content/uploads/2020/05/IMG_2570.jpg",
    name: "Paratha",
    price: 30,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.thespruceeats.com/thmb/e4glkhmKU7RXBglnuXO2zsqWba4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-SUSANSAM-487133372-345586e7531e4709bd531be5673f3f14.jpg",
    name: "Aloo Paratha",
    price: 100,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/04/shutterstock_83591092-600x381.jpg",
    name: "Chicken Paratha",
    price: 150,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.viniscookbook.com/wp-content/uploads/2018/09/20180924_224755.jpg",
    name: "Paneer Paratha",
    price: 140,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2014/11/masala-papad-recipe8.jpg",
    name: "Papad Fry",
    price: 20,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://3.imimg.com/data3/EW/DV/MY-17645350/roasted-papad-500x500.png",
    name: "Roasted Papad",
    price: 15,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg",
    name: "Green Salad",
    price: 80,
    cutted_price: 0,
    category: "veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2022/02/Gajar-halwa.jpg",
    name: "Gajar Halwa",
    price: 600,
    cutted_price: 0,
    category: "Sweets",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/02/Doodhi-Halwa.jpg",
    name: "Dudhi Halwa",
    price: 600,
    cutted_price: 0,
    category: "Sweets",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2020/08/Suji-Ka-Halwa.jpg?fit=640%2C360&ssl=1",
    name: "Rava Halwa",
    price: 600,
    cutted_price: 0,
    category: "Sweets",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop-500x375.jpg",
    name: "1kg Chicken Biryani",
    price: 900,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Gosht-Biryani-1300x868.jpeg?v=1625193165",
    name: "1kg Mutton Biryani",
    price: 1300,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/03/Chicken-tikka-biryani.jpg",
    name: "1kg Chicken Tikka Biryani(boneless)",
    price: 1250,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://geekrobocook.com/wp-content/uploads/2021/03/Chicken-tikka-biryani.jpg",
    name: "1kg Veg biryani",
    price: 750,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.masala.tv/wp-content/uploads/2021/10/CHICKEN-YAKNI-P-WEB.jpg",
    name: "1kg Chicken Yakhni Pulao",
    price: 850,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://fatimacooks.net/wp-content/uploads/2021/12/Dal-Gosht-Meat-Lentils-Recipe-2-1-scaled-e1639775132334.jpeg",
    name: "1kg Dal Ghost + rice",
    price: 750,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  {
    image:
      "https://www.yummyfoodrecipes.in/resources/picture/org/Mughlai-Mutton-Masala.jpg",
    name: "1kg Mutton Masala",
    price: 1200,
    cutted_price: 0,
    category: "non-veg",
    qty_for: 1,
    restasurant_name: "Famous Dum Biryani",
  },
  // { image: '', name: '', price: 0, cutted_price: 0, category: '', qty_for: 1, restasurant_name: "Famous Dum Biryani" },
];

// # =============== ITEMS LIST end ================  #

// list of CUSTOMER users here their data will stores
const customer_users = [
  {
    socket_id: "",
    name: "Arif alam(founder)",
    email: "arifalam1207@gmail.com",
    password: "arif1207",
    avatar: "./images/verify.png",
    address: {
      city: "Taloja",
      building: "Panchanand Heights",
      wing: "C",
      room_number: "802",
      landmark: "Unioun Bank of India",
      phase: "1",
      sector: "9",
      plot: "15",
    },
    ordered_list: [],
    cart: [
      // { name: 'Coco Cola', category: 'veg', price: 0, qty: 0 }
    ],
    total_price: 0,
    number_of_cart_items: 0,
    order_number: 0,
  },
];

// list of RESTARENT users here their data will stores
const restaurent_users = [
  // {
  //     socket_id: '', avtar: '', img: '', name: '', email: '', phone: '', password: '', address: { city: '', building: '', sector: , plot: , phase: , landmark: '' },
  //     orders: [

  //     ],
  //     number_of_pending_orders: 0,
  //     number_of_taken_orders: 0,
  //     number_of_canclled_orders: 0,
  //     total_orders: 0
  // },

  {
    socket_id: "",
    avtar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "example",
    email: "hotel@gmail.com",
    phone: "4654544252",
    password: "aa",
    address: {
      city: "taloja",
      building: "gami",
      sector: 65,
      plot: 5,
      phase: 2,
      landmark: "manisha mart",
    },
    orders: [
      {
        avtar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "Arif alam",
        year: "2022",
        month: "Jul",
        date: "12",
        city: "taloja",
        building: "Panchanand",
        wing: "c",
        room_number: 501,
        sector: 12,
        plot: 5,
        phase: 2,
        landmark: "manisha mart",
        items: [
          { category: "non-veg", name: "chiken", qty: 1, price: 200 },
          { category: "veg", name: "burgur", qty: 3, price: 450 },
          { category: "veg", name: "pizza", qty: 2, price: 100 },
        ],
        total_price: 750,
        status: "confirmed",
      },

      {
        avtar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "Arif alam",
        year: "2022",
        month: "Jul",
        date: "12",
        city: "taloja",
        building: "Panchanand heights",
        wing: "c",
        room_number: 501,
        sector: 21,
        plot: 5,
        phase: 1,
        landmark: "manisha mart",
        items: [
          { category: "non-veg", name: "chiken", qty: 1, price: 200 },
          { category: "veg", name: "burgur", qty: 3, price: 450 },
          { category: "veg", name: "pizza", qty: 2, price: 100 },
          { category: "veg", name: "pizza", qty: 2, price: 100 },
          { category: "veg", name: "pizza", qty: 2, price: 100 },
        ],
        total_price: 750,
        status: "cancelled",
      },

      {
        avtar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "Arif alam",
        year: "2022",
        month: "Jul",
        date: "12",
        city: "taloja",
        building: "gami",
        wing: "c",
        room_number: 501,
        sector: 9,
        plot: 5,
        phase: 1,
        landmark: "manisha mart",
        items: [
          { category: "non-veg", name: "chiken", qty: 1, price: 200 },
          { category: "veg", name: "burgur", qty: 3, price: 450 },
          { category: "veg", name: "pizza", qty: 2, price: 100 },
        ],
        total_price: 750,
        status: "pending",
      },

      {
        avtar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "alam",
        year: "2022",
        month: "Jul",
        date: "12",
        city: "taloja",
        building: "gami",
        wing: "c",
        room_number: 501,
        sector: 4,
        plot: 5,
        phase: 2,
        landmark: "manisha mart",
        items: [
          { category: "non-veg", name: "chiken", qty: 1, price: 200 },
          { category: "veg", name: "burgur", qty: 3, price: 450 },
          { category: "veg", name: "pizza", qty: 2, price: 100 },
        ],
        total_price: 750,
        status: "pending",
      },
    ],
    number_of_pending_orders: 0,
    number_of_taken_orders: 0,
    number_of_canclled_orders: 0,
    total_orders: 0,
  },

  // RESTASURANTS ========================

  {
    socket_id: "",
    avtar: "./images/verify.png",
    img: "./images/verify.png",
    name: "Famous Dum Biryani",
    email: "-",
    phone: "9029283123",
    password: "fdb1",
    address: {
      city: "Toloja",
      building: "Dream City CHS",
      sector: 11,
      plot: 41,
      phase: 1,
      landmark: "- ...",
    },
    orders: [],
    number_of_pending_orders: 0,
    number_of_taken_orders: 0,
    number_of_canclled_orders: 0,
    total_orders: 0,
  },

  {
    socket_id: "",
    avtar: "",
    img: "",
    name: "Kamaal's",
    email: "-",
    phone: "9324476104",
    password: "kml2",
    address: {
      city: "Taloja",
      building: "M/s Sai Sadhana",
      sector: 10,
      plot: 66 - 67 - 68,
      phase: 1,
      landmark: "-...",
    },
    orders: [],
    number_of_pending_orders: 0,
    number_of_taken_orders: 0,
    number_of_canclled_orders: 0,
    total_orders: 0,
  },

  {
    socket_id: "",
    avtar: "",
    img: "",
    name: "Metro Spicy",
    email: "-",
    phone: "7873181978",
    password: "msc3",
    address: {
      city: "Taloja",
      building: "Sahar Vinar CHS",
      sector: 11,
      plot: 4,
      phase: 1,
      landmark: "-...",
    },

    orders: [],
    number_of_pending_orders: 0,
    number_of_taken_orders: 0,
    number_of_canclled_orders: 0,
    total_orders: 0,
  },

  {
    socket_id: "",
    avtar: "",
    img: "",
    name: "Khrish Chinese",
    email: "-",
    phone: "7045898896",
    password: "kc4",
    address: {
      city: "Taloja",
      building: "Sai Sadan Apartment",
      sector: 10,
      plot: 146,
      phase: 1,
      landmark: "- ...",
    },
    orders: [],
    number_of_pending_orders: 0,
    number_of_taken_orders: 0,
    number_of_canclled_orders: 0,
    total_orders: 0,
  },

  {
    socket_id: "",
    avtar: "",
    img: "",
    name: "Aysha",
    email: "-",
    phone: "08657458201",
    password: "ays5",
    address: {
      city: "Taloja",
      building: "AAKAR RESIDENCY",
      sector: 2,
      plot: 162,
      phase: 1,
      landmark: "- ...",
    },
    orders: [],
    number_of_pending_orders: 0,
    number_of_taken_orders: 0,
    number_of_canclled_orders: 0,
    total_orders: 0,
  },
  // {
  //     socket_id: '', avtar: '', img: '', name: '', email: '', phone: '', password: '', address: { city: '', building: '', sector: , plot: , phase: , landmark: '' },
  //     orders: [

  //     ],
  //     number_of_pending_orders: 0,
  //     number_of_taken_orders: 0,
  //     number_of_canclled_orders: 0,
  //     total_orders: 0
  // },
  // {
  //     socket_id: '', avtar: '', img: '', name: '', email: '', phone: '', password: '', address: { city: '', building: '', sector: , plot: , phase: , landmark: '' },
  //     orders: [

  //     ],
  //     number_of_pending_orders: 0,
  //     number_of_taken_orders: 0,
  //     number_of_canclled_orders: 0,
  //     total_orders: 0
  // },
];

// RESTAURANTS THAT ARE ONLINE //
const online_restaurants = [
  // {socket_id :'',img: '',name: '',address: { city: '', building: '', sector : 5,plot: 5,phase :2, landmark: '' }}
];

// WHEN CUSTOMER USER OR RESTAURANT USER ENTER WEBSITE //

io.on("connection", (socket) => {
  //socket_id of both customer and restaurant user

  const user_socket_id = socket.id;

  // ON CLICK SIGN-UP BTN CHECKING IS THE PASSWORD IS DIIFERENT FORM ALL IN THE CUSTOMERS ARRAY
  socket.on("signup-btn-click", (password) => {
    // you have to do like this if you want to make a individual function
    let checking_result = "";
    if (customer_users.length > 0) {
      for (i = 0; i < customer_users.length; i++) {
        if (password == customer_users[i].password) {
          socket.emit("password-match", customer_users);
          checking_result = "matched password";
        }
      }
      if (checking_result == "") {
        socket.emit("password-not-match", customer_users); // 'emit' function will only work in 'on' function
      }
    } else {
      socket.emit("password-not-match", customer_users); // 'emit' function will only work in 'on' function
    }
  });

  // # CUSTOMER USERS SIGN UP FUNC #
  socket.on(
    "customer-user-signup",
    (
      username,
      email,
      password,
      avatar,
      city,
      building,
      wing,
      room_number,
      landmark,
      phase,
      sector,
      plot
    ) => {
      // IT wil be on addres page submit btn click ( just for reminder remove it after)

      customer_users.push({
        socket_id: socket.id,
        name: username,
        email: email,
        password: password,
        avatar: avatar,
        address: {
          city: city,
          building: building,
          wing: wing,
          room_number: room_number,
          landmark: landmark,
          phase: phase,
          sector: sector,
          plot: plot,
        },
        ordered_list: [],
        cart: [
          // { name: 'Coco Cola', category: 'veg', price: 0, qty: 0 }
        ],
        total_price: 0,
        number_of_cart_items: 0,
        order_number: 0,
      });
      socket.emit(
        "appeding-items-in-items-container",
        items,
        customer_users,
        online_restaurants
      );
    }
  );

  // SEARCHING ITEMS IN CUSTOMER ID FUNC

  socket.on("searching-item-CTMR", (item_name) => {
    socket.emit("search-fooditem-customer-id", items, customer_users);
  });

  //# CUSTOMER USERS LOGIN FUNC #

  // firs check if the entered password match to any user in the customer array if yes the use the array like 'customer_users[i].content' and put data in the page
  socket.on("customer-user-login", (password) => {
    socket.emit("customer-user-login-putting-data", customer_users);
  });

  // # ADDING ITEMS IN THE CART FUNCTION #

  socket.on(
    "appending-item-in-cart-function",
    (item_index, items_array, food_name, pass) => {
      socket.emit(
        "appeding-item-in-cart-starting-func",
        customer_users,
        items_array,
        item_index,
        food_name
      );
    }
  );

  socket.on("append-item-in-cart-array", (profile_pass, selected_item) => {
    for (i = 0; i < customer_users.length; i++) {
      if (profile_pass == customer_users[i].password) {
        customer_users[i].cart.push({
          name: selected_item.name,
          category: selected_item.category,
          price: selected_item.price,
          constant_price: selected_item.price,
          qty: 1,
          constant_qty: selected_item.qty_for,
          rstrnt_name: selected_item.restasurant_name,
        });
        customer_users[i].number_of_cart_items =
          customer_users[i].number_of_cart_items + 1;
        customer_users[i].total_price =
          customer_users[i].total_price + selected_item.price;
      }
    }
  });

  socket.on("appending-item-on-screen", (profile_pass, selected_items) => {
    for (i = 0; i < customer_users.length; i++) {
      if (profile_pass == customer_users[i].password) {
        let customer_i = customer_users[i];
        let customer_userss = customer_users;

        let total_bill = customer_users[i].total_price;
        let total_num_of_items = customer_users[i].number_of_cart_items;

        socket.emit(
          "append-item-on-screen",
          customer_users,
          customer_userss,
          selected_items,
          total_bill,
          total_num_of_items
        );
      }
    }
  });

  socket.on("increasing-qty", (profile_pass, cart_item_name) => {
    for (i = 0; i < customer_users.length; i++) {
      if (profile_pass == customer_users[i].password) {
        for (c_i = 0; c_i < customer_users[i].cart.length; c_i++) {
          if (cart_item_name == customer_users[i].cart[c_i].name) {
            customer_users[i].cart[c_i].price =
              customer_users[i].cart[c_i].price +
              customer_users[i].cart[c_i].constant_price;
            customer_users[i].cart[c_i].qty =
              customer_users[i].cart[c_i].qty + 1;

            customer_users[i].number_of_cart_items =
              customer_users[i].number_of_cart_items + 1;
            customer_users[i].total_price =
              customer_users[i].total_price +
              customer_users[i].cart[c_i].constant_price;

            let total_prices = customer_users[i].total_price;
            let numbers_of_cart_items = customer_users[i].number_of_cart_items;

            let cart_index = customer_users[i].cart[c_i];

            socket.emit(
              "updating-increased-data",
              cart_index,
              customer_users,
              total_prices,
              numbers_of_cart_items
            );
          }
        }
      }
    }
  });

  socket.on("decrease-qty", (profile_pass, cart_item_name) => {
    for (i = 0; i < customer_users.length; i++) {
      if (profile_pass == customer_users[i].password) {
        for (c_i = 0; c_i < customer_users[i].cart.length; c_i++) {
          if (cart_item_name == customer_users[i].cart[c_i].name) {
            if (customer_users[i].cart[c_i].qty > 1) {
              customer_users[i].cart[c_i].price =
                customer_users[i].cart[c_i].price -
                customer_users[i].cart[c_i].constant_price;
              customer_users[i].cart[c_i].qty =
                customer_users[i].cart[c_i].qty - 1;

              customer_users[i].number_of_cart_items =
                customer_users[i].number_of_cart_items - 1;
              customer_users[i].total_price =
                customer_users[i].total_price -
                customer_users[i].cart[c_i].constant_price;

              let total_prices = customer_users[i].total_price;
              let numbers_of_cart_items =
                customer_users[i].number_of_cart_items;

              let cart_index = customer_users[i].cart[c_i];
              socket.emit(
                "updating-decreased-data",
                cart_index,
                customer_users,
                total_prices,
                numbers_of_cart_items
              );
            }
          }
        }
      }
    }
  });

  socket.on("removing-item", (profile_pass, cart_item_name) => {
    for (i = 0; i < customer_users.length; i++) {
      if (profile_pass == customer_users[i].password) {
        for (c_i = 0; c_i < customer_users[i].cart.length; c_i++) {
          if (cart_item_name == customer_users[i].cart[c_i].name) {
            // console.log(customer_users[i].cart[c_i].qty)

            customer_users[i].number_of_cart_items =
              customer_users[i].number_of_cart_items -
              customer_users[i].cart[c_i].qty;
            customer_users[i].total_price =
              customer_users[i].total_price - customer_users[i].cart[c_i].price;

            let total_prices = customer_users[i].total_price;
            let numbers_of_cart_items = customer_users[i].number_of_cart_items;
            let cart_index = customer_users[i].cart[c_i];

            // console.log(customer_users[i])

            if (c_i > -1) {
              customer_users[i].cart.splice(c_i, 1);
            }

            socket.emit(
              "updating-removed-data",
              cart_index,
              customer_users,
              total_prices,
              numbers_of_cart_items
            );
          }
        }
      }
    }
  });

  socket.on(
    "customer-updating-address",
    (
      pass,
      signup_city,
      signup_building,
      signup_wing,
      signup_roomnumber,
      signup_landmark,
      signup_phase,
      signup_sector,
      signup_plot
    ) => {
      for (i = 0; i < customer_users.length; i++) {
        if (pass == customer_users[i].password) {
          customer_users[i].address.city = signup_city;
          customer_users[i].address.building = signup_building;
          customer_users[i].address.wing = signup_wing;
          customer_users[i].address.room_number = signup_roomnumber;
          customer_users[i].address.landmark = signup_landmark;
          customer_users[i].address.phase = signup_phase;
          customer_users[i].address.sector = signup_sector;
          customer_users[i].address.plot = signup_plot;
        }
      }
      console.log(customer_users);
    }
  );

  // # =========================================== RESTAURANT USERS LOGIN FUNC ====================================== #
  // ---------------------------------------------------------------------------------------------------------------------------------

  // firs check if the entered password match to any user in the restasurant array if yes the use the array like 'restaurant_users[i].content' and put data in the page
  socket.on("restaurant-user-login", (password) => {
    // socket.emit("restaurant-user-putting-data", restaurent_users)
    let checking_result = "";

    for (i = 0; i < restaurent_users.length; i++) {
      if (password == restaurent_users[i].password) {
        socket.emit("restaurant-password-match", restaurent_users);
        restaurent_users[i].socket_id = socket.id;
        checking_result = "restaurant matched password";
      }
    }
    if (checking_result == "") {
      socket.emit("restaurant-password-not-matched", restaurent_users); // 'emit' function will only work in 'on' function
    } else {
      let result = "";

      for (a = 0; a < restaurent_users.length; a++) {
        if (password == restaurent_users[a].password) {
          for (c = 0; c < online_restaurants.length; c++) {
            if (
              online_restaurants[c].password == restaurent_users[a].password
            ) {
              result = "mathched";
              online_restaurants[c].socket_id = restaurent_users[a].socket_id;
            }
          }

          if (result == "") {
            online_restaurants.push({
              password: restaurent_users[a].password,
              socket_id: restaurent_users[a].socket_id,
              img: restaurent_users[a].img,
              name: restaurent_users[a].name,
              address: {
                city: restaurent_users[a].address.city,
                building: restaurent_users[a].address.building,
                sector: restaurent_users[a].address.sector,
                plot: restaurent_users[a].address.plot,
                phase: restaurent_users[a].address.phase,
                landmark: restaurent_users[a].address.landmark,
              },
            });
          }
        }
      }

      socket.emit(
        "restaurant-password-matched",
        restaurent_users,
        online_restaurants
      ); // 'emit' function will only work in 'on' function

      socket.broadcast.emit("restaurant-append-in-list", {
        rstrnt: online_restaurants,
      });
    }
  });

  // FINAL ORDERING FROM CART PAGE -----------------------------

  let months_array = [
    "Jan",
    "Feb",
    "Mar",
    "Api",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days_array = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];
  socket.on(
    "final-ordering",
    (online_array_index, restaurant_name, to, profile_pass) => {
      let item_array = [];
      let totall_price = 0;

      let now = new Date();
      let day = now.getDay();
      let date = now.getDate();
      let month = now.getMonth();
      let year = now.getFullYear();

      for (i = 0; i < customer_users.length; i++) {
        if (profile_pass == customer_users[i].password) {
          let rstrnt_checking_result = "";
          let price_check = 0;
          for (r = 0; r < customer_users[i].cart.length; r++) {
            if (
              customer_users[i].cart[r].rstrnt_name.toUpperCase() !=
              restaurant_name.toUpperCase()
            ) {
              rstrnt_checking_result = "not matched";
            }
          }

          for (h = 0; h < customer_users[i].cart.length; h++) {
            price_check = price_check + customer_users[i].cart[h].price;
          }
          // console.log(price_check)
          if (price_check > 200) {
            if (rstrnt_checking_result == "") {
              for (n = 0; n < customer_users[i].cart.length; n++) {
                item_array.push({
                  category: customer_users[i].cart[n].category,
                  name: customer_users[i].cart[n].name,
                  qty: customer_users[i].cart[n].qty,
                  price: customer_users[i].cart[n].price,
                });
                totall_price = totall_price + customer_users[i].cart[n].price;
              }

              for (a = 0; a < restaurent_users.length; a++) {
                if (restaurant_name == restaurent_users[a].name) {
                  customer_users[i].order_number++;
                  restaurent_users[a].total_orders++;
                  let rstrnt_order_number = restaurent_users[a].total_orders;

                  restaurent_users[a].orders.push({
                    avtar: customer_users[i].avatar,
                    name: customer_users[i].name,
                    year: year,
                    month: months_array[month],
                    date: date,
                    city: customer_users[i].address.city,
                    building: customer_users[i].address.building,
                    wing: customer_users[i].address.wing,
                    room_number: customer_users[i].address.room_number,
                    sector: customer_users[i].address.sector,
                    plot: customer_users[i].address.plot,
                    phase: customer_users[i].address.phase,
                    landmark: customer_users[i].address.landmark,
                    items: item_array,
                    total_price: totall_price,
                    status: "pending",
                    password: customer_users[i].password,
                    order_number: customer_users[i].order_number,
                    rstrnt_order_num: rstrnt_order_number,
                  });

                  let avtar = customer_users[i].avatar;
                  let namee = customer_users[i].name;
                  let years = year;
                  let months = months_array[month];
                  let dates = date;
                  let city = customer_users[i].address.city;
                  let building = customer_users[i].address.building;
                  let wing = customer_users[i].address.wing;
                  let room_number = customer_users[i].address.room_number;
                  let sector = customer_users[i].address.sector;
                  let plot = customer_users[i].address.plot;
                  let phase = customer_users[i].address.phase;
                  let landmark = customer_users[i].address.landmark;
                  let pass = customer_users[i].password;

                  restaurent_users[a].number_of_pending_orders++;
                  let number_of_orders = restaurent_users[a].total_orders;

                  let customer_order_number = customer_users[i].order_number;
                  let pending_order =
                    restaurent_users[a].number_of_pending_orders;

                  socket
                    .to(to)
                    .emit(
                      "appending-order-in-restaurants-container",
                      avtar,
                      namee,
                      years,
                      months,
                      dates,
                      city,
                      building,
                      wing,
                      room_number,
                      sector,
                      plot,
                      phase,
                      landmark,
                      item_array,
                      totall_price,
                      number_of_orders,
                      pending_order,
                      pass,
                      rstrnt_order_number
                    );
                  socket.emit(
                    "appending-order-info",
                    customer_order_number,
                    restaurant_name
                  );

                  customer_users[i].ordered_list.push({
                    name: restaurant_name,
                    order_num: customer_order_number,
                    info: "Your order has sent ,we will update you as soon as your order is confirmed. 'Remember your order number'",
                    status: "pending",
                  });
                }
              }
            } else {
              socket.emit("items-are-not-of-same-rstrnt", restaurant_name);
            }
          } else {
            socket.emit("total-price-is-not-enough", restaurant_name);
          }
        }
      }
    }
  );

  socket.on(
    "confirm-btn-func",
    (order_n, pass, restaurant_name, rstrnt_order_n) => {
      console.log("working");
      console.log(pass);
      console.log(order_n);

      for (t = 0; t < customer_users.length; t++) {
        if (pass == customer_users[t].password) {
          customer_users[t].ordered_list.push({
            name: restaurant_name,
            info: `Order - ${order_n} has confirmed !`,
            status: "confirmed",
          });
          socket
            .to(customer_users[t].socket_id)
            .emit(
              "confirm-btn-running-func",
              order_n,
              restaurant_name,
              customer_users
            );

          for (m = 0; m < restaurent_users.length; m++) {
            if (restaurant_name == restaurent_users[m].name) {
              restaurent_users[m].number_of_pending_orders--;
              restaurent_users[m].number_of_taken_orders++;

              let num_pending_order =
                restaurent_users[m].number_of_pending_orders;
              let num_taken_order = restaurent_users[m].number_of_taken_orders;

              socket.emit(
                "updating-confirm-order-detail",
                num_pending_order,
                num_taken_order
              );

              // CHANGING STATUS
              for (c = 0; c < restaurent_users[m].orders.length; c++) {
                if (
                  rstrnt_order_n ==
                  restaurent_users[m].orders[c].rstrnt_order_num
                ) {
                  restaurent_users[m].orders[c].status = "confirmed";
                }
              }
            }
          }
        }
      }
    }
  );

  socket.on(
    "cancle-btn-func",
    (order_n, pass, restaurant_name, rstrnt_order_n) => {
      console.log("working");
      console.log(pass);
      console.log(order_n);

      for (t = 0; t < customer_users.length; t++) {
        if (pass == customer_users[t].password) {
          customer_users[t].ordered_list.push({
            name: restaurant_name,
            info: `We are sorry ,your order - ${order_n} has cancelled due to some reason.`,
            status: "canclled",
          });
          socket
            .to(customer_users[t].socket_id)
            .emit(
              "cancle-btn-running-func",
              order_n,
              restaurant_name,
              customer_users
            );

          for (m = 0; m < restaurent_users.length; m++) {
            if (restaurant_name == restaurent_users[m].name) {
              restaurent_users[m].number_of_pending_orders--;
              restaurent_users[m].number_of_canclled_orders++;

              let num_pending_order =
                restaurent_users[m].number_of_pending_orders;
              let num_cancle_order =
                restaurent_users[m].number_of_canclled_orders;

              socket.emit(
                "updating-cancle-order-detail",
                num_pending_order,
                num_cancle_order
              );

              // CHANGING STATUS
              for (c = 0; c < restaurent_users[m].orders.length; c++) {
                if (
                  rstrnt_order_n ==
                  restaurent_users[m].orders[c].rstrnt_order_num
                ) {
                  restaurent_users[m].orders[c].status = "cancelled";
                }
              }
            }
          }
        }
      }
    }
  );

  // SEARCHING FUNCTION -----------

  socket.on("searching-orders-rstrnt", (rstrnt_name) => {
    for (i = 0; i < restaurent_users.length; i++) {
      if (rstrnt_name == restaurent_users[i].name) {
        let orders_array = restaurent_users[i].orders;
        socket.emit("search-orders-rstrnt", orders_array, restaurent_users);
      }
    }
  });

  socket.on(
    "rstrnt-updating-address",
    (
      pass,
      signup_city,
      signup_building,
      signup_landmark,
      signup_phase,
      signup_sector,
      signup_plot
    ) => {
      for (i = 0; i < restaurent_users.length; i++) {
        if (pass == restaurent_users[i].password) {
          restaurent_users[i].address.city = signup_city;
          restaurent_users[i].address.building = signup_building;
          restaurent_users[i].address.landmark = signup_landmark;
          restaurent_users[i].address.phase = signup_phase;
          restaurent_users[i].address.sector = signup_sector;
          restaurent_users[i].address.plot = signup_plot;
        }
      }
      console.log(restaurent_users);
    }
  );

  // # =========================================== CUSTOMER USERS LOGIN  FUNC ====================================== #
  // ---------------------------------------------------------------------------------------------------------------------------------

  socket.on("customer-login", (password) => {
    for (r = 0; r < customer_users.length; r++) {
      if (password == customer_users[r].password) {
        customer_users[r].socket_id = socket.id;
      }
    }
    if (customer_users.length > 0) {
      socket.emit(
        "customer-logining-function",
        password,
        customer_users,
        items,
        online_restaurants
      );
    } else {
      // nothing will happen
    }
  });

  // DISCONNECTION OF RESTAURENT USERS -------------------------------------

  socket.on("logout-btn-func", (restaurent_name) => {
    for (i = 0; i < online_restaurants.length; i++) {
      if (online_restaurants[i].name == restaurent_name) {
        online_restaurants.splice(i, 1);
      }
    }

    console.log("logout");
    console.log(online_restaurants);
    socket.broadcast.emit("updating-online-restaurent", {
      rstrnt: online_restaurants,
    });
  });

  socket.on("disconnect", () => {
    for (i = 0; i < online_restaurants.length; i++) {
      if (online_restaurants[i].socket_id == socket.id) {
        online_restaurants.splice(i, 1);
      }
    }

    console.log("logout");
    console.log(online_restaurants);
    socket.broadcast.emit("updating-online-restaurent", {
      rstrnt: online_restaurants,
    });
  });

  // ================================= UPDATING WEBSITE SERVER ==================================

  socket.on(
    "add-restaurant",
    (
      add_rt_name,
      add_rt_email,
      add_rt_phone,
      add_rt_pass,
      add_rt_city,
      add_rt_build,
      add_rt_sec,
      add_rt_plot,
      add_rt_phase,
      add_rt_landmark
    ) => {
      restaurent_users.push({
        socket_id: "",
        avtar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: add_rt_name,
        email: add_rt_email,
        phone: add_rt_phone,
        password: add_rt_pass,
        address: {
          city: add_rt_city,
          building: add_rt_build,
          sector: add_rt_sec,
          plot: add_rt_plot,
          phase: add_rt_plot,
          landmark: add_rt_landmark,
        },
        orders: [],

        number_of_pending_orders: 0,
        number_of_taken_orders: 0,
        number_of_canclled_orders: 0,
        total_orders: 0,
      });

      console.log(restaurent_users);
    }
  );

  socket.on("remove-restaurant", (remove_rt_name) => {
    remove_rt_name_c = remove_rt_name.toUpperCase();

    for (i = 0; i < restaurent_users.length; i++) {
      let rt_name = restaurent_users[i].name.toUpperCase();
      if (remove_rt_name_c == rt_name) {
        if (i > -1) {
          restaurent_users.splice(i, 1);
        }
      }
    }

    console.log(restaurent_users);
  });
  socket.on(
    "change-password-restaurant",
    (change_pass_rt_name, change_pass_rt_newpass) => {
      let channge_name = change_pass_rt_name.toUpperCase();
      for (i = 0; i < restaurent_users.length; i++) {
        let rt_name = restaurent_users[i].name.toUpperCase();
        if (channge_name == rt_name) {
          restaurent_users[i].password = change_pass_rt_newpass;
        }
      }
    }
  );
  socket.on(
    "add-food-items",
    (
      add_item_name,
      add_item_price,
      add_item_category,
      add_item_qty,
      add_item_rt_name,
      add_item_img
    ) => {
      let a = parseInt(add_item_price);
      let b = parseInt(add_item_qty);
      items.push({
        image: add_item_img,
        name: add_item_name,
        price: a,
        cutted_price: 0,
        category: add_item_category,
        qty_for: bLL,
        restasurant_name: add_item_name,
      });

      console.log(items);
    }
  );
});
