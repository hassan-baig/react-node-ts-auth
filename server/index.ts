require("dotenv").config();
import * as express from 'express'
import {Routes} from './routes/index'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", Routes);
app.listen(process.env.PORT, () => console.log("port 5000"));
