let head=document.getElementById("kafa");
let head_timer=setInterval(head_move,100);
let yön="yukarı",head_x=400,head_y=400,speed=20,yem_x,yem_y,gövde_cout=0,gövde_x=[],
gövde_y=[];
let gövdeler=[];
let screenn=document.getElementById("ekran");
let yem=document.createElement("canvas");


function cock() {
    yem_x=parseInt(Math.floor(Math.random()*800));
    yem_y=parseInt(Math.floor(Math.random()*800));
    yem.style.top=yem_y+"px";
    yem.style.left=yem_x+"px";
    yem.setAttribute("id","yem");
    screenn.appendChild(yem);
    
}

cock();

window.document.addEventListener("keydown",yön_verme);

function head_move() {
    switch (yön) {
        case "yukarı":
            head_y-=speed;
            head.style.top=head_y+"px";
            break;
        case "aşağı":
            head_y+=speed;
            head.style.top=head_y+"px";
            break;
        case "sağ":
            head_x+=speed;
            head.style.left=head_x+"px";
            break;
        case "sol":
            head_x-=speed;
            head.style.left=head_x+"px";
            break;
    }

    if (Math.abs(head_x-yem_x)<15 && Math.abs(head_y-yem_y)<15) {
        yem_x=parseInt(Math.floor(Math.random()*800));
        yem_y=parseInt(Math.floor(Math.random()*800));
        yem.style.top=yem_y+"px";
        yem.style.left=yem_x+"px";
        gövdeler.push(document.createElement("canvas"));
        gövdeler[gövde_cout].setAttribute("id","gövde");
        screenn.appendChild(gövdeler[gövde_cout]);
        gövde_cout++;
       
       
        
    }
    for (let index = gövdeler.length-1; index>=0 ; index--) {
        if (index==0) {
           switch (yön) {
            case "yukarı":
                gövdeler[index].style.left=head_x+"px";
                gövdeler[index].style.top=head_y+30+"px";
                break;
            case "aşağı":
                gövdeler[index].style.left=head_x+"px";
                gövdeler[index].style.top=head_y-30+"px";
                break;
            case "sağ":
                gövdeler[index].style.left=head_x-30+"px";
                gövdeler[index].style.top=head_y+"px";
                break;
            case "sol":
                gövdeler[index].style.left=head_x+30+"px";
                gövdeler[index].style.top=head_y+"px"; 
                break;
           
           }
        }
        else{
            switch (yön){
                case "yukarı":
                    gövdeler[index].style.left=parseInt(gövdeler[index-1].style.left) +"px";
                    gövdeler[index].style.top=parseInt(gövdeler[index-1].style.top)+10 +"px";
                    break;
                    case "aşağı":
                    gövdeler[index].style.left=parseInt(gövdeler[index-1].style.left) +"px";
                    gövdeler[index].style.top=parseInt(gövdeler[index-1].style.top)-10 +"px";
                    break;
                    case "sağ":
                    gövdeler[index].style.left=parseInt(gövdeler[index-1].style.left) - 10+"px";
                    gövdeler[index].style.top=parseInt(gövdeler[index-1].style.top) +"px";
                    break;
                    case "sol":
                    gövdeler[index].style.left=parseInt(gövdeler[index-1].style.left) + 10+"px";
                    gövdeler[index].style.top=parseInt(gövdeler[index-1].style.top) +"px";
                    
            }

        }
        
    }



    
}


function yön_verme(e) {
    switch (e.keyCode) {
        case 87:
            if (yön!="aşağı") {
                yön="yukarı";
            }
            break;
        case 83:
            if (yön!="yukarı") {
                yön="aşağı";
            }
            break;
        case 65:
            if (yön!="sağ") {
                yön="sol";
            }
            break;
        case 68:
            if (yön!="sol") {
                yön="sağ";
            }
            break;
        
    }
    

    
}