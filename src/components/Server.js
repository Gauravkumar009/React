import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/menu/:id", async (req, res) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?complete-menu=true&lat=12.9&lng=77.6&restaurantId=${req.params.id}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch" });
  }
});

app.listen(5000, () => console.log("Server running on 5000"));
