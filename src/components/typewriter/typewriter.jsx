import Typewriter from "typewriter-effect";

const TypeWriter = () =>{
    return(
        <h2 className="font-extrabold text-3xl w-full flex justify-center">
            <Typewriter
              options={{
                strings: [
                  "HACEMOS TUS IDEAS REALIDAD",
                  "TE ASESORAMOS COMPLETAMENTE",
                  "TU NEGOCIO SIN LIMITES",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
    )
}

export default TypeWriter