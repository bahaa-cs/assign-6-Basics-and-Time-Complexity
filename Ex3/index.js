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



var html_content=tree.join('<br>')

var tree_div = document.createElement("div")

tree_div.classList.add("tree")
for(let i=0;i<tree.length;i++){
    tree_div.innerHTML+=tree[i]+"<br>"
}



var green_div = document.createElement("div")
green_div.classList.add("green")

var red_div = document.createElement("div")
red_div.classList.add("red")

document.body.appendChild(green_div)
document.body.appendChild(tree_div)
document.body.appendChild(red_div)