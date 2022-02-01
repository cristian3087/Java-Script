//Lista de numeros
const numeros=[22,19,16,13,18,15,20,14,15,16,15,16,20,13,15,18,15,13,18,15];
//k-->interavlo, r-->Rango, a-->Amplitud
//Declaracion de variables
let max,min,r,k,a;
let li,ls;
let ranges =[];

//Calculos para generar intervalos en datos grupados
max=Math.max(...numeros);
min=Math.min(...numeros);
r=max-min;
k=intervalo(1+3.322*Math.log10(20));
a=Math.round(r/k);
li=min,ls=li+a;
console.log(`k: ${k} , r: ${r}, a=${a}`);

//Clase de los rangos de cada intervalo.
class Ran{
     constructor(ini,fin){
         this.ini=ini;
         this.fin=fin;
     }
}
//Cargar el Objeto con los intervalos
for(let i=1;i<=k;i++){
    ranges.push(new Ran(li,ls));
    li=ls;
    ls=(li)+a;
}
//Funcion para calcular K, en el caso que sea par
function intervalo(n){
    n=parseInt(n);
    if((n%2)==0) 
    {return n+1;}
    return n; 
}

numeros.map((itemNumber)=>{
    ranges.filter((itemRange,index)=>
    {
        if(itemNumber>=itemRange.ini && itemNumber<itemRange.fin){
        itemRange.xm=(itemRange.ini+itemRange.fin)/2;
            if(itemRange.f)
            {
                itemRange.f+=1;
            }else{
                itemRange.f=1;
            }
            return itemRange;
        }
    });
});
console.log('Count:',ranges);

