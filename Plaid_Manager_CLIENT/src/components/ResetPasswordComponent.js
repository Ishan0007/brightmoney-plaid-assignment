import {ArrowUpRightIcon } from "@heroicons/react/20/solid";
import {motion} from "framer-motion"
import Link from "next/link"

const ResetPasswordComponent = ({handleSubmit, loading, email, setEmail}) => {
  return (
    <div className="pt-0 md:pt-8">
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
              Reset your account
            </h2>
            <p className="mt-2 text-center text-sm text-secondary">
              <Link href="/login" className="font-medium text-secondary">
                login -&gt;
              </Link>
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block bg-primary w-full appearance-none rounded-none rounded-t-md border border-secondary px-3 py-2 text-tertiary placeholder-gray-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link href="/register">
                  <a className="font-medium text-secondary">
                    i'm not registered
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <ArrowUpRightIcon
                    className="h-5 w-5 text-tertiary"
                    aria-hidden="true"
                  />
                </span>
                {loading ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
