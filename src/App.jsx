import React from "react";
import PostsList from "./feature/posts/PostsList";
import AddPostForm from "./feature/posts/AddPostForm";

const App = () => {
  return (
    <main>
      <AddPostForm />
      <PostsList />
    </main>
  );
};

export default App;
