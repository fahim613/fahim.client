"use client"

import Delivery from "@/components/home/delivery"
import Offer from "@/components/home/offer"
import Product from "@/components/home/product"
import Slider from "@/components/home/slider"
import Layout from "@/components/navbarLayout/layout"

export default function Home() {
  return (
    <>
      <Layout>
      
          <Slider/>
          <Offer/>
          <Delivery/>
          <Product/>
      </Layout>
    </>
  )
}
