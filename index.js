const div = document.querySelector(".question-first")

const button = document.createElement("button")
button.classList.add("text-button")
button.textContent = "Да"
div.prepend(button)

const textsecond = document.createElement("p")
textsecond.classList.add("text2")
textsecond.textContent = "( ответ нет не принимается)"
div.prepend(textsecond)

const textFirst = document.createElement("p")
textFirst.classList.add("text")
textFirst.textContent = "Любишь сердечки ?"
div.prepend(textFirst)


button.addEventListener("click", clickHandler)

function clickHandler (event) {
    button.remove()
    textsecond.remove()
    textFirst.remove()

    const text3 = document.createElement("p")
    text3.textContent="Тогда они для тебя)"
    text3.classList.add("text2")
    div.prepend(text3)

    const heartsContainer = document.querySelector('.hearts-container')

    setInterval(() => {
        const heart = document.createElement("p");
        heart.classList.add("heart");
        heart.textContent = "💖";
    
        const x = Math.random() * 100;
        const y = Math.random() * 100;
    
        heart.style.position = "absolute";
        heart.style.left = `${x}%`;
        heart.style.top = `${y}%`;
    
        setTimeout(() => {
            heart.remove();
        }, 3000);

    
        heartsContainer.appendChild(heart);
    }, 50); // можно оставить 300ms
    
    setTimeout(() => {
        text3.remove()

        const text4 = document.createElement("p")
        text4.textContent="Ты заслуживаешь счастья"
        text4.classList.add("text5")

        const text5 = document.createElement("p")
        text5.textContent=" каждый день, не грусти!"
        text5.classList.add("text5")
        div.prepend(text5)
        div.prepend(text4)
    }, 4000);
}
