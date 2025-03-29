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
      <h1 className="mb-2">Simple CRUD</h1>
      <div className="mb-2">
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
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
