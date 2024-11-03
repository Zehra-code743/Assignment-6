import Header from "@/components/header"; 
import Hero from "@/components/hero"; 

import Sales from "@/components/sales"; 
import Products from "@/components/products"; 
import Banner from "@/components/banner"; 
import Discount from "@/components/discount"; 
import Rate from "@/components/rate"; 
import Banner2 from "@/components/Banner2";
import Footer from "@/components/Footer"; 

function HomePage() {
    return (
        <div>
            <Header/>
            <Hero />
            
            <Products />
            <Sales/>
            <Banner />
            <Discount />
            <Rate />
            <Banner2 />
            <Footer />
        </div>
    );
}

export default HomePage;
