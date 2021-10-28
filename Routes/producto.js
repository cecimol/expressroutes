const express = require("express");

const { Router } = express;
const router = new Router();

let productos = require("../productos");

router.get("/", (req, res) => {
  res.send({ data: productos });
});

router.get("/:id", (req, res) => {
  const producto = productos.find((producto) => producto.id === req.params.id);
  if (producto) {
    res.send({ data: producto });
  } else {
    res.send({ error: "El producto no fue encontrado" });
  }
});

router.post("/", (req, res) => {
  let id = 1;
  if (productos.length > 0) {
    id = parseInt(productos[productos.length - 1].id) + 1;
  }
  const obj = {
    id: id.toString(),
    title: req.body.title,
    price: req.body.price,
    url: req.body.url,
  };
  productos.push(obj);
  res.send(obj);
});

router.put("/:id", (req, res) => {
  const index = productos.findIndex((x) => {
    return x.id == req.params.id;
  });
  productos[index].title = req.body.title;
  productos[index].price = req.body.price;
  productos[index].url = req.body.url;
  res.send({ message: "Producto actualizado" });
});

router.delete("/:id", (req, res) => {
  const newProductos = productos.filter((x) => {
    return x.id != req.params.id;
  });
  productos = newProductos;
  res.send({ message: "Producto eliminado" });
});

module.exports = router;
