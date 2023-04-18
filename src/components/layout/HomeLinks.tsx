import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLinks() {
  return (
    <div className="mb-auto grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left font-bold">
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl rotating-text`}>
          Create{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-md opacity-70`}>
          Choose from a selectiion of templates and start adding collections to
          your profile.
        </p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl rotating-text`}>
          Connect{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-md opacity-70`}>
          Connect your different personal and business profiles to host your
          brand in one place!
        </p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl rotating-text`}>
          Style{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-md opacity-70`}>
          Customize your profile to highlight the collections important to you
        </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-2xl rotating-text`}>
          Share{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`${inter.className} m-0 max-w-[30ch] text-md opacity-70`}>
          Generate links to share your entire profile or specific collections
        </p>
      </a>
    </div>
  );
}
