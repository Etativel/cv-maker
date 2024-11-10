import "../styles/Sidebar.css";

function ProfileForm() {
  return (
    <>
      <form action="">
        <label htmlFor="">
          Your Name
          <input type="text" placeholder="Name" />
        </label>
      </form>
    </>
  );
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ProfileForm />
    </div>
  );
}
