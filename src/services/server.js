import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors()); // allow your frontend to call this

app.get("/games", async(req, res) => {
    try {
        const response = await axios.get("https://api.rawg.io/api/games", {
            params: { key: process.env.RAWG_API_KEY },
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/genres", async(req, res) => {
    try {
        const response = await axios.get("https://api.rawg.io/api/genres", {
            params: { key: process.env.RAWG_API_KEY },
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));