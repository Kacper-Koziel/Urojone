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
        let elements = document.getElementsByName("parameters");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 3000)
    {
        let elements = document.getElementsByName("parK");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 3700)
    {
        let elements = document.getElementsByName("angles");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 4400)
    {
        let elements = document.getElementsByName("calc");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 5100)
    {
        let elements = document.getElementsByName("sinCos");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 5800)
    {
        let elements = document.getElementsByName("root");

        elements.forEach((element, index) => {
            this.setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("shown");
            }, index * 300);
        });

    }

    if(scrollPos > 6500)
    {
        let elements = document.getElementsByName("rootT");

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
    return firstNumb >= min && firstNumb <= max;
}

function getSign(number) {   
    return (number < 0 ? ' - ' : ' + ');
}

function calculateParameterK() {
    let n = document.getElementById("parKInput").value;
    let calculationsPar = document.getElementById("parKCalculations");
    let resultPar = document.getElementById("parKResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    let parameters = [];

    if (checkLimits(n, 1, 8)) {
        for (let i = 0; i < n; i++) {
            parameters.push(i);
        }

        let calculations = "k należy do: {";
        for (let i = 0; i < parameters.length; i++) {
            calculations += parameters[i];
            if (i < parameters.length - 1) {
                calculations += ", ";
            }
        }
        calculations += "}";

        for (let i = 0; i < calculations.length; i++) {
            setTimeout(() => {
                calculationsPar.innerHTML += calculations.charAt(i);
            }, 20 * i);
        }
    } else {
        let info = "Niepoprawny parametr n. Spróbuj większych od 1 i mniejszych od 8";
        for (let i = 0; i < info.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
    }
}

document.getElementById("parKInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        calculateParameterK();
    }
});

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

document.getElementById("sinCosInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        calculateSinCos();
    }
});

function root() {
    let r = parseFloat(document.getElementById("rootRInput").value);
    let angle = parseFloat(document.getElementById("rootAInput").value);
    let n = parseInt(document.getElementById("rootNInput").value);
    
    let calculationsPar = document.getElementById("rootCalculations");
    let resultPar = document.getElementById("rootResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    if (!checkLimits(r, 0, 1000) || !checkLimits(angle, -180, 180) || !checkLimits(n, 1, 8)) {
        let info = "Podaj wartości r od 0 do 1000, argument: -180 do 180, n: 1 do 8";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }

    let angleRad = angle * Math.PI / 180;

    let roots = [];
    for (let k = 0; k < n; k++) {
        let angle = (angleRad + 2 * Math.PI * k) / n;
        let modulus = Math.pow(r, 1 / n);
        
        let realPart = modulus * Math.cos(angle);
        let imaginaryPart = modulus * Math.sin(angle);

        let root = "w_" + (k + 1) + " = (" + realPart.toFixed(3) + (imaginaryPart >= 0 ? " + " : " - ") + Math.abs(imaginaryPart).toFixed(3) + "i)    ";
        roots.push(root);
    }

    let timeoutCounter = 0;

    for (let i = 0; i < roots.length; i++) {
        let root = roots[i];
        for (let j = 0; j < roots.at(i).length; j++) {
            setTimeout(() => {
                if(i >= roots.length / 2)
                {
                    resultPar.innerHTML += root.charAt(j);
                }
                else
                {
                    calculationsPar.innerHTML += root.charAt(j);
                }
            }, 20 * timeoutCounter);
            timeoutCounter++;
        }
        
    }
}

document.getElementById("rootRInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        root();
    }
});

document.getElementById("rootAInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        root();
    }
});

document.getElementById("rootNInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        root();
    }
});

function rootT() {
    let r = parseFloat(document.getElementById("rootTRInput").value);
    let angle = parseFloat(document.getElementById("rootTAInput").value);
    let n = parseInt(document.getElementById("rootTNInput").value);
    
    let calculationsPar = document.getElementById("rootTCalculations");
    let resultPar = document.getElementById("rootTResult");

    calculationsPar.innerHTML = "";
    resultPar.innerHTML = "";

    if (!checkLimits(r, 0, 1000) || !checkLimits(angle, -180, 180) || !checkLimits(n, 1, 4)) {
        let info = "Podaj wartości r od 0 do 1000, argument: -180 do 180, n: 1 do 4";
        for(let i = 0; i < info.length; i++) {
            setTimeout(() => {
                resultPar.innerHTML += info.charAt(i);
            }, 20 * i);
        }
        return;
    }

    let angleRad = angle * Math.PI / 180;

    let roots = [];
    for (let k = 0; k < n; k++) {
        let angle = (angleRad + 2 * Math.PI * k) / n;

        let modulus = Math.pow(r, 1 / n);
        
        let root = "w_" + (k + 1) + " = " + modulus.toFixed(2) + " * (cos(" + (angle * 180 / Math.PI).toFixed(2) + "°) + i * sin(" + (angle * 180 / Math.PI).toFixed(2) + "°)) ";
        roots.push(root);
    }

    let timeoutCounter = 0;

    for (let i = 0; i < roots.length; i++) {
        let root = roots[i];
        for (let j = 0; j < roots.at(i).length; j++) {
            setTimeout(() => {
                if(i >= roots.length / 2)
                {
                    resultPar.innerHTML += root.charAt(j);
                }
                else
                {
                    calculationsPar.innerHTML += root.charAt(j);
                }
            }, 20 * timeoutCounter);
            timeoutCounter++;
        }
        
    }
}

document.getElementById("rootTRInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        rootT();
    }
});

document.getElementById("rootTAInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        rootT();
    }
});

document.getElementById("rootTNInput").addEventListener("keydown", function (event) {

    if (event.key === "Enter") 
    {
        event.preventDefault();
        rootT();
    }
});