    const lista = "/api/pratos";

    const container = document.getElementById("lista-pratos");

    fetch(lista)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((prato) => {
        const card = document.createElement("div");
        card.className = "card";

        const nome = document.createElement("h3");
        nome.textContent = prato.nome;

        const descricao = document.createElement("p");
        descricao.textContent = prato.descricao;

        const preco = document.createElement("p");
        preco.textContent = `R$ ${prato.preco}`;

        card.appendChild(nome);
        card.appendChild(descricao);
        card.appendChild(preco);

        container.appendChild(card);
        });
    })
    .catch((error) => {
        console.error("Erro ao carregar os pratos:", error);
    });

