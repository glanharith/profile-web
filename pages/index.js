import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/home"
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Main(props){
    return(
        <div>
            <Head>
                <title>Glan's Profile Web</title>
            </Head>
            <Navbar/>
            <Home/>
            <About/>
            <Projects/>
            <Footer/>
            
        </div>
    );
}
