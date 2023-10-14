import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Final words section
 */
const FinalWords = () => {
  return (
    <motion.section
      className="container py-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="font-dela text-2xl">Final words</h1>
      <ul className="py-4 space-y-2">
        <li className="flex justify-start">
          <p>
            <span className="font-bold text-xl">-</span> If you like what you
            see and would like follow my open source work, I am on GitHub 👨‍🚀🚀.
          </p>
        </li>
        <li>
          <span className="font-bold text-xl">-</span> This site was built using
          Next.js, React Server Components, Tailwind CSS and Framer Motion - and
          is open source at{" "}
          <Link
            className="font-bold hover:text-primary underline underline-offset-4"
            href="https://github.com/KhalilDhoiybi/khalildhoiybi.tech"
            target="_blank"
          >
            GitHub
          </Link>{" "}
          .
        </li>
      </ul>
    </motion.section>
  );
};

export default FinalWords;
