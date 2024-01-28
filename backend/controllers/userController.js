const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

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

    sendToken(user, 201, res);
});

// Login a User
exports.loginUser = catchAsyncErrors(async (req,res,next)=>{

    console.log("Entered login user ")

    const {email, password} = req.body;
    
    if(!email || !password){
        return next(new ErrorHandler("Please Enter  Email and Password", 400));
    }

    const user = await User.findOne({ email }).select("+pasword");

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    // const isPasswordMatched = await user.comparePassword(password);
    // const isPasswordMatched = await user.password;


    // if(!isPasswordMatched){
    //     console.log("Entered login user + 7")

    //     return next(new ErrorHandler("Invaid  Password", 401));
    // }

    
    sendToken(user,200,res);
});

// Logout User

exports.logout = catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logout Successfully",
    });
});