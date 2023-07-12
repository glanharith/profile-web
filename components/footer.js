import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

export default function Footer(params) {
    return(
    <div className="py-6" style={{backgroundColor:'#152238'}}>
        <div className="container mx-auto text-center">
            <h2 className='name-foot' >Glan Harith Teguh</h2>
            <p className="conn-foot">Connect with me:</p>
            <div className="flex items-center justify-center pt-2">
                    <a className="px-2" href="https://www.instagram.com/glanharithh/" target="_blank" title="Instagram">
                        <FaInstagram size={30}/>
                    </a>
                    <a className="px-2" href="https://www.linkedin.com/in/glan-harith/" target="_blank" title="LinkedIn">
                        <FaLinkedin size={30}/> 
                    </a>
                    <a className="px-2" href="https://github.com/glanharith" target="_blank" title="Github">
                        <FaGithub size={30}/> 
                    </a>
                </div>
        </div>
    </div>
    )
}