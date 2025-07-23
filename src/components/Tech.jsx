import React from "react";
import {
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoCss3,
} from "react-icons/bi";
import {
  SiMysql,
  SiPython,
  SiPostman,
  SiJupyter,
} from "react-icons/si";
import { motion } from "framer-motion";

function Tech() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const IconCard = ({ children }) => (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 px-4 py-10"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl text-center"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-2 max-w-6xl w-full">
        {/* Tech Icons All Together */}
        <IconCard><BiLogoHtml5 className="text-orange-600 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><BiLogoCss3 className="text-blue-600 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><BiLogoJavascript className="text-yellow-400 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><BiLogoReact className="text-blue-400 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><BiLogoTailwindCss className="text-sky-400 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><BiLogoNodejs className="text-green-500 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><SiPython className="text-yellow-400 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><BiLogoMongodb className="text-green-400 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><SiMysql className="text-blue-500 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <br />
       
        <IconCard>
          <img
            src="/Images/excel.png"
            alt="Excel"
            className="w-[60px] hover:-translate-y-2 transition"
          />
        </IconCard>
        <IconCard>
          <img
            src="/Images/powerbi.png"
            alt="Power BI"
            className="w-[60px] hover:-translate-y-2 transition"
          />
        </IconCard>
        <IconCard><SiJupyter className="text-orange-500 text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><BiLogoGithub className="text-white text-[60px] hover:-translate-y-2 transition" /></IconCard>
        <IconCard><SiPostman className="text-orange-600 text-[60px] hover:-translate-y-2 transition" /></IconCard>
      </div>
    </div>
  );
}

export default Tech;
