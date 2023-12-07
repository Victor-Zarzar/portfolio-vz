import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  if (location.pathname !== "/home") {
    return null;
  }

  return (
    <>
       <div className="text-home flex text-3xl sm:text-xl md:text-2xl lg:text-3xl font-bold items-center justify-center mt-4 mb-96">
        <div className="flex">
          <h1>Hi, Im Victor Zarzar! 👋</h1>
        </div>
        <div>
          <div>
            <h2>Software Developer</h2>
          </div>
          <div>
            <h3>Web/Mobile</h3>
          </div>
        </div>
      </div>
    </>
  );
}