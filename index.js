// 
// Argus Home
//
// Adam Hart | help@panoptes.live
//
// v0
//


let datetime0 = document.querySelector('p');


window.onload = function() {
	document.getElementById("searcher").focus();
	
	let today = new Date();
    
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date = `${month}/${date}/${year}`;
    
	document.getElementById("datetime0").innerText = current_date;
};

Console.Log('Load Complete!')