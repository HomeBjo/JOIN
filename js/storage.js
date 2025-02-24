/**
 * Initializes Firebase if it has not been loaded yet.
 * Ensures that Firestore is available for data storage.
 */
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


/** 
 * Firestore database instance.
 * @type {firebase.firestore.Firestore}
 */
const db = firebase.firestore();


/**
 * Stores a key-value pair in Firestore under the "storage" collection.
 * @param {string} key - The unique key under which the value should be stored.
 * @param {any} value - The data to be stored (can be an object, string, array, etc.).
 * @returns {Promise<void>} A promise that resolves when the data is successfully stored.
 */
window.setItem = async function (key, value) {
    try {
        await db.collection("storage").doc(key).set({ data: value });
        
    } catch (error) {
        console.error("Fehler beim Speichern:", error);
    }
};


/**
 * Retrieves data from Firestore based on a given key.
 * @param {string} key - The unique key to retrieve data for.
 * @returns {Promise<any>} A promise that resolves with the retrieved data or an empty array if no data is found.
 */
window.getItem = async function (key) {
    try {
        const doc = await db.collection("storage").doc(key).get();
        if (doc.exists) {
            return doc.data().data;
        } else {
            console.warn("Kein Dokument gefunden für:", key);
            return [];
        }
    } catch (error) {
        console.error("Fehler beim Abrufen:", error);
        return [];
    }
};
