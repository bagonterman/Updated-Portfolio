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
                                        <div class="thirdB">A little something about me.</div>
                                        
                                        </ul>
                                </div>
                            </div>

                        </div>
                        
                        </li>
                        <li class="second">Portfolio</li>
                        <li class="third">Contacts</li>
                        
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
        //alert("Handler for .click() called." + e);
        e.preventDefault();
        var buttonValue = $(e.target).attr("class");
        try {
            var indexClass = buttonValue.indexOf(" ");
            var linkName = buttonValue.slice(indexClass + 1);///Value of second class name
            console.log(linkName)
            linkName == "first" || linkName == "about" ? buildAboutMe() : (linkName == "second" || linkName == "port" ? buildPortfolio() : (linkName == "third" || linkName == "con" ? buildContact() : (linkName == "thirdB" ? moreAboutMe() : "default")));
        }
        catch (err) {
            //console.log(err)
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
                <a class="contactLink port" href="portfolio.html">
                    Portfolio
                </a>
                <a class="contactLink con" href="contact.html">
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
        $("body").html(`              <div class="wrapper hdrGrid">
        <div class="container">
        <div class="signup-container unfold">
            <div class="signupAd">
            <div class="headline">Brett Gonterman</div>
            </div>
            <div class="outside">
            <ul class="signup-list">
            <li class="first"> About me
            </li>
            <li class="second">Portfolio</li>
            <li class="third">Contacts</li>
            
            </ul>
            </div>
        </div>
        
    </div>
    

</div>
    <!-- </div> -->
        <!-- </section> -->
    <!-- </div>       -->

<!-- </div> -->

<div class="aboutMeBox">
    <p class="about_me">
           
            <h1 class="btMe"> 
                <strong>
                Portfolio
                </strong>
            </h1>
            
    </p>
    <hr color="#7a7a7a">
<div class="wrapper folioBox">
<div class="content">
<a(href="#!{https://bagonterman.github.io/Word-Guess-Game/}")>
    <img class="portImage" src="./assets/images/Hangman.png" alt="Hangman" width="130" ></a>
    <h5 class="rowOne">Hangman</h5>
</div>
<div class="content">
<a href="https://bagonterman.github.io/unit-4-game/">
    <img class="portImage" src="./assets/images/StarWarsRPG.png" alt="RPG Game" width="130" ></a>
    <h5 class="rowOne">RPG Game</h5>
</div>
<div class="content">
    <a href=https://bagonterman.github.io/TriviaGame/>
    <img class="portImage" src="./assets/images/Trivia.png" alt="Trivia Game" width="130" ></a>
    <h5 class="rowOne">Trivia Game</h5>
</div>
<div class="content">
    <a href=https://bagonterman.github.io/Gify-app/>
    <img class="portImage" src="./assets/images/gIfy.png" alt="GifTastic" width="130" ></a>
    <h5 class="rowTwo">Rutgers Info Widget</h5>
</div>
<div class="content">
    <a href=https://bagonterman.github.io/RPS-Multiplayer/>
    <img class="portImage" src="./assets/images/rockPaperScissors.png" alt="Rock Paper Scissors" width="130" ></a>
    <h5 class="rowTwo">Rock Paper Scissors</h5>
</div>
<div class="content">
    <a href=https://github.com/bagonterman/Store_Front_app>
    <img class="portImage" src="./assets/images/Bamazon_Customer_snapshot.png" alt="UI" width="130" ></a>
    <h5 class="rowThree">Store Front Node app</h5>
</div>
<div class="content">
    <a href=https://bagonterman.github.io/Friend_Finder/app/public/home.html>
    <img class="portImage" src="./assets/images/Friends.svg" alt="UI" width="130" ></a>
    <h5 class="rowThree">Friend Finder</h5>
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
        $(".thirdB").html('<p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi. <br> Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem". Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>');
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
