import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex items-center justify-between p-5 bg-white shadow-md">
      <a href="#" className="flex items-center font-medium gap-2 text-gray-800">
        <img src="src/assets/images/avatar.jpg" className="w-10 h-10 rounded" />
      </a>
      <div className="flex gap-5">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="showcase"
          smooth={true}
          duration={500}
          className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="career"
          smooth={true}
          duration={500}
          className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer"
        >
          About
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-xs text-gray-600">
          <h5 className="font-medium">Nakhonratchasima, Thailand</h5>
          <p className="font-semibold">{time}</p>
        </div>
        <button className="px-3 py-1 text-xs font-medium text-white bg-gray-800 border-2 border-gray-800 rounded hover:bg-white hover:text-gray-800">
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
