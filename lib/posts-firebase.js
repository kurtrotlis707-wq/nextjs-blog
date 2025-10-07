import { db } from './firebase'; // load from firebase.js in same dir
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';

export async function getSortedPostsData() {
    const mycollectionRef = collection(db, 'posts')
    const querySnapshot = await getDocs(mycollectionRef);
    const jsonObj = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data }));

    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    }
    );
    //map the data to the return object
    return jsonObj.map(item => {
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
    const jsonObj = querySnapshot.docs.map(doc => doc.data({ id: doc.id }));

    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });
}

export async function getPostData(id) {
    const mycollectionRef = collection(db, "posts")
    const searchQuery = query(
        mycollectionRef,
        where(
            documentId(),
            "==",
            id));

    const querySnapshot = await getDocs(searchQuery);
    const jsonObj = querySnapshot.docs.map(doc => doc.data({ id: doc.id, ...doc.data }));

    if (jsonObj.length === 0) {
        return {
            id: id,
            title: 'not found',
            date: '',
            contentHtml: 'not found'
        }
    } else {
        return jsonObj[0];
    }



}
