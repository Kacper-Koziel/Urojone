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

    if(scrollPos > 1500)
    {
        let elements = document.getElementsByName("tanBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 2300)
    {
        let elements = document.getElementsByName("atanBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 2700)
    {
        let elements = document.getElementsByName("atanC");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 3700)
    {
        let elements = document.getElementsByName("modifBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 4400)
    {
        let elements = document.getElementsByName("specBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 5000)
    {
        let elements = document.getElementsByName("plotExpl");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 5500)
    {
        let elements = document.getElementsByName("toTryg");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 6200)
    {
        let elements = document.getElementsByName("unDoBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 6900)
    {
        let elements = document.getElementsByName("sinCos");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 7600)
    {
        let elements = document.getElementsByName("reDo");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 8300)
    {
        let elements = document.getElementsByName("use");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 9100)
    {
        let elements = document.getElementsByName("multiBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 9700)
    {
        let elements = document.getElementsByName("multi");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }


    if(scrollPos > 10400)
    {
        let elements = document.getElementsByName("divBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 11200)
    {
        let elements = document.getElementsByName("div");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 11900)
    {
        let elements = document.getElementsByName("powerBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }
    
    if(scrollPos > 12500)
    {
        let elements = document.getElementsByName("power");

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

function checkLimits(firstNumb, min, max) {
    return firstNumb >= min && firstNumb <= max;
}

function getSign(number) {   
    return (number < 0 ? ' - ' : ' + ');
}

function calculateArctan()
{
    let tan = document.getElementById("tanInput").value;
    let result = document.getElementById("tanResult");
    result.innerHTML = "";

    if(!checkLimits(tan, -10000, 10000)) {
        let info = "Niepoprawne liczby. Spróbuj większych od -10 000 i mniejszych od 10 000";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                result.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }

    let rad = Math.atan(tan).toFixed(2);
    let deg = (rad * (180 / Math.PI)).toFixed(2);

    let info = "Radiany ≈ " + rad + ", Stopnie ≈ " + deg + "°";

    for(let i = 0; i < info.length; i++)
    {
        setTimeout(() => {
            result.innerHTML += info.charAt(i);
        }, 20 * i);
    }
}

function toTryg()
{
    let input = document.getElementById("toTrygInput").value;
    let calculationsPar = document.getElementById("toTrygCalculations");
    let resultPar = document.getElementById("toTrygResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    const regex = /^([-+]?\d*\.?\d+)\s*([-+]\s*\d*\.?\d+)i$/;

    const match = input.match(regex);


    if(match)
    {
        let realPart = parseFloat(match[1]);
        let imaginaryPart = parseFloat(match[2].replace(/\s/g, ''));

        if(!(checkLimits(realPart, -10000, 10000) && checkLimits(imaginaryPart, -10000, 10000))) {
            let info = "Niepoprawne liczby. Spróbuj większych od -10 000 i mniejszych od 10 000";
            for(let i = 0; i < info.length; i++) {
                setTimeout(() => {
                    calculationsPar.innerHTML += info.charAt(i);
                }, 20 * i);
            }
            return;
        }

        let mod = Math.sqrt(realPart * realPart + imaginaryPart * imaginaryPart).toFixed(2);
        let rad = Math.atan2(imaginaryPart, realPart);
        let deg = (rad * (180 / Math.PI)).toFixed(2);

        let calculations = "r = " + mod + ", ATAN: Radiany ≈ " + rad.toFixed(2) + ", Stopnie ≈ " + deg + "°";
        let result = mod + "(cos(" + deg + "°) + i sin(" + deg + "°))";

        for(let i = 0; i < calculations.length; i++)
        {
            setTimeout(() => {
                calculationsPar.innerHTML += calculations.charAt(i);
            }, 30 * i);
        }

                
        for(let i = 0; i < result.length; i++)
        {
            setTimeout(() => {
                resultPar.innerHTML += result.charAt(i);
            }, 30 * i);
        }
    }
    else
    {
        let info = "Niepoprawna forma liczby. Użyj a + bi lub a - bi";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
}

function calculateSinCos()
{
    let input = document.getElementById("sinCosInput").value;
    let resultPar = document.getElementById("sinCosResult");

    resultPar.innerHTML = "";

    if(checkLimits(input, -10000, 10000))
    {
        let radians = input * Math.PI / 180;

        let info = "sin(φ) ≈ " + Math.sin(radians).toFixed(3) + ", cos(φ) ≈ " + Math.cos(radians).toFixed(3);
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
    else
    {
        let info = "Niepoprawne liczby. Spróbuj większych od -10 000 i mniejszych od 10 000";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }
}

function fromTryg()
{
    let mod = document.getElementById("trygModInput").value;
    let arg = document.getElementById("trygArgInput").value;
    let calculationsPar = document.getElementById("trygCalculations");
    let resultPar = document.getElementById("trygResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    if(checkLimits(mod, 0, 10000) && checkLimits(arg, -180, 180))
    {
        let radians = arg * Math.PI / 180;

        let sinus = Math.sin(radians);
        let cosinus = Math.cos(radians);
        
        let realPart = cosinus * mod;
        let imaginaryPart = sinus * mod;

        let calculations = "r = " + mod + ", sin = " + sinus.toFixed(3) + ", cos = " + cosinus.toFixed(3) + ", cos × r = " + realPart.toFixed(2) + " sin × r = " + imaginaryPart.toFixed(2);
        let result = "(" + realPart.toFixed(2) + " " + getSign(imaginaryPart) + " " + Math.abs(imaginaryPart).toFixed(2) + "i)";
        
        for(let i = 0; i < calculations.length; i++)
        {
            setTimeout(() => {
                calculationsPar.innerHTML += calculations.charAt(i);
            }, 30 * i);
        }

                
        for(let i = 0; i < result.length; i++)
        {
            setTimeout(() => {
                resultPar.innerHTML += result.charAt(i);
            }, 30 * i);
        }
    }
    else
    {
        let info = "Niepoprawne argumenty, dla r spróbuj od 0 do 10 000, dla argumentu φ od -180 do 180";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }
}

function multiply() {
    let resultPar = document.getElementById("multiResult");
    let calculationsPar = document.getElementById("multiCalculations");

    resultPar.innerHTML = "";
    calculationsPar.innerHTML = "";

    let firstMod = parseFloat(document.getElementById("multiFRInput").value);
    let secondMod = parseFloat(document.getElementById("multiSRInput").value);
    let firstArg = parseFloat(document.getElementById("multiFAInput").value);
    let secondArg = parseFloat(document.getElementById("multiSAInput").value);

    if (checkLimits(firstMod, 0, 10000) && checkLimits(secondMod, 0, 10000) &&
        checkLimits(firstArg, -180, 180) && checkLimits(secondArg, -180, 180)) {

        let modResult = (firstMod * secondMod).toFixed(2);
        let argResult = ((firstArg + secondArg) % 360);
        if (argResult > 180) {argResult -= 360};
        if (argResult < -180) {argResult += 360};

        let calculations = "(" + firstMod + " × " + secondMod + ")(cos(" + firstArg + " + " + secondArg + ") + i sin(" + firstArg + " + " + secondArg + "))";
        let result = modResult + "(cos(" + argResult.toFixed(2) + " + i sin(" + argResult.toFixed(2) + "))";

        for (let i = 0; i < calculations.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += calculations.charAt(i);
            }, 30 * i);
        }

        for (let i = 0; i < result.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += result.charAt(i);
            }, 30 * i);
        }
    } else {
        let info = "Niepoprawne argumenty, dla r spróbuj od 0 do 10 000, dla argumentu φ od -180 do 180";
        for (let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }
}


function divide() {
    let resultPar = document.getElementById("divResult");
    let calculationsPar = document.getElementById("divCalculations");

    resultPar.innerHTML = "";
    calculationsPar.innerHTML = "";

    let firstMod = parseFloat(document.getElementById("divFRInput").value);
    let secondMod = parseFloat(document.getElementById("divSRInput").value);
    let firstArg = parseFloat(document.getElementById("divFAInput").value);
    let secondArg = parseFloat(document.getElementById("divSAInput").value);

    if (checkLimits(firstMod, 0, 10000) && checkLimits(secondMod, 0, 10000) &&
        checkLimits(firstArg, -180, 180) && checkLimits(secondArg, -180, 180)) {

        let modResult = (firstMod / secondMod).toFixed(2);

        let argResult = (firstArg - secondArg) % 360;
        if (argResult > 180) {argResult -= 360};
        if (argResult < -180) {argResult += 360};

        let calculations = "(" + firstMod + " : " + secondMod + ")(cos(" + firstArg + " - " + secondArg + ") + i sin(" + firstArg + " - " + secondArg + "))";
        let result = modResult + "(cos(" + argResult.toFixed(2) + ") + i sin(" + argResult.toFixed(2) + "))";


        for (let i = 0; i < calculations.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += calculations.charAt(i);
            }, 30 * i);
        }

        for (let i = 0; i < result.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += result.charAt(i);
            }, 30 * i);
        }
    } else {
        let info = "Niepoprawne argumenty, dla r spróbuj od 0 do 10 000, dla argumentu φ od -180 do 180";
        for (let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }
}

function power() {
    let resultPar = document.getElementById("powerResult");
    let calculationsPar = document.getElementById("powerCalculations");

    resultPar.innerHTML = "";
    calculationsPar.innerHTML = "";

    let r = parseFloat(document.getElementById("powerRInput").value);
    let arg = parseFloat(document.getElementById("powerAInput").value);
    let n = parseFloat(document.getElementById("powerNInput").value);

    if (checkLimits(r, 0, 30) && checkLimits(arg, -180, 180) && checkLimits(n, 0, 8)) {

        let modResult = (Math.pow(r, n)).toFixed(2);
        let argResult = (arg * n) % 360;

        if (argResult > 180) {argResult -= 360;}
        if (argResult < -180) {argResult += 360;}

        let calculations = "(rⁿ)(cos(" + n + " × " + arg + ") + i sin(" + n + " × " + arg + "))";
        let result = modResult + "(cos(" + argResult.toFixed(2) + ") + i sin(" + argResult.toFixed(2) + "))";

        for (let i = 0; i < calculations.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += calculations.charAt(i);
            }, 30 * i);
        }

        for (let i = 0; i < result.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += result.charAt(i);
            }, 30 * i);
        }

    } else {
        let info = "Niepoprawne argumenty, dla r spróbuj od 0 do 30, dla argumentu φ od -180 do 180 i n od 0 do 8.";
        for (let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }
}
