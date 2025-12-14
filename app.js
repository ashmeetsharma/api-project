const axios = require("axios"); // helper to call APIs

// URLs for two endpoints
const API_USERS = "https://jsonplaceholder.typicode.com/users";
const API_POSTS = "https://jsonplaceholder.typicode.com/posts";

// Step 9: store data in memory
let users = []; // store users
let posts = []; // store posts

// ----------- Fetch Users -----------
axios.get(API_USERS, { timeout: 5000 })
  .then(response => {
    users = response.data; // store users
    console.log("Users stored in memory successfully!\n");

    // List all users
    console.log("All Users:");
    users.forEach(user => {
      console.log(`${user.id}. ${user.name} (${user.email})`);
    });

    // Filter users by city
    const city = "South Christy";
    console.log(`\nUsers in city "${city}":`);
    users.forEach(user => {
      if (user.address.city === city) {
        console.log(`${user.id}. ${user.name}`);
      }
    });

    // Show single user by ID
    const userId = 1;
    const singleUser = users.find(u => u.id === userId);
    console.log(`\nUser with ID ${userId}:`);
    console.log(singleUser);

  })
  .catch(error => {
    if (error.code === 'ECONNABORTED') {
        console.log("Users request timed out. Please try again.");
    } else if (error.response) {
        console.log("Users API responded with an error:", error.response.status);
    } else if (error.request) {
        console.log("No response received for users. Network error or timeout.");
    } else {
        console.log("Error fetching users:", error.message);
    }
  });

// ----------- Fetch Posts -----------
axios.get(API_POSTS, { timeout: 5000 })
  .then(response => {
    posts = response.data; // store posts
    console.log("\nPosts stored in memory successfully!\n");

    // List first 5 posts as example
    console.log("First 5 Posts:");
    posts.slice(0,5).forEach(post => {
      console.log(`${post.id}. ${post.title}`);
    });

    // Show single post by ID
    const postId = 1;
    const singlePost = posts.find(p => p.id === postId);
    console.log(`\nPost with ID ${postId}:`);
    console.log(singlePost);

  })
  .catch(error => {
    if (error.code === 'ECONNABORTED') {
        console.log("Posts request timed out. Please try again.");
    } else if (error.response) {
        console.log("Posts API responded with an error:", error.response.status);
    } else if (error.request) {
        console.log("No response received for posts. Network error or timeout.");
    } else {
        console.log("Error fetching posts:", error.message);
    }
  });
