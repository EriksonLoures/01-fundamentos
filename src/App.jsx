import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
   <div>

    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
        <main>
        
          <Post 
            author="erik" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore impedit quidem laboriosam, numquam aperiam, esse adipisci a vitae quod tenetur inventore culpa architecto sapiente ad et quas in! Ea?"
          />
            <Post
            author="Erikson"
            content="um novo post"
          />
       </main>
      </div>
   </div>
  )
}

