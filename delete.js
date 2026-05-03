async function deleteOpportunity(id) {
  if (!confirm("Are you sure?")) return;

  const res = await fetch(`${BASE_URL}/opportunities/${id}`, {
    method: "DELETE",
    credentials: "include"
  });

  if (res.ok) {
    loadOpportunities();
  }
}
