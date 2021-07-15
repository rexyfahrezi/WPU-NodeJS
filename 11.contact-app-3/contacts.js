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

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}


const simpanContact = (nama, email, hp) => {
    const contact = {nama, email, hp};
    // const file = fs.readFileSync('data/contacts.json', 'utf-8');
    // const contacts = JSON.parse(file);
    const contacts = loadContact();

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
    if(!validator.isMobilePhone(hp, 'id-ID')){
        console.log('No hp salah!');
        return false;
    }

    contacts.push(contact);
        
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    //console.log(contacts);
    console.log('data telah dimasukkan');
}


const listContact = () => {
    const contacts = loadContact();
    //console.log(contacts)
    console.log("- Daftar Kontak -")
    contacts.forEach((contact ,i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.hp}`);
    });
}

const detailContact = (nama) => {
    const contacts = loadContact();
    //console.log(contacts);
    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    );

    if(!contact){
        console.log(`${nama} Kontak tidak ditemukan`);
        return false;
    }

    console.log(`${contact.nama}`)
    console.log(`${contact.hp}`)
    if(contact.email){
        console.log(`${contact.email}`)
    }

};

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
        );

    if (contacts.length === newContacts.length) {
        console.log(`${nama} tidak ditemukan`);
        return false;
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
    //console.log(contacts);
    console.log(`${nama} berhasil dihapus`);
};


module.exports = {
    simpanContact, listContact, detailContact, deleteContact
}