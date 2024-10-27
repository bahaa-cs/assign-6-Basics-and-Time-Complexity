

var x = prompt("Number of rows: ")
var stars_n = 1
var spacing_n
var spacing
var output

var tree=[]

for(let i=1;i<=x;i++){
    spacing_n=x-i
    spacing = " ".repeat(spacing_n)

    output = "*".repeat(stars_n)
    
    tree.push(spacing+output)

    if(i<x)
        stars_n=stars_n+2
}

var html_content=tree.join('\n')
console.log(html_content)

var tree_div = document.createElement("div")
tree_div.classList.add("tree")
tree_div.textContent=html_content
document.body.appendChild(tree_div)

