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
        username: "Sabbir",
        timeline: "Sa anok kotha pora bolbo!"
    },
    {
        username: "Dip",
        timeline: "Dekhben jal hobe ghuni!"
    },
    {
        username: "dj",
        timeline: "Sa anok kotha pora bolbo!"
    }
];




function isUserValid(username,password) {
    for(var i=0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function singIn(username, password) {

    if (isUserValid(username,password)) {
        document.getElementById("username").innerHTML = "Dipjyoti!";
        document.getElementById("post").innerHTML = "Thanks For Login!!";
        document.getElementById("feed").innerHTML = "সে অনেক কথা পরে একদিন বলবো!";
    }else{
        alert("Wrong user name and password");
    }
}


var puname = prompt("Your username");
var pp = prompt("Password");
singIn(puname,pp);