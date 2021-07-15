const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('rex@gmail.com'));
// console.log(validator.isMobilePhone('08960281111','id-ID'));

// console.log(chalk.black.bgBlue('Hello'));

const pesan = chalk`Lorem, {bgRed.black ipsum} dolor sit amet`

console.log(pesan);