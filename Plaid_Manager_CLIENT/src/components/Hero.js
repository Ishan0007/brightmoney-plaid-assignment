import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden -z-10 bg-primary font-defaultfont">
      <div className="mx-auto max-w-full flex justify-center text-center bg-primary">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 bg-primary">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 bg-primary">
            <div className="sm:text-center lg:text-left bg-primary">
              <motion.h1
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, type: "spring", stiffness: 40 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center"
              >
                <span className="block xl:inline text-center text-tertiary">
                  get all bank accounts
                </span>{" "}
                <span className="block text-secondary xl:inline text-center">
                  at one place
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.1,
                  type: "spring",
                  stiffness: 40,
                }}
                className="mt-3 text-base text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-center"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                sint laborum voluptatum consectetur libero animi error ipsa,
                amet nobis, labore molestias fugiat. Consequuntur pariatur
                maiores quisquam dolores excepturi autem in.
              </motion.p>
              <motion.div
                id
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.2,
                  type: "spring",
                  stiffness: 35,
                }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center"
              >
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:opacity-0.5 md:py-4 md:px-10 md:text-lg"
                  >
                    Github
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-tertiary px-8 py-3 text-base font-medium text-secondary hover:opacity-0.5 md:py-4 md:px-10 md:text-lg"
                  >
                    contact
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;
