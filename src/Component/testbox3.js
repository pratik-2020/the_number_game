/*importing all the required necessity
from react and other*/ 
import React, { Component } from 'react';
import '../css/box.css';
import $ from 'jquery';
/*defining the counter for the range of number to be generated*/
var num = 100;
var b = Math.floor((Math.random()*num) + 1); // generating a random number

/*defining a class component */
class Testbox extends Component {
    //definging the constructor of the Testbox component
    constructor(props){
        super(props);
    }

    /* defining a function named as butnonclick
    which is used to set onClick listener on 
    the cloned buttons as well as it provides
    id to the clonned buttons and input boxes */
    btnonclick(d){
        let btn = document.getElementsByClassName("button");
        var inpt = document.getElementsByTagName("input");
        for(var i=0; i< btn.length; i++){
            btn[i].id = "bt"+i;
            inpt[i].id = btn[i].id + i;
            btn[i].onClick = this.trigger(d, inpt[i].id);
        }
    }
    /* defining a function anmed as trigger
    which is called when the initial button is clicked
    it takes two parameters of new of which is the random
    number generated and other is the button id of the initial buton */
    trigger(c,d){
        var matches = d.match(/(\d+)/);
        if(matches){
            var e = d + matches[0]; 
            this.guessnum(c, e);
        }
    }

    /* defining a function anmed as guessnum
    which takes two parameters one of which is
    the generated random number and the other one
    is the id of the input box whose value is to be red
    according to the answer the operations are performed
    such as colouring the test div with green, red, yellow, blue 
    and giving text as correct, hot, warm, cold
    and if the guessed number matched the random number a new button and a
    new input box are created*/
    guessnum(c, d){
        console.log(c);
        var a = parseInt(document.getElementById(d).value);
        if(a === c){
            console.log("correct");
            document.getElementById("text").innerHTML = "Correct";
            document.getElementById("text").style.backgroundColor = "green";
            document.getElementById("text").style.width = "20%";
            $("#bt00").clone().val("").appendTo("#mylist");
            $("#bt0").clone(true).appendTo("#mylist");
            $("#text").clone().html("").appendTo("#mylist");
            num += 100;
            b = Math.floor((Math.random()*num) + 1);
        }else{
            console.log("Wrong");
            if(Math.abs(a - c) >=1 && Math.abs(a - c) <= 4){
                document.getElementById("text").innerHTML = "Hot";
                document.getElementById("text").style.backgroundColor = "red";
                document.getElementById("text").style.width = "20%";
            }
            else if(Math.abs(a - c) >=5 && Math.abs(a - c) <= 15){
                document.getElementById("text").innerHTML = "Warm";
                document.getElementById("text").style.backgroundColor = "yellow";
                document.getElementById("text").style.width = "20%";
            }
            else if(Math.abs(a - c) > 15){
                document.getElementById("text").innerHTML = "Cold";
                document.getElementById("text").style.backgroundColor = "blue"; // id="bt0" name="clickButton" onClick={() => this.trigger(this.b, "bt0")}
                document.getElementById("text").style.width = "20%";
            }
        }
    }
    /* this builtin function is used to reder the jsx on the browser */
    render(){
        return(
            <div className="container">
                <ul id="mylist">
                    <div className="box" id="box">
                        <p id="number">Your Number:</p> <input type="text" id="bt00" className="inp" placeholder="Yourguessed number" />
                        <button className="btn" id="bt0" onClick={() => this.trigger(b, "bt0")}>Submit</button>
                        <div id="text"></div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Testbox;