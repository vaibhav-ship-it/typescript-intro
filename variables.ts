// string, number, boolean, null, undefined
let myName : string | null = null;
myName = 'test';
//myName = 5;

let items : string[] | number[] = ['test', 'rest'];
items = [7, 10];
items = [7, 'abcd'];
//items = 5;
//items = [7, 'abcd'];
let test = [7, 'abcd'];

interface IAccount  {
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void
};

const account : IAccount = {
    name : 'Luis',
    balance : 10
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount {
    //name: string;
    //balance: number;

    constructor(public name, public balance)   {
    }

    private withdraw()  {

    }

    
}
