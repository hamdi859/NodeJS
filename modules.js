function add(a,b){
    console.log(a+b);
}

const pi=3.14;

function mult(x,y){
    console.log(x/y);
}
function desc(){
const tab=new Array(3);
tab[0]='Hamdi';
tab[1]='Kairouan';
tab[2]=29;
console.log(typeof(tab[2]));

}

module.exports={
    add:add,
    pi:pi,
    mult:mult,
    desc:desc
}