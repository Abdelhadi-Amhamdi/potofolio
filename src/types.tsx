

export type TeamType = {
    link : string,
    img : string
}

export type ProjectType = {
    id : string,
    title : string,
    img : string,
    categorie: string,
    description : string
    team : TeamType[],
    tech : string[],
    photos : string[]
}