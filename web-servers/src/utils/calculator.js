
const calculator = (firstValue,secondValue,operationName,callback) => {

   
    if (operationName === "add") {
        callback(undefined,firstValue + secondValue);
    } else if(operationName === "subtract") {
        callback(undefined,firstValue - secondValue);
    } else if (operationName === "divide" && secondValue === 0) {
        callback('can not devide by zero',undefined);
    } else if (operationName === "divide" ) {
        callback(undefined,firstValue / secondValue);
    }else if(operationName === "multiplication") {
        callback(undefined,firstValue * secondValue);
    } else if(operationName === "percentage") {
        callback(undefined,(firstValue/secondValue) * 100);
    }
    else {
        callback('please provide correct operation',undefined);
    }
    
}

module.exports = calculator;