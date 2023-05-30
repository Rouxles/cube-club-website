export interface WCARoot {
    name?: string
    person: Person
    competition_count: number
    personal_records: PersonalRecords
    medals: Medals
    records: Records
  }
  
  export interface Person {
    name: string
    delegate_status: any
    wca_id: string
    avatar: Avatar
    gender: string
    country_iso2: string
    url: string
    country: Country
    class: string
    teams: any[]
    id: string
  }
  
  export interface Avatar {
    url: string
    pending_url: string
    thumb_url: string
    is_default: boolean
  }
  
  export interface Country {
    id: string
    name: string
    continentId: string
    iso2: string
  }
  
  export interface PersonalRecords {
    "222": N222
    "333": N333
    "333bf": N333bf
    "333fm": N333fm
    "333ft": N333ft
    "333mbf": N333mbf
    "333oh": N333oh
    "444": N444
    "444bf": N444bf
    "555": N555
    "555bf": N555bf
    "666": N666
    "777": N777
    clock: Clock
    minx: Minx
    pyram: Pyram
    skewb: Skewb
    sq1: Sq1
  }
  
  export interface N222 {
    single: Single
    average: Average
  }
  
  export interface Single {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N333 {
    single: Single2
    average: Average2
  }
  
  export interface Single2 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average2 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N333bf {
    single: Single3
    average: Average3
  }
  
  export interface Single3 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average3 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N333fm {
    single: Single4
    average: Average4
  }
  
  export interface Single4 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average4 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N333ft {
    single: Single5
    average: Average5
  }
  
  export interface Single5 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average5 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N333mbf {
    single: Single6
  }
  
  export interface Single6 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N333oh {
    single: Single7
    average: Average6
  }
  
  export interface Single7 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average6 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N444 {
    single: Single8
    average: Average7
  }
  
  export interface Single8 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average7 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N444bf {
    single: Single9
    average: Average8
  }
  
  export interface Single9 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average8 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N555 {
    single: Single10
    average: Average9
  }
  
  export interface Single10 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average9 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N555bf {
    single: Single11
    average: Average10
  }
  
  export interface Single11 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average10 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N666 {
    single: Single12
    average: Average11
  }
  
  export interface Single12 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average11 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface N777 {
    single: Single13
    average: Average12
  }
  
  export interface Single13 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average12 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Clock {
    single: Single14
    average: Average13
  }
  
  export interface Single14 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average13 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Minx {
    single: Single15
    average: Average14
  }
  
  export interface Single15 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average14 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Pyram {
    single: Single16
    average: Average15
  }
  
  export interface Single16 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average15 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Skewb {
    single: Single17
    average: Average16
  }
  
  export interface Single17 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average16 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Sq1 {
    single: Single18
    average: Average17
  }
  
  export interface Single18 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Average17 {
    best: number
    world_rank: number
    continent_rank: number
    country_rank: number
  }
  
  export interface Medals {
    gold: number
    silver: number
    bronze: number
    total: number
  }
  
  export interface Records {
    national: number
    continental: number
    world: number
    total: number
  }
  