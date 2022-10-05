import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Main from './layout/Main';
import News from './components/News';
import MainTwo from './layout/MainTwo';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/news/categories')
          },
          element: <MainTwo></MainTwo>, children: [
            {
              path: "/:newsId",
              loader: async ({ params }) => {
                return fetch(`https://openapi.programming-hero.com/api/news/category/${params.newsId}`)
              },
              element: <News></News>
            }

          ]
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
