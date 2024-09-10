function calculateTax(income, expenses) {
    let tax = 0;
    if(income<0 || expenses<0 || income <expenses){
        return "Invalid Input"
    }
    tax=(income-expenses)*0.20;
    return tax;
}
console.log(calculateTax(7000, 8000))