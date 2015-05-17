angular
	.module('tictactoeApp')
	.controller('tttController', tttController);

	tttController.$inject = ['$firebaseObject'];


function tttController($firebaseObject){
		var self = this;
		self.gameOver =false;

		self.holes= [  
		{holy: false,
		 ID: 1,
		 display: ""
		},
        {holy: false,
        ID: 2,
		 display: ""
		},
        {holy: false,
        ID: 3,
		 display: ""
		},
        {holy: false,
        ID: 4,
		 display: ""
		},
        {holy: false,
        ID: 5,
		 display: ""
		},
        {holy: false,
        ID: 6,
		 display: ""
		},
        {holy: false,
        ID: 7,
		 display: ""
		},
        {holy: false,
        ID: 8,
		 display: ""
		},
        {holy: false,
        ID: 9,
		 display: ""
		}

        ];

	 self.firstplayerON = true;
	 self.secondplayerON = false;
	 self.declareWinner = declareWinner;
	 self.gamePlay = gamePlay;
	 self.resetter = resetter;
	 self.message = self.declareWinner;
	 self.counter = 0;
	 self.fire = getFire();
	 self.holesFB = holesFB();

	 function getFire() {
	 	var ref = new Firebase("https://tictactoe-angular-ap.firebaseIO.com");
	 	var fire = $firebaseObject(ref);
	 	return fire;
	 }


	 function holesFB() {
		self.fire.board=
		[  
		{holy: false,
		 ID: 1,
		 display: ""
		},
        {holy: false,
        ID: 2,
		 display: ""
		},
        {holy: false,
        ID: 3,
		 display: ""
		},
        {holy: false,
        ID: 4,
		 display: ""
		},
        {holy: false,
        ID: 5,
		 display: ""
		},
        {holy: false,
        ID: 6,
		 display: ""
		},
        {holy: false,
        ID: 7,
		 display: ""
		},
        {holy: false,
        ID: 8,
		 display: ""
		},
        {holy: false,
        ID: 9,
		 display: ""
		}

        ];

		self.fire.$save();


	 }




    function gamePlay($index) {
    	console.log("hello world");

		if(self.firstplayerON == true && self.fire.board[$index].display=="" && self.gameOver==false) {
			self.fire.board[$index].display="X";
			console.log(self.fire.board[$index]);
			self.fire.board[$index].holy=true;
			self.firstplayerON=false
			self.declareWinner();
		}
		else if (self.fire.board[$index].display=="" && self.gameOver==false){
			self.fire.board[$index].display= "O";
			console.log(self.fire.board[$index]);
			self.fire.board[$index].holy=true;
			self.firstplayerON=true
			self.declareWinner();
		}
		else {
			return null;
		}
			self.counter ++;
			console.log(self.counter);
	}



	function declareWinner() {
	if(
	   ((self.fire.board[0].display=="X") && (self.fire.board[1].display=="X") && (self.fire.board[2].display=="X")) ||
	   ((self.fire.board[3].display=="X") && (self.fire.board[4].display=="X") && (self.fire.board[5].display=="X")) ||
	   ((self.fire.board[6].display=="X") && (self.fire.board[7].display=="X") && (self.fire.board[8].display=="X")) ||
	   ((self.fire.board[0].display=="X") && (self.fire.board[3].display=="X") && (self.fire.board[6].display=="X")) ||
	   ((self.fire.board[1].display=="X") && (self.fire.board[4].display=="X") && (self.fire.board[7].display=="X")) ||
	   ((self.fire.board[2].display=="X") && (self.fire.board[5].display=="X") && (self.fire.board[8].display=="X")) ||
	   ((self.fire.board[0].display=="X") && (self.fire.board[4].display=="X") && (self.fire.board[8].display=="X")) ||
	   ((self.fire.board[2].display=="X") && (self.fire.board[4].display=="X") && (self.fire.board[6].display=="X")) 
	) {
		self.gameOver=true;
		self.message="Malcolm X wins! By ANY MEANS NECESSARY!"
		// alert("X is the Winner");
}
// if o is the winner, one of 8 conditoins must be met , which identify 3 adjacent cells in a row/column/diagonal are of y's suite
	else if(
	   ((self.fire.board[0].display=="O") && (self.fire.board[1].display=="O") && (self.fire.board[2].display=="O")) ||
	   ((self.fire.board[3].display=="O") && (self.fire.board[4].display=="O") && (self.fire.board[5].display=="O")) ||
	   ((self.fire.board[6].display=="O") && (self.fire.board[7].display=="O") && (self.fire.board[8].display=="O")) ||
	   ((self.fire.board[0].display=="O") && (self.fire.board[3].display=="O") && (self.fire.board[6].display=="O")) ||
	   ((self.fire.board[1].display=="O") && (self.fire.board[4].display=="O") && (self.fire.board[7].display=="O")) ||
	   ((self.fire.board[2].display=="O") && (self.fire.board[5].display=="O") && (self.fire.board[8].display=="O")) ||
	   ((self.fire.board[0].display=="O") && (self.fire.board[4].display=="O") && (self.fire.board[8].display=="O")) ||
	   ((self.fire.board[2].display=="O") && (self.fire.board[4].display=="O") && (self.fire.board[6].display=="O")) 
	) {
		self.gameOver=true;
		self.message="YES WE CAN! Obama wins!"
		
	}

	else if (self.counter == 8) {
		self.message="It's a TIE! MLK wins by default";
		self.counter=0;
	}
}



function resetter() {

					self.fire.board= [  
					{holy: false,
					 ID: 1,
					 display: ""
					},
			        {holy: false,
			        ID: 2,
					 display: ""
					},
			        {holy: false,
			        ID: 3,
					 display: ""
					},
			        {holy: false,
			        ID: 4,
					 display: ""
					},
			        {holy: false,
			        ID: 5,
					 display: ""
					},
			        {holy: false,
			        ID: 6,
					 display: ""
					},
			        {holy: false,
			        ID: 7,
					 display: ""
					},
			        {holy: false,
			        ID: 8,
					 display: ""
					},
			        {holy: false,
			        ID: 9,
					 display: ""
					}

			        ];

				 self.firstplayerON = true;
				 self.secondplayerON = false;
				 self.gameOver=false;
				 self.message="";
}
}

	// initialized reset button function

	// defined reset button function to clear cells on click of the button
	// function resetter(){
	// 	document.getElementById('resetButton').addEventListener('click', function(){
	// 		for(var i=0; i<boxes.length; i++) {
	// 			boxes[i].innerHTML="";
	//    		}
	// 	})


