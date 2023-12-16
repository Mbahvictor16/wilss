import React, { useLayoutEffect, useState } from "react";
import { Params, useLocation, useParams, Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { ResponseProps } from "../types";
import Category from "../components/Category/Category";
import Reload from "../helpers/Reload";
import Footer from "../components/Footer/Footer";

const CategoryPage: React.FC = () => {
  const {category} = useParams<Readonly<Params<string>>>();
  const [article, setArticle] = useState<ResponseProps>();
  const [error, setError]= useState<Error>();
  const location = useLocation()
  const apikey = (import.meta as ImportMeta).env.VITE_APIKEY

  useLayoutEffect(() => {
    async function getCategory() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${apikey}`);

        if(response.ok) {
          const data = await response.json();
          setArticle(data);
        }
      } catch (error: any) {
        setError(error)
      }
    }
    
    getCategory();
  }, [category]);
  




  return (
    <>
    <main className="flex flex-wrap w-3/4 mx-auto gap-3 justify-center mb-10">
        {
          error ? 
          <div className="text-center">
            <h1>An error occurred.</h1>
            <div className='mt-2 py-4'>
              <Link to={location.state} className='bg-red-500 px-4 py-2 text-white text-lg font-bold rounded-full' onClick={Reload}>
                Refresh Page
              </Link>
            </div>
          </div> : 
          !article ? <Loading /> : 
          article ?
          (
            
            <Category articles={article.articles}/>
            
          ) : <div>No article was found.</div>
        }

    </main>
    {article && <Footer />}
    </>
  );
};

export default CategoryPage;
