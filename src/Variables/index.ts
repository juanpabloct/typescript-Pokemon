export const typesPokemon = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];
export interface PokemonWithImage {
  name: string;
  img: string;
  backgroundTarget: string;
  backgroundButton: string;
}
export const typesPokemonWithImg: PokemonWithImage[] = [
  {
    name: "normal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOEFNm3O-cKnrg4nD7fjk2uYqna1lluya_g&usqp=CAU",
    backgroundTarget: "#D9D9D9",
    backgroundButton: "#b2b0b0",
  },
  {
    name: "fighting",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8wySyXwNdlvM64pkuxEXSfi4e2x7Xx0NqQ&usqp=CAU",
    backgroundTarget: "#bb9898",
    backgroundButton: "#a65757",
  },
  {
    name: "flying",
    img: "data:image/jpeg;base64,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",
    backgroundTarget: "#A9D9EE",
    backgroundButton: "#46b4e5",
  },
  {
    name: "poison",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51KWiq8njjwehxbnlmzTntDGZdBXm58T1GfBhszFduGN2u8QNGqhLYH_ijyHyfD-mqYw&usqp=CAU",
    backgroundTarget: "#c55f5f",
    backgroundButton: "#de6c6c",
  },
  {
    name: "ground",
    img: "https://images.theconversation.com/files/373058/original/file-20201204-23-1t3cs1b.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
    backgroundTarget: "#cdbe9f",
    backgroundButton: "#c4a76c",
  },
  {
    name: "rock",
    img: "https://i.pinimg.com/736x/97/f5/c5/97f5c56301b4d46df744c15630cd4da6.jpg",
    backgroundTarget: "#e1e1e8",
    backgroundButton: "#948d8d",
  },
  {
    name: "ghost",
    img: "https://images.theconversation.com/files/143088/original/image-20161025-31470-qlvqs0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    backgroundTarget: "#d2d7dc",
    backgroundButton: "#afbedb",
  },
  {
    name: "steel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuy9hIWqvHp17Qcz3OqGtyowzgdWM3zwLLOcgpctN9I3Kjh1_8DmTS9PfwUuP2qaDciE&usqp=CAU",
    backgroundTarget: "#9fa8bb",
    backgroundButton: "#b6bedd",
  },
  {
    name: "fire",
    img: "https://s3-alpha-sig.figma.com/img/e2bb/dbbb/f67713bc9221d312549850a5d16a513e?Expires=1658707200&Signature=GPHSYkF0V4YFeqgH9Hjw2f2spYdm8HJliJZ0tWMoCgg0u30HpURAezQ5s9YGbPyx11k1JIr4UqmwyJNd1dAvXLwIjxRCDQqhyJmXofwM8rd9yBXHmad-mjU2QJqwSHv29vHNzekRiBEU99VVpXw17Z5PPdVgART-XbI4BQbacLVVMZWyyvE8WxJlj41t2M3nk4nhoYjP1ipleiwpPCOHaaKMgYewVezsBkcbF-QmdR2cFUzKcMTVvqPfqx8-qNQgko2trhIiVHomUa8gzRTVAc0cCuJg8hVWUsrERw2Sja4JB5cyUucMvzh8cXdeBhwIzS7-Y~xi1fc9Eu8sAn1kzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    backgroundTarget: "#F5CABC",
    backgroundButton: "E9483E",
  },
  {
    name: "water",
    img: "https://s3-alpha-sig.figma.com/img/ed07/d3d1/aa58f5a089a89078f810aff28775915a?Expires=1658707200&Signature=Gv-KGsVjwgVCNjw7clt30lDwKH~udJ-j9jG0GPjU8vI57tP9Bo7hlahzk-vYSUEdwnH0dNZelOtmj9FDiUZTaFadyswX8vpgQusBRgKSgA56EXa23ZvOkSQAMgyZdlkdVEwV6haN-kMk0cVjxBZxY9KHPx-BeJgniqgAl0JydGSSgNH~JFSQNWJiUu6kaUpJVgHDv2TUZ2WWA2m73UXTVY3cvHElx-wNGhnojLArozx5u-~QSI72ZxPCEbzzl69xGxCCyB-PtFeZx9yQzvAs9SRqOiUOV6vPdJH8RIfDHU9gdXybMEuSIK4uY9O1VhGdI8VP3EiZmnLEHLRpfyN91w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    backgroundTarget: "#bcd3f5",
    backgroundButton: "#0da8ff",
  },
  {
    name: "grass",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW3VwmULhtfXv1GQBbNGxS8RP3u7zmHeAjQ&usqp=CAU",
    backgroundTarget: "#cbe6c6",
    backgroundButton: "#9aa67e",
  },
  {
    name: "electric",
    img: "https://s3-alpha-sig.figma.com/img/6832/4954/82e17eb63caaaeadf1e9d69f256a53bc?Expires=1658707200&Signature=R0WC27lMEjjPgfYhcgAmTJ5XxWr5P~KYuOQl1ZIeuoD5i6FTcVo5alVWbjiAukNpSVd~-BehuKgN5PhYhRfV2oTTLwdw-sYValxDJsgfbd7rIhYvoE-CDDhnxu~fLZCgRk70znW5zzLWf9AuCQX-1pqytxJPFR48U2MFSQK1NvoA9XITZMs-d3xBL~qvfai6lJlQenDgm4R6~ywhCIT26XJ6R-Gan-YtQcbse5WEetGbwCnRgA3wUKHTKTw9fbm4e-X0QO5lIuVXSnN4PyH5hwT-lYJVvCVKiyqwQc1MmIgstorBf57ImgGEMjj68-5GQSzXtYjO-1fyuSMLFXKIbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    backgroundTarget: "#F5F3BC",
    backgroundButton: "#E5E93E",
  },
  {
    name: "psychic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOnYAFFLn6FH5k7xyZL0Cce83GEnzHFLDuQ&usqp=CAU",
    backgroundTarget: "#bba5bb",
    backgroundButton: "#a79fbc",
  },
  {
    name: "ice",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhRBPH6R9XMPkrkpy50IaiA-VwnYbiTLQnw&usqp=CAU",
    backgroundTarget: "#95bbde",
    backgroundButton: "#1893d0",
  },
  {
    name: "dragon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8jqnVc5GaszBocJuCHKbbzQhNjzxOLN2pg&usqp=CAU",
    backgroundTarget: "#8eb0de",
    backgroundButton: "#6096c2",
  },
  {
    name: "dark",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f1601f2-4cce-4af9-bdfa-f5af33e7a09f/dq2mfs-31239a0b-6151-4da4-9aab-cf8f7ef950e3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmMTYwMWYyLTRjY2UtNGFmOS1iZGZhLWY1YWYzM2U3YTA5ZlwvZHEybWZzLTMxMjM5YTBiLTYxNTEtNGRhNC05YWFiLWNmOGY3ZWY5NTBlMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.hqZsQqMbGa2sPT1mziRWsXa5jujuzG9UlOxWbZGQOKQ",
    backgroundTarget: "#4d5072",
    backgroundButton: "#ccbdd4",
  },
  {
    name: "fairy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD12v2Hrhhp0ShBm1y6KbHQdrR0eduPsZxng&usqp=CAU",
    backgroundTarget: "#d9b8d9",
    backgroundButton: "#a97da9",
  },

  {
    name: "bug",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Lepisma_saccharina_Linnaeus%2C_1758.jpg",
    backgroundTarget: "#9f9b69",
    backgroundButton: "#a97da9",
  },
];