// var boxes = document.getElementsByClassName('hole');
// // setting condition to initiate loop function
// var firstplayerON = true;

// // listed hole variables so that they can be called on
// var holeA = document.getElementById("holeA");
// var holeB = document.getElementById("holeB");
// var holeC = document.getElementById("holeC");
// var holeD = document.getElementById("holeD");
// var holeE = document.getElementById("holeE");
// var holeF = document.getElementById("holeF");
// var holeG = document.getElementById("holeG");
// var holeH = document.getElementById("holeH");
// var holeI = document.getElementById("holeI");

// // initiated loop function
// cellaction();
// // defined loop function as when a hole is clicked a player's character is listed, and then on the next click a different character is listed
// function cellaction(){
// 	for(var i=0; i<boxes.length; i++){
// 		boxes[i].addEventListener('click', function(){
// 				if(firstplayerON==true){
// 					this.innerHTML="x";
// 					firstplayerON = false
// 				} else {
// 					this.innerHTML='o';
// 					firstplayerON = true
// 				}
// 				// initiated function to declare winner
// 				declareWinner();
				
// 			}

// 		)

// 	};
// }

// // defined function to declare winner 
// function declareWinner(){
// // if x is the winner, one of 8 conditoins must be met , which identify 3 adjacent cells in a row/column/diagonal are of x's suite
// 	if(
// 	   ((holeA.innerHTML=="x") && (holeB.innerHTML=="x") && (holeC.innerHTML=="x")) ||
// 	   ((holeD.innerHTML=="x") && (holeE.innerHTML=="x") && (holeF.innerHTML=="x")) ||
// 	   ((holeG.innerHTML=="x") && (holeH.innerHTML=="x") && (holeI.innerHTML=="x")) ||
// 	   ((holeA.innerHTML=="x") && (holeD.innerHTML=="x") && (holeG.innerHTML=="x")) ||
// 	   ((holeB.innerHTML=="x") && (holeE.innerHTML=="x") && (holeH.innerHTML=="x")) ||
// 	   ((holeC.innerHTML=="x") && (holeF.innerHTML=="x") && (holeI.innerHTML=="x")) ||
// 	   ((holeA.innerHTML=="x") && (holeE.innerHTML=="x") && (holeI.innerHTML=="x")) ||
// 	   ((holeC.innerHTML=="x") && (holeE.innerHTML=="x") && (holeG.innerHTML=="x")) 
// 	) {
// 		alert("X is the Winner");
// }
// // if o is the winner, one of 8 conditoins must be met , which identify 3 adjacent cells in a row/column/diagonal are of y's suite
// 	else if(
// 	   ((holeA.innerHTML=="o") && (holeB.innerHTML=="o") && (holeC.innerHTML=="o")) ||
// 	   ((holeD.innerHTML=="o") && (holeE.innerHTML=="o") && (holeF.innerHTML=="o")) ||
// 	   ((holeG.innerHTML=="o") && (holeH.innerHTML=="o") && (holeI.innerHTML=="o")) ||
// 	   ((holeA.innerHTML=="o") && (holeD.innerHTML=="o") && (holeG.innerHTML=="o")) ||
// 	   ((holeB.innerHTML=="o") && (holeE.innerHTML=="o") && (holeH.innerHTML=="o")) ||
// 	   ((holeC.innerHTML=="o") && (holeF.innerHTML=="o") && (holeI.innerHTML=="o")) ||
// 	   ((holeA.innerHTML=="o") && (holeE.innerHTML=="o") && (holeI.innerHTML=="o")) ||
// 	   ((holeC.innerHTML=="o") && (holeE.innerHTML=="o") && (holeG.innerHTML=="o")) 
// 	) {
// 		alert("O is the Winner");
// 		}
// }


// }