import React from 'react'
import NewItem from './NewItem'
import SingleCategoury from './SingleCategoury'
import { categories } from '../../data/data'
import { Link } from 'react-router-dom'

/* grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-y-8 place-items-center */
const NewItemsSection = () => {

  const products = {
    id: 3,
    img:"/images/god.jpg",
    title: "POTTERY",
    cat:"ganpati"
    }

  return (
    <div className="bg-gray-100 pt-12">
      
        <div className="grid grid-flow-row-dense md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 mx-auto gap-y-8 place-items-center">
          {' '}
          <NewItem
            product={categories.slice(0, 4)}
          title={'Terracotta Items | Upto 90% off'}
          cat
          />
          <NewItem
            product={categories.slice(4, 8)}
            title={'Upto 90% off in branded Shoes'}
          />
          <div className="flex flex-row md:flex-col space-y-0 md:space-y-4 space-x-4 md:space-x-0 lg:col-span-2 col-span-3 ">
          {categories.slice(8, 10).map((item) => {
            return (
              <Link to={`/products/${item.cat}`}>
              <SingleCategoury image={item.img} title={ item.title}/>
              </Link>)
           }) }
          </div>
        <div className="space-y-4 w-[409px] lg:col-span-4 col-span-3">
          <Link to={`/products/${products.cat}`}>
            <div className="w-full border-black border-2 h-[207px] bg-yellow-400 p-2 flex items-center justify-between ">
              <img
                src={products.img}
                alt=""
                className="w-[350px] h-[190px]"
              />
              <p className="font-bold text-center text-xl">
                Upto 90% off in branded Shoes
              </p>
            </div>
            </Link>
            <div className="flex justify-between">
              <SingleCategoury />
              <SingleCategoury />
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewItemsSection
