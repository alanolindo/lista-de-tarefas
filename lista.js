const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", (event) => {
    adicionarItem();
    
    // Limpa o valor do campo de entrada
    document.querySelector("#input-text").value = "";

    event.preventDefault();
});

function adicionarItem() {
    const inputText = document.querySelector("#input-text");
    const text = inputText.value.trim(); // Remove espaços em branco no início e no final

    // Verifica se o campo de entrada não está vazio antes de adicionar o item
    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        lista.appendChild(li);
        li.classList.add("stylo-li");

        const button = document.createElement("button");
        button.innerText = "cancelar";
        lista.appendChild(button).classList.add("stylo-button");

        button.addEventListener("click", () => {
            lista.removeChild(li);
            lista.removeChild(button);
        });
    } else {
        alert("digite uma tarefa");
    }
}














