import fs from 'fs';
import path from 'path';


const dataDir = path.join(process.cwd(), 'data');


export function getSortedPostsData() {
    // Get file names under /posts
    const filePath = path.join(dataDir, 'data.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.name);
    }
    );
    return jsonObj.map(item => {
        return {
            id: item.id.toString(),
            title: item.title,
            date: item.date
        }
    });
}
//export async function getSortedPostsData() {
// Instead of the file system,
// fetch post data from an external API endpoint
// const res = await fetch('..');
// return res.json();
// }
//import someDatabaseSDK from 'someDatabaseSDK'

//const databaseClient = someDatabaseSDK.createClient()

//export async function getSortedPostsData() {
// Instead of the file system,
// fetch post data from a database
//return databaseClient.query('SELECT posts...')

export function getAllPostIds() {
    const filePath = path.join(dataDir, 'posts-json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);

    return jsonObj.map(item => {
        return {
            Params: {
                id: item.id.toString()// Returns an array that looks like this:
            }
        }
    });

    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

}
export async function getPostData(id) {
    const filePath = path.join(dataDir, 'posts-json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    const objReturned = jsonObj.filter(obj => {
        return obj.id.toString() === id;
    });






}