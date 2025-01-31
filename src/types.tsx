

export type TeamType = {
    link : string,
    img : string
}
type PLink = {
    github : string,
    live ? : string
}

export type ProjectType = {
    id : string,
    title : string,
    img : string,
    categorie: string,
    description : string
    team : TeamType[],
    tech : string[],
    photos : string[],
    time : string,
    links : PLink
}

type AuthorType = {
    fullname : string,
    image : string
}

export type ArticleType = {
    title : string,
    image : string,
    description : string,
    link : string,
    pub_date : string,
    tags : string[],
    author : AuthorType
}


export type CertifeType = {
    id : string,
    title : string,
    description : string,
    link : string,
    platform : string,
    date : string,
    image : string,
    logo : string
}