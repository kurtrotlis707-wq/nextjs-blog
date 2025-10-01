import { db } from './firebase'; // load from firebase.js in same dir
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';

export async function getSortedPostsData() {
    const mycollectionRef = collection(db, 'posts')
    const querySnapshot = await getDocs(mycollectionRef);
    const jsonObj = querySnapshot.docs.map(doc => doc.data({ id: doc.id, ...doc.data }));

    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    const returnObj = jsonObj.map(item => {
        return {
            id: item.id.toString(),
            title: item.title,
            date: item.date
        }
    });


}

export async function getAllPostIds() {
    const mycollectionRef = collection(db, 'posts')
    const querySnapshot = await getDocs(mycollectionRef);
    const jsonObj = querySnapshot.docs.map(doc => doc.data({ id: doc.id, ...doc.data }));

    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    const returnObj = jsonObj.map(item => {
        return {
            id: item.id.toString(),
            title: item.title,
            date: item.date
        }
    });
}

export async function getPostData(id) {
    const mycollectionRef = collection(db, 'posts')
    const querySnapshot = await getDocs(mycollectionRef);
    const jsonObj = querySnapshot.docs.map(doc => doc.data({ id: doc.id, ...doc.data }));

    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    const returnObj = jsonObj.map(item => {
        return {
            id: item.id.toString(),
            title: item.title,
            date: item.date
        }
    });

}
