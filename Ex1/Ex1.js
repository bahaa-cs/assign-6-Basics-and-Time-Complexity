var rows = 5

var stars_n = 1

for(let i=1;i<=rows;i++){
    var spacing_n=rows-i
    var spacing = " ".repeat(spacing_n)

    var output = "*".repeat(stars_n)
    console.log(spacing+output)

    if(i<rows)
        stars_n=stars_n+2
}

for(let i=rows;i>0;i--){

    stars_n-=2

    var spacing_n=rows-i+1
    var spacing = " ".repeat(spacing_n)

    var output = "*".repeat(stars_n)
    console.log(spacing+output)

}
