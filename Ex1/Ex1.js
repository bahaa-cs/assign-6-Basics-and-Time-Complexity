var rows = prompt("Number of rows: ")
var stars_n = 1
var spacing_n
var spacing
var output

for(let i=1;i<=rows;i++){
    spacing_n=rows-i
    spacing = " ".repeat(spacing_n)

    output = "*".repeat(stars_n)
    console.log(spacing+output)

    if(i<rows)
        stars_n=stars_n+2
}

for(let i=rows;i>0;i--){

    stars_n-=2

    spacing_n=rows-i+1
    spacing = " ".repeat(spacing_n)

    output = "*".repeat(stars_n)
    console.log(spacing+output)
}

