/*
Kevin Kelly 
Wishabi 
Rock Paper Scissors roBot 

The roBot will use previous Fight Data inorder to predict the best move and claim supreme victory over all other bots. 
*/


RPS.Player.rpsBot = function()
		{
			// Variables Producer

				// CounterMoves
				this.moveCRock = 0;
				this.moveCScissors = 0;
				this.moveCPaper = 0;
				// Battle Counter
				this.battle = 0;
				// Last Move Made
				this.lastMove = 0;
				// Score counting
				this.rpsScore = 0;
				this.drawGame = 0;
				
			}

			// //  // console.log("And Rock-Paper-Scissors legend, "+ RPS.Player.rpsBot.NAME +", has entered the tournament!");
			// //  // console.log("All Counter Moves are at 0. Let's rock!");
		}
RPS.Player.rpsBot.NAME = "rpsBot";
		// Add functions to rpsBot 
			/* function getWorstMove(arrMoveset)
			{
			return Math.min.apply(Math,arrMoveset);
			}
			*/

			function getWorstMove(arrMoveset)
			{
			    return Number(Math.min(arrMoveset[0],arrMoveset[1],arrMoveset[2]));
			}


			RPS.Player.rpsBot.prototype.throwMove = function()
			{
				var numRandomMove, numWorstMove = 0;
			
				if(battle >= 10) 
				{
				
				 //  // console.log("rpsBot is getting serious========================================");
				var arrMoves = [moveCRock,moveCPaper,moveCScissors];	
				var arrMoveDef = ["1","2","3"];
					// assign values to the arrMoves
					/*	arrMoves["rock"] = moveCRock;
						arrMoves["paper"] = moveCPaper; 		
						arrMoves["scissors"] = moveCScissors; 		
					*/
					 //  // console.log(arrMoveDef[0] + arrMoves[0]);
					 //  // console.log(arrMoveDef[1] + arrMoves[1]);
					 //  // console.log(arrMoveDef[2] + arrMoves[2]);

				
				// 	Check which countermoves are higher by eliminating the lower move
				
				numWorstMove = getWorstMove(arrMoves);
				numWorstMoveInd = 0;
				// //  // console.log(numWorstMove + " is the number for the worst move rpsBot can throw");
				//alert(numWorstMove + " is the equation for the worst move rpsBot can throw");
				
				// destroy the least 
				for(var iIter = 0; iIter < arrMoves.length; iIter++)
				{// Destroy that lower number that is the lower number
					 //  // console.log("inside the loop...");
					//  // console.log("arrMoves[" + iIter+ "] ="+ arrMoves[iIter] + " | " + "numWorstMove =" + numWorstMove);
					if(arrMoves[iIter] == numWorstMove)
					{// Die horrible move.   
						 arrMoves.splice(iIter,0);
						 arrMoveDef.splice(iIter,0);
						 numWorstMoveInd = iIter;		
					}
				}

				// Randomize the number between the last two moves, which are more outcome based.  		
					//do
					//{
					   numRandomMove = Math.round(Math.random() * 2);
					    //  // console.log("numRandomMove == " + numRandomMove);
				//	}while( numRandomMove == numWorstMoveInd);
					/*
					if(numRandomMove == 0){
					numRandomMove + 1; // use rock just in case if random move is zero
					
					*/
					// //  // console.log(arrMoves[numRandomMove] + " arrMoves[numRandomMove]");
					 theMove = arrMoveDef[numRandomMove];
					 //  // console.log(theMove + " == theMove");
				 }else{ //first blows goes to me! First ten moves are easy street.
					 numRandomMove = Math.round(Math.random() * 3);
					  // console.log(numRandomMove + " < played in the first ten moves");
 					if(numRandomMove == 0) 
					{
 					numRandomMove + 1; // use rock just in case if random move is zero
					}
					theMove	= numRandomMove;
					
				}
				// save the last ... move.
					RPS.Player.rpsBot.lastMove = theMove;
				// throw the move

				return theMove;

			}

			RPS.Player.rpsBot.prototype.addResult = function(result,opponentMove)
			{
				battle++; // add battle
				
				   // console.log("Battle " + battle + " results://////////////////////////////////////////");
				   // console.log("Opponent uses " + opponentMove);
				   // console.log(RPS.Player.rpsBot.NAME + " uses " + RPS.Player.rpsBot.lastMove);
				var wordScore = "rpsBot reigns victorious!";
				switch(opponentMove)
				{// add the opponent counter move regardless of a win/loss
					case "1": // rock
						 moveCPaper++;	
					break;
					case "2": // paper
						 moveCScissors++;
					break;
					case "3": // scissors
						 moveCRock++;
					break; 
					default:
						 // console.log("Move Not Saved");
					break;
				}
				
				switch(result)
				{// if the move was a winner 
				case 1: 
				rpsScore++;
				break;	
				case -1:
				
					var wordScore = "rpsBot submitted defeat!"; 
					this.oppScore++;
				break;
				case 0: 	
					var wordScore = "rpsBot ended in a tie!";
					this.drawGame++;
				break;	
				}

				  // console.log(wordScore);
				  // console.log("Counter Stats: moveCRock =" + moveCRock+  " | moveCPaper = "+moveCPaper + " |  moveCScissors = " + moveCScissors );							   
				 //  // console.log(">");
				//if(battle == 100)
				//{
					/// exit;
					set++;
					 // console.log("Set " + set +"\n FINAL: Opponent = "+ oppScore + " | rpsBot ="  +rpsScore + " Draws =" +  drawGame);
						
				//}
			}  // final functional closure

		