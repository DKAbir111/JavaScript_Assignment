function calculateTax(income, expenses) {
    let tax = 0;
    if(income<0 || expenses<0 || income <expenses){
        return "Invalid Input"
    }
    tax=(income-expenses)*0.20;
    return tax;
}

function sendNotification(email) {
    if(email.includes("@")===false){
        return "Invalid Email";
    }
    const userDomain=email.split("@");
    return `${userDomain[0]} sent you an email from ${userDomain[1]}`
 
}

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
     return " Invalid Input";
    }
    for(let n in name){
     if(0<=name[n] || name[n]<=9)
         return true;
    }
    return false;
 }

 function calculateFinalScore(obj) {
    let parentProfession = 0;
    if(typeof obj!=="object")
        return "Invalid Input";
    if(obj.isFFamily===true)
        parentProfession=20;
    return (obj.testScore+obj.schoolGrade+parentProfession)>=80;
}

function  waitingTime(waitingTimes  , serialNumber) {
    let totalTimes=0;

    if(Array.isArray(waitingTimes)!==true || typeof serialNumber !== 'number')
        return "Invalid Input";
    for(time of waitingTimes){
        totalTimes=totalTimes + time;
    }
    const avarageTime =Math.round(totalTimes/waitingTimes.length);    
    const remainingTime = avarageTime * (serialNumber-waitingTimes.length-1);
    return remainingTime;

}
