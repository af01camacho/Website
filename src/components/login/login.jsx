export function LoginDesktop() {
  return (
    <div className="flex flex-col items-center justify-center h-screen z-99 w-[100%] absolute filter backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 dark:text-white border border-gray-500 flex-col w-[600px] h-[400px]  text-black rounded-xl p-2 flex items-center gap-7">
        <h2 className="text-2xl font-semibold">Login</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input className="dark:bg-gray-600 border dark:border-none p-2 rounded-sm outline-none w-96" type="email" placeholder="Correo Electronico" />
          <label htmlFor="">Password</label>
          <input className="dark:bg-gray-600 border dark:border-none p-2 rounded-sm outline-none w-96" type="password" placeholder="Contraseña" />
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Recordarme</label>
          </div>
          <input className="bg-btn-color text-white font-sm p-2 font-semibold" type="submit" value="Entrar" />
        </div>
      </div>
    </div>
  );
}
