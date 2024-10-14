import readContacts from '../utils/readContacts.js';

export const getAllContacts = async () => {
try {
    const allContacts = await readContacts();
    return allContacts;

} catch (error) {
    console.error(`Error adding contact: ${error.message}`);
}
};

console.log(await getAllContacts());
