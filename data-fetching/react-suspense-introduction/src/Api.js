import axios from 'axios';

export const fetchData = () => {
    const userPromise = fetchUser();
    const postPromise = fetchPost();

    return {
        user: wrapPromise(userPromise),
        posts: wrapPromise(postPromise)
    }
}

const wrapPromise = (promise) => {
    let status = "pending";
    let result;
    let suspender = promise.then(
        res => {
            status = 'success';
            result = res;
        },
        err => {
            status = 'error';
            result=err;
        }
    );

    return {
        read(){
            if(status === 'pending'){
                throw suspender
            }else if (status === 'error'){
                throw result;
            }else if (status === 'sucsess'){
                return result;
            }
        }
    }
}

const fetchUser = () => {
    console.log('Fetching User...')
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => console.log(err))
}

const fetchPost = () => {
    console.log('Fetching Post...')
    return axios.get('https://jsonplaceholder.typicode.com/post')
    .then(res => res.data)
    .catch(err => console.log(err))
}