var x = prompt("Enter x: ")

var max_odd_numbers = 1
var odd_numbers = []
while (max_odd_numbers<=x){
    odd_numbers.push(String(max_odd_numbers))
    console.log(odd_numbers.join(" "))
    max_odd_numbers+=2
}