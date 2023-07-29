export function HeroDesktop() {
  return <>Desktop</>;
}

export function HeroTablet() {
  return <>Tablet</>;
}

export function HeroMobile() {
  return (
    <>
      <div className="font-primary-font p-2 dark:bg-primary-color-dm dark:text-white">
        <div>
          <h2 className="text-4xl font-extrabold">
            Diseñamos por ti tu proxima gran idea de trabajo
          </h2>
          <span className="font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            pariatur voluptatibus corporis non velit assumenda perferendis,
            reiciendis mollitia? Atque vitae quidem blanditiis. Tenetur
            repudiandae adipisci corporis distinctio inventore, numquam
            voluptatibus.
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-3 py-4">
          <input
            className="border border-gray-200 rounded-md p-2 w-5/6"
            placeholder="Coloca tu email"
            type="email"
            name=""
            id=""
          />
          <input
            className="bg-btn-color text-white font-semibold rounded-md p-2 w-5/6"
            type="submit"
            value="Enviar"
          />
          <span>* No reveles informacion de tarjetas de creditos</span>
        </div>
      </div>
    </>
  );
}
