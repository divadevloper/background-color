let color=document.getElementById('boddy')
let newcolo =["red","black","pink"]
index=[0]
color.style.backgroundColor=newcolo[index]

function add() {
    if (index == newcolo.length -1) {
        index =0
    } else {
        index ++
    }
    color.style.backgroundColor=newcolo[index]
}
function remove(){
    if (index==0) {
        index = newcolo.length -1
    } else {
        index --
    }
    color.style.backgroundColor=newcolo[index]
}