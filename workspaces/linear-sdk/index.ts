import { LinearClient, LinearFetch, User } from "@linear/sdk";

const apiKey = process.env.LINEAR_API_KEY
const linearClient = new LinearClient({ apiKey });

async function getCurrentUser(){
    return linearClient.viewer;
}

(async ()=>{
    const currentUser = await getCurrentUser()
    console.log(currentUser)
})()
