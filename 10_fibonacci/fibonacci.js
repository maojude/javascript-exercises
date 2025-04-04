const fibonacci = function(fiboNum) {
    let fiboNumInt = +fiboNum;
    if(fiboNumInt < 0) return "OOPS";
    else if (fiboNumInt === 0) return 0;
    else {
        function findFibo(num){
            if(num <= 1 ) return num;
            
            return findFibo(num - 1) + findFibo(num - 2);
        }

        return findFibo(fiboNumInt);
    }

};

// Do not edit below this line
module.exports = fibonacci;
