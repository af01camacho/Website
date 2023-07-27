import { Link } from "react-router-dom";
import img404 from "../../assets/404 error lost in space-amico.svg";

function Error404() {
  return (
    <>
      <div className="flex items-center flex-col bg-black h-screen justify-center gap-5">
        <h2 className="text-4xl font-primary-font font-extrabold text-white">
          Pagina no encontrada.!
        </h2>
        <img className="w-1/4" src={img404} alt="" />

        <Link className=" w-[350px] p-2 text-center text-black bg-white" to="/">
          Volver
        </Link>
      </div>
    </>
  );
}

export default Error404;
