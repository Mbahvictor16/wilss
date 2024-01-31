import React from "react";
import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ResponseProps } from "../types";
import CategoryBlock from "../helpers/CategoryBlock";

export const HomeLoader = async (): Promise<ResponseProps> => {
  const apikey = (import.meta as ImportMeta).env.VITE_APIKEY
  const today = new Date(Date.now());
  try {
    const options = {
      method: 'GET',
      url: `https://google-news13.p.rapidapi.com/world`,
      params: {lr: 'en-US'},
      headers: {
        'X-RapidAPI-Key': 'c32ea2f91fmsh42fd0cd17896b23p16be03jsn3b57178ffd83',
        'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    

    return response.data
    
  } catch (error) {
    throw error
  }
}


const Home: React.FC = () => {
  const data = useLoaderData() as ResponseProps | undefined
  console.log(data)
  
  return (
    <>
      {
        data &&
        <>
        <main className="flex flex-wrap w-3/4 mx-auto gap-3 justify-center mb-10">

          {
            data.items.map((item, index) => {
              return(

                <div className='card w-72 h-40 lg:h-60 mb-4 lg:w-96' key={index}>
                  <Link to={item.newsUrl || ""}
                  relative='path' className='block w-full h-full'>
                    <div className="banner w-full h-4/5">
                      <img src={item.images?.thumbnail || ""} alt="couldn't load image" className='object-cover h-full w-full'/>
                    </div>

                    <div className="title text-xs font-black lg:text-sm xl:text-base">{item.title}</div>
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
