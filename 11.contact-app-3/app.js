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
}).demandCommand();


// menampilkan daftar semua data di kontak
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua kontak',
    handler(){
        contacts.listContact();
    }
})


// menampilkan detail
yargs.command({
    command: 'detail',
    describe: 'Melihat detail kontak berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama)
    }
})

// menghapus kontak berdasarkan nama
// menampilkan detail
yargs.command({
    command: 'delete',
    describe: 'Menghapus kontak berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama)
    }
})

yargs.parse();