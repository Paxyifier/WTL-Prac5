const readline = require('readline-sync');
const fs = require('fs');
const readfile = ()=>{
    var filename = readline.question("Enter file name:");
    var output = fs.readFileSync(filename).toString();
    console.log(output);
}
const writefile = ()=>{
    var filename = readline.question("Enter file name:");
    var input = readline.question("Enter input:");
    fs.writeFileSync(filename, input);
    console.log(filename);
    console.log(input);
}
const deletefile = ()=> {
    var filename = readline.question("Enter file name:");
    fs.unlinkSync(filename);
    console.log(filename);
}
const appendfile = ()=> {
    var filename = readline.question("Enter file name:");
    var input = readline.question("Enter input:");
    fs.appendFileSync(filename, input);
    console.log(filename);
    console.log(input);
}
const renamefile = ()=> {
    var filename = readline.question("Enter file name:");
    var input = readline.question("Enter new file name:");
    fs.renameSync(filename, input);
    console.log(filename);
    console.log(input);
}

var flag = true;
while (flag){
    var ch = readline.question(`
    Choose your operation:
    1. Read a file
    2. Write to a file
    3. Delete a file
    4. Append to a file
    5. Rename a file
    `);

    switch(ch){
        case '1':
            readfile();
            break;
        case '2':
            writefile();
            break;
        case '3':
            deletefile();
            break;
        case '4':
            appendfile();
            break;
        case '5':
            renamefile();
            break;
        default:
            flag = false;
            break;
    }
}