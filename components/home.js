
import Image from "next/image";
import profilepict from "../images/profilepict.jpg"

export default function Home(params) {
    return(
    <section id="home">
        <div id="home" className="flex justify-center items-center" style={{paddingTop:50,paddingBottom:70}}>
            <div className="mx-auto h-3/4">
                 <div className="grid grid-cols-2 content-center">
                    <div className="grid place-items-center">
                        <Image src={profilepict}
                        width={500}
                        className="image-one"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 content-center">
                        <h1 className="name-header-top">Hi, I am</h1>
                        <h1 className="name-header-bot">Glan Harith Teguh</h1>
                        <h2 className="ab-header">Frontend Developer</h2>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}