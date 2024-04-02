import inquirer from "inquirer";
let user = {
    name: "jhon pall",
    pin: 280000,
    balance: 100000
};
const resp = await inquirer.prompt([
    {
        message: "please enter pin",
        name: "pin",
        type: "password",
    },
]);
//console.log("resp:", resp);
if (Number(resp.pin) !== user.pin) {
    console.log("you have entered an incorrect pin");
}
else {
    const resp = await inquirer.prompt([
        {
            name: "selectedType",
            message: "please select an option",
            type: 'list',
            choices: ['withdraw', 'Fastcash', 'Balance inquiry']
        },
        {
            name: "amount",
            message: "please select amount",
            type: "list",
            choices: ["500", "1000", "2000", "3000", "5000", "10000"],
        },
    ]);
    console.log("selected type:", resp);
}
//inquirer 
//.prompt([
//    {
//    message: "please enter pin",
//    name: "pin",
// },
//])
//.then((resp) => {
//console.log("resp:", resp);
//});
//console.log("as salamoelkom world");
