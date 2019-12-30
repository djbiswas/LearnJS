var database = [
    {
        username: "Dipjyoti",
        password: "password"
    },
    {
        username: "dj",
        password: "dj000000"
    },
    {
        username: "DJ",
        password: "dj"
    },
    {
        username: "dj",
        password: "dj"
    }
];
var newsFeed = [
    {
        username: "Dipjyoti",
        timeline: "Ato porar chap!"
    },
    {
        username: "Dip",
        timeline: "Dekhben jal hobe ghuni!"
    }
];




function isUserValid(username,password) {
    for(var i=0; i < database.lemgth;i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function singIn(username, password) {

    if (isUserValid(username,password)) {
        console.log(newsFeed);
    }else{
        alert("Wrong user name and password");
    }
}


var puname = prompt("Your username");
var pp = prompt("Password");
singIn(puname,pp);