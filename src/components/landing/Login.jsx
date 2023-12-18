export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    // card
    <div className="h-screen flex items-center justify-center">
      {/* Card que contiene a la imagen y al form */}
      <div className="flex w-4/6 justify-center">
        {/* Image */}
        <div className="bg-blue-700 flex justify-center align-middle">
          <img
            src="/dummy-logo.png"
            alt="Dummy Img"
            className="ml-5 w-2/4 "
          ></img>
        </div>

        <div className="bg-blue-800 w-6/12 flex flex-col">
          {/* header or title */}
          <div>
            <h1 className="text-4xl font-bold text-white text-center">
              Bienvenido a Pote
            </h1>
          </div>

          {/* Form */}

          <div className="flex justify-center">
            <form className="flex flex-col w-2/3" onSubmit={handleSubmit}>
              <div className="flex flex-col mt-12">
                <label className="text-white">Correo</label>
                <input
                  type="text"
                  className="bg-transparent border-b-2  outline-none text-white"
                ></input>
              </div>

              <div className="flex flex-col mt-12">
                <label className="text-white">Contraseña</label>
                <div className="flex">
                  <input
                    type="password"
                    className="bg-transparent border-b-2 border-white outline-none text-white w-full"
                  ></input>
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6   border-white border-b-2"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  
                </div>
              </div>

              <div className="flex mt-16 justify-center mb-12">
                <button className="bg-gray-600 text-white rounded-lg p-3 w-1/2">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
