const buttons = document.querySelectorAll("button");

const votes = {
    barcelona: 0,
    manchester: 0,
    juventus: 0,
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        const teamName = event.target.id; //manchester  // juventus
        votes[teamName]++; //votes.manchester++  // votes.juventus++
        // const highest = getHighestScore(Object.values(votes));
        const highest = Math.max(...Object.values(votes));
        const winnersArr = getWinningTeams(highest);
        const buttons = document.querySelectorAll("button");
        for (let i = 0; i < buttons.length; i++) {
            if (winnersArr.includes(buttons[i].id)) {
                buttons[i].parentNode.style.backgroundColor = "red";
            } else {
                buttons[i].parentNode.style.backgroundColor = "white";
            }
        }
        console.log(winnersArr);
        const scoreSpan = document.querySelector(`.${teamName}`);
        scoreSpan.innerText = votes[teamName];
    });
}

function getHighestScore(array) {
    let highest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > highest) {
            highest = array[i];
        }
    }
    return highest;
}

function getWinningTeams(highestScore) {
    const winners = [];
    const teams = Object.keys(votes); // ['manchester', 'barcelona', 'juventus']
    for (let i = 0; i < teams.length; i++) {
        if (votes[teams[i]] === highestScore) {
            winners.push(teams[i]);
        }
    }
    return winners;
}