const yourName = document.querySelector('.name');
const workingYear = document.querySelector('.workingYear');
const mIncome = document.querySelector('.mincome');
const btn = document.querySelector('.output');

const msg = document.querySelector('.msg');
const summaryElement = document.querySelector('.Summary');

const d = new Date();
let year = d.getFullYear();

let summary = ''; // Declare summary outside the function

function total() {
    const name = yourName.value;
    const startYear = parseInt(workingYear.value);
    const monthlyIncome = parseFloat(mIncome.value);

    const yearsOfEarning = year - startYear;
    const totalEarning = 12 * yearsOfEarning * monthlyIncome;

    summary = `Dear ${name}, the year is ${year} and you have been earning since ${startYear}, and from the information you provided, it seems you make an average profit of ${monthlyIncome} every month. For the past ${yearsOfEarning} years, from my rough calculation, your total income over the years should be around ${totalEarning}. Thank you.`;
}

function err() {
    if (!yourName.value || !workingYear.value || !mIncome.value) {
        return "Input not found";
    } else {
        return summary;
    }
}

function pop() {
    msg.classList.remove('hidden');
}

btn.addEventListener('click', function() {
    total();
    const result = err();
    summaryElement.textContent = result;
    pop();
});

document.querySelector('.close-msg').addEventListener('click', function() {
    msg.classList.add('hidden');
});
