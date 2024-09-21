import {FaReact, FaPython, FaDocker, FaWordpress} from 'react-icons/fa'
import {SiNginx, SiMariadb, SiCplusplus, SiC} from 'react-icons/si'

export const projects = [
    {
        title : "Ft-trancendence",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "web",
        tech : [<FaReact />, <FaPython />],
    },
    {
        title : "Inception",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "devops",
        tech : [<FaDocker />, <SiNginx/>, <SiMariadb /> , <FaWordpress />],
    },
    {
        title : "Ft-IRC",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "unix",
        tech : [<SiCplusplus />],
    },
    {
        title : "Cube-3D",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "graphic",
        tech : [<SiC />],
    },
    {
        title : "Minishell",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "unix",
        tech : [<SiC />],
    },
    {
        title : "Philosophers",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        categorie : "unix",
        tech : [<SiC />],
    },
]


export const infos = {
    address : "Khouribga",
    code : "25000",
    phone : "+2126 90 73 14 52",
    email : "aamhamdi943@gmail.com",
}


export const articles = [
    {
        title : "What are CPU registers",
        desc : "Computer registers are small, high-speed storage units within a computer's central processing unit (CPU) used to temporarily hold data and instructions",
        image : "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fphckyu82930s0qyx5o4a.jpg",
        link : "https://dev.to/aamhamdi/what-are-cpu-registers-4275",
        tags : ["unix"]
    }
]

