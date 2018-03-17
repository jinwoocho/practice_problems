
function bankSystem(){
    var banks = {};
    function addBank(name) {
        var newBank = new Bank();
        banks[name] = newBank;
    }
    function removeBank(){
    }
}

function bank(){
    this.accounts = [];
    function addAccount(){
        var account = new Account();
    }
    function removeAccount(){

    }
}

function Account(Lname, Fname, funds){
    var funds;
    this.name= Lname;
    this.name= Fname;
    this.funds = funds;

    function addfunds(){
        //account안에 돈이 에드됨
        funds
    }
    function removefunds(){
    }
    function transferfunds(){
    }
}