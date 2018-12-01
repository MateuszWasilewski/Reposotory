let Add = document.querySelector('.Add');
Add.addEventListener('click', adding);

let num=0;
function adding ()
{
    const input =document.getElementById("text").value
    const newTreeNode =document.createElement("p");
    let className=`task_name_${num}`;
    newTreeNode.innerText=input;
    newTreeNode.className =className;
    const leftContainer =document.querySelector(".left");
    leftContainer.appendChild(newTreeNode);
    let newTask =document.querySelector(`.${className}`);

    newTask.addEventListener("click", function()
    {
        leftContainer.removeChild(newTask);
        const rightContainer =document.querySelector(".right");
        rightContainer.append(newTreeNode);
    });

    num++;
}

