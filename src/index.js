import express from "express"
import ProductRouter from "./router/product.routes.js"


const app = express()
const PORT = 3333

app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.use("/api/products", ProductRouter)

app.listen(PORT, () => {
    console.log(`Servidor Express Puerto ${PORT}`);
});

