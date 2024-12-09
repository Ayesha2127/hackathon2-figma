
import Blog from "@/components/HOMEBLOG";
import Discount from "@/components/DISCOUNT";
import FeaturedProducts from "@/components/FEATUREDPRODUCTS";
import Hero from "@/components/HERO";
import TrendingProducts from "@/components/TRENDINGPRODUCTS";

import Image from "next/image";

export default function Home() {
  return (
   <div>
   <Hero/>
  <FeaturedProducts/>
  <TrendingProducts/>
  <Discount/>
   <Blog/>
   </div>
  );
}
