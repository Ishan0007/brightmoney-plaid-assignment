import { LockClosedIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useState } from "react";

const LoginComponent = ({
}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="pt-0 md:pt-8 bg-primary">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 40,
          }}
          className="w-full max-w-md space-y-8"
        >
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-tertiary">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-secondary">
              <a href="/register" className="font-medium text-secondary">
                register -&gt;
              </a>
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  username
                </label>
                <input
                  id="email-address"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="relative block bg-primary w-full appearance-none rounded-none rounded-t-md border border-secondary px-3 py-2 text-tertiary placeholder-gray-400 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  autoComplete="current-password"
                  required
                  className="relative bg-primary block w-full appearance-none rounded-none rounded-b-md border border-secondary px-3 py-2 text-tertiary placeholder-gray-400 focus:z-10  sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
            {/* <button className="font-medium text-sm text-secondary">
                  continue with google
                </button> */}
              <div className="text-sm">
                <a href="/reset-password">
                  <a className="font-medium text-secondary">
                    Forgot your password?
                  </a>
                </a>
              </div>
            </div>

            <div>
              <button
                // onClick={login}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-tertiary"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginComponent;
