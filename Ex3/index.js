var x = prompt("Number of rows: ")
var sticks_n = 1
var spacing_n
var spacing
var output

var tree=[]

for(let i=1;i<=x;i++){

    spacing_n=x-i
    spacing = " ".repeat(spacing_n)

    output = "|".repeat(sticks_n)
    if (i==1){
        tree.push(spacing+" *")
    }
    tree.push( spacing+"*" +output+ "*")

    if(i<x)
        sticks_n=sticks_n+2
}

var html_content=tree.join('\n')
console.log(html_content)

var tree_div = document.createElement("div")
tree_div.classList.add("tree")
tree_div.textContent=html_content
document.body.appendChild(tree_div)

