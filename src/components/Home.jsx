import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  if (location.pathname !== "/home") {
    return null;
  }

  return (
    <>
      <div className="text-home flex text-3xl sm:text-xl md:text-2xl lg:text-3xl  font-bold items-center justify-center mb-4 mt-4">
        <h1>
      Victor Zarzar
        </h1>
      </div>
    </>
  );
}