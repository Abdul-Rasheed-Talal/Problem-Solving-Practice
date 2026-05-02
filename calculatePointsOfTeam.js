function footballPoints(wins, draws, losses){
    //Write Your solution Here
    //  wins(3pts), draws(1pt), and losses(0pt).
    return wins*3 + draws*1 + losses*0;
};


console.log(footballPoints(4, 3, 1)); // 15
console.log(footballPoints(10, 5, 0)); // 35
console.log(footballPoints(11, 0, 9)); // 33