var x = prompt("Enter x: ")

var odd_number = 1
var odd_numbers = []
for(let i=1;i<x;i++){
    odd_numbers.push(String(odd_number))
    console.log(odd_numbers.join(" "))
    odd_number+=2
}