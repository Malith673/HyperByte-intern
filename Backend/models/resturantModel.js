const mongoose=require('mongoose');

const resturanSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter the resturnt name"]
        },
        address:{
            type:String,
            required:[true,"Please enter resturnt address"]
        },
        telephone:{
            type:String,
            required:[true,"Please enter the telephone number"],
            validate: {
        validator: function(v) {
          return /^\d+$/.test(v); // Check if the string contains only digits
        },
        message: props => `${props.value} is not a valid telephone number! Only digits are allowed.`
      },
      minlength: [10, "Telephone number must be at least 10 digits long"],
      maxlength: [15, "Telephone number must be less than 15 digits long"]
        }
    },
    {
        timestamps:true,
    }
)

const resturant=mongoose.model('resturant',resturanSchema);

module.exports=resturant;