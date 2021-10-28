const express = require("express");

const app = express();

app.use(express.json());

const productRoutes = require("./Routes/producto");

app.use("/api/productos", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Info enviada",
    data: productos,
  });
  res.send({ message: "Hola soy una API RESTfull" });
});

app.listen(8080, () => {
  console.log("hola");
});
