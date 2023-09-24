// Your function takes two arguments:

// 1.current father's age (years)
// 1.current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice
// as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here

    const twiceOfSon = sonYearsOld * 2
    let years

    return dadYearsOld > twiceOfSon ? yearsyears = dadYearsOld - twiceOfSon : years = twiceOfSon - dadYearsOld

    //** BEST ANSWER */

    // return Math.abs(dadYearsOld - 2 * sonYearsOld);
    
    //** */
}

// console.log(twiceAsOld(35,10))