export interface Artist{
    name:string;
    songs: Array<Song>;
    likes:number;
}
export interface Song{
    name:string;
    likes:number;
}
export class MusicData {

    static topArtists: Array<Artist> = [{
        name: "Metallica",
        songs: [{
            name: "Nothing else matters",
            likes: 3
        }, {
            name: "Unforgiven II",
            likes: 4
        }],
        likes: 2
    }, {
        name: "Coldplay",
        songs: [{
            name: "Higher power",
            likes: 2
        }, {
            name: "Viva la Vida",
            likes: 5
        }, {
            name: "Yellow",
            likes: 1
        }],
        likes: 3
    }, {
        name: "Vama Veche",
        songs: [{
            name: "Nu am chef azi",
            likes: 2
        }, {
            name: "Epilog",
            likes: 3
        }, {
            name: "Vama veche",
            likes: 1
        }],
        likes: 2
    }]
}
