let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let num = 0
function count(){
   num = num + 1
   countEl.innerText = num
   console.log(countEl.innerText)
}
function reset(){
   num = 0
   countEl.innerText = 0
}
function save(){
   saveEl.innerText += countEl.innerText + ",--"
}
count()
reset()