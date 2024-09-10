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


console.log(waitingTime(7, [9,2,3,4,5]));