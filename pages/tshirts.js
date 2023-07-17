import mongoose from "mongoose";
import React from "react";
import Product from "@/models/Product";
import Link from "next/link";
import dynamic from "next/dynamic";

const Tshirts = ({ products }) => {
  console.log(products);
  return (
    <div className="flex justify-center align-center">
      <section className="text-gray-400 bg-white body-font flex justify-center align-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(products).map((item) => {
              return (
                <Link
                  passHref={true}
                  id={products[item]._id}
                  key={products[item]._id}
                  href={`/product/${products[item].slug}`}
                >
                  <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                    <p className="block relative  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center md:h-[30vh] h-[50vh] block"
                        src={products[item].img}/>
                    </p>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        T-Shirts
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">${products[item].price}</p>
                      <p className="mt-1">
                        {products[item].size.includes('S') && <span className="border border-gray-600 px-1 mx-1">S </span>}
                        {products[item].size.includes('M') && <span className="border border-gray-600 px-1 mx-1">M </span>}
                        {products[item].size.includes('L') && <span className="border border-gray-600 px-1 mx-1">L </span>}
                        {products[item].size.includes('XL') && <span className="border border-gray-600 px-1 mx-1">XL </span>}
                        {products[item].size.includes('XXL') && <span className="border border-gray-600 px-1 mx-1">XXL </span>}
                      </p>
                      <p className="mt-1">
                        {products[item].color.includes('red') && <button className="border border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes('green') && <button className="border border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes('blue') && <button className="border border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes('pink') && <button className="border border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes('yellow') && <button className="border border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes('purple') && <button className="border border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find();
  // console.log("hello");
  // console.log(products);
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

// export default Tshirts;
export default dynamic(() => Promise.resolve(Tshirts), { ssr: false });
