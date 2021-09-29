var wrapperEle = document.body.querySelector(".wrapper")

var condition= true;

while(condition){
    var question = prompt("He is a mighty warrior")}
    if (question==="He is a mighty mighty warrior"){
        condition= false;
        ele.innerHTML="He is a weak little man"
}

var list = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:"He is a mighty mighty warrior"
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:"He is a mighty mighty warrior"
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:"He is a mighty mighty warrior"
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:"He is a mighty mighty warrior"
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:"He is a weak little man"
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:"He is a mighty mighty warrior"
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:"He is a mighty mighty warrior"
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:"He is a mighty mighty warrior"
    }
]

for(var i=0; i<list.length; i++){
    var ele = document.createElement("div");
    var nameEle=document.createElement("h2");
    var damageEle=document.createElement("h4");
    var healthEle=document.createElement("h4");
    var warriorEle=document.createElement("h4");
    nameEle.innerHTML=list[i].name;
    healthEle.innerHTML=list[i].health;
    damageEle.innerHTML=list[i].damage;
    warriorEle.innerHTML=list[i].warrior;
    ele.appendChild(nameEle);
    ele.appendChild(healthEle);
    ele.appendChild(damageEle);
    ele.appendChild(warriorEle);

    wrapperEle.appendChild(ele);
}