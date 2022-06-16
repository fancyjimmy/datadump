import express from "express";
import dotenv from "dotenv";
import {Low, JSONFile} from "lowdb";
import {join} from "path";

dotenv.config();

let port = process.env.PORT || 3000;
let app = express();

const adapter = new JSONFile(join(__dirname, process.env.DATAPATH));
const db = new Low( adapter);


app.listen(port, () => {
    console.log("listening on port http://localhost:3000");
})