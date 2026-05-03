async function loadOpportunities() {
  const res = await fetch(`${BASE_URL}/opportunities`, {
    method: "GET",
    credentials: "include"
  });

  const data = await res.json();

  const container = document.getElementById("opportunity-container");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No opportunities found</p>";
    return;
  }

  data.forEach(op => {
    const card = `
      <div class="card">
        <h3>${op.name}</h3>
        <p>${op.category}</p>
        <p>${op.duration}</p>
        <button onclick="viewDetails(${op.id})">View</button>
        <button onclick="editOpportunity(${op.id})">Edit</button>
        <button onclick="deleteOpportunity(${op.id})">Delete</button>
      </div>
    `;
    container.innerHTML += card;
  });
}
