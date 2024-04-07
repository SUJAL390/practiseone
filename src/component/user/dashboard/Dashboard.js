import React from 'react'
import HotProductsData from '../../../assets/HotProductsData.json'; 
import ResUsableComponent from './ReUsableComponent'
import TrendingProducts from './TrendingProducts';
import TrendingProductsData from '../../../assets/TredingProducts.json'
import PremiumProducts from './PremiumProducts';
import PremiumProductsData from '../../../assets/PremiumProducts.json'
import Carousel from './Carousel';
const Dashboard = () => {
  return (
    <div className='bg-black text-white'>
      <Carousel data={PremiumProductsData}/>
        <ResUsableComponent title={'HotProducts'} data={HotProductsData}/>
        <TrendingProducts  title={'TrendingProducts'} data={TrendingProductsData }/>
        <PremiumProducts title={'PremiumProducts'} data={PremiumProductsData}/>
        

    </div>
  )
}

export default Dashboard