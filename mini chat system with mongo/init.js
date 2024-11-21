const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main()
	.then(() => {
		console.log("Connection successful");
	})
	.catch((err) => console.log("Connection error:", err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}


let allChats = [
	{
		from: "neha",
		to: "pioya",
		msg: "send me your exam sheets",
		created_at: new Date(),
	},
	{
		from: "rony",
		to: "mhr",
		msg: "have to update the web",
		created_at: new Date(),
	}, {
		from: "Rafiq",
		to: "Shamim",
		msg: "Have you finished your project?",
		created_at: new Date(),
	},
	{
		from: "Sumaiya",
		to: "Farhana",
		msg: "Can you share the notes for the last lecture?",
		created_at: new Date(),
	},
	{
		from: "Tanvir",
		to: "Nafis",
		msg: "Let’s meet at the library tomorrow.",
		created_at: new Date(),
	},
	{
		from: "Mehzabin",
		to: "Aarifa",
		msg: "Do you have the assignment guidelines?",
		created_at: new Date(),
	},
	{
		from: "Jahid",
		to: "Hasib",
		msg: "Please forward the class timetable.",
		created_at: new Date(),
	},
	{
		from: "Sadia",
		to: "Rubel",
		msg: "Are you joining the group study tonight?",
		created_at: new Date(),
	},

] ;

Chat.insertMany(allChats);

