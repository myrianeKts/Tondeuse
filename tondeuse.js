const NORTH = 'N';
const SOUTH = 'S';
const WEST = 'W';
const EAST = 'E';

class Tondeuse {
    constructor(x,y,o,Xmin,Ymin,Xmax,Ymax) {
        this.x = x;
        this.y = y;
        this.o = o; // Orientation
        this.Xmin = Xmin;
        this.Ymin = Ymin;
        this.Xmax = Xmax;
        this.Ymax = Ymax;
    }

    move(direction){
        if(direction === 'D'){
            switch (this.o) {
                case 'N':
                  this.o = EAST;
                  break;
                case 'E':
                  this.o = SOUTH;
                  break;
                case 'S':
                  this.o = WEST;
                  break;
                case 'W':
                  this.o = NORTH;
                  break;
            }
        } else if(direction === 'G'){
            switch (this.o) {
                case 'N':
                  this.o = WEST;
                  break;
                case 'E':
                  this.o = NORTH;
                  break;
                case 'S':
                  this.o = EAST;
                  break;
                case 'W':
                  this.o = SOUTH;
                  break;
            }
        } else if(direction === 'A'){
            switch (this.o) {
                case 'N':
                    if(this.y >= this.Ymin && this.y < this.Ymax){
                        ++this.y;
                    }
                  break;
                case 'E':
                    if(this.x >= this.Xmin && this.x < this.Xmax){
                        ++this.x;
                    }
                  break;
                case 'S':
                    if(this.y > this.Ymin && this.y <= this.Ymax){
                        --this.y;
                    }
                  break;
                case 'W':
                    if(this.x > this.Xmin && this.x <= this.Xmax){
                        --this.x;
                    }
                  break;
            }
        }
    }
}

exports.Tondeuse = Tondeuse;