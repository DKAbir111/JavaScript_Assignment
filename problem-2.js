function sendNotification(email) {
    if(email.includes("@")===false){
        return "Invalid Email";
    }
    const userDomain=email.split("@");
    return `${userDomain[0]} sent you an email from ${userDomain[1]}`
 
}
console.log(sendNotification("nadim.naem5@outlook.com"));