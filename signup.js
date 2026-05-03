async function signupUser() {
  const full_name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm").value;

  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      full_name,
      email,
      password,
      confirm_password
    })
  });

  const data = await res.json();

  if (res.ok) {
    window.location.href = "login.html";
  } else {
    alert(data.message);
  }
}
