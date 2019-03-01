// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
         message: "It's September 1, 1950. You decided to ride your bike. Which way do you?",
            choices: [
                {
                    text: "Right, Acorn St.",
                    nextLevel: "Field",
                },

                {
                    text: "Left, Sunshine St.",
                    nextLevel: "Street",
                },
            ]
        },

        Field: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You start riding and end up in an large open field. You stop and notice an old house. You decide to...",
            choices: [
                {
                    text: "Go towards it and check it out",
                    nextLevel: "start",
                },
            ]
        },

        Street: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
