import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <h2 className="font-extrabold text-2xl xl:text-4xl justify-center flex md:text-2xl sm:text-4xl  lg:text-3xl md:p-5">
      <Typewriter
        options={{
          strings: [
            "Haz realidad tus ideas",
            "Asesoramos tus compras",
            "Tu negocio sin limites",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  );
};

export default TypeWriter;
