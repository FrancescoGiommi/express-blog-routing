//! Giorno 1

/* Esercizio

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire 
con nuove funzionalità sulla base di quello che impareremo.

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

Creiamo un array dove inserire una lista di almeno 5 post, 
per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, 
partendo da un array.

Configuriamo gli asset statici sull’applicazione in modo che si possano 
visualizzare le immagini associate ad ogni post.

Testare le chiamate su Postman! */

//! Giorno 2

/* Esercizio

Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) 
che conterrà le rotte necessario per l'entità post.

All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, 
secondo le convenzioni REST.Ad esempio:

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
e via dicendo…

Registrare il router dentro app.js con il prefisso posts/.

Bonus

Provare a restituire la lista dei post dalla rotta index, in formato json

Provare a restituire un singolo post dalla rotta show, sempre in formato json */

/* Import express */
const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");

/* First route */
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

/* List object */
const bachecaPost = [
  {
    /* Post 1 */
    id: "1",
    titolo: "Ciambellone",
    contenuto: "Ricetta ciambellone",
    immagine: "images/ciambellone.jpeg",
    tags: ["ciambellone", "ricetta", "dolce"],
  },
  {
    /* Post 2 */
    id: "2",
    titolo: "Cracker alla barbabietola",
    contenuto: "Ricetta cracker alla barbabietola",
    immagine: "images/cracker_barbabietola.jpeg",
    tags: ["cracker", "spuntino", "dolce"],
  },
  {
    /* Post 3 */
    id: "3",
    titolo: "Pane fritto dolce",
    contenuto: "Ricetta pane fritto dolce",
    immagine: "images/pane_fritto_dolce.jpeg",
    tags: ["pane fritto dolce", "ricetta", "dolce"],
  },
  {
    /* Post 4 */
    id: "4",
    titolo: "Pasta alla barbabietola",
    contenuto: "Ricetta pasta alla barbabietola",
    immagine: "images/pasta_barbabietola.jpeg",
    tags: ["pasta alla barbabietola", "ricetta", "pasta"],
  },
  {
    /* Post 5 */
    id: "5",
    titolo: "Torta paesana",
    contenuto: "Ricetta Torta paesana",
    immagine: "images/torta_paesana.jpeg",
    tags: ["torta paesana", "ricetta", "dolce"],
  },
];
let i = 0;

/* Static asset for images */
app.use(express.static("images"));

app.use("/posts", postsRouter);

/* Bacheca route */
app.get("/bacheca", (req, res) => {
  const data = {
    bachecaPost: bachecaPost,
    length: bachecaPost.length,
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port`);
});
