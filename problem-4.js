function calculateFinalScore(obj) {
    let parentProfession = 0;
    if(typeof obj!=="object")
        return "Invalid Input";
    if(obj.isFFamily===true)
        parentProfession=20;
    return (obj.testScore+obj.schoolGrade+parentProfession)>=80;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  })); 