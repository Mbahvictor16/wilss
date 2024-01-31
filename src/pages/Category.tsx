import React, { useLayoutEffect, useState } from "react";
import { Params, useLocation, useParams, Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { ResponseProps } from "../types";
import Category from "../components/Category/Category";
import Reload from "../helpers/Reload";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const CategoryPage: React.FC = () => {
  const {category} = useParams<Readonly<Params<string>>>();
  const [data, setArticle] = useState<ResponseProps>();
  const [error, setError]= useState<Error>();
  const location = useLocation()
  const apikey = (import.meta as ImportMeta).env.VITE_APIKEY

  useLayoutEffect(() => {
    async function getCategory() {
      try {
        const options = {
          method: 'GET',
          url: `https://google-news13.p.rapidapi.com/${category}`,
          params: {lr: 'en-US'},
          headers: {
            'X-RapidAPI-Key': 'c32ea2f91fmsh42fd0cd17896b23p16be03jsn3b57178ffd83',
            'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
          }
        };
    
        const response = await axios.request(options);

        if (response.status === 200) {
          setArticle(response.data)
          console.log(category, response.data.data);
          
        }
        
      } catch (error) {
        throw error
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
          !data ? <Loading /> : 
          data ?
          (
            
            <Category items={data.items} />
            
          ) : <div>No article was found.</div>
        }

    </main>
    {data && <Footer />}
    </>
  );
};

export default CategoryPage;
