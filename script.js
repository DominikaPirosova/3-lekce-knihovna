
const kniha = {
    nazov: "Blonde Roots",
    autor: "Bernardine Evaristo",
    strany: "262",
    jazyk: "angličtina",
    cena: 400,
    naSklade: true,
}


document.body.innerHTML += "<p>Kniha: " + kniha.nazov + ", <br> Autor: " + kniha.autor + ", <br> Strany: " + kniha.strany + ", <br> Jazyk: " + kniha.jazyk + ", <br> Cena: " + kniha.cena + ", <br> Na Sklade: " + kniha.naSklade + "</p>"