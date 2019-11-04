// Step 1. Create a file in models/Feed.js
// Step 2. Create a schema
/*username
comment
tags
image
likes
shares
date
// Step 3. Export the schema as a model
// Step 4. Import Feed.js into server.js
// Step 5. Create a post route for '/feed'
// Step 6. Save the post to the database

*/
//Import mongoose
const mongoose=require('mongoose');
//Assign the schema object
const Schema=mongoose.Schema;
const FeedSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:true
    },
    image:{
        type:String
        
    },
    likes:{
        type:Number,
        default:0
       
    },
    shares:{
        type:Number,
        default:0
        
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=Feed=mongoose.model('feed',FeedSchema);