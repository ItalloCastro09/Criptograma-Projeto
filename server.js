const express = require("express");
const app = express();


app.use(express.static('projeto/'));


app.listen(8080,function(){
	console.log("rodando")
})