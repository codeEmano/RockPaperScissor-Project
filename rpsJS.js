var userscore=0;

var pcscore=0;

var round=0;

var comp_badge=document.getElementById('pcBadge');

var user_badge=document.getElementById('userBadge');

var user_score=document.getElementById('userScore');

var pc_score=document.getElementById('pcScore');

var rk=document.getElementById('r');

var pr=document.getElementById('p');

var sr=document.getElementById('s');

var messg=document.getElementById('message');

function pc_Choice()
{
	var pc=['r','p','s'];

	var random_num=Math.floor(Math.random()*3);

	return pc[0];
}

function winOrLose()
{
	round++;
	if(userscore==5)
	{
		user_badge.classList.add('win_green');
		setTimeout(function(){user_badge.classList.remove('win_green');},5000)
		document.getElementById('winOrLoseMessage').innerHTML="You win previous game!"
		setTimeout(function(){document.getElementById('winOrLoseMessage').innerHTML="";},5000)
		user_score.innerHTML=0;
		pc_score.innerHTML=0;
		userscore=0;
		pcscore=0;
		round=1;
	}
	if(pcscore==5)
	{
		comp_badge.classList.add('win_green');
		setTimeout(function(){comp_badge.classList.remove('win_green');},7000)
		document.getElementById('winOrLoseMessage').innerHTML="PC Wins previous game!"
		setTimeout(function(){document.getElementById('winOrLoseMessage').innerHTML="";},7000)

		pc_score.innerHTML=0;
		user_score.innerHTML=0;
		userscore=0;
		pcscore=0;
		round=1;
	}
}

function game(userChoice)
{
	
	
	switch(userChoice+pc_Choice())
	{
		case "rp":

		case "sr":

		case "ps":messg.innerHTML="PC Wins round : "+round;
		 pcscore++;
		 pc_score.innerHTML=pcscore;
		 document.getElementById(userChoice).classList.add('lose_red');
		 setTimeout(function(){document.getElementById(userChoice).classList.remove('lose_red');},500)
		 

		 break;

		 case "rs":

		 case "sp":

		 case "pr":messg.innerHTML="You Win round : "+round;
		 userscore++;
		 user_score.innerHTML=userscore;
		 document.getElementById(userChoice).classList.add('win_green');
		 setTimeout(function(){document.getElementById(userChoice).classList.remove('win_green');},500)

		 break;

		 default:messg.innerHTML="Round "+round+" is a draw.";  
		 document.getElementById(userChoice).classList.add('draw_reb');
		 setTimeout(function(){document.getElementById(userChoice).classList.remove('draw_reb');},500)

		 break;
	}
}

function main()
{
	rk.addEventListener("click",function(){winOrLose();game("r");})

	pr.addEventListener("click",function(){winOrLose();game("p");})

	sr.addEventListener("click",function(){winOrLose();game("s");})
}

main(); 