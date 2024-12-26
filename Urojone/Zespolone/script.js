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

    if(scrollPos > 2000)
    {
        let elements = document.getElementsByName("change");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 3700)
    {
        let elements = document.getElementsByName("add");

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

function scrollToTop()
{
    setTimeout(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, 200);
}

function toRealNumber() {
    let input = document.getElementById("number").value;
    let result = document.getElementById("result");

    if(input.trim() === "")
    {
        result.innerHTML = " 0";
        return;
    }

    let complexRegex = /^([\d.-]+)\s*([+-])\s*(\d+)\s*i$/;

    let match = input.match(complexRegex);

    result.innerHTML = " "
    if (match) {
        let sign = match[2];
        let realPart = parseFloat(match[1]);
        let imaginaryPart = parseFloat(match[3]);

        if(realPart > 100000 || imaginaryPart > 100000) 
        {
            let info = "Czynniki liczby są za wysokie (max: 1000000)";
        
            for(let i = 0; i < info.length; i++)
            {
                setTimeout(() => {
                    result.innerHTML += info.charAt(i);
                }, 20 * i);
            }

            return;
        }
        else if (realPart < -100000 || imaginaryPart < -100000) 
        {
            let info = "Czynniki liczby są za niskie (min: -100000)";
        
            for(let i = 0; i < info.length; i++)
            {
                setTimeout(() => {
                    result.innerHTML += info.charAt(i);
                }, 20 * i);
            }
            return;
        }

        let secondPart = "( 0 " + (sign === '+' ? "- " : "+ ") + imaginaryPart + "i )";

        let equation = "(" + input + ") + " + secondPart + " => " + "(" + realPart + " + 0i) => " + realPart;

        for(let i = 0; i < equation.length; i++)
        {
            setTimeout(() => {
                result.innerHTML += equation.charAt(i);
            }, 20 * i);
        }

        
    } else {
        let info = "Niepoprawny forma liczby. Podaj liczbę w formie a + bi lub a - bi";
        
        for(let i = 0; i < info.length; i++)
        {
            setTimeout(() => {
                result.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
}

function scrollToPlot()
{
    setTimeout(() => {
        window.scrollTo({ top: 3200, behavior: "smooth" });
    }, 200);
}