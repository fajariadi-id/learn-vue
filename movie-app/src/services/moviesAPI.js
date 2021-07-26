import firebase from './firebase';

const db = firebase.firestore().collection('movies');

const moviesAPI = {
  getMovies: async () => {
    const documents = await db.get();
    const movies = documents.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    return movies;
  },
  getMovie: async (id) => {
    const document = await db.doc(id).get();
    return { ...document.data(), id };
  },
  addMovie: async (form) => {
    const { id } = await db.add(form);
    return { ...form, id };
  },
  updateMovie: async (form) => {
    return await db.doc(form.id).update(form);
  },
  deleteMovie: async (id) => {
    return await db.doc(id).delete();
  },
};

export default moviesAPI;
