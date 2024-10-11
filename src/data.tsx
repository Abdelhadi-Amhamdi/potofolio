import {FaReact, FaPython, FaDocker, FaWordpress, FaLinkedin, FaTwitter, FaDev, FaGithub} from 'react-icons/fa'
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

export const frInfos = {
    greeting : 'salut, je suis',
    desc : "Je suis un étudiant passionné en informatique avec un vif intérêt pour le développement de logiciels, les technologies web et la résolution de problèmes. J'ai toujours envie d'apprendre de nouvelles choses et d'appliquer mes connaissances pour construire des solutions efficaces et évolutives.",
    ptitle : 'De la galerie',
    atitle : 'mes articles',
    ttile : "Rencontrez l'équipe",
    more : 'voir plus',
    less : 'voir moins',
    footer : "Fabriqué avec ❤️ en utilisant"
}

export const eninfos = {
    greeting : "Hi, I'm",
    desc : "I'm a passionate computer science student with a deep interest in software development, web technologies, and problem-solving. I'm always eager to learn new things and apply my knowledge to build efficient and scalable solutions.",
    address : "Khouribga",
    code : "25000, el massira",
    phone : "+2126 90 73 14 52",
    email : "aamhamdi943@gmail.com",
    ptitle : 'From The Gallery',
    atitle : 'My Articles',
    ttitle : 'Meet The Team',
    more : 'see more',
    less : 'see less',
    footer : 'made with ❤️ using'
}

export const links  = [
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

export const icons = [
    {
      icon : "#python",
      orbit : "#orbit1",
    },
    {
      icon : "#js",
      orbit : "#orbit1",
    },
    {
      icon : "#react",
      orbit : "#orbit3",
    },
    {
      icon : "#firebase",
      orbit : "#orbit1",
    },
    {
      icon : "#code",
      orbit : "#orbit2",
    },
    {
      icon : "#terminal",
      orbit : "#orbit2",
    },
    {
      icon : "#git",
      orbit : "#orbit1",
    },
    {
      icon : "#html",
      orbit : "#orbit1",
    },
    {
      icon : "#css",
      orbit : "#orbit3",
    },
    {
      icon : "#vscode",
      orbit : "#orbit1",
    },
  ]
