import jsonPlaceHolder from './../apis/jsonPlaceholder';

export const fetchPosts = () =>{
    return async function(dispatch,getState){
        const res = await jsonPlaceHolder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload : res})
        // return {
        //     type:'FETCH_POSTS',
        //     payload:'vinay'
        // };
    }
};