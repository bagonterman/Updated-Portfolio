$(document).ready(function () {
    buildAboutMe();
    function buildAboutMe() {
        $("body").html(`<div class="wrapper hdrGrid">

                <div class="container">
                    <div class="signup-container unfold">
                        <div class="signupAd">
                        <div class="headline">Brett Gonterman</div>
                        </div>
                        <div class="outside">
                        <ul class="signup-list">
                        <li class="first"> About me
                        
                        <div class="popLeft">
                            <div class="bob" >

                                <div class="containerB">
                                        
                                        <ul class="signup-listB">
                                        <div class="firstB">
                                        </div>
                                        <div class="secondB"></div>
                                        <div class="thirdB">Click here to learn a little more about me.</div>
                                        
                                        </ul>
                                </div>
                            </div>

                        </div>
                        
                        </li>
                        <li class="second">Portfolio</li>
                        <li class="third">Contacts

                        <div class="homePageLinks">
                            <h3>
                                <a class="github Link" href="https://github.com/bagonterman" >
                                Github link
                            </a>
                            <br>
                                <a class="linkedIn Link" href="https://www.linkedin.com/in/brett-gonterman-a763703b/">
                                    LinkedIn
                            </a>
                            <br>
                            <form class="email Link" method="post" action="mailto:brettgonterman@sbcglobal.net" >
                            <input class="sendEmail" type="submit" value="Send Email" /> 
                            </form>
                            </h3>
                        </div>
                        
                        </li>
                        
                        
                        </ul>
                        </div>
                    </div>
                    
                </div>
            
                
        </div>

<div class="footer"></div>
<div class="bar"></div>`);
    }
    getData("ArrowGraphic")
    function getData(name) {
        $.ajax({
            url: "./assets/images/" + name + ".html",
            success: function (response) {
                if (response == "false") {
                    alert("YA DUMMI");
                } else {
                    //first.innerHTML = response;
                    $(".first").append("<div class='arrow'>" + response + "</div>");
                }
            }
        });
    }

    ///event listeners////
    $(document).on("click", "body", function (e) {
        // e.preventDefault();
        var buttonValue = $(e.target).attr("class");
        try {
            var indexClass = buttonValue.indexOf(" ");
            var linkName = buttonValue.slice(indexClass + 1);///Value of second class name
            //console.log(linkName)
            linkName == "first" || linkName == "about" ? buildAboutMe() : (linkName == "second" || linkName == "port" ? buildPortfolio() : (linkName == "third" || linkName == "con" ? buildContact() : (linkName == "thirdB" ? moreAboutMe() : "default")));
        }
        catch (err) {
            console.log(err)
        }
    });
    /////////////////////


    function buildContact() {
        $("body").html(`<div class="wrapper hdrGrid">
        <div class="whtBkgrnd">
        <h1 class="myHeader"  >
            <strong>    
        Brett Gonterman
            </strong>  
        </h1>
        </div>
    <div class="whiteBox">
        <div class="newHope">
                <h3>
                <a class="contactLink about" href="index.html" >
                    About
                </a>
                <a class="contactLink port" >
                    Portfolio
                </a>
                <a class="contactLink con" >
                    Contacts
                </a>
            </h3>
        </div>
    </div>
</div>
        <div class="contactBox">
                <p class="about_me">
                       
                        <h1 class="btMe"> 
                            <strong>
                            Contact
                            </strong>
                        </h1>
                        
                </p>
                <hr color="#7a7a7a">
    <div class="enterContact">
        <p class="conTitle">Name</p>
       <input class="inputs" type="text" name="fname" size="190%" ><br>
       <p class="conTitle">Email</p>
        <input class="inputs" type="text" name="lname" size="190%"><br>
        <p class="conTitle">Message</p>
        <textarea class="comment"></textarea>
    </div>
    <button class="subButton" type="submit" form="form1" value="Submit">Submit</button>

</div>

<div class="footer"></div>
<div class="bar"></div>`);
        //alert("farts");
    }
    function buildPortfolio() {
        $("body").html(`<div class="wrapper hdrGrid">
            <div class="container">
                <div class="signup-container unfold">
                    <div class="signupAd">
                        <div class="headline">Brett Gonterman</div>
                    </div>
                    <div class="outside">
                        <ul class="signup-list">
                            <li class="first"> About me</li>
                            <li class="second">Portfolio</li>
                            <li class="third">Contacts</li>

                        </ul>
                    </div>
                </div>

            </div>


        </div>
            
            <div class="aboutMeBox">
                <p class="about_me">

                    <h1 class="btMe">
                        <strong>
                            Portfolio
                </strong>
                    </h1>

                </p>
                <hr color="#7a7a7a"></hr>
                <div class="wrapper folioBox">
                    <div class="content">
                        <a href="https://bagonterman.github.io/Word-Guess-Game/">
                            <img class="portImage" src="./assets/images/Hangman.png" alt="Hangman" width="130" ></img>
                        
                            <h5 class="rowOne">Hangman</h5>
                    </a>
                        
                    </div>
                    <div class="content">
                        <a href="https://bagonterman.github.io/unit-4-game/">
                            <img class="portImage" src="./assets/images/StarWarsRPG.png" alt="RPG Game" width="130" ></img>
                        
                            <h5 class="rowOne">RPG Game</h5>
                            </a> 

                    </div>
                    <div class="content">
                        <a href="https://bagonterman.github.io/TriviaGame/">
                            <img class="portImage" src="./assets/images/Trivia.png" alt="Trivia Game" width="130" ></img>
                             
                            <h5 class="rowOne">Trivia Game</h5>
                            </a>
                       
                    </div>
                    <div class="content">
                        <a href="https://bagonterman.github.io/Gify-app/">
                            <img class="portImage" src="./assets/images/gIfy.png" alt="GifTastic" width="130" ></img>
                            
                            <h5 class="rowTwo">Giffy-app</h5>
                            </a>
                        
                    </div>
                    <div class="content">
                        <a href="https://bagonterman.github.io/RPS-Multiplayer/">
                            <img class="portImage" src="./assets/images/rockPaperScissors.png" alt="Rock Paper Scissors" width="130" ></img>
                            
                            <h5 class="rowTwo">Rock Paper Scissors</h5>
                        </a>
                    </div>
                    <div class="content">
                        <a href="https://github.com/bagonterman/Store_Front_app">
                            <img class="portImage" src="./assets/images/Bamazon_Customer_snapshot.png" alt="UI" width="130" ></img>
                        
                            <h5 class="rowThree">Store Front Node app</h5>
                        </a>
                    </div>
                    <div class="content">
                        <a href="https://bagonterman.github.io/Friend_Finder/app/public/home.html">
                            <img class="portImage" src="./assets/images/Friends.svg" alt="UI" width="130" ></img>
                            
                            <h5 class="rowThree">Friend Finder</h5>
                       </a>
                    </div>
                    <div class="content">
                        <a href="https://floating-headland-56018.herokuapp.com/index">
                            <img class="portImage" src="./assets/images/KingOfTheCourt.png" alt="UI" width="130" ></img>
                            
                            <h5 class="rowThree">King Of The Court</h5>
                       </a>
                    </div>
                </div>
            </div>
            <div class="wrapper footer"></div>
            <div class="bar"></div>`);

        $(".third").hover(function () {
            console.log("hmmm");
            $(".aboutMeBox").css('margin-top', "90px");
        }, function () {
            console.log("yep");
            $(".aboutMeBox").css('margin-top', "-260px");
        });
    }
    function moreAboutMe() {
        $(".thirdB").html('<p class="text">For the last five months I have been involved with web development. For the last 8 years I have been coding with javascript extending Adobe software and creating small apps within those programs. During that time as well to eight years prior I worked in the Art Department creating yearbook cover designs and artwork. I have a passion for coding and problem solving. Once I realized this was something I could do I took ownership of the challenge and wanted to know more. I could see how powerful these tools could be. I realized how much of a difference I could make not just for my department but for the whole company. Right now we have made many changes that have changed the way our plant functions. With the creation of a paper less system and extending our current workflow applications we were able to save the company over 250,000 dollars in one year. This was a big accomplishment and I am excited about the opportunity to do even more.</p>');
        $(".thirdB").width(400);
        $(".thirdB").height(300);
        //$(".thirdB").css({ top: -50, left: -50, position: 'absolute' });
        $(".thirdB").css({ marginLeft: "-90px" });
        $(".thirdB").css({ marginTop: "-50px" });
        $('.thirdB').css("font-size", "12px");
        $(".thirdB").mouseleave(function () {
            $('.thirdB').css("font-size", "18px");
            $(".thirdB").html('<div class="thirdB">A little something about me.</div>');
            $(".thirdB").width(200);
            $(".thirdB").height(80);
            $('.thirdB').css("font-size", "18px");
            $(".thirdB").css({ marginLeft: "0px" });
            $(".thirdB").css({ marginTop: "0px" });

        });
    }
});
