angular
.module('quizApp')
.controller('MainViewController', function($scope, $document,QBank) {
    var vm = this;
    vm.welcomeScreen  = 1;
    vm.immediateFeedback =0;
    vm.revealAnswer=0;
    vm.currentQuestion = 0;
    vm.questionCounter = 0;
    vm.hasSelectedAnswer = false;
    vm.selectedAnswer =0;
    vm.userAnswers = [];
    //Set up array for question #'s
    vm.questionOrder = [];


    //Fisher-Yates Shuffle Algorithm
    Array.prototype.shuffle = function() {
        var input = this;

        for (var i = input.length-1; i >=0; i--) {

            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }

    vm.restart = function(){
        vm.userAnswers = [];
        vm.questionOrder = [];
        vm.currentQuestion = 0;
        vm.questionCounter = 0;
        vm.hasSelectedAnswer = false;
        vm.selectedAnswer =0;
        vm.start();
    };
    vm.start = function(value) {

        //Turn the welcome Screen Off
        vm.welcomeScreen = 0;
        if( value == 1){
            vm.immediateFeedback = 1;
        }
        //Push #s based on ? count and shuffle.

        for(var i = 1 ; i <QBank.getSetSize()+1; i++){
            vm.questionOrder.push(i);
        }
        vm.questionOrder.shuffle();
        console.log(vm.questionOrder);

        //Counter variable to keep track of
        //where we are in the question set.
        vm.displayQuestion(vm.questionCounter);
    };


    vm.displayQuestion = function(questionCounter) {
            //Test question before grabbing from question bank.
            // var question ={
            //         "question":"In a city, a number of armed bank robberies were committed near closing time by a masked man wearing a white hooded sweatshirt and blue sweatpants. Police saw a man wearing a white hooded sweatshirt and blue sweatpants pacing nervously outside one of the city's banks just before it closed. The police stopped the man and frisked the outer layers of his clothing for weapons, but found none. They asked the man what he was doing outside the bank and pointed out that he was wearing clothing similar to clothing worn by the perpetrator of recent robberies. After pausing for several moments, the man confessed. The police had not provided him with any Miranda warnings.<br><br>After being charged with the bank robberies, the man moved to suppress his confession. The parties agreed, and the court properly found, that the police had reasonable suspicion but not probable cause at all times before the man confessed.<br><br>Should the man's motion to suppress be granted?",
            //         "ans1":"cat",
            //         "ans2":"dog",
            //         "ans3":"puffin",
            //         "ans4":"llama",
            //         "key":"3"
            // }

            //Retrieve Question so page gets data.

            vm.currentQuestion= QBank.getQuestion(vm.questionOrder[questionCounter]);
            console.log("quest Count:" + questionCounter);
            console.log(vm.currentQuestion);
    };

    vm.next = function() {

        if( vm.questionCounter+1< QBank.getSetSize()){
            //final answered pushed to array
            vm.userAnswers.push(vm.selectedAnswer);
            //button for next is disabled.
            vm.hasSelectedAnswer=false;
            vm.selectedAnswer =0;
            vm.questionCounter+=1;
            vm.displayQuestion(vm.questionCounter);
            vm.revealAnswer=0;
        }else{
            vm.welcomeScreen = 3;
            vm.review();
        }
        // vm.welcomeScreen = 3;
        // vm.userAnswers.push(vm.selectedAnswer);
        //     vm.review();

    };

    //Gets the size of bank so progress meter shows correct #
    vm.getQSetSize = function() {
        return QBank.getSetSize();
    };



    //Once answer is selected, do something
    vm.selectAnswer = function(value){
        //answer selected, show button to move on.
        vm.selectedAnswer = value;
        vm.hasSelectedAnswer = true;
        if( vm.immediateFeedback == 1){
            vm.revealAnswer = 1;
        }

    };

    vm.review = function() {
        vm.welcomeScreen =3;
        vm.qCorrect=0;
        vm.qWrong=0;
        vm.qData =[];

        vm.keyArray = [];
        vm.uKeyArray = [];
        vm.answerArray = [];
        vm.userAnswerArray =[];
        var database = QBank.getQBase();

        for(var k =0 ; k< vm.userAnswers.length; k++){
            console.log("key:"+database[vm.questionOrder[k]].key);
            console.log("user:"+vm.userAnswers[k] );

            //KEY ANSWERS
            //get the keys of all the answers. i.e. q1 key is 1 -> ans1
            var akeys = Object.keys(database[vm.questionOrder[k]]);
            vm.keyArray.push(akeys[database[vm.questionOrder[k]].key]);
            //get the question from the db, use keyArray value (ans1), and get the value for that key.
            // db[x] -> ans1 val -> "text for correct answer"
            vm.answerArray.push(database[vm.questionOrder[k]][vm.keyArray[k]]);
            console.log("KeyAnswer:"+vm.answerArray[k] );

            // USER ANSWERS
            //get the keys of all the answers. i.e. q1 key is 1 -> ans1
            var uKeys = Object.keys(database[vm.userAnswers[k]]);
            vm.uKeyArray.push(uKeys[database[vm.userAnswers[k]].key]);
            //get the question from the db, use keyArray value (ans1), and get the value for that key.
            // db[x] -> ans1 val -> "text for correct answer"
            vm.userAnswerArray.push(database[vm.userAnswers[k]][vm.uKeyArray[k]]);
            console.log("UserAnswer:"+vm.userAnswerArray[k] );

            vm.qData.push(
                {
                    "question":database[vm.questionOrder[k]].question,
                    "keyAnswer":vm.answerArray[k],
                    "userAnswer":vm.userAnswerArray[k]
                }
            );

            if (vm.userAnswers[k]==database[vm.questionOrder[k]].key){
                vm.qCorrect+=1;
            }else{
                vm.qWrong+=1;
            }
        }
        console.log(vm.qData);

    };
});
