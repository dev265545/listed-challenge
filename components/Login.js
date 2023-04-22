import React, { useEffect } from "react";

import { getProviders, getSession, signIn } from "next-auth/react";

function login({ providers }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        const pageHeight = document.body.scrollHeight;
        window.scrollTo(0, pageHeight);
      });
    }
  }, []);

  return (
    <section className="">
      <div className="  h-full scroll-smooth  ">
        <div className=" flex w-full overflow-x-auto  flex-col lg:flex-row md:flex-col bg-opacity-5  ">
          <div className="  text-white items-center flex justify-center lg:w-[588px] lg:h-screen   font-montserrat font-bold  w-full  bg-black ">
            <div className="flex items-center text-[72px] justify-center p-20 m-20 ">
              Board.
            </div>
          </div>
          <div className=" flex items-center justify-center p-10 md:px-48 lg:px-48 lg:py-24 bg-[#F5F5F5] bg-opacity-30  ">
            <div class="  items-center justify-center w-full   ">
              <div class="">
                <h3 class=" text-4xl  bg-[#F5F5F5]  font-montserrat font-bold text-black bg-opacity-30 ">
                  Sign in
                </h3>
                <h3 class="mb-4 text-md inline  font-lato  font-normal text-black ">
                  Sign in to your account
                </h3>
                <div className="grid grid-cols-2 gap-12 ">
                  <button
                    onClick={() => signIn(google, { callbackUrl: "/" })}
                    type="button"
                    class="text-[#858585] font-lato lg:w-[180px] lg:h-[30px] border-[#858585] shadow z-50 bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  gap-1 mr-2 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="30"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 262"
                      id="google"
                    >
                      <path
                        fill="#4285F4"
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      ></path>
                    </svg>
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    class="text-[#858585] font-lato lg:w-[180px] lg:h-[30px] border-[#858585] shadow z-50 bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  gap-1 mr-2 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="30"
                      viewBox="0 0 496.255 608.728"
                      id="apple"
                    >
                      <path
                        fill="#999"
                        d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
                      ></path>
                    </svg>
                    Sign in with Apple
                  </button>
                </div>
                <div></div>
                <div className="bg-white flex items-center justify-center shadow-lg  rounded-2xl p-10">
                  <div>
                    <div class="space-y-6" action="#">
                      <div>
                        <label
                          for="email"
                          class="block mb-2 font-lato font-medium text-black "
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="bg-[#f5f5f5] border text-[16px] border-gray-300 text-black  rounded-lg  block lg:w-[325px] p-2.5 "
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          class="block mb-2 font-lato  text-black"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          class="bg-[#f5f5f5] border border-gray-300 text-black  rounded-lg  block lg:w-[325px] p-2.5 "
                          required
                        />
                      </div>
                      <div class="flex justify-between">
                        <a
                          href="#"
                          class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        class="w-full text-white bg-black  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Sign In
                      </button>
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <a
                          href="#"
                          class="text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Create account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;
export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}
