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

    if(scrollPos > 1350)
    {
        let elements = document.getElementsByName("add");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 2200)
    {
        let elements = document.getElementsByName("secondBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 2800)
    {
        let elements = document.getElementsByName("sub");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 3600)
    {
        let elements = document.getElementsByName("thirdBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 4300)
    {
        let elements = document.getElementsByName("multi");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 5000)
    {
        let elements = document.getElementsByName("fourthBox");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 5600)
    {
        let elements = document.getElementsByName("div");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 7000)
    {
        let elements = document.getElementsByName("divF");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 7700)
    {
        let elements = document.getElementsByName("mod");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }
    
    if(scrollPos > 8500)
    {
        let elements = document.getElementsByName("sqr");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 9200)
    {
        let elements = document.getElementsByName("thrd");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 9800)
    {
        let elements = document.getElementsByName("wpt");

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

function checkLimits(firstNumb, min, max) {
    return firstNumb > min && firstNumb < max;
}

function getSign(number) {   
    return (number < 0 ? ' - ' : ' + ');
}

function changeNumber(number) {
    return Math.abs(number); 
}

function add() {
    let firstInput = document.getElementById("addInput1").value;
    let secondInput = document.getElementById("addInput2").value;
    let calculationsPar = document.getElementById("addCalculations");
    let resultPar = document.getElementById("addResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    const regex = /^([-+]?\d*\.?\d+)\s*([-+]\s*\d*\.?\d+)i$/;
    const firstMatch = firstInput.match(regex);
    const secondMatch = secondInput.match(regex);

    if(firstMatch && secondMatch) {
        let firstReal = parseFloat(firstMatch[1]);
        let firstImaginary = parseFloat(firstMatch[2].replace(/\s/g, ''));
        let secondReal = parseFloat(secondMatch[1]);
        let secondImaginary = parseFloat(secondMatch[2].replace(/\s/g, ''));

        if(!(checkLimits(firstReal, -1000000, 1000000) && checkLimits(secondReal, -1000000, 1000000) && checkLimits(firstImaginary,-1000000, 1000000) && checkLimits(secondImaginary, -1000000, 1000000))) {
            let info = "Niepoprawne liczby. Spróbuj większych od -1 000 000 i mniejszych od 1 000 000";
            for(let i = 0; i < info.length; i++) {
                setTimeout(() => {
                    calculationsPar.innerHTML += info.charAt(i);
                }, 20 * i);
            }
            return;
        }

        let realSum = firstReal + secondReal;
        let imaginarySum = firstImaginary + secondImaginary;

        let calculations = "(" + firstReal + getSign(secondReal) + changeNumber(secondReal) + ") + "
            + "(" + firstImaginary + getSign(secondImaginary) + changeNumber(secondImaginary) + ")i";

        let result = "(" + realSum + getSign(imaginarySum) + changeNumber(imaginarySum) + "i)";

        
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
    else {
        let info = "Niepoprawna forma liczby. Użyj a + bi lub a - bi";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
}

function subtract()
{
    let firstInput = document.getElementById("subInput1").value;
    let secondInput = document.getElementById("subInput2").value;
    let calculationsPar = document.getElementById("subCalculations");
    let resultPar = document.getElementById("subResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    const regex = /^([-+]?\d*\.?\d+)\s*([-+]\s*\d*\.?\d+)i$/;
    const firstMatch = firstInput.match(regex);
    const secondMatch = secondInput.match(regex);

    if(firstMatch && secondMatch) {
        let firstReal = parseFloat(firstMatch[1]);
        let firstImaginary = parseFloat(firstMatch[2].replace(/\s/g, ''));
        let secondReal = parseFloat(secondMatch[1]);
        let secondImaginary = parseFloat(secondMatch[2].replace(/\s/g, ''));

        if(!(checkLimits(firstReal, -1000000, 1000000) && checkLimits(secondReal, -1000000, 1000000) && checkLimits(firstImaginary, -1000000, 1000000) && checkLimits(secondImaginary, -1000000, 1000000))) {
            let info = "Niepoprawne liczby. Spróbuj większych od -1 000 000 i mniejszych od 1 000 000";
            for(let i = 0; i < info.length; i++) {
                setTimeout(() => {
                    calculationsPar.innerHTML += info.charAt(i);
                }, 20 * i);
            }
            return;
        }

        let realSub = firstReal - secondReal;
        let imaginarySub = firstImaginary - secondImaginary;

        let calculations = "(" + firstReal + getSign(-secondReal) + changeNumber(secondReal) + ") + "
        + "(" + firstImaginary + getSign(-secondImaginary) + changeNumber(secondImaginary) + ")i";

        let result = "(" + realSub + getSign(imaginarySub) + changeNumber(imaginarySub) + "i)";

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
    else {
        let info = "Niepoprawna forma liczby. Użyj a + bi lub a - bi";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
}

function multiply()
{
    let firstInput = document.getElementById("multiInput1").value;
    let secondInput = document.getElementById("multiInput2").value;
    let calculationsPar = document.getElementById("multiCalculations");
    let resultPar = document.getElementById("multiResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    const regex = /^([-+]?\d*\.?\d+)\s*([-+]\s*\d*\.?\d+)i$/;
    const firstMatch = firstInput.match(regex);
    const secondMatch = secondInput.match(regex);

    if(firstMatch && secondMatch) {
        let firstReal = parseFloat(firstMatch[1]);
        let firstImaginary = parseFloat(firstMatch[2].replace(/\s/g, ''));
        let secondReal = parseFloat(secondMatch[1]);
        let secondImaginary = parseFloat(secondMatch[2].replace(/\s/g, ''));

        if(!(checkLimits(firstReal, -10000, 10000) && checkLimits(secondReal, -10000, 10000) && checkLimits(firstImaginary, -10000, 10000) && checkLimits(secondImaginary, -10000, 10000))) {
            let info = "Niepoprawne liczby. Spróbuj większych od -10 000 i mniejszych od 10 000";
            for(let i = 0; i < info.length; i++) {
                setTimeout(() => {
                    calculationsPar.innerHTML += info.charAt(i);
                }, 20 * i);
            }
            return;
        }

        let realPart = (firstReal * secondReal) - (firstImaginary * secondImaginary);
        let imaginaryPart = (firstReal * secondImaginary) + (firstImaginary * secondReal);

        let calculations = "(" + firstReal + " × " + secondReal + ") + "
        + "(" + firstImaginary + " × " + secondImaginary + ")i";

        let result = "(" + realPart + getSign(imaginaryPart) + changeNumber(imaginaryPart) + "i)";

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
    else {
        let info = "Niepoprawna forma liczby. Użyj a + bi lub a - bi";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
}

function divide() {
    let firstInput = document.getElementById("divInput1").value;
    let secondInput = document.getElementById("divInput2").value;
    let calculationsPar = document.getElementById("divCalculations");
    let resultPar = document.getElementById("divResult");

    resultPar.innerHTML = "";

    const regex = /^([-+]?\d*\.?\d+)\s*([-+]\s*\d*\.?\d+)i$/;
    const firstMatch = firstInput.match(regex);
    const secondMatch = secondInput.match(regex);

    if (firstMatch && secondMatch) {
        let firstReal = parseFloat(firstMatch[1]);
        let firstImaginary = parseFloat(firstMatch[2].replace(/\s/g, ''));
        let secondReal = parseFloat(secondMatch[1]);
        let secondImaginary = parseFloat(secondMatch[2].replace(/\s/g, ''));

        if (!(checkLimits(firstReal, -10000, 10000) && checkLimits(secondReal, -10000, 10000) && checkLimits(firstImaginary, -10000, 10000) && checkLimits(secondImaginary, -10000, 10000))) {
            let info = "Niepoprawne liczby. Spróbuj większych od -10 000 i mniejszych od 10 000";
            for (let i = 0; i < info.length; i++) {
                setTimeout(() => {
                    calculationsPar.innerHTML += info.charAt(i);
                }, 20 * i);
            }
            return;
        }

        let denominator = (secondReal * secondReal) + (secondImaginary * secondImaginary);
        
        let realPart = (firstReal * secondReal) + (firstImaginary * secondImaginary);
        let imaginaryPart = (firstImaginary * secondReal) - (firstReal * secondImaginary);

        realPart /= denominator;
        imaginaryPart /= denominator;

        let result = "(" + realPart.toFixed(2) + getSign(imaginaryPart) + changeNumber(imaginaryPart.toFixed(2)) + "i)";

        for (let i = 0; i < result.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += result.charAt(i);
            }, 30 * i);
        }
    }
    else {
        let info = "Niepoprawna forma liczby. Użyj a + bi lub a - bi";
        for (let i = 0; i < info.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
}