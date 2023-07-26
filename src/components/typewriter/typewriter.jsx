import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <h2 className="font-bold text-s justify-center flex md:text-4xl sm:text-3xl lg:text-3xl md:p-5">
      <Typewriter
        options={{
          strings: [
            "HACEMOS REALIDAD TU IDEA...",
            "TE ASESORAMOS COMPLETAMENTE",
            "TU NEGOCIO SIN LIMITES...",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  );
};

export default TypeWriter;
