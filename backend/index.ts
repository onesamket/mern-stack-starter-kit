import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database";
import { morganLogger } from "./middlewares/Logger";
export const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganLogger);
// start server

// routes

app.get("/", (_req, res: Response) => {
  res.send("It works");
});
app.post("/", (req: Request, res: Response) => {
  console.log("your request");
  res.send(req.body);
});

async function bootstrapServer() {
  //   await connectToDatabase();
  return app.listen(PORT, () =>
    console.log(`🚀Server Running on http://localhost:${PORT}`)
  );
}

// spin up server
bootstrapServer();
