const inputBox=document.getElementById('input')
const listcontainer=document.getElementById('list-container')

function addtask()
{
    if(inputBox.value==='')
        {
            alert("You must write ssomething");
        }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listcontainer.append(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.append(span);
        inputBox.value='';
    }
    saveData();
}

listcontainer.addEventListener("click" ,function(e)
{
    if(e.target.tagName==='LI')
        {
            e.target.classList.toggle("checked")
            saveData();
        }
    else if(e.target.tagName==='SPAN')
        {
            e.target.parentElement.remove();
            saveData();
        }
},false)
function saveData()
{
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showtask()
{
    listcontainer.innerHTML=localStorage.getItem("data");

}
showtask();