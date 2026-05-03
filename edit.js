async function updateOpportunity(id) {
  const res = await fetch(`${BASE_URL}/opportunities/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(updatedData)
  });

  if (res.ok) {
    loadOpportunities();
  }
}
