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


// --------------------
// LOGIN
// --------------------
function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {

      alert("Logged in!");

      document.getElementById("loginBox").style.display = "none";
      document.getElementById("adminPanel").style.display = "block";

    })
    .catch(err => alert(err.message));

}


// --------------------
// ADD POST
// --------------------
function addPost() {

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Fill in both fields!");
    return;
  }

  db.collection("posts").add({
    title: title,
    content: content,
    date: new Date().toLocaleDateString(),
    created: Date.now()
  });

  alert("Post uploaded!");

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}


// --------------------
// LOAD POSTS (DEVLOG)
// --------------------
function loadPosts() {

  const container = document.getElementById("posts");
  if (!container) return;

  db.collection("posts")
    .orderBy("created", "desc")
    .onSnapshot(snapshot => {

      container.innerHTML = "";

      snapshot.forEach(doc => {

        const post = doc.data();

        container.innerHTML += `
          <div class="post">
            <h4>${post.title}</h4>
            <p><strong>Date:</strong> ${post.date}</p>
            <p>${post.content}</p>
          </div>
        `;

      });

    });

}
