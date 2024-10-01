import {FaReact, FaPython, FaDocker, FaWordpress, FaInstagram, FaLinkedin, FaTwitter, FaDev, FaGithub} from 'react-icons/fa'
import {SiNginx, SiMariadb, SiCplusplus, SiPostgresql, SiTailwindcss} from 'react-icons/si'

export function getIcon(tech : string) {
    switch (tech) {
        case "react":
            return <FaReact />            
        case "python":
            return <FaPython />            
        case "docker":
            return <FaDocker />            
        case "wordpress":
            return <FaWordpress />            
        case "nginx":
            return <SiNginx />       
        case "mariadb":
            return <SiMariadb />       
        case "cplusplus":
            return <SiCplusplus />            
        case "postgresql":
            return <SiPostgresql />       
        case "tailwindcss":
            return <SiTailwindcss />       
    
        default:
            return tech
    }
}

export const infos = {
    endesc : "I'm a passionate computer science student with a deep interest in software development, web technologies, and problem-solving. I'm always eager to learn new things and apply my knowledge to build efficient and scalable solutions.",
    frdesc : "Je suis un étudiant passionné en informatique avec un vif intérêt pour le développement de logiciels, les technologies web et la résolution de problèmes. J'ai toujours envie d'apprendre de nouvelles choses et d'appliquer mes connaissances pour construire des solutions efficaces et évolutives.",
    address : "Khouribga",
    code : "25000, el massira",
    phone : "+2126 90 73 14 52",
    email : "aamhamdi943@gmail.com",
}

export const links  = [
    {
        icon : <FaInstagram />,
        link : "https://www.instagram.com/__ab__am/"
    },
    {
        icon : <FaLinkedin />,
        link : "https://www.linkedin.com/in/abdelhadi-amhamdi-a680a5209/"
    },
    {
        icon : <FaTwitter />,
        link : "https://x.com/AbdelhadiAmham1"
    },
    {
        icon : <FaDev />,
        link : "https://dev.to/aamhamdi"
    },
    {
        icon : <FaGithub />,
        link : "https://github.com/Abdelhadi-Amhamdi"
    },
]

export const articles = [
    {
        title : "What are CPU registers",
        desc : "Computer registers are small, high-speed storage units within a computer's central processing unit (CPU) used to temporarily hold data and instructions",
        image : "/cpu.jpg",
        link : "https://dev.to/aamhamdi/what-are-cpu-registers-4275",
        tags : ["unix"]
    }
]

