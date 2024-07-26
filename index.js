const express = require("express");
const cors = require("cors");
const { MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
	let url = "mongodb+srv://anuraggaiwal0:cTmiqr5LRb5Gt57x@cluster0.rvdvf3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("DoubtsApp");
	const coll = db.collection("Doubts");
	const record = {"name":req.body.name,"Phone":req.body.phone,"doubt":req.body.doubt};
	coll.insertOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
});

app.listen(9000,()=>{console.log("Ready @ 9000");});
