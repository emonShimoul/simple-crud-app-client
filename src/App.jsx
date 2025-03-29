import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User added successfully!");
          form.reset();
        }
      });
  };
  return (
    <>
      <h1 className="mb-4">Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input
          className="border border-2 rounded-lg mb-2"
          type="text"
          name="name"
        />
        <br />
        <input
          className="border border-2 rounded-lg"
          type="email"
          name="email"
        />
        <br />
        <input
          type="submit"
          className="mt-4 cursor-pointer underline"
          value="Add User"
        />
      </form>
    </>
  );
}

export default App;
