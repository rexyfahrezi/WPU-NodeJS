const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama anda :');
    const hp = await contacts.tulisPertanyaan('Masukkan no hp anda :');

    contacts.simpanContact(nama, hp);
};

main();
