const his = document.getElementById("his");
const form = document.getElementById("form");
const txt = document.getElementById("t");
const amnt = document.getElementById("a");
const btn = document.getElementById("sub");
const to = document.getElementById("tot");
const em = document.getElementById("exp");
const inp = document.getElementById("inc");
var rid=0;
var total=0;
var expense=0;
var income=0;

function enable()
{
    if(document.getElementById("t").value === "" || document.getElementById("a").value === "")
        btn.disabled = true;
    else
        btn.disabled = false;
}

function update(amount)
{
    amount = parseInt(amount);
    if(amount<0)
    {
        expense -= amount;
        total += amount;
        to.innerHTML = "";
        em.innerHTML = "";
        to.innerHTML = "Rs: "+total+".00";
        em.innerHTML = "Rs: "+expense+".00";
    }
    else
    {
        income = income + amount;
        total = total + amount;
        inp.innerHTML = "";
        to.innerHTML="";
        to.innerHTML = "Rs: "+total+".00";
        inp.innerHTML = "Rs: "+income+".00";
    }
}

function updatead(amount)
{
    amount=amount.innerHTML;
    amount = parseInt(amount);
    if(amount>0)
    {
        income -= amount;
        total -= (amount);
        to.innerHTML = "";
        inp.innerHTML = "";
        to.innerHTML = "Rs: "+total+".00";
        inp.innerHTML = "Rs: "+income+".00";
    }
    else
    {
        expense += amount;
        total += -amount;
        em.innerHTML = "";
        to.innerHTML="";
        to.innerHTML = "Rs: "+total+".00";
        em.innerHTML = "Rs: "+expense+".00";
    }
    return 1;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    var tr= document.createElement("div");
    tr.className="tra";
    tr.id="tr"+rid;
    his.appendChild(tr);

    var tx = document.createElement("div");
    tx.className="type";
    tx.innerHTML=txt.value;
    tr.appendChild(tx);

    var amount = amnt.value;
    var am = document.createElement("div");
    update(amount);
    am.id = "am"+rid;
    if(amount < 0)
    {
        am.className="amountr";
        am.innerHTML=amount;
    }
    else
    {
        am.className="amountg";
        am.innerHTML="+"+amount;
    }
    tr.appendChild(am);

    var ic = document.createElement("div");
    ic.className="del";
    var ico = document.createElement("i");
    ico.className="fa fa-trash-o";
    ico.id="ic"+rid;
    ic.appendChild(ico);
    tr.appendChild(ic);
    
    const del = document.getElementById("ic"+rid);
    del.addEventListener('click',function(){
        var a = this.id;
        a = a.substring(2);
        const amm = document.getElementById("am"+a);
        var fl = updatead(amm);
        if(fl === 1)
        {
            const d = document.getElementById("tr"+a);
            his.removeChild(d);
            fl=0;
        }
        else
        {
            alert("Unknown Error");
        }
    });

    his.appendChild(tr);
    rid+=1;
});