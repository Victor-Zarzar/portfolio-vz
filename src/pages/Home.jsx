import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  if (location.pathname !== "/portfolio/home") {
    return null;
  }

  return (
    <>
      <div className="py-8 z-10 font-serif mt-5">
        <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
              Welcome to <p className="text-blue-500">My Portfolio, </p> I am Web/Mobile Developer 👋.
           
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}