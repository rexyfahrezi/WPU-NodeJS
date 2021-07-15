// Core Module
// File System
const fs = require('fs');

// menulis string ke file (synchronous)
// try {
//     fs.writeFileSync('tes.txt', 'Hello world synchronous!');
// } catch(err) {
//     console.log(err);
// }

// menulis string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello world secara Asynchronous', (e) => {
//     console.log(e);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file (asynchronous)
// const data = fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Masukkan nama anda: ', (nama) => {
//     rl.question('Masukkan no HP anda: ', (hp) => {
//         console.log(`Terimakasih ${nama}, no hp anda : ${hp}`);
//         rl.close();
//     })
// })


//challange

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan no HP anda: ', (hp) => {
        const contact = {
            nama: nama,
            noHP: hp
        };
        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
        
        console.log(contacts)
        console.log(`Terimakasih ${nama}, no hp anda : ${hp}`);
        rl.close();
    });
});
