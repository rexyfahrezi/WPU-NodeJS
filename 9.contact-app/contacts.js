const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// membuat folder data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
};

// membuat file contacts.json jika blm ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
};


const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (jawab) => {
            resolve(jawab);
        });
    });
};

const simpanContact = (nama, hp) => {
    const contact = {nama, hp};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);
        
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(contacts)
    rl.close();
}


module.exports = {
    tulisPertanyaan,
    simpanContact
}