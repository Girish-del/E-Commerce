const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");

// Register a User
exports.registerUser = catchAsyncErrors( async(req,res,next) => {

    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: "this is a sample id",
            url: "pdflicUrl",
        },
    });

    const token = user.getJWTToken();

    res.status(201).json({
        success: true,
        token,
    });
});

// Login a User
exports.loginUser = catchAsyncErrors(async (req,res,next)=>{

    const {email, password} = req.body;
    
    if(!email || !password){
        return next(new ErrorHandler("Please enter A Valid Email and Password", 400));
    }

    const user = User.findOne({email}).select("+paswords");

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = user.comparePassword();

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invaid  Password", 401));
    }
    const token = user.getJWTToken();
    
    re.status(200).json({
        success: true,
        token,
    });
});