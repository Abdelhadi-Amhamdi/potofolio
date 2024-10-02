

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