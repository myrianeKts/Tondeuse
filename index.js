const fs = require('fs');
const Tondeuse = require('./tondeuse.js');

// Coodonnées point max pelouse
let Xmax = 0, Ymax = 0;
// Coordonnées point min pelouse
let Xmin = 0, Ymin = 0;

let data = fs.readFileSync('./data.txt', 'utf8');
let filteredData = data.split('\n').filter(_data => _data.length > 0);

let regex = RegExp(/^\d/);
let tmp = '', tondeuse = null, tondeuseTab = [];

for(let i = 0; i < filteredData.length; i++){

    if(i === 0){
        Xmax = parseInt(filteredData[i][0]);
        Ymax = parseInt(filteredData[i][1]);
    } else if(regex.test(filteredData[i])){
        tmp = filteredData[i].replace(/\s/g,'');
        tondeuse = new Tondeuse.Tondeuse(parseInt(tmp[0]), parseInt(tmp[1]), tmp[2], Xmin, Ymin, Xmax, Ymax);

        for(let j=0; j<filteredData[i+1].length; j++){
            tondeuse.move(filteredData[i+1][j]);
        }
        
        console.log(`${tondeuse.x}${tondeuse.y}${tondeuse.o}`);
        tondeuseTab.push(tondeuse);
    }
}