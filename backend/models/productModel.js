const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter produtct name"],
        trim:true,
    },
    description:{
        type:String,
        required:[true,"Please Enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"],
    },
    // quantity:{
    //     type:Number,
    //     required:[true,"Please Enter Product quantity"],
    // },
    stock:{
        type:Number,
        required:[true,"Please Enter product price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],

    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Product",productSchema);