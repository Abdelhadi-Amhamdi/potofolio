import {FaReact, FaPython, FaDocker, FaWordpress, FaInstagram, FaLinkedin, FaTwitter, FaDev, FaGithub} from 'react-icons/fa'
import {SiNginx, SiMariadb, SiCplusplus, SiC} from 'react-icons/si'

export const projects = [
    {
        title : "Ft-trancendence",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "web",
        img : "/pong.jpg",
        tech : [<FaReact />, <FaPython />],
    },
    {
        title : "Inception",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "devops",
        img : "/img.png",
        tech : [<FaDocker />, <SiNginx/>, <SiMariadb /> , <FaWordpress />],
    },
    {
        title : "Ft-IRC",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "unix",
        img : "/irc.jpg",
        tech : [<SiCplusplus />],
    },
    {
        title : "Cube-3D",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "graphic",
        img : "/cube.jpg",
        tech : [<SiC />],
    },
    {
        title : "Minishell",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "unix",
        img : "/minishell.jpg",
        tech : [<SiC />],
    },
    {
        title : "Philosophers",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "unix",
        img : "/img.png",
        tech : [<SiC />],
    },
]


export const infos = {
    address : "Khouribga",
    code : "25000, massira",
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
        image : "",
        link : "https://dev.to/aamhamdi/what-are-cpu-registers-4275",
        tags : ["unix"]
    }
]

