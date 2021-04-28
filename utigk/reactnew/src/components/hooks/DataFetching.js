import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({data, ...rest}) => {
            setPost(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])

    return(
        <div>
            <input type="text" value={id} onChange={(e) => {setId(e.target.value)}}/>
            <h3>{JSON.stringify(post.title)}</h3>
        </div>
    )
}