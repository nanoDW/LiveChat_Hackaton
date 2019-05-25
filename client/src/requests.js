const URL = "http://localhost:3001/api/posts/";

async function toggleLike(user, date, authorEmail) {
  const response = await fetch(URL + "like/", {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "PUT",
    body: JSON.stringify({
      user: user,
      date: date,
      likeGiver: authorEmail
    })
  });
  const data = await response.json();
  console.log(data);
  return data;
}

async function deletePost(user, date) {
  const response = await fetch(URL, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "DELETE",
    body: JSON.stringify({
      user: user,
      date: date
    })
  });
  const data = await response.json();
  console.log(data);
  return data;
}

async function updatePost(user, date, text=null, attachment=null) {
    const response = await fetch(URL, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify({
          user: user,
          date: date,
          text: text,
          attachment: attachment
      })
    });
    const data = await response.json();
    console.log(data);
    return data;
}
