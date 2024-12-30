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
        let elements = document.getElementsByName("wz");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 2300)
    {
        let elements = document.getElementsByName("spr");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 3000)
    {
        let elements = document.getElementsByName("check");

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

function scrollToTop()
{
    setTimeout(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, 200);
}

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

function getSign(number) {   
    return (number < 0 ? ' - ' : ' + ');
}

function checkLimits(firstNumb, min, max) {
    return firstNumb > min && firstNumb < max;
}

function checkIsInSet()
{
    let point = document.getElementById("point").value;
    let iterations = document.getElementById("iterations").value;

    let calculationsPar = document.getElementById("calculations");
    let resultPar = document.getElementById("result");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    const regex = /^([-+]?\d*\.?\d+)\s*([+-]?)\s*(\d*\.?\d+)i$/;

    const match = point.match(regex);

    if(!match)
    {
        let info = "Niepoprawna forma punktu. Użyj a + bi lub a - bi";

        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    
        return;
    }

    if(iterations < 1 || iterations > 6)
    {
        let info = "Liczba iteracji nie może być mniejsza od 1 ani większa od 6";

        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }

        return;
    }

    let realPart = parseFloat(match[1]);
    let imgPart = parseFloat(match[3]);

    if(!checkLimits(realPart, -100, 100) || !checkLimits(realPart, -100, 100))
    {
        let info = "Liczby powinny być większe od -100 i mniejsze od 100";

        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }

        return;
    }

    let resultReal = 0;
    let resultImg = 0;

    let steps = [];

    let isIncluded = true;

    for (let i = 0; i < iterations; i++) {
        let realSqr = resultReal * resultReal - resultImg * resultImg;
        let imgSqr = 2 * resultReal * resultImg;

        resultReal = realSqr + realPart;
        resultImg = imgSqr + imgPart;
        let mod = Math.sqrt(resultReal * resultReal + resultImg * resultImg);

        steps.push("Krok " + (i + 1) + ": (" + resultReal.toFixed(2) + getSign(resultImg) + Math.abs(resultImg).toFixed(2) + "i) => Moduł = " + mod.toFixed(2) + ".");
        
        if(mod > 2)
        {
            let info = "Liczba nie należy do zbioru Mandelbrota. Moduł " + (i + 1) + " kroku jest większy od 2";

            for(let i = 0; i < info.length; i++) {
                setTimeout(() => {
                    resultPar.innerHTML += info.charAt(i);
                }, 20 * i);
            }
            isIncluded = false;
            break;
        }
    }

    let totalDelay = 0;

    for (let i = 0; i < steps.length; i++) {
        let step = steps[i];
    
        for (let j = 0; j < step.length; j++) {
            setTimeout(() => {
                calculationsPar.innerHTML += step.charAt(j);
                if (j === step.length - 1) {
                    calculationsPar.innerHTML += "<br>";
                }
            }, totalDelay);
    
            totalDelay += 20;
        }
        totalDelay += 200;
    }
    

    if(!isIncluded)
    {
        return;
    }
    
    let info = "Liczba należy do zbioru Mandelbrota";

    for(let i = 0; i < info.length; i++) {
        setTimeout(() => {
            resultPar.innerHTML += info.charAt(i);
        }, 20 * i);
    }
}