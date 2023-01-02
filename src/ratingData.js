//I used an online csv to js-array converter to get this array

const ratingData = [
  {
    name: "Evelyn",
    assignment: "SCRUM",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D1-1",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W1D2-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W1D2-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D2-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W1D2-4",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D2-5",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D3-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D3-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D3-4",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D3-5",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "5",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W1D4-1",
    difficultyRating: "4",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W2D1-1",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W2D1-2",
    difficultyRating: "2",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W2D2-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W2D2-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W2D2-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W2D3-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W2D3-2",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W2D3-3",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W2D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W2D4-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W2D4-3",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W3D1-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W3D1-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W3D1-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W3D1-4",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W3D2-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W3D2-2",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W3D2-3",
    difficultyRating: "3",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W3D3-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W3D3-2",
    difficultyRating: "4",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W3D3-3",
    difficultyRating: "3",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W3D3-4",
    difficultyRating: "4",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W3D4-1",
    difficultyRating: "5",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W3D4-2",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "2",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D2-1",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D2-2",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D2-3",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D2-4",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D3-1",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D3-2",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D3-3",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D3-4",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D3-5",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "1",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W5D4-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Evelyn",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W6D1-1",
    difficultyRating: "5",
    funRating: "5"
  },
  {
    name: "Evelyn",
    assignment: "W6D2-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Evelyn",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "5",
    funRating: "5"
  },
  {
    name: "Aranka",
    assignment: "SCRUM",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W1D1-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W1D2-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W1D2-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W1D2-3",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W1D2-4",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W1D2-5",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W1D3-1",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W1D3-2",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W1D3-4",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W1D3-5",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W1D4-1",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W2D1-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W2D1-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W2D2-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W2D2-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W2D2-3",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W2D3-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W2D3-2",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W2D3-3",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W2D4-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W2D4-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W2D4-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W3D1-1",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W3D1-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W3D1-3",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W3D1-4",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W3D2-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W3D2-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W3D2-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W3D3-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W3D3-2",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W3D3-3",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W3D3-4",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W3D4-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W3D4-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W4D2-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W4D2-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W4D2-3",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W4D2-4",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W4D3-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W4D3-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W4D3-3",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W4D3-4",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W4D3-5",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Aranka",
    assignment: "W5D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Aranka",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W6D1-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Aranka",
    assignment: "W6D2-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Aranka",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "SCRUM",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W1D1-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W1D2-1",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W1D2-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W1D2-3",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W1D2-4",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W1D2-5",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W1D3-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W1D3-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W1D3-4",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W1D3-5",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W1D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W2D1-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W2D1-2",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W2D2-1",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W2D2-2",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W2D2-3",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W2D3-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W2D3-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W2D3-3",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W2D4-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W2D4-2",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W2D4-3",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W3D1-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W3D1-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W3D1-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W3D1-4",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W3D2-1",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W3D2-2",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W3D2-3",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W3D3-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W3D3-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W3D3-3",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W3D3-4",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W3D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W3D4-2",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W4D2-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W4D2-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W4D2-3",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W4D2-4",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W4D3-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W4D3-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Floris",
    assignment: "W4D3-3",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W4D3-4",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W4D3-5",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W5D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Floris",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W6D1-1",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Floris",
    assignment: "W6D2-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Floris",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "SCRUM",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W1D1-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W1D2-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W1D2-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W1D2-3",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W1D2-4",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W1D2-5",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W1D3-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W1D3-2",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W1D3-4",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W1D3-5",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W1D4-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W2D1-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W2D1-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W2D2-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W2D2-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W2D2-3",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W2D3-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W2D3-2",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W2D3-3",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W2D4-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W2D4-2",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W2D4-3",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W3D1-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W3D1-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W3D1-3",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W3D1-4",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W3D2-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W3D2-2",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W3D2-3",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W3D3-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W3D3-2",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W3D3-3",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W3D3-4",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W3D4-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W3D4-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W4D2-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W4D2-2",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W4D2-3",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W4D2-4",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W4D3-1",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W4D3-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W4D3-3",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W4D3-4",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Hector",
    assignment: "W4D3-5",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W5D4-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Hector",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W6D1-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Hector",
    assignment: "W6D2-1",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Hector",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "SCRUM",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W1D1-1",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W1D2-1",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W1D2-2",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W1D2-3",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W1D2-4",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W1D2-5",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W1D3-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W1D3-2",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W1D3-4",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W1D3-5",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W1D4-1",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W2D1-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W2D1-2",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W2D2-1",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W2D2-2",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W2D2-3",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W2D3-1",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W2D3-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W2D3-3",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W2D4-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W2D4-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W2D4-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W3D1-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W3D1-2",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W3D1-3",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W3D1-4",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W3D2-1",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W3D2-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W3D2-3",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W3D3-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W3D3-2",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W3D3-3",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W3D3-4",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W3D4-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W3D4-2",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W4D2-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W4D2-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W4D2-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W4D2-4",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W4D3-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W4D3-2",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Martina",
    assignment: "W4D3-3",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W4D3-4",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W4D3-5",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Martina",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W5D4-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W6D1-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Martina",
    assignment: "W6D2-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Martina",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "SCRUM",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W1D1-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W1D2-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W1D2-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W1D2-3",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W1D2-4",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W1D2-5",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W1D3-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W1D3-2",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W1D3-4",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W1D3-5",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W1D4-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W2D1-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W2D1-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W2D2-1",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W2D2-2",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W2D2-3",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W2D3-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W2D3-2",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W2D3-3",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W2D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W2D4-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W2D4-3",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W3D1-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W3D1-2",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W3D1-3",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W3D1-4",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W3D2-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W3D2-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W3D2-3",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W3D3-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W3D3-2",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W3D3-3",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W3D3-4",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W3D4-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W3D4-2",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W4D2-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W4D2-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W4D2-3",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W4D2-4",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W4D3-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W4D3-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W4D3-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W4D3-4",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W4D3-5",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Maurits",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W5D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Maurits",
    assignment: "W6D1-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Maurits",
    assignment: "W6D2-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Maurits",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "SCRUM",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W1D1-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W1D2-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W1D2-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W1D2-3",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W1D2-4",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W1D2-5",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W1D3-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W1D3-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W1D3-4",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W1D3-5",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W1D4-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W2D1-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W2D1-2",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W2D2-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W2D2-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W2D2-3",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W2D3-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W2D3-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W2D3-3",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W2D4-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W2D4-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W2D4-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W3D1-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W3D1-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W3D1-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W3D1-4",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W3D2-1",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W3D2-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W3D2-3",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W3D3-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W3D3-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W3D3-3",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W3D3-4",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W3D4-1",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W3D4-2",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W4D2-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W4D2-2",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W4D2-3",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W4D2-4",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W4D3-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W4D3-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W4D3-3",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Rahima",
    assignment: "W4D3-4",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W4D3-5",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Rahima",
    assignment: "W5D4-1",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Rahima",
    assignment: "W6D1-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W6D2-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Rahima",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "SCRUM",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W1D1-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W1D2-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W1D2-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W1D2-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W1D2-4",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W1D2-5",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W1D3-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W1D3-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W1D3-4",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W1D3-5",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W1D4-1",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W2D1-1",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W2D1-2",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W2D2-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W2D2-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W2D2-3",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W2D3-1",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W2D3-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W2D3-3",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W2D4-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W2D4-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W2D4-3",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W3D1-1",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W3D1-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W3D1-3",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W3D1-4",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W3D2-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W3D2-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W3D2-3",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W3D3-1",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W3D3-2",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W3D3-3",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W3D3-4",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W3D4-1",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W3D4-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W4D2-1",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W4D2-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W4D2-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W4D2-4",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W4D3-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W4D3-2",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W4D3-3",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W4D3-4",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W4D3-5",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W5D4-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Sandra",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Sandra",
    assignment: "W6D1-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Sandra",
    assignment: "W6D2-1",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Sandra",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "SCRUM",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W1D1-1",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W1D2-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W1D2-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W1D2-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W1D2-4",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W1D2-5",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W1D3-1",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W1D3-2",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W1D3-4",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W1D3-5",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W1D4-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W2D1-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W2D1-2",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W2D2-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W2D2-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W2D2-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W2D3-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W2D3-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W2D3-3",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W2D4-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W2D4-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W2D4-3",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W3D1-1",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W3D1-2",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W3D1-3",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W3D1-4",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W3D2-1",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W3D2-2",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W3D2-3",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W3D3-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W3D3-2",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W3D3-3",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W3D3-4",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W3D4-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W3D4-2",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W4D2-1",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W4D2-2",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W4D2-3",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W4D2-4",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W4D3-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W4D3-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W4D3-3",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W4D3-4",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Wietske",
    assignment: "W4D3-5",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Wietske",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W5D4-1",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Wietske",
    assignment: "W6D1-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W6D2-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Wietske",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "SCRUM",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W1D1-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W1D2-1",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W1D2-2",
    difficultyRating: "1",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W1D2-3",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W1D2-4",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W1D2-5",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W1D3-1",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W1D3-2",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W1D3-4",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W1D3-5",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W1D4-1",
    difficultyRating: "4",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W1D5 - Project - Galgje",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W2D1-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W2D1-2",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W2D2-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W2D2-2",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W2D2-3",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W2D3-1",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W2D3-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W2D3-3",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W2D4-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W2D4-2",
    difficultyRating: "4",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W2D4-3",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W3D1-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W3D1-2",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W3D1-3",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W3D1-4",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W3D2-1",
    difficultyRating: "1",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W3D2-2",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W3D2-3",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W3D3-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W3D3-2",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W3D3-3",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W3D3-4",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W3D4-1",
    difficultyRating: "2",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W3D4-2",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRating: "3",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W4D2-1",
    difficultyRating: "2",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W4D2-2",
    difficultyRating: "3",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W4D2-3",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W4D2-4",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W4D3-1",
    difficultyRating: "3",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W4D3-2",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W4D3-3",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W4D3-4",
    difficultyRating: "3",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W4D3-5",
    difficultyRating: "2",
    funRating: "3"
  },
  {
    name: "Storm",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRating: "4",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W5D4-1",
    difficultyRating: "2",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRating: "1",
    funRating: "2"
  },
  {
    name: "Storm",
    assignment: "W6D1-1",
    difficultyRating: "4",
    funRating: "4"
  },
  {
    name: "Storm",
    assignment: "W6D2-1",
    difficultyRating: "1",
    funRating: "1"
  },
  {
    name: "Storm",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRating: "3",
    funRating: "3"
  }
]

export default ratingData