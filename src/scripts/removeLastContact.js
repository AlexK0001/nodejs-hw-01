import writeContacts from '../utils/writeContacts.js';
import readContacts from '../utils/readContacts.js';

export const removeLastContact = async () => {
    try {
        const allContacts = await readContacts();
        if (allContacts.length>=1) {
            const newContacts = allContacts.pop();
            await writeContacts(newContacts);
            console.log('Останній контакт успішно видалено!');
        } else {
            console.log('Контактів не знайдено!');
        }

    } catch (error) {
        console.error(`Error adding contact: ${error.message}`);
    }
};

removeLastContact();
