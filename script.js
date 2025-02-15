const output=document.querySelector(".output");
const calculator=document.querySelector(".calculator");

let op=null;

calculator.addEventListener("click",(event)=>{
    const isbutton = event.target.nodeName === 'BUTTON';
    if(isbutton){
        if(event.target.textContent==='=' && obj.cur !== null){  
            if(typeof op === "function"){
                op();
                output.textContent=obj.prev;
            }
            else{
                output.textContent=obj.cur;
            }
        }
        else if(event.target.textContent==='+'){
            if(typeof op === "function")
                op();
            op=add;
        }
        else if(event.target.textContent==='*'){
            if(typeof op === "function")
                op();
            op=multiply;
        }
        else if(event.target.textContent==='/'){
            if(typeof op === "function")
                op();
            op=divide;
        }
        else if(event.target.textContent==='-'){
            if(typeof op === "function")
                op();
            op=subtract;
        }
        else if(event.target.textContent==='%'){
            percentage();
        }
        else if(event.target.textContent==='AC'){
            output.textContent="";
            obj.cur=null;
            obj.prev=null;
            output.textContent="0";
        }
        else if(event.target.textContent==='.'){
            obj.cur*=0.1;
            output.textContent=obj.cur;
        }
        else{
            let n=Number(event.target.textContent);
            if (isNaN(n)) return;
            if(obj.cur === null)
                obj.cur = n;
            else {
                obj.cur *= 10;
                obj.cur += n;
            }
            output.textContent=obj.cur;
        }
        if(obj.cur !== null && obj.prev === null && typeof op==="function"){
            obj.prev = obj.cur;
            obj.cur = null;
        }
    }
})

let obj={cur:null,prev:null}

function add(){
    if(obj.cur !== null)
        obj.prev += obj.cur;
    obj.cur = null;
    output.textContent=obj.prev;
}

function subtract(){
    if(obj.cur !== null)
        obj.prev -= obj.cur;
    obj.cur = null;
    output.textContent=obj.prev;
}

function multiply(){
    if(obj.cur !== null)
        obj.prev *= obj.cur;
    obj.cur = null;
    output.textContent=obj.prev;
}

function divide(){
    if(obj.cur===0){
        obj.cur = null;
        obj.prev = "UNDEFINED"; 
        op=null;
        return;
    }
    else if(obj.cur !== null){
        obj.prev /= obj.cur;
        obj.cur = null;
        output.textContent=obj.prev;
    }
}

function percentage(){
    if(obj.prev===null){
        obj.prev=obj.cur;
        obj.cur=null;}
    obj.prev*=0.01;
    obj.cur = null;
    output.textContent = obj.prev;
}