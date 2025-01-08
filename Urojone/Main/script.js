document.addEventListener("DOMContentLoaded", function(){
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    let introText = document.getElementById("intro-text");
    
    const dialogText = [
        "Zastanawiałeś się kiedyś, co jest poza rzeczywistością którą znasz?",
        "Liczby rzeczywiste to dopiero początek.. A co z tymi, których nie można zobaczyć?",
        "Liczby urojone. Te, które istnieją, ale wydają się niemożliwe.",
        "Przygotuj się na załamanie bariery rzeczywistości..",
        "Gdzie wszystko jest możliwe"
    ]

    let lineIndex = 0;
    let inTypingMode = false;

    function writeSentence(text)
    {
        introText.innerHTML = "";
        let currentIndex = 0;

        function writeTextAnimation()
        {
            if(currentIndex < text.length)
            {
                introText.innerHTML += text.charAt(currentIndex);
                currentIndex++;
                setTimeout(writeTextAnimation, 35);
            }
            else
            {
                inTypingMode = false;
            }
        }

        if(lineIndex === 0)
        {
            setTimeout(() => {
                writeTextAnimation();
            }, 500);
        }
        else
        {
            writeTextAnimation();
        }
    }

    document.addEventListener("keydown", function(event){

        if(event.code === "KeyS")
        {
            setTimeout(() => {
                document.getElementById("intro-container").style.opacity = "0";

                setTimeout(() => {
                    document.getElementById("intro-container").style.display = "none";
                    document.getElementById("intro").style.display = "none";
                }, 800);
                
                setTimeout(() => {
                    document.getElementById("gif").style.display = "none";
                }, 800)
            }, 100);

            setTimeout(() =>{
                document.body.style.overflow = 'auto';
            }, 1000);
        }

        if(event.code === "Space" && !inTypingMode && lineIndex < dialogText.length)
        {
            if(lineIndex === 0)
            {
                document.getElementById("intro-message").style.display = "none";
                document.getElementById("intro-container").style.opacity = "0";
                
                setTimeout(() =>{
                    document.getElementById("intro-container").classList.remove("blank");
                    document.getElementById("intro-container").classList.add("intro-container");
                    document.getElementById("intro-container").style.opacity = "1";
                    document.getElementById("intro-message").style.display = "block";
                }, 500);
                
            }

            inTypingMode = true;
            writeSentence(dialogText.at(lineIndex));
            lineIndex++;

            if(lineIndex >= dialogText.length)
            {
                setTimeout(() => {
                    document.getElementById("intro-container").style.opacity = "0";

                    setTimeout(() => {
                        document.getElementById("intro-container").style.display = "none";
                        document.getElementById("intro").style.display = "none";
                        document.getElementById("gif").style.display = "block";
                    }, 1000);
                    
                    setTimeout(() => {
                        document.getElementById("gif").style.display = "none";
                    }, 3000)
                }, 2000);

                setTimeout(() =>{
                    document.body.style.overflow = 'auto';
                }, 3000);
            }
        }
    });
});


window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY || window.pageYOffset;

    if(scrollPos > 500)
    {
        document.getElementById("navTitle").classList.remove("hidden");
        document.getElementById("navTitle").classList.add("display");
    }
    else
    {
        document.getElementById("navTitle").classList.remove("display");
        document.getElementById("navTitle").classList.add("hidden");
    }

    if(scrollPos > 1600)
    {
        let elements = document.getElementsByName("secondBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if (scrollPos > 2000)
    {
        let elements = document.getElementsByName("maker");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });
    }

    if(scrollPos > 3500)
    {
        let elements = document.getElementsByName("plotExpl");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });
    }

    if(scrollPos > 50)
    {
        document.getElementById("buttonsMenu").style.display = "flex";
    }
    else
    {
        document.getElementById("buttonsMenu").style.display = "none";
    }
});

function scrollToContent()
{
    let elements = Array.from(document.getElementsByClassName("shown"));

    for (let element of elements) {
        element.classList.remove("shown");
        element.classList.add("hidden");
    }
    
    let startBox = Array.from(document.getElementsByName("firstBox"));
    
    setTimeout(() => {
        window.scrollTo({ top: 1000, behavior: "smooth" });
    }, 200);
    
    startBox.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove("hidden");
            element.classList.add("shown");
        }, index * 300);
    });
    
}

function calculatePower()
{
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");
    result.innerHTML = "";

    if (isNaN(number))
    {
        result.innerHTML = " x musi być liczbą";
        return;
    }

    if (number == 0)
    {
        result.innerHTML = 0;
        return;
    }

    if (number < -10000)
    {
        document.getElementById("num").value = "";
        result.innerHTML = "Ilość jednostki urojonej jest za mała";
        return;
    }
    else if (number > 10000)
    {
        document.getElementById("num").value = "";
        result.innerHTML = "Ilość jednostki urojonej jest za duża";
        return;
    }

    resultStep = "(" + number + "²)(√-1²) = (" + number * number + ")(-1) = " + (-(number * number));

    for(let i = 0; i < resultStep.length; i++)
    {
        setTimeout(() => {
            result.innerHTML += resultStep[i];
        }, i * 50);
    }
}

function scrollToTop()
{
    setTimeout(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, 200);
}

document.getElementById("num").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        calculatePower();
    }
});