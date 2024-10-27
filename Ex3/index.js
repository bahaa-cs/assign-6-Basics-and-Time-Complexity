document.querySelector("body").appendChild(document.createElement("div"))

var x = prompt("Number of rows: ")
var stars_n = 1
var spacing_n
var spacing
var output

for(let i=1;i<=x;i++){
    spacing_n=x-i
    spacing = " ".repeat(spacing_n)

    output = "*".repeat(stars_n)
    console.log(spacing+output)

    if(i<x)
        stars_n=stars_n+2
}
