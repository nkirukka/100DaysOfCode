const button = document.querySelector("button");

button.addEventListener("click", async (e) => {
    e.preventDefault();
    const para = document.querySelector("p");
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    para.innerHTML = response.data.joke;
})