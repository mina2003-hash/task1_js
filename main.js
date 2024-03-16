let text1 = "Do You Fly?";
let text2 = "Are You Wlid?";
let text3 = "Do You Live UnderSea?";
if (confirm(text1) == true) {
    if (confirm(text2 )== true) {
        window.alert("Eagle");
    }
    else{
        window.alert("parrot");
    }
} else {
    if (confirm(text3)==true) {
        if(confirm(text2)==true){
            window.alert("shark");
        }
        else{
            window.alert("Dolphin");
        }
    }
    else{
        if(confirm(text2)==true){
            window.alert("Lion");
        }
        else{
            window.alert("Cat");
        }
    }
}