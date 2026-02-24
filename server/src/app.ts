import express from "express";
import dotenv from "dotenv";
import meRoute from "./routes/me.route";
import clockRoute from "./routes/date.route";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/me", meRoute);
app.use("/date", clockRoute);

app.listen(PORT, () => {
  console.log(`Server ${PORT} da Çalışıyor`);
});
