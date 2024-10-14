import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    } catch (error) {
      console.error(`Error writing contacts: ${error.message}`);
      throw error;
    }
  };

  export default writeContacts;
