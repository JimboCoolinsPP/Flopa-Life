const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

function addPost() {

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  db.collection("posts").add({
    title: title,
    content: content,
    date: new Date().toLocaleDateString(),
    created: Date.now()
  });

  alert("Post uploaded to website!");

}

  function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Logged in!");

      document.getElementById("loginBox").style.display = "none";

    })
    .catch(err => alert(err.message));

}

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.unshift(post);

  localStorage.setItem("posts", JSON.stringify(posts));

  alert("Post Added!");

}

function loadPosts() {

  const postsContainer = document.getElementById("posts");

  if (!postsContainer) return;

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  postsContainer.innerHTML = ""; // 🔥 clears old posts first

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
