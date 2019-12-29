alert ('Please check the Console Log!');

var data = [
    "1st data",
    "2nd data",
    "3rd data",
    "4th data",
    "5th data"
];

// for (var i=0; i < data.length; i++){
//     console.log(i);
// }

// var loopLength = data.length;
// console.log(loopLength);

// var count = 10;
// while (count > 0){
//     console.log(count);
//     count--;
// }


// var doc = 10;
// do {
//     console.log(doc);
//     doc--;
// } while (doc > 5 );

function logdata(data,i) {        
    console.log(data,i);
}


data.forEach(logdata);