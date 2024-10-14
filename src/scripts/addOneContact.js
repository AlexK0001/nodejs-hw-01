import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

export const addOneContact = async () => {
try {
    const currentContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...currentContacts, newContact];
    await writeContacts(updatedContacts);
    console.log('Ви успішно додали новий контакт!');
} catch (error) {
    console.error(`Error adding contact: ${error.message}`);
}
};

addOneContact();
