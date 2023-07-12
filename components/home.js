
import Image from "next/image";
import profilepict from "../images/profilepict.jpg"
import { motion } from "framer-motion";

export default function Home(params) {
    return(
        <section id="home">
        <div
          id="home"
          className="flex justify-center items-center"
          style={{ paddingTop: 100, paddingBottom: 170 }}
        >
          <div className="mx-auto h-3/4">
            <div className="grid grid-cols-2 content-center">
            <motion.div
              className="grid place-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 6}}
            >
                <Image src={profilepict} width={500} className="image-one" />
            </motion.div>
              <div className="grid grid-cols-1 gap-4 content-center">
                <motion.h1
                  className="name-header-top"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  Hi, I am
                </motion.h1>
                <motion.h1
                  className="name-header-bot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                >
                  Glan Harith Teguh
                </motion.h1>
                <motion.h2
                  className="ab-header"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5 }}
                >
                  Frontend Developer
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}