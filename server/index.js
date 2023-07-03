import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Server running on  http://localhost:${PORT}`);
})
