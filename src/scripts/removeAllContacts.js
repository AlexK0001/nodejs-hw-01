import writeContacts from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    try {
        const emptyContacts = [];
        await writeContacts(emptyContacts);
        console.log('Усі контакти успішно видалено!');

    } catch (error) {
        console.error(`Error adding contact: ${error.message}`);
    }
};

removeAllContacts();
