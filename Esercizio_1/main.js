// ESERCIZIO 1:
//     - Dato un array di partenza
//     - Creare, mediante javascript, tanti articoli per quanti post sono all’interno dell’array di partenza
//     - Utilizzare le card di Bootstrap
let posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit \n suscipit recusandae consequuntur expedita et cum \n reprehenderit molestiae ut ut quas totam \n nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae \n sequi sint nihil reprehenderit dolor beatae ea dolores neque \n fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis \n qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure \n voluptatem occaecati omnis eligendi aut ad \n voluptatem doloribus vel accusantium quis pariatur \n molestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci \n sit amet autem assumenda provident rerum culpa \n quis hic commodi nesciunt rem tenetur doloremque ipsam iure \n quis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed \n alias aut fugiat sit autem sed est \n voluptatem omnis possimus esse voluptatibus quis \n est aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi \n mollitia nobis aliquid molestiae \n perspiciatis et ea nemo ab reprehenderit accusantium quas \n voluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae \n magni quis enim qui quis quo nemo aut saepe \n quidem repellat excepturi ut quia \n sunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum \n facilis quibusdam animi sint suscipit qui sint possimus cum \n quaerat magni maiores excepturi \n ipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore \n enim quia ad \n veniam autem ut quam aut nobis \n et est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni \n doloribus qui repudiandae \n vero nisi sit \n quos veniam quod sed accusamus veritatis error",
  },
];
// Creazione articoli
let container = document.querySelector(".row");
posts.forEach((element) => {
  let article = document.createElement("div");
  article.classList.add("card", "col-4", "mx-5", "my-3");
  article.innerHTML = `<h2>${element.title}</h2><p>${element.body}</p>`;
  container.appendChild(article);
});
