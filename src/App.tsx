import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/pedroeduardo36.png",
      name: "Pedro Andrade",
      role: "Dev Frontend",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Passando pra dizer que " },
      {
        type: "paragraph",
        content:
          " Estou vivendo algo muito melhor que meus sonhos, por conhecer a garota mais incrível do mundo!",
      },
      { type: "link", content: "Júlia Eu te amo! 💜" },
    ],
    publishedAt: new Date("2023-07-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Raimundo",
      role: "Dev fullstack",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Passando pra dizer que " },
      {
        type: "paragraph",
        content: "O palmeiras é gigante!",
      },
      { type: "link", content: "youtube.com" },
    ],
    publishedAt: new Date("2023-07-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (

              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
