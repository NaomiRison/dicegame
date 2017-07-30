/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100( make it 30points) points on GLOBAL score wins the game

*/


/* first thing is first keep track of player scores
create an array, scores instead of a variable for each
player

*/

//scores=[0,0] global scores
// round score is player score from html, sum of all

//keep track of current player playing
     var scores,activePlayer, roundScore, gamePlaying;
     
     init();
     
    document.querySelector('.btn-roll').addEventListener('click', function(){
        if(gamePlaying){
                //when you click second argument is what you want to
            //happen after the click event . so our seconf argument is
            //an anaymous function
            //1)random # btw 1 and 6 that are not decimals
             var dice=Math.floor(Math.random()*6)+1;
            console.log(dice);
            //2)now display result and 3) update roundScore
            //but only if roll num is NOT 1
            var diceDom=document.querySelector('.dice')
            diceDom.style.display='block';
            diceDom.src='dice-'+dice+'.png';
            if(dice!==1){
                //add num to score
                roundScore+=dice;
                document.querySelector('#current-'+activePlayer).textContent=roundScore;
            }else{
                nextPlayer();
            }
        }
    });
     
    //event listener for other bottom, the hold on
        document.querySelector('.btn-hold').addEventListener('click',function(){
             if(gamePlaying){
                     //when user hits hold bottom, add current score to
                //global score.  Then print to screem/ UI and check if player
                //won the game
                scores[activePlayer]+=roundScore;
                  document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
                //Now checking for winner
                if(scores[activePlayer]>=20){
                    document.querySelector('#name-'+activePlayer).textContent='WINNER!';
                    document.querySelector('.dice').style.display='none';
                    // //active player is the red dot on current player
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                    //active class is the red dot which is removed when player is decided.
                    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                //below stops player from keep rolling
                    gamePlaying = false;
                }else{
                    nextPlayer();
                }
             }
        });
     
        document.querySelector('.btn-new').addEventListener('click',init);
        //when someone clicks the bottom, do the init function
        // dont write init() instead init so js knows not to invoke
        // it  right away but after clicking
         function init(){
            scores=[0,0];
            activePlayer=0;
            roundScore=0;
            gamePlaying = true;
            document.querySelector('.dice').style.display='none';
            // setting all numbers to 0
            document.getElementById('score-0').textContent='0';
            document.getElementById('score-1').textContent='0';
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            document.getElementById('name-0').textContent='Player 1';
            document.getElementById('name-1').textContent='Player 2';
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }
     
        function nextPlayer(){
            //switch to  next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore=0;
            //set it to zero in user interface;
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
             document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
        }

/*have access to dom with doucment object
 document.querySelector() selects first elemtn
 change content you have 2 methods that :
 textContent() changes text and is a setter and getter
 .inneHtml() changes inner html and text
*/
//document.querySelector('#current-'+activePlayer).textContent=dice;

// document.querySelector('#current-'+activePlayer).innerHTML='<em>' + dice + '</em>';

// var x=document.querySelector('#score-0').textContent;
// console.log(x)
//changing css through dom first you select
//what you want to change then : style.property=' ';



//selecting a class so use querySelector
		/*classList
             This property is useful to add, remove and 
             toggle CSS classes on an element.
		*/
		// document.querySelector('player-0-panel').classList.remove('active');
		// document.querySelector('player-1-panel').classList.add('active');


/*
The toggle() method toggles between hide() and show() for the selected elements.

This method checks the selected elements for visibility. show() is run if an
 element is hidden. hide() is run if an element is visible - 
 This creates a toggle effect.
*/

		/*

			state variable used to decide if the game is playing
			or not:
			var gamePlaying is defined in global scope
			it will be false when we have a winner
			For the first event listener on .btn-roll
			want to be able to hold points while game is active or
			in other words, gamePlaying=true

			
		*/