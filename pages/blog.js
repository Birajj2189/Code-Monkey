import React , { useState,useEffect} from 'react'
import Link from 'next/link'



const Blog = (props) => {
  console.log(props);
  const [blog, setblog] = useState(props.data);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/blogs`)
  //     .then((response) => response.json())
  //     .then((actualData) => setblog(actualData));
  // }, []);
  
  return (
     <section className=" text-gray-600 body-font bg-fourth-color">
  <div className="container bg-transparent w-[80vw] px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {
        blog.map((item)=>(
            <div className="p-4 lg:w-1/3">
              <div className="drop-shadow-lg h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
               <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 cursor-pointer">Coding</h2>
                <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3">{item.title}</h1>
                <p className="leading-relaxed mb-3">{item.description.substring(0,140)}...</p>
                <Link href={`/blogpost/${item.slug}`} className="text-first-color cursor-pointer hover:text-second-color inline-flex items-center">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
        ))
      }
      </div>
  </div>
</section>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  
  // Fetch data from external API
  let res = await fetch(`http://localhost:3000/api/blogs`);
  let data = await res.json();

  // Pass data to the page via props
  return { 
    props: {data} ,
  }
}

export default Blog;