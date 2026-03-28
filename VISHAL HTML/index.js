
let currentScoreA = 0;
let currentScoreB = 0;
document.getElementById('current_score_A').textContent = 0;
document.getElementById('current_score_B').textContent = 0;

// Functions to update scores for Team A and Team B
 function scoreMinus1_A(){
     currentScoreA -= 1;
     document.getElementById('current_score_A').textContent = currentScoreA;
 }
 function scoreMinus1_B(){
     currentScoreB -= 1;
     document.getElementById('current_score_B').textContent = currentScoreB;
 }
 
function scorePlus1_A(){
     currentScoreA += 1;
     document.getElementById('current_score_A').textContent = currentScoreA;
 }
 function scorePlus1_B(){
     currentScoreB += 1;
     document.getElementById('current_score_B').textContent = currentScoreB;
 }

 function scorePlus2_A(){
     currentScoreA += 2;
     document.getElementById('current_score_A').textContent = currentScoreA;
}
 function scorePlus2_B(){
     currentScoreB += 2;
     document.getElementById('current_score_B').textContent = currentScoreB;
 }
 function scorePlus3_A(){
     currentScoreA += 3;
     document.getElementById('current_score_A').textContent = currentScoreA;
}
 function scorePlus3_B(){
     currentScoreB += 3;
     document.getElementById('current_score_B').textContent = currentScoreB;
 }

function reset() {
    currentScoreA = 0;
    currentScoreB = 0;
    document.getElementById('current_score_A').textContent = currentScoreA;
    document.getElementById('current_score_B').textContent = currentScoreB;
}