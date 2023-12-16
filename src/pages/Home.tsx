import React from "react";
import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Sources } from "../types";

export const HomeLoader = async (): Promise<Sources> => {
  const apikey = (import.meta as ImportMeta).env.VITE_APIKEY
  const today = new Date(Date.now());
  try {
    const response = await axios.get<Sources>(
      `https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${apikey}`
    );

    return response.data
    
  } catch (error) {
    throw error
  }
}


const Home: React.FC = () => {
  const data = useLoaderData() as Sources | undefined
  console.log(data)
  
  return (
    <>
      {
        data &&
        <>
        <main className="flex flex-wrap w-3/4 mx-auto gap-3 justify-center mb-10">

          {
            data.sources.map((sources, index) => {
              return(

                <div className='card w-72 h-40 lg:h-60 mb-4 lg:w-96'>
                  <Link to={sources.url}
                  relative='path' className='block w-full h-full'>
                    <div className="text-lg">
                      {sources.name}
                    </div>

                    <div className="title text-xs font-black lg:text-sm xl:text-base">{sources.description}</div>
                  </Link>
                </div>
              )
            })
          }
        </main>
        <Footer />  
        </>
      }
    </>
  );
}

export default Home;
