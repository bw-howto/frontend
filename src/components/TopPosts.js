import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from "./PostCard"

import { Link } from 'react-router-dom';

const TopPosts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = () => {
      axios
        .get('https://how-to-michaelbaynon.herokuapp.com/api/postList')
        .then(response => {
            setPosts(response);
            console.log(response);
        })
        .catch(error => {
          console.error('oh no', error);
        });
    } 
    getPosts();
  }, []);
  
  return (
    <div>
        <p>test</p>
      {posts.map(post => (
        <PostCard/>
      ))}
    </div>
  );
}



export default TopPosts;