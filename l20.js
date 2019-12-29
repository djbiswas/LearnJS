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


    var puname = prompt("Your username");
    var pp = prompt("Password");



    function singIn(puser, ppass) {
        for (var i=0; i<database.length; i++){
            if (puser === database[i].username &&  ppass === database[i].password) {
                return true;
            } 
        }
        return false;

        // if (puser === database[0].username &&  ppass === database[0].password) {
        //     console.log(newsFeed);
        //     alert("Login Success!");

        //     document.getElementById("username").innerHTML = "Dipjyoti!";
        //     document.getElementById("post").innerHTML = "Thanks For Login!!";

        // }else{
        //     alert("Wrong user name and password");
        // }
    }

    singIn(puname,pp);