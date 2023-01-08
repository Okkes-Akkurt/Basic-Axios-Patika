import axios from "axios";



async function getUser(userId) {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userId)

    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId)

    console.log(user)
    console.log(post1[0]);
};


getUser(1);