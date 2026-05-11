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

function loadPosts() {

  const postsContainer = document.getElementById("posts");

  if (!postsContainer) return;

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach(post => {

    postsContainer.innerHTML += `
    
      <div class="post">

        <h4>${post.title}</h4>

        <p><strong>Date:</strong> ${post.date}</p>

        <p>${post.content}</p>

      </div>

    `;

  });

}
