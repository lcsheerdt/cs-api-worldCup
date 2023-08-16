import express from "express";
// ORDENAR O CODIGO DEPOIS - CRUD

const app = express();

// indicar para o express ler o body com json
app.use(express.json());

// mock
const selecoes = [
  { id: 1, selecao: "Brasil", grupo: "G" },
  { id: 2, selecao: "Suíça", grupo: "G" },
  { id: 3, selecao: "Camarões", grupo: "G" },
  { id: 4, selecao: "Sérvia", grupo: "G" },
];

// funcao auxiliar para localizar do array as selecoes por id
function buscarSelecaoPorId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}

// funcao auxiliar para pegar a posicao ou index do elemento no array por id
function buscarIndexSelecao(id) {
  return selecoes.findIndex((selecao) => selecao.id == id);
}

// criar rota padrao ou raiz
app.get("/", (req, res) => {
  res.send("Olá mundo! estou no node js xD");
});

// buscar os dados
app.get("/selecoes", (req, res) => {
  res.status(200).send(selecoes);
});

// buscar selecao por id
app.get("/selecoes/:id", (req, res) => {
  res.json(buscarSelecaoPorId(req.params.id));
});

// post para insercao de dados
app.post("/selecoes", (req, res) => {
  selecoes.push(req.body);
  res.status(201).send("Selecao cadastrada com sucesso!");
});

// delete para deletar um elemento do array
app.delete("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send(`Selecao com id ${req.params.id} excluida com sucesso!`);
});

// put para deletar um elemento do array
app.put("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);

  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.grupo;

  res.json(selecoes);
});

export default app;
