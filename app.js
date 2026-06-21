import pages from "./pages.js";

const btn = document.getElementById("page")
const btn2 = document.getElementById("page2")
const btn3 = document.getElementById("page3")
const btn4 = document.getElementById("page4")
const btn5 = document.getElementById("page5")
const btn6 = document.getElementById("page6")

const show_page = document.querySelectorAll(".show-page");

btn.addEventListener("click", () => {
    document.getElementById("pag").src = "pages/formatacoes.html"
    document.getElementById("content-page").style.display = "flex"
    document.querySelector(".language-html").textContent = pages[0]
    document.querySelector("#open-page").setAttribute("href", "pages/formatacoes.html")
})

btn2.addEventListener("click", () => {
    document.getElementById("pag").src = "pages/listas.html"
    document.getElementById("content-page").style.display = "flex"
    document.querySelector(".language-html").textContent = pages[1]
    document.querySelector("#open-page").setAttribute("href", "pages/listas.html")

})

btn3.addEventListener("click", () => {
    document.getElementById("pag").src = "pages/ex003/links.html"
    document.getElementById("content-page").style.display = "flex"
    document.querySelector(".language-html").textContent = pages[2]
    document.querySelector("#open-page").setAttribute("href", "pages/ex003/links.html")

})

btn4.addEventListener("click", () => {
    document.getElementById("pag").src = "pages/ex005/midia.html"
    document.getElementById("content-page").style.display = "flex"
    document.querySelector(".language-html").textContent = pages[3]
    document.querySelector("#open-page").setAttribute("href", "pages/ex005/midia.html")
})

btn5.addEventListener("click", () => {
    document.getElementById("pag").src = "pages/textos-inline/index.html"
    document.getElementById("content-page").style.display = "flex"
    document.querySelector(".language-html").textContent = pages[4]
    document.querySelector("#open-page").setAttribute("href", "pages/textos-inline/index.html")
})

btn6.addEventListener("click", () => {
    document.getElementById("pag").src = "pages/tabelas.html"
    document.getElementById("content-page").style.display = "flex"
    document.querySelector(".language-html").textContent = pages[5]
    document.querySelector("#open-page").setAttribute("href", "pages/tabelas.html")
})

show_page.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
        document.getElementById("content-page").style.display = "flex"
        if (e.target.id == "page") document.querySelector(".language-html").textContent = pages[0]
        else if (e.target.id == "page2") document.querySelector(".language-html").textContent = pages[1]
        else if (e.target.id == "page3") document.querySelector(".language-html").textContent = pages[2]
        else if (e.target.id == "page4") document.querySelector(".language-html").textContent = pages[3]
        else if (e.target.id == "page5") document.querySelector(".language-html").textContent = pages[4]
        else if (e.target.id == "page6") document.querySelector(".language-html").textContent = pages[5]
    })
})