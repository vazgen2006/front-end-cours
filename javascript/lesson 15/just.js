const btnScore = document.getElementById("score");
const btnAccept = document.getElementById("accept");
const btnReset = document.getElementById("reset");
// texts
const textScore = document.getElementById("score-text");
const textAccept = document.getElementById("accept-text");
textScore.innerText = 0
textAccept.innerText = 0
    // team1
const team = {
    players: 11,
    subStitute: 5,
    goals: {
        scored: 0,
        accepted: 0,
    },
    disqualified: 0,
    time: 0,
    btns: {
        score: btnScore,
        accept: btnAccept,
        reset: btnReset,
    },
    texts: {
        score: textScore,
        accept: textAccept,
    },
    changeScore() {
        team1.goals.accepted++;

        team1.texts.accept.innerText = team1.goals.accepted

        this.goals.scored++;
        this.texts.score.innerText = this.goals.scored;
    },
    changeAccept() {
        team1.goals.scored++;
        team1.texts.score.innerText = team1.goals.scored


        this.goals.accepted++;
        this.texts.accept.innerText = this.goals.accepted;
    },
    resetGoals() {
        this.goals.accepted = 0;
        this.goals.scored = 0;
        this.texts.score.innerText = 0;
        this.texts.accept.innerText = 0;
    },
};
team.btns.score.onclick = () => {
    team.changeScore();
    // console.log(team)
}
team.btns.accept.onclick = () => {
    team.changeAccept();
    // console.log(team)
}
team.btns.reset.onclick = () => {
    team.resetGoals();
    team1.resetGoals();
    // console.log(team)
}



/////////////////////////////////////////////////////TEAM2/////////////////////////////////////////////////

const bttnScore = document.getElementById("score1");
const bttnAccept = document.getElementById("accept1");
// texts
const textScore1 = document.getElementById("score-text1");
const textAccept1 = document.getElementById("accept-text1");
textScore1.innerText = 0
textAccept1.innerText = 0
    // team2
const team1 = {
    players: 11,
    subStitute: 5,
    goals: {
        scored: 0,
        accepted: 0,
    },
    disqualified: 0,
    time: 0,
    bttn: {
        score1: bttnScore,
        accept1: bttnAccept,
    },
    texts: {
        score: textScore1,
        accept: textAccept1,
    },
    changeScore() {
        team.goals.accepted++
            team.texts.accept.innerText = team.goals.accepted;
        this.goals.scored++;
        this.texts.score.innerText = this.goals.scored;
    },
    changeAccept() {
        team.goals.scored++
            team.texts.score.innerText = team.goals.scored
        this.goals.accepted++;
        this.texts.accept.innerText = this.goals.accepted;
    },
    resetGoals() {
        this.goals.accepted = 0;
        this.goals.scored = 0;
        this.texts.score.innerText = 0;
        this.texts.accept.innerText = 0;
    },
};
team1.bttn.score1.onclick = () => {

    team1.changeScore();
    // console.log(team1)
}
team1.bttn.accept1.onclick = () => {
    team1.changeAccept();
    // console.log(team1)
}




let pra = setInterval(() => {
    if (progress.value >= 100) {
        team.resetGoals()
        team1.resetGoals()
        clearInterval(pra);

    }
    progress.value += 0.1;
}, 10);