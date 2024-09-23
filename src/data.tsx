import {FaReact, FaPython, FaDocker, FaWordpress, FaInstagram, FaLinkedin, FaTwitter, FaDev, FaGithub} from 'react-icons/fa'
import {SiNginx, SiMariadb, SiCplusplus, SiPostgresql, SiTailwindcss} from 'react-icons/si'

export const projects = [
    {
        "categorie": "unix",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        "title": "Ft-IRC",
        "team": [
            {
                "link": "",
                "img": "/team/aamhamdi.jpg"
            },
            {
                "link": "",
                "img": "/img.png"
            },
            {
                "link": "",
                "img": "/img.png"
            }
        ],
        "img": "https://firebasestorage.googleapis.com/v0/b/portofolio-f24eb.appspot.com/o/irc.jpg?alt=media&token=f15d2b91-f753-47c3-865e-62c6a404162f",
        "tech": [
            "cplusplus"
        ],
        "id": "1jGGphos0WYybPKs1DaG"
    },
    {
        "categorie": "devops",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        "title": "Inception",
        "tech": [
            "docker",
            "nginx",
            "mariadb",
            "wordpress"
        ],
        "img": "https://firebasestorage.googleapis.com/v0/b/portofolio-f24eb.appspot.com/o/inc.jpg?alt=media&token=327e4fac-0df5-43f3-96b6-760f927d8a4c",
        "team": [
            {
                "img": "/team/aamhamdi.jpg",
                "link": ""
            }
        ],
        "id": "4MM38LhPUunLA42xMWWB"
    },
    {
        "title": "push swap",
        "team": [
            {
                "link": "",
                "img": "/team/aamhamdi.jpg"
            }
        ],
        "img": "/img.png",
        "tech": [
            "C"
        ],
        "categorie": "algorithm",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        "id": "AtJspRTAdqK0HAB8yuII"
    },
    {
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        "title": "Philosophers",
        "categorie": "unix",
        "tech": [
            "C"
        ],
        "img": "https://firebasestorage.googleapis.com/v0/b/portofolio-f24eb.appspot.com/o/philo.jpg?alt=media&token=41e248c7-3732-46d3-8b02-809b92ee21df",
        "team": [
            {
                "img": "/team/aamhamdi.jpg",
                "link": ""
            }
        ],
        "id": "HpUkXxUeworTOqy9pRqF"
    },
    {
        "categorie": "web",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt nobis officia at quisquam eaque voluptatum non illum corrupti ipsa et vel quas autem, sequi rem nam voluptatibus deleniti fuga vitae fugit quasi, beatae suscipit natus. Doloribus, fuga inventore eum adipisci accusamus tempora magni commodi impedit quam earum nisi obcaecati deserunt veritatis sunt deleniti eos ipsa consequatur nobis rerum dicta totam sed, ut neque. Eos, amet! In libero aperiam laudantium, facere pariatur ex similique. Illo, similique numquam in eos itaque commodi repudiandae esse laudantium blanditiis, nostrum tenetur obcaecati ut minima reiciendis optio repellendus tempore iste ducimus exercitationem. Minima, explicabo necessitatibus.",
        "tech": [
            "react",
            "python",
            "postgresql",
            "tailwindcss"
        ],
        "team": [
            {
                "link": "",
                "img": "/team/aamhamdi.jpg"
            },
            {
                "img": "/img.png",
                "link": ""
            },
            {
                "link": "",
                "img": "/img.png"
            },
            {
                "link": "",
                "img": "/img.png"
            },
            {
                "img": "/img.png",
                "link": ""
            }
        ],
        "img": "https://firebasestorage.googleapis.com/v0/b/portofolio-f24eb.appspot.com/o/pong.jpg?alt=media&token=175ccee6-c6c1-4a82-8d23-2ca2ec90e85f",
        "title": "Ft-trancendence",
        "id": "IZ4n6HvGIJLMGXnsjgLN"
    },
    {
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        "title": "Minishell",
        "tech": [
            "C"
        ],
        "img": "https://firebasestorage.googleapis.com/v0/b/portofolio-f24eb.appspot.com/o/minishell.jpg?alt=media&token=08a7a68e-2608-4745-95b6-bb7c5b450f89",
        "team": [
            {
                "img": "/team/aamhamdi.jpg",
                "link": ""
            },
            {
                "link": "",
                "img": "/img.png"
            }
        ],
        "categorie": "unix",
        "id": "oBXIZRC9sXpMRkG6Zl1j"
    },
    {
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        "img": "https://firebasestorage.googleapis.com/v0/b/portofolio-f24eb.appspot.com/o/cube.jpg?alt=media&token=95dd00b5-5ec1-497d-8180-279e625fe474",
        "tech": [
            "C"
        ],
        "team": [
            {
                "img": "/team/aamhamdi.jpg",
                "link": ""
            },
            {
                "link": "",
                "img": "/img.png"
            }
        ],
        "categorie": "graphic",
        "title": "Cube-3D",
        "id": "tWBq8eendHYF9jgZQAJ0"
    },
    {
        "title": "so long",
        "team": [
            {
                "img": "/team/aamhamdi.jpg",
                "link": ""
            }
        ],
        "img": "/img.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur!",
        "tech": [
            "C"
        ],
        "categorie": "graphic",
        "id": "w1OO1jwgfgqGbA6mzLJV"
    }
]

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

