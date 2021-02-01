/*
 * Author : Cedric-Antoine Ouellet
 * Date   : 2021/01/28
 */

const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click', () => {
    const current = document.getElementById('current-grade').value;
    const finalWeight = document.getElementById('exam-weight').value;
    const goal = document.getElementById('wanted-grade').value;
    const required = calculateRequired(parseInt(current), parseInt(finalWeight), parseInt(goal)).toFixed(1);
    if (required !== "NaN") {
        document.getElementById('required').innerText = 'Required: ' + required + '%';
    }
});

function calculateRequired(current, finalWeight, goal) {
    finalWeight /= 100;
    return (goal - ((1 - finalWeight) * current)) / finalWeight;
}
