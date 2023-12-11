import morgan from "morgan";
import fs from "fs";
const accessLogStream = fs.createWriteStream("activity.log", { flags: "a" });
export const morganLogger = morgan(
  ":method :url :status :response-time ms - :res[content-length]",
  {
    stream: accessLogStream,
  }
);
