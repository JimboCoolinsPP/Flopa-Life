function addPost() {

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const post = {
    title: title,
    content: content,
    date: new Date().toLocaleDateString()
  };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.unshift(post);

  localStorage.setItem("posts", JSON.stringify(posts));

  alert("Post Added!");

}
