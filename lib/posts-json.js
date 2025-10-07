import fs from 'fs';
import path from 'path';

//where to get data
const dataDir = path.join(process.cwd(), 'data');


export function getSortedPostsData() {
    // Get file names under /posts
    const filePath = path.join(dataDir, 'data.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    //sort the data
    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.name);
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

//export function getAllPostIds() {
//    const filePath = path.join(dataDir, 'posts-json');
// const jsonString = fs.readFileSync(filePath, 'utf8');
//  const jsonObj = JSON.parse(jsonString);

//  return jsonObj.map(item => {
//  return {
//      Params: {
//         id: item.id.toString()// Returns an array that looks like this:
//     }
// }
//});

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

//get post data
export async function getPostData(id) {
    const filePath = path.join(dataDir, 'data.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    //filter the data
    const objReturned = jsonObj.filter(obj => {
        return obj.id.toString() === id;
    });
    return objReturned[0];
}
export async function getAllPostIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const filePath = path.join(dataDir, 'data.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    //console.log(jsonObj);
    return jsonObj.map((post) => {
        return {
            params: {
                id: post.id,
            },
        };
    });
}



