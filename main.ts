// @deno-types="npm:@types/express@4.18.2"
import express, { Applicatopn, Request, Response } from "npm:express@4.18.2";

const app: Applicatopn = express();
const port = 8000;

app.get("/", (_req: Request, res: Response) => {
    res.status(200).send("hello world");
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});