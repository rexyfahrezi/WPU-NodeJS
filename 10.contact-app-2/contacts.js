const fs = require('fs');
const validator = require('validator');

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


const simpanContact = (nama, email, hp) => {
    const contact = {nama, email, hp};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    //cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    console.log(duplikat);
    if (duplikat) {
        console.log('Kontak sudah terdaftar, gunakan nama lain!');
        return false;

    }

    //email validator
    if(email){
        if(!validator.isEmail(email)){
            console.log('Email salah!');
            return false;
        }
    }
    
    //nohp validator
    if(!validator.isMobilePhone(hp), 'id-ID'){
        console.log('No hp salah!');
        return false;
    }

    contacts.push(contact);
        
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    //console.log(contacts);
    console.log('data telah dimasukkan');
}


module.exports = {
    simpanContact
}