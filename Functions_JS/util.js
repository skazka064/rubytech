(function(){
const BURGER_CONST = 3.636;

const mineBitcoin = ()=>{    
        return 10;  
}
const calculateCal = (price) =>{
    return price*2/BURGER_CONST;
}
window.mineBitcoin= mineBitcoin;
window.calculateCal = calculateCal;
}())