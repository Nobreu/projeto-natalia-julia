import express from "express"
const app = express()
import router from './routes/atletasRoutes.js'
import { fileURLToPath } from "url";
import routerTurmas from "./routes/turmasRoutes.js";
import path from "path"
import bodyParser from "body-parser"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", router)
app.use("/", routerTurmas)

app.listen(3000)