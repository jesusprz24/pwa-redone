import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented'); {
  const db = await initdb();
  const tx =db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content});
  const result = await request;
  console.log('Data has been saved to the database');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented'); {
  const db = await initdb();
  const tx = db.transaction('jate');
  const store = tx.objectStore('jate', 'readonly');
  const allContent = await store.getAll();
  console.log('Content retreived from database');
  return allContent;
}; 

initdb();
