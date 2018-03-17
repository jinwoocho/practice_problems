
function CalculationObject(){
    this.num1 = null;
    this.num2 = null;
    this.operator = null;
    this.result = null;
    this.addNumbers = function(number){
        //add a number to the num1 / num2.  if num1 is already set, add to num2
        //if num2 is already set, return false
        if (this.num1 == null ){
            this.num1 = number;
           // console.log(this.num1);
        } else if( this.num1 != null && this.num2 == null){
            this.num2 = number;
          //  console.log(this.num2);
        } else if(this.num2 != null ) {
            return false;
        }
    };
    this.addOperator = function(op){
        //add an operator.  if one already exists, replace it
        this.operator = op;
           // console.log(this.operator);

    };
    this.calculate = function(){
        //perform math, store the result and return it
        //returns 'error' if not enough data to do calculation
        if (this.operator === '*'){
           return this.result = (this.num1 * this.num2);
        } else  if (this.operator === '+'){
           return this.result = (this.num1 + this.num2);
        } else  if (this.operator === '-'){
           return this.result = (this.num1 - this.num2);
        } else  if (this.operator === '/'){
           return this.result = (this.num1 / this.num2);
        } else{
            return this.result = ('error');
        }
       // console.log(this.result);
    };
    this.getValue = function(){
        //return the current value
        return this.result
    }
}
var calc = new CalculationObject();
calc.addNumbers(2);
calc.addNumbers(5);
calc.addOperator('*');
calc.calculate();
console.log(calc.getValue()); //should return 10
var calc2 = new CalculationObject();
calc2.addNumbers(5);
console.log(calc2.calculate()); //returns 'error';
calc2.addNumbers(20);
console.log(calc2.calculate()); //returns 'error';
calc2.addOperator('+');
console.log(calc2.calculate()); //returns 15;
