import express from "express";
import conexao from './app/database/conexao.js'
import SelecaoController from "./app/controllers/SelecaoController.js";

const app = express();
app.use(express.json());

app.get("/selecoes", SelecaoController.index);

app.get("/selecoes/:id", SelecaoController.show);

app.post("/selecoes", SelecaoController.store);

app.put("/selecoes/:id", SelecaoController.delete);

app.delete("/selecoes/:id", SelecaoController.update);

export default app;
