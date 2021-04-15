import Head from "next/head";
import { useQuery } from "react-query";
import GithubCard from "./../components/GithubCard";

const fetchGithubRepose = async () =>
  await (
    await fetch(
      "https://api.github.com/users/anilmadhub/repos?type=owner&sort=updated&per_page=18"
    )
  ).json();

export default function Home() {
  const github = useQuery("github", fetchGithubRepose);

  console.log({ github });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            MyBlog
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          List of my
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Github Projects
          </code>
        </p>

        {github.isLoading && "loading github repos"}
        {github.status === "success" && (
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {github.data.map((repo) => (
              <GithubCard
                name={repo.name}
                description={repo.description}
                url={repo.html_url}
              />
            ))}
          </div>
        )}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}