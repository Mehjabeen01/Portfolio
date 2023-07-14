import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { SiFirebase} from "react-icons/si";
import { SiVercel} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
const Skills = () => {
    return (
        <Fade>

        <div className="mx-auto">
            <h2 className="text-3xl font-semibold text-center m-12">Skills and Technologies</h2>
            <div className="grid grid-cols-3 gap-12 w-1/2 mx-auto">
                <button className="btn text-1xl btn-outline"> <DiHtml5 className="text-2xl"></DiHtml5>HTML</button>
                <button className="btn text-1xl btn-outline"> <DiCss3 className="text-2xl"></DiCss3>CSS</button>
                <button className="btn text-1xl btn-outline"> <SiTailwindcss className="text-2xl">Tailwind CSS</SiTailwindcss>Tailwind CSS</button>
                <button className="btn text-1xl btn-outline"> <BsFillBootstrapFill className="text-2xl">Bootstrap</BsFillBootstrapFill>Bootstrap</button>
                <button className="btn text-1xl btn-outline"> <DiJavascript className="text-2xl">JavaScript</DiJavascript>JavaScript</button>
                <button className="btn text-1xl btn-outline"> <SiReact className="text-2xl">React JS</SiReact>React JS</button>
                <button className="btn text-1xl btn-outline"> <SiExpress className="text-2xl">Express JS</SiExpress>Express JS</button>
                <button className="btn text-1xl btn-outline"> <FaNodeJs className="text-2xl">Node JS</FaNodeJs>Node JS</button>
                <button className="btn text-1xl btn-outline"> <BiLogoMongodb className="text-2xl">MongoDB</BiLogoMongodb>MongoDB</button>
            </div>

            <h2 className="text-3xl font-semibold text-center m-12">Tools</h2>
            <div className="grid grid-cols-3 gap-12 w-1/2 mx-auto">
            <button className="btn text-1xl btn-outline"> <TbBrandVscode className="text-2xl">VS Code</TbBrandVscode>VS code</button>
            <button className="btn text-1xl btn-outline"> <BsGithub className="text-2xl">GitHub</BsGithub>GitHub</button>
            <button className="btn text-1xl btn-outline"> <SiNetlify className="text-2xl">Netlify</SiNetlify>Netlify</button>
            <button className="btn text-1xl btn-outline"> <SiFirebase className="text-2xl">Firebase</SiFirebase>Firebase</button>
            <button className="btn text-1xl btn-outline"> <SiVercel className="text-2xl">Vercel</SiVercel>Vercel</button>
            </div>
        </div>
        </Fade>
    );
};

export default Skills;