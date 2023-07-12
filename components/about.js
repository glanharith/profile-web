import Image from "next/image";
import css from "../images/css.png"
import html from "../images/html.png"
import js from "../images/js.png"
import next from "../images/next.png"
import tailwind from "../images/tailwind.png"



export default function About(params) {
    return(
        <section id="about">
        <div id="home" className="flex h-[40rem] justify-center items-center" style={{paddingTop:200}}>
            <div className="mx-auto h-3/4 flex justify-center">
                    <div className="all-about">
                        <h1 className="ab-title">About Me</h1>
                        <p className="ab-text">A fifth-semester computer science student at <span style={{color:"#FDFF00",borderColor:'black'}}>Universitas Indonesia</span></p>
                        <p className="flex justify-center" style={{paddingTop:20}}>My Frontend Tech Stack:</p>
                        <div className="grid grid-cols-5 gap-5content-center"style={{paddingTop:100}}>
                            <div className="grid place-items-center">
                                <Image src={css}
                                width={70}
                                className="transform  transition duration-500 hover:scale-125 "
                                />
                            </div>
                            <div className="grid place-items-center">
                                <Image src={html}
                                width={100}
                                className="transform  transition duration-500 hover:scale-125 "
                                />
                            </div>
                            <div className="grid place-items-center">
                                <Image src={js}
                                width={170}
                                className="transform  transition duration-500 hover:scale-125 "
                                />
                            </div>
                            <div className="grid place-items-center">
                                <Image src={next}
                                width={120}
                                className="transform  transition duration-500 hover:scale-125 "
                                />
                            </div>
                            <div className="grid place-items-center">
                                <Image src={tailwind}
                                width={90}
                                className="transform  transition duration-500 hover:scale-125 "
                                />
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}