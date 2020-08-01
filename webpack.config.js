const path=require("path");
module.exports={
    entry:"./learnpromisTest.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"

    }
}