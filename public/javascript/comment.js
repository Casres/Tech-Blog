async function commentClickHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    (window, location.toString().split("/").length - 1)
  ];

  if (comment_text) {
    const response = await fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
      alert('hi')
    } else {
      alert(response.statusText);
    }
  }

  console.log(comment_text, post_id, "comment btn clicked");
}

document
  .querySelector(".comment-btn")
  .addEventListener("click", commentClickHandler);
