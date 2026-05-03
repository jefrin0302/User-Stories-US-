async function addOpportunity() {
  const payload = {
    name: document.getElementById("name").value,
    duration: document.getElementById("duration").value,
    start_date: document.getElementById("start").value,
    description: document.getElementById("desc").value,
    skills: document.getElementById("skills").value,
    category: document.getElementById("category").value,
    future_opportunities: document.getElementById("future").value,
    max_applicants: document.getElementById("max").value
  };

  const res = await fetch(`${BASE_URL}/opportunities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    loadOpportunities(); // refresh UI instantly
  } else {
    const data = await res.json();
    alert(data.message);
  }
}
