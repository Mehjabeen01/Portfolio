import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { BsGithub } from "react-icons/bs";

const Home = () => {
   
        const squareStyle = {
          width: '400px',
          height: '400px',
          backgroundColor: 'grey',
          borderRadius: '50% / 75% 25% 75% 25%'
        }
    
    return (
        <Fade>
        <div className="m-28 flex justify-between items-center">
            <div>
                <h1 className="text-4xl font-semibold">Hi, I am Mehjabeen</h1>
                <h3 className="text-slate-500 font-semibold mt-2">Junior Front-End Developer</h3>
                <p className="text-slate-500 mt-3">React Developer, proficient in modern front-end technologies, <br></br>with experience in building responsive and user-friendly web applications</p>

                <div className="flex justify-between items-center">
                <button className="btn btn-neutral mt-5"><Link to="/contactme">Contact Me</Link></button>
                <a href="https://github.com/Mehjabeen01" target="_blank" rel="noopener noreferrer"><BsGithub className="text-4xl"></BsGithub></a>
                </div>
            </div>
            <div style={squareStyle}>

            </div>
        </div>
        </Fade>
    );
};

export default Home;