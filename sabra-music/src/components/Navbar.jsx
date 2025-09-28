import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-transparent absolute w-full top-0 z-10">
      <div className="text-2xl font-bold">🎵 Sabra Music</div>
      <ul className="flex gap-6 text-lg">
        <li><Link to="/">Schedule</Link></li>
        <li><Link to="/upcoming">Up Coming</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Link to="/admin">
        <button className="bg-white text-black px-6 py-2 rounded-full">Admin</button>
      </Link>
    </nav>
  );
}

export default Navbar;