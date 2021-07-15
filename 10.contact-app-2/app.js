const yargs = require('yargs')
const contacts = require('./contacts')

yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string'
        },
        email : {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        hp : {
            describe: 'No HP',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.hp)
    }
});


yargs.parse();