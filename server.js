const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const movies = {
    'treasure planet': {
        'imgPoster': 'https://lumiere-a.akamaihd.net/v1/images/p_treasureplanet_19879_de775942.jpeg',
        'trailer': 'https://www.youtube.com/watch?v=FoyeAk7kTfo',
        'genre': 'Animation, Adventure, Family, Fantasy, Sci-Fi',
        'storyline': "Jim Hawkins is a teenager who finds the map of a great treasurehidden by a space pirate. Together with some friends, he sets off in a largespaceship, shaped like a caravel, on his quest.",
        'rating': 'PG',
        'releaseDate': 2002,
        'charactersMain': {
            'Jim Hawkins': {},
            'Long John Silver': {},
                
        },
    },

    'the road to el dorado': {
        'imgPoster': 'https://www.dreamworks.com/storage/movies/the-road-to-el-dorado/gallery/the-road-to-el-dorado-gallery-1.jpg',
        'trailer': 'https://www.youtube.com/watch?v=Su7g8JVY0xI',
        'genre': 'Animation, Adventure, Comedy, Family, Fantasy, Musical',
        'storyline': "The story is about two swindlers who get their hands on a map to the fabled city of gold, El Dorado, while pulling off some sort of scam. Their plan goes bad and the rogues end up lost at sea after several misfortunes. Oddly enough, they end up on the shores of El Dorado, and are worshipped by the natives for their foreign appearances.",
        'rating': 'PG',
        'releaseDate': 2000,
        'charactersMain': {
            'Tulio': {},
            'Miguel': {},
            'Chel': {}
        },
    },

    'the prince of egypt': {
        'imgPoster': 'https://www.dreamworks.com/storage/movies/the-prince-of-egypt/gallery/the-prince-of-egypt-gallery-1.jpg',
        'trailer': 'https://www.youtube.com/watch?v=N0Vh65UrBK4',
        'genre': 'Animation, Adventure, Drama, Family, Fantasy, Musical',
        'storyline': "Centuries ago in Ancient Egypt, Pharaoh Seti ordered all the male Hebrew babies to be executed. A desperate mother decides to let God guide her newborn son instead of execution. Found by the Queen, the baby is named Moses and brought up as a Prince of Egypt and a brother to the Pharaoh's son Rameses II. As time passes, the two brothers are separated as Moses discovers his true heritage as a Hebrew and defies the Egyptian way of life. After escaping from the city, Moses finds that he is called by God to lead his people out of Egypt as His messenger. Unfortunately, Rameses II now rules over the Hebrews with an iron fist, and it will take all of Moses' strength and God's miracles to change the world.",
        'rating': 'PG',
        'releaseDate': 1998,
        'charactersMain': {
            'Moses': {},
            'Ramesese': {},
            'Zipporah': {}
        },
    },

    'sinbad legend of the seven seas': {
        'imgPoster': 'https://www.dreamworks.com/storage/movies/sinbad-legend-of-the-seven-seas/gallery/sinbad-legend-of-the-seven-seas-gallery-2.jpg',
        'trailer': 'https://www.youtube.com/watch?v=rwjVhtQRnwk',
        'genre': 'Animation, Adventure, Comedy, Family, Fantasy',
        'storyline': "A sailor named Sinbad is on a quest to find the magical legendary Book of Peace, a mysterious artifact that Eris, the wicked Greek goddess of chaos, has ultimately framed him for stealing. If he fails on this quest, his childhood friend Prince Proteus of Syracuse will take Sinbad's death penalty while Eris gains a desired foothold of power in the world of mortals.",
        'rating': 'PG',
        'releaseDate': 2003,
        'charactersMain': {
            'Sinbad': {},
            'Marina': {},
            'Proteus': {},
            'Eris': {},
        },
    },

    'quest for camelot': {
        'imgPoster': 'https://static.wikia.nocookie.net/warner-bros-entertainment/images/3/38/Quest_for_Camelot-_Poster.jpg/revision/latest?cb=20180726001831',
        'trailer': 'https://www.youtube.com/watch?v=GEQVbSRJrVk',
        'genre': 'Animation, Adventure, Comedy, Drama, Family, Fantasy, Musical',
        'storyline': "During the times of King Arthur, the story of an adventurous brave girl, named Kayley, whose father, a Knight of the Round Table, is killed by Sir Ruber, a maniacal brute who steals Excalibur and ultimately threatens to seize King Arthur's Camelot. Kayley enlists the blind, reclusive knight-aspirant Garrett and a goofy two headed dragon to brave the Enchanted Forest and retrieve the magic sword. Their adventure is also, of course, fraught with danger.",
        'rating': 'G',
        'releaseDate': 1998,
        'charactersMain': {
            'Kayley': {},
            'Garret': {},
            'Ruber': {},
        },
    },

    'anastasia': {
        'imgPoster': 'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/bed35e0b-51d7-4a6f-8b0b-3de766712b8a/Ana%2B1280.jpg',
        'trailer': 'https://www.youtube.com/watch?v=M0vnBeHeuzs',
        'genre': 'Animation, Adventure, Drama, Family, Musical, Mystery, Romance',
        'storyline': "The daughter of the last Russian Czar, Nicolas II (Rick Jones), Anastasia (Meg Ryan) is found by two Russian con men, Dimitri (John Cusack) and Vladimir (Kelsey Grammer), who seek the reward that her grandmother, the Dowager Empress Marie Feodorovna (Dame Angela Lansbury), promised to the ones who'll find her. But the evil mystic of the Czar family, Grigori Rasputin (Christopher Lloyd), still wants the Romanov family to be destroyed forever.",
        'rating': 'G',
        'releaseDate': 1997,
        'charactersMain': {
            'Anastasia': {},
            'Dimitri': {},
            'Vladimir': {},
            'Rasputin': {},
        },
    },

    'the swan princess': {
        'imgPoster': 'https://www.alternateending.com/wp-content/uploads/2017/06/swanprincessbkgd.jpg',
        'trailer': 'https://www.youtube.com/watch?v=RgUCPG2G50s',
        'genre': 'Animation, Adventure, Comedy, Family, Fantasy, Musical, Romance',
        'storyline': "As children, Prince Derek and Princess Odette are forced to spend their summers together by their widowed parents, who hope that the two will eventually fall in love and marry, so their two kingdoms will be united. As children and adolescents, Derek and Odette can't stand each other, but as young adults they begin to see each other in a different light and fall in love with each other. But one night things take a bad turn when Derek unintentionally offends Odette, who then refuses to marry him if he can't prove that he loves her for who she is and not just her beauty. Odette and her father are then attacked by Lord Rothbart, a vengeful sorcerer who was cast out of William's kingdom when he plotted against the king. In the form of a beast, Rothbart mortally wounds William, and kidnaps Odette then places her under a spell. Now it is up to Derek to rescue Odette by showing his undying love. But will he be in time?",
        'rating': 'G',
        'releaseDate': 1994,
        'charactersMain': {
            'Odette': {},
            'Derek': {},
            'Rothbart': {},
        },
    },


    'unknown': {
        'genre': 'unknown',
        'storyline': "unknown",
        'rating': 'unknown',
        'releaseDate': 'unknown',
    },
}

app.get( '/', ( request, response ) => {
    response.sendFile( `${__dirname}/index.html`)
})

app.get( '/api', (request, response) => {
    response.json(movies)
})

app.get( '/api/:movieTitle', (request, response) => {
    const movieTitle = request.params.movieTitle.toLowerCase()
    if ( movies[movieTitle] ) {
        response.json(movies[movieTitle])
    }
    
    else {
        response.json(movies['unknown'])
    }
})

app.listen( process.env.PORT || PORT, () => {
    console.log(`Server is running! Better go catch it!`)
})