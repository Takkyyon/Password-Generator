/*------------------------------- Configuration on every page: -------------------------------*/ 

let hoverLogo = document.getElementById('logo');
let hoverLmao = document.getElementById('navbar');

/* --- Sequence for "Password Generator" is: 0, 1, 2, 2, 3, 4, 5, 6, SPACE, 7, 8, 9, 8, 5, 1, 10, 4, 5 --- */

const passGen0 = ['p', 'P']
const passGen1 = ['a', 'A', '4', '@']
const passGen2 = ['s', 'S', '5', '$']
const passGen3 = ['w', 'W']
const passGen4 = ['o', 'O', '0']
const passGen5 = ['r', 'R']
const passGen6 = ['d', 'D']
const passGen7 = ['g', 'G']
const passGen8 = ['e', 'E', '3']
const passGen9 = ['n', 'N']
const passGen10 = ['t', 'T', '7']
const passGen11 = ['c', 'C']
const passGen12 = ['y', 'Y']
const passGen13 = ['h', 'H', '#']
const passGen14 = ['k', 'K']

function intRandomizer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function intMaxRandomizer(integer) {
    return Math.floor(Math.random() * integer);
}

// Animated Logo Configuration:

function loopLogo() {
    let hoverLogo = document.getElementById('logo')
    let sliceLogo = hoverLogo.innerHTML.split('');

    let logoRandomizer = []
    logoRandomizer.push(passGen0[intMaxRandomizer(passGen0.length)]);
    logoRandomizer.push(passGen1[intMaxRandomizer(passGen1.length)]);
    logoRandomizer.push(passGen2[intMaxRandomizer(passGen2.length)]);
    logoRandomizer.push(passGen2[intMaxRandomizer(passGen2.length)]);
    logoRandomizer.push(passGen3[intMaxRandomizer(passGen3.length)]);
    logoRandomizer.push(passGen4[intMaxRandomizer(passGen4.length)]);
    logoRandomizer.push(passGen5[intMaxRandomizer(passGen5.length)]);
    logoRandomizer.push(passGen6[intMaxRandomizer(passGen6.length)]);
    logoRandomizer.push(' ');
    logoRandomizer.push(passGen7[intMaxRandomizer(passGen7.length)]);
    logoRandomizer.push(passGen8[intMaxRandomizer(passGen8.length)]);
    logoRandomizer.push(passGen9[intMaxRandomizer(passGen9.length)]);
    logoRandomizer.push(passGen8[intMaxRandomizer(passGen8.length)]);
    logoRandomizer.push(passGen5[intMaxRandomizer(passGen5.length)]);
    logoRandomizer.push(passGen1[intMaxRandomizer(passGen1.length)]);
    logoRandomizer.push(passGen10[intMaxRandomizer(passGen10.length)]);
    logoRandomizer.push(passGen4[intMaxRandomizer(passGen4.length)]);
    logoRandomizer.push(passGen5[intMaxRandomizer(passGen5.length)]);

    for (let i = 0; i <= 17; i++) {
        setTimeout(function timer() {
            var hoverSlice = sliceLogo.pop()
            var hoverJoin = sliceLogo.join('')
            hoverLogo = document.getElementById('logo').innerHTML = hoverJoin;
        }, i * intRandomizer(180, 200));
    }

    setTimeout(() => {
        for (let i = 0; i <= 17; i++) {
            setTimeout(function timer() {
                var hoverAdd = sliceLogo.push(logoRandomizer[i])
                var hoverJoin = sliceLogo.join('')
                hoverLogo = document.getElementById('logo').innerHTML = hoverJoin;
            }, i * 50);
        }
    }, 4500)

    setTimeout(loopLogo, 8300);
}

function firstLoopException() {
    setTimeout(function timer() {
        loopLogo();
        firstLoopSwitch = 1
    }, 5000);
}

firstLoopException();

const lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] // 26 characters
const upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] // 26 characters
const integerCharacters = ['1','2','3','4','5','6','7','8','9','0'] // 10 characters
const specialCharacters = ['{','}','#',',',"'",'"','!','_','@','/','(',')',':',';','.','|','`','$','=','+','-','*','[',']','^','?','&','~','%'] // 29 characters

// Toggle bar button configuration:

const toggleBar = document.getElementById('barlinks')
const navBarLinks = document.getElementsByClassName('navlinks')[0]

toggleBar.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})

/*------------------------------- home.html -------------------------------*/

if (window.location.pathname == '/Password-Generator/home.html') {

// Toggle show password configuration:

const toggleShowPass = document.getElementById('showpassword')
const toggleHidePass = document.getElementById('hidepassword')
const passwordInput = document.querySelector('#passworduserinput')

toggleShowPass.addEventListener('click', function() {
    toggleShowPass.classList.toggle('active');
    toggleHidePass.classList.toggle('active');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'; // It turns the element type into "text" if the type of the element in question is "password", otherwise it just turns it back into "password" if the returned value is a "text".
    passwordInput.setAttribute('type', passwordType);
})

toggleHidePass.addEventListener('click', function() {
    toggleShowPass.classList.toggle('active');
    toggleHidePass.classList.toggle('active');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
})

// Dictionary Password List 'Ignis-1M.txt'. Length: 1,000,000

let passwordList;

fetch('passgen_directory/ignis-1M.txt').then(convertPasswordList).then(listPasswordList);

function convertPasswordList(rawString) {
    return rawString.text();
}

function listPasswordList(listString) {
    passwordList = listString.split('\n');
}

// Password Strength Checker Configuration

const passIndicatorBarOne = document.getElementById('passwordcheckerstrengthindicator1')
const passIndicatorBarTwo = document.getElementById('passwordcheckerstrengthindicator2')
const passIndicatorBarThree = document.getElementById('passwordcheckerstrengthindicator3')
const passIndicatorBarFour = document.getElementById('passwordcheckerstrengthindicator4')

let passEntropyStrength = 0

let passIndicatorInfo = document.getElementById('passwordindicatorinfo')
let passStrengthString = document.getElementById('passwordtextindicator')
let passStringCount = document.getElementById('passwordcheckeruserinputlength')

const checkForUpper = document.getElementById('passwordcheckforupper')
const checkForLower = document.getElementById('passwordcheckforlower')
const checkForInteger = document.getElementById('passwordcheckforinteger')
const checkForSpecial = document.getElementById('passwordcheckforspecial')

function entropyCalculator(totalEntropyString, stringLength) {
    return Math.log2(totalEntropyString ** stringLength); 
}

function passCheckIndicator() {
    setInterval(function () {
        let passCheckUserInput = document.querySelector('#passworduserinput').value
        let lowerEntropy = 0
        let upperEntropy = 0
        let integerEntropy = 0
        let specialEntropy = 0
        let lowerDictionaryPass = 0
        let upperDictionaryPass = 0
        let integerDictionaryPass = 0
        let specialDictionaryPass = 0
        let stringCount = 0
        let totalEntropyValue = 0
        if (passCheckUserInput) {
            let passUserInputEntropy = passCheckUserInput.split('')
            let passDictionaryCheck = passwordList.includes(passCheckUserInput)
            if (passDictionaryCheck) {
                for (let i = 0; i < passCheckUserInput.length; i++) {
                    let lowerInPassInput = lowerCharacters.includes(passUserInputEntropy[i])
                    let upperInPassInput = upperCharacters.includes(passUserInputEntropy[i])
                    let integerInPassInput = integerCharacters.includes(passUserInputEntropy[i])
                    let specialInPassInput = specialCharacters.includes(passUserInputEntropy[i])
                    if (lowerInPassInput) {
                        lowerDictionaryPass = 1
                    } if (upperInPassInput) {
                        upperDictionaryPass = 1
                    } if (integerInPassInput) {
                        integerDictionaryPass = 1
                    } if (specialInPassInput) {
                        specialDictionaryPass = 1
                    }
                }
                if (lowerDictionaryPass == 1) {
                    checkForLower.classList.add('active');
                } if (upperDictionaryPass == 1) {
                    checkForUpper.classList.add('active');
                } if (integerDictionaryPass == 1) {
                    checkForInteger.classList.add('active');
                } if (specialDictionaryPass == 1) {
                    checkForSpecial.classList.add('active');
                } if (lowerDictionaryPass == 0) {
                    checkForLower.classList.remove('active');
                } if (upperDictionaryPass == 0) {
                    checkForUpper.classList.remove('active');
                } if (integerDictionaryPass == 0) {
                    checkForInteger.classList.remove('active');
                } if (specialDictionaryPass == 0) {
                    checkForSpecial.classList.remove('active');
                }
                passEntropyStrength = 6.9
                passIndicatorInfo = document.getElementById('passwordindicatorinfo').innerHTML = 'Your password is <a id="passwordtextindicator">Very Weak</a>: Uh oh. Your password can be cracked easily by hackers because it is in the password dictionary list.'
                passStrengthString = document.getElementById('passwordtextindicator')
                passStrengthString.classList.add('veryweak');
                passStrengthString.classList.remove('weak');
                passStrengthString.classList.remove('medium');
                passStrengthString.classList.remove('strong');
                passIndicatorBarOne.classList.add('veryweak');
                passIndicatorBarOne.classList.remove('weak');
                passIndicatorBarTwo.classList.remove('weak');
                passIndicatorBarOne.classList.remove('medium');
                passIndicatorBarTwo.classList.remove('medium');
                passIndicatorBarThree.classList.remove('medium');
                passIndicatorBarOne.classList.remove('strong');
                passIndicatorBarTwo.classList.remove('strong');
                passIndicatorBarThree.classList.remove('strong');
                passIndicatorBarFour.classList.remove('strong');
                stringCount = passCheckUserInput.length
                passStringCount = document.getElementById('passwordcheckeruserinputlength').innerHTML = stringCount
            } else if (!passDictionaryCheck) {
                passDictionaryCheck = ''
                for (let i = 0; i < passCheckUserInput.length; i++) {
                    let lowerInPassInput = lowerCharacters.includes(passUserInputEntropy[i])
                    let upperInPassInput = upperCharacters.includes(passUserInputEntropy[i])
                    let integerInPassInput = integerCharacters.includes(passUserInputEntropy[i])
                    let specialInPassInput = specialCharacters.includes(passUserInputEntropy[i])
                    if (!lowerInPassInput && !upperInPassInput && !integerInPassInput && !specialInPassInput) {
                        specialEntropy = 1
                        stringCount += 1
                    } else if (lowerInPassInput) {
                        lowerEntropy = 1
                        stringCount += 1
                    } else if (upperInPassInput) {
                        upperEntropy = 1
                        stringCount += 1
                    } else if (integerInPassInput) {
                        integerEntropy = 1
                        stringCount += 1
                    } else if (specialInPassInput) {
                        specialEntropy = 1
                        stringCount += 1
                    }

                passStringCount = document.getElementById('passwordcheckeruserinputlength').innerHTML = stringCount
                
                }
                if (lowerEntropy == 1) {
                    checkForLower.classList.add('active');
                    totalEntropyValue += 26
                } if (upperEntropy == 1) {
                    checkForUpper.classList.add('active');
                    totalEntropyValue += 26
                } if (integerEntropy == 1) {
                    checkForInteger.classList.add('active');
                    totalEntropyValue += 10
                } if (specialEntropy == 1) {
                    checkForSpecial.classList.add('active');
                    totalEntropyValue += 29
                } if (lowerEntropy == 0) {
                    checkForLower.classList.remove('active');
                } if (upperEntropy == 0) {
                    checkForUpper.classList.remove('active');
                } if (integerEntropy == 0) {
                    checkForInteger.classList.remove('active');
                } if (specialEntropy == 0) {
                    checkForSpecial.classList.remove('active');
                }  
            }    

            passEntropyStrength = entropyCalculator(totalEntropyValue, stringCount)

            if (passEntropyStrength > 0 && passEntropyStrength <= 38.5) {
                passIndicatorInfo = document.getElementById('passwordindicatorinfo').innerHTML = 'Your password is <a id="passwordtextindicator">Very Weak</a>: Uh oh. Your password can be cracked in less than a minute or even seconds by hackers.'
                passStrengthString = document.getElementById('passwordtextindicator')
                passStrengthString.classList.add('veryweak');
                passIndicatorBarOne.classList.add('veryweak');
                passIndicatorBarOne.classList.remove('weak');
                passIndicatorBarTwo.classList.remove('weak');
                passStrengthString.classList.remove('weak');
            } else if (passEntropyStrength > 38.5 && passEntropyStrength <= 60) {
                passIndicatorInfo = document.getElementById('passwordindicatorinfo').innerHTML = 'Your password is <a id="passwordtextindicator">Weak</a>: Hmm. Your password can be cracked within a minute or a few. Hackers can  crack it faster with proper tools and rule sets.'
                passStrengthString = document.getElementById('passwordtextindicator')
                passStrengthString.classList.remove('veryweak');
                passIndicatorBarOne.classList.remove('veryweak');
                passStrengthString.classList.add('weak');
                passIndicatorBarOne.classList.add('weak');
                passIndicatorBarTwo.classList.add('weak');
                passIndicatorBarOne.classList.remove('medium');
                passIndicatorBarTwo.classList.remove('medium');
                passIndicatorBarThree.classList.remove('medium');
                passStrengthString.classList.remove('medium');
            } else if (passEntropyStrength > 60 && passEntropyStrength <= 78) {
                passIndicatorInfo = document.getElementById('passwordindicatorinfo').innerHTML = 'Your password is <a id="passwordtextindicator">Medium</a>: Okay. Your password is mediocre, although it can be cracked within at least half an hour up to a few hours.'
                passStrengthString = document.getElementById('passwordtextindicator')
                passStrengthString.classList.remove('weak');
                passIndicatorBarOne.classList.remove('weak');
                passIndicatorBarTwo.classList.remove('weak');
                passStrengthString.classList.add('medium');
                passIndicatorBarOne.classList.add('medium');
                passIndicatorBarTwo.classList.add('medium');
                passIndicatorBarThree.classList.add('medium');
                passIndicatorBarOne.classList.remove('strong');
                passIndicatorBarTwo.classList.remove('strong');
                passIndicatorBarThree.classList.remove('strong');
                passIndicatorBarFour.classList.remove('strong');
                passStrengthString.classList.remove('strong');
            } else if (passEntropyStrength > 78) {
                passIndicatorInfo = document.getElementById('passwordindicatorinfo').innerHTML = 'Your password is <a id="passwordtextindicator">Strong</a>: Nice! Your password is secure enough that hackers need at least 6 hours up to a few days or more to crack it.'
                passStrengthString = document.getElementById('passwordtextindicator')
                passStrengthString.classList.remove('medium');
                passIndicatorBarOne.classList.remove('medium');
                passIndicatorBarTwo.classList.remove('medium');
                passIndicatorBarThree.classList.remove('medium');
                passStrengthString.classList.add('strong');
                passIndicatorBarOne.classList.add('strong');
                passIndicatorBarTwo.classList.add('strong');
                passIndicatorBarThree.classList.add('strong');
                passIndicatorBarFour.classList.add('strong');
            }
        } else if (!passCheckUserInput) {
            passStringCount = document.getElementById('passwordcheckeruserinputlength').innerHTML = ''
            passIndicatorInfo = document.getElementById('passwordindicatorinfo').innerHTML = 'Type a password to determine how secure it is.<a id="passwordtextindicator"></a>'
            passStrengthString = document.getElementById('passwordtextindicator')
            checkForLower.classList.remove('active');
            checkForUpper.classList.remove('active');
            checkForInteger.classList.remove('active');
            checkForSpecial.classList.remove('active');
            passStrengthString.classList.remove('veryweak');
            passStrengthString.classList.remove('weak');
            passStrengthString.classList.remove('medium');
            passStrengthString.classList.remove('strong');
            passIndicatorBarOne.classList.remove('veryweak');
            passIndicatorBarOne.classList.remove('weak');
            passIndicatorBarTwo.classList.remove('weak');
            passIndicatorBarOne.classList.remove('medium');
            passIndicatorBarTwo.classList.remove('medium');
            passIndicatorBarThree.classList.remove('medium');
            passIndicatorBarOne.classList.remove('strong');
            passIndicatorBarTwo.classList.remove('strong');
            passIndicatorBarThree.classList.remove('strong');
            passIndicatorBarFour.classList.remove('strong');
        }
    }, 10);
}

passCheckIndicator();

// Generate Button Text Randomizer Configuration:

let generateButton = document.getElementById('generatepasswordnowbutton')

generateButton.addEventListener('mouseover', function() {
    generateButton = document.getElementById('generatepasswordnowbutton').innerHTML = '';
    let newGenerateButton = [];
    newGenerateButton.push(passGen7[intMaxRandomizer(passGen7.length)]);
    newGenerateButton.push(passGen8[intMaxRandomizer(passGen8.length)]);
    newGenerateButton.push(passGen9[intMaxRandomizer(passGen9.length)]);
    newGenerateButton.push(passGen8[intMaxRandomizer(passGen8.length)]);
    newGenerateButton.push(passGen5[intMaxRandomizer(passGen5.length)]);
    newGenerateButton.push(passGen1[intMaxRandomizer(passGen1.length)]);
    newGenerateButton.push(passGen10[intMaxRandomizer(passGen10.length)]);
    newGenerateButton.push(passGen8[intMaxRandomizer(passGen8.length)]);

    let newGenerateButtonJoin = newGenerateButton.join('');
    generateButton = document.getElementById('generatepasswordnowbutton').innerHTML = newGenerateButtonJoin;
})

generateButton.addEventListener('mouseout', function() {
    generateButton = document.getElementById('generatepasswordnowbutton').innerHTML = 'Generate'
})

} else if (window.location.pathname == '/Password-Generator/') {
    window.location.pathname = '/Password-Generator/home.html/'
}

/*------------------------------- generate.html -------------------------------*/

if (window.location.pathname == '/Password-Generator/generate.html') {

// Password Generator Output UI Configuration:

let genPassGenerateList = [];

for (let i = 0; i < lowerCharacters.length; i++) {
    genPassGenerateList.push(lowerCharacters[i]);
    genPassGenerateList.push(lowerCharacters[i]);
} for (let i = 0; i < upperCharacters.length; i++) {
    genPassGenerateList.push(upperCharacters[i]);
    genPassGenerateList.push(upperCharacters[i]);
} for (let i = 0; i < integerCharacters.length; i++) {
    genPassGenerateList.push(integerCharacters[i]);
    genPassGenerateList.push(integerCharacters[i]);
    genPassGenerateList.push(integerCharacters[i]);
    genPassGenerateList.push(integerCharacters[i]);
    genPassGenerateList.push(integerCharacters[i]);
    genPassGenerateList.push(integerCharacters[i]);
} for (let i = 0; i < specialCharacters.length; i++) {
    genPassGenerateList.push(specialCharacters[i]);
}

let genPassGenerateButton = document.getElementById('generatepassgenerate')
let genPassCopyButton = document.getElementById('generatepasscopy')

genPassGenerateButton.addEventListener('mouseover', function() {
    genPassGenerateButton = document.getElementById('generatepassgenerate').innerHTML = '';
    let newGenPassGenerate = [];
    newGenPassGenerate.push(passGen7[intMaxRandomizer(passGen7.length)]);
    newGenPassGenerate.push(passGen8[intMaxRandomizer(passGen8.length)]);
    newGenPassGenerate.push(passGen9[intMaxRandomizer(passGen9.length)]);
    newGenPassGenerate.push(passGen8[intMaxRandomizer(passGen8.length)]);
    newGenPassGenerate.push(passGen5[intMaxRandomizer(passGen5.length)]);
    newGenPassGenerate.push(passGen1[intMaxRandomizer(passGen1.length)]);
    newGenPassGenerate.push(passGen10[intMaxRandomizer(passGen10.length)]);
    newGenPassGenerate.push(passGen8[intMaxRandomizer(passGen8.length)]);

    let newGenPassGenerateJoin = newGenPassGenerate.join('');
    genPassGenerateButton = document.getElementById('generatepassgenerate').innerHTML = newGenPassGenerateJoin;
})

genPassGenerateButton.addEventListener('mouseout', function() {
    genPassGenerateButton = document.getElementById('generatepassgenerate').innerHTML = 'Generate';
})

genPassCopyButton.addEventListener('mouseover', function() {
    genPassCopyButton = document.getElementById('generatepasscopy').innerHTML = '';
    let newGenPassCopy = [];
    newGenPassCopy.push(passGen11[intMaxRandomizer(passGen11.length)]);
    newGenPassCopy.push(passGen4[intMaxRandomizer(passGen4.length)]);
    newGenPassCopy.push(passGen0[intMaxRandomizer(passGen0.length)]);
    newGenPassCopy.push(passGen12[intMaxRandomizer(passGen12.length)]);

    let newGenPassCopyJoin = newGenPassCopy.join('');
    genPassCopyButton = document.getElementById('generatepasscopy').innerHTML = newGenPassCopyJoin;
})

genPassCopyButton.addEventListener('mouseout', function() {
    genPassCopyButton = document.getElementById('generatepasscopy').innerHTML = 'Copy';
})

// Password Generator Customizer Configuration:

let genPassSlider = document.getElementById('generatepasslengthslider')
let genPassValue = document.getElementById('generatepasslengthvalue')
let genPassCustomText = document.getElementById('generatepasscustompass')

genPassValue.value = 12;
genPassSlider.value = 12;

function sliderValueBG() {
    let valuePercentage = ((genPassSlider.value - 0.5) / genPassSlider.max) * 101;
    genPassSlider.style.background = `linear-gradient(to right, rgb(25, 3, 36) ${valuePercentage}%, rgb(5, 0, 15) ${valuePercentage}%)`;
}

sliderValueBG();

genPassCustomText.addEventListener('input', function() {
    genPassSlider.value = genPassCustomText.value.length
    genPassValue.value = genPassCustomText.value.length
    if (genPassCustomText.value.length == 0) {
        genPassSlider.value = 1
        genPassValue.value = 1
        sliderValueBG();
    }
    sliderValueBG();
})

genPassSlider.addEventListener('input', function() {
    if (genPassSlider.value < genPassCustomText.value.length) {
        genPassSlider.value = genPassCustomText.value.length
    } if ((genPassSlider.value - genPassCustomText.value.length) == 1) {
        genPassPlacementSwitch = 0;
        genPassPlacement = document.getElementById('generatepasscustomplacement').innerHTML = 'At the start';
    }
    genPassValue.value = this.value;
    sliderValueBG();
})

let genPassPlacementSwitch = 0;

genPassValue.addEventListener('input', function () {
    if (genPassValue.value > 32 || genPassValue.value < 1) {
        if (genPassValue.value > 32) {
            genPassValue.value = 32;
        } if (genPassValue.value < 1) {
            genPassValue.value = 1;
        }
    } if (genPassValue.value < genPassCustomText.value.length) {
        genPassValue.value = genPassCustomText.value.length
    } if ((genPassValue.value - genPassCustomText.value.length) == 1) {
        genPassPlacementSwitch = 0;
        genPassPlacement = document.getElementById('generatepasscustomplacement').innerHTML = 'At the start';
    }
    genPassSlider.value = this.value;
    sliderValueBG();
})

const lowerCaseCustom = document.getElementsByClassName('generatepasslower')[0]
const upperCaseCustom = document.getElementsByClassName('generatepassupper')[0]
const integerCustom = document.getElementsByClassName('generatepassinteger')[0]
const specialCustom = document.getElementsByClassName('generatepassspecial')[0]
let genPassPlacement = document.getElementById('generatepasscustomplacement')

const lowerCaseCustomBox = document.getElementById('generatepasslowercheckbox')
const upperCaseCustomBox = document.getElementById('generatepassuppercheckbox')
const integerCustomBox = document.getElementById('generatepassintegercheckbox')
const specialCustomBox = document.getElementById('generatepassspecialcheckbox')

// If no checkboxed are active, one random checkbox will activate:

function randomActivateCheckbox(randomCheckboxIndex) {
    if (randomCheckboxIndex == 0) {
        lowerCaseCustom.classList.toggle('disable');
        if (lowerCaseCustom.classList.value == 'generatepasslower disable') {
            genPassGenerateList = genPassGenerateList.filter(function(lower) {
                return !lowerCharacters.includes(lower);
            })
        } if (lowerCaseCustom.classList.value == 'generatepasslower') {
            for (let i = 0; i < lowerCharacters.length; i++) {
                genPassGenerateList.push(lowerCharacters[i]);
                genPassGenerateList.push(lowerCharacters[i]);
            }
        }
    } if (randomCheckboxIndex == 1) {
        upperCaseCustom.classList.toggle('disable');
        if (upperCaseCustom.classList.value == 'generatepassupper disable') {
            genPassGenerateList = genPassGenerateList.filter(function(upper) {
                return !upperCharacters.includes(upper);
            })
        } if (upperCaseCustom.classList.value == 'generatepassupper') {
            for (let i = 0; i < upperCharacters.length; i++) {
                genPassGenerateList.push(upperCharacters[i]);
                genPassGenerateList.push(upperCharacters[i]);
            }
        }
    } if (randomCheckboxIndex == 2) {
        integerCustom.classList.toggle('disable');
        if (integerCustom.classList.value == 'generatepassinteger disable') {
            genPassGenerateList = genPassGenerateList.filter(function(integer) {
                return !integerCharacters.includes(integer);
            })
        } if (integerCustom.classList.value == 'generatepassinteger') {
            for (let i = 0; i < integerCharacters.length; i++) {
                genPassGenerateList.push(integerCharacters[i]);
                genPassGenerateList.push(integerCharacters[i]);
                genPassGenerateList.push(integerCharacters[i]);
                genPassGenerateList.push(integerCharacters[i]);
                genPassGenerateList.push(integerCharacters[i]);
                genPassGenerateList.push(integerCharacters[i]);
            }
        }
    } if (randomCheckboxIndex == 3) {
        specialCustom.classList.toggle('disable');
        if (specialCustom.classList.value == 'generatepassspecial disable') {
            genPassGenerateList = genPassGenerateList.filter(function(special) {
                return !specialCharacters.includes(special);
            })
        } if (specialCustom.classList.value == 'generatepassspecial') {
            for (let i = 0; i < specialCharacters.length; i++) {
                genPassGenerateList.push(specialCharacters[i]);
            }
        }
    }
}

// Checkbox for password generator customization:

lowerCaseCustomBox.addEventListener('click', function() {
    lowerCaseCustom.classList.toggle('disable');
    if (lowerCaseCustom.classList.value == 'generatepasslower disable') {
        genPassGenerateList = genPassGenerateList.filter(function(lower) {
            return !lowerCharacters.includes(lower);
        })
    } if (lowerCaseCustom.classList.value == 'generatepasslower') {
        for (let i = 0; i < lowerCharacters.length; i++) {
            genPassGenerateList.push(lowerCharacters[i]);
            genPassGenerateList.push(lowerCharacters[i]);
        }
    } if (genPassGenerateList.length == 0) {
        randomActivateCheckbox(intMaxRandomizer(4));
    }
})

upperCaseCustomBox.addEventListener('click', function() {
    upperCaseCustom.classList.toggle('disable');
    if (upperCaseCustom.classList.value == 'generatepassupper disable') {
        genPassGenerateList = genPassGenerateList.filter(function(upper) {
            return !upperCharacters.includes(upper);
        })
    } if (upperCaseCustom.classList.value == 'generatepassupper') {
        for (let i = 0; i < upperCharacters.length; i++) {
            genPassGenerateList.push(upperCharacters[i]);
            genPassGenerateList.push(upperCharacters[i]);
        }
    } if (genPassGenerateList.length == 0) {
        randomActivateCheckbox(intMaxRandomizer(4));
    }
})

integerCustomBox.addEventListener('click', function() {
    integerCustom.classList.toggle('disable');
    if (integerCustom.classList.value == 'generatepassinteger disable') {
        genPassGenerateList = genPassGenerateList.filter(function(integer) {
            return !integerCharacters.includes(integer);
        })
    } if (integerCustom.classList.value == 'generatepassinteger') {
        for (let i = 0; i < integerCharacters.length; i++) {
            genPassGenerateList.push(integerCharacters[i]);
            genPassGenerateList.push(integerCharacters[i]);
            genPassGenerateList.push(integerCharacters[i]);
            genPassGenerateList.push(integerCharacters[i]);
            genPassGenerateList.push(integerCharacters[i]);
            genPassGenerateList.push(integerCharacters[i]);
        }
    } if (genPassGenerateList.length == 0) {
        randomActivateCheckbox(intMaxRandomizer(4));
    }
})

specialCustomBox.addEventListener('click', function() {
    specialCustom.classList.toggle('disable');
    if (specialCustom.classList.value == 'generatepassspecial disable') {
        genPassGenerateList = genPassGenerateList.filter(function(special) {
            return !specialCharacters.includes(special);
        })
    } if (specialCustom.classList.value == 'generatepassspecial') {
        for (let i = 0; i < specialCharacters.length; i++) {
            genPassGenerateList.push(specialCharacters[i]);
        }
    } if (genPassGenerateList.length == 0) {
        randomActivateCheckbox(intMaxRandomizer(4));
    }
})

genPassPlacement.addEventListener('click', function() {
    genPassPlacementSwitch += 1
    if (genPassPlacementSwitch == 0) {
        genPassPlacement = document.getElementById('generatepasscustomplacement').innerHTML = 'At the start';
    } if (genPassPlacementSwitch == 1) {
        genPassPlacement = document.getElementById('generatepasscustomplacement').innerHTML = 'At the end';
    } if (genPassPlacementSwitch >= 2) {
        if ((genPassSlider.value - genPassCustomText.value.length) == 1) {
            genPassPlacementSwitch = 0;
            genPassPlacement = document.getElementById('generatepasscustomplacement').innerHTML = 'At the start';
        } if (genPassSlider.value - genPassCustomText.value.length == 0) {
            genPassPlacement = document.getElementById('generatepasscustomplacement').innerHTML = 'In the middle';
            genPassPlacementSwitch = -1
        } if ((genPassSlider.value - genPassCustomText.value.length) > 1) {
            genPassPlacement = document.getElementById('generatepasscustomplacement').innerHTML = 'In the middle';
            genPassPlacementSwitch = -1
        }
    }
})

// Password Generator Process Configuration:

let genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML

let genPassGenerateEnable = 1;

function createPassword() {
    let valueLengthRemainder = genPassSlider.value - genPassCustomText.value.length
    let generatedPassword = []
    let genPassCustomSplit = genPassCustomText.value.split('');
    if (valueLengthRemainder > 0 && genPassCustomText.value != '') {
        if (genPassPlacementSwitch == 0) {
            for (let i = 0; i < genPassCustomText.value.length; i++) {
                setTimeout(function timer() {
                    generatedPassword.push(genPassCustomSplit[i]);
                    genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = generatedPassword.join('')
                    if (i == (genPassCustomText.value.length - 1)) {
                        for (let x = 0; x < valueLengthRemainder; x++) {
                            setTimeout(function timer() {
                                generatedPassword.push(genPassGenerateList[intMaxRandomizer(genPassGenerateList.length)]);
                                genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = generatedPassword.join('')
                                if (x == (valueLengthRemainder - 1)) {
                                    genPassGenerateEnable = 1
                                    console.log(`Generated a new password: ${generatedPassword.join('')}`);
                                }
                            }, x * 50);
                        }
                    }
                }, i * 50);
            }
        } if (genPassPlacementSwitch == 1) {
            for (let i = 0; i < valueLengthRemainder; i++) {
                setTimeout(function timer() {
                    generatedPassword.push(genPassGenerateList[intMaxRandomizer(genPassGenerateList.length)]);
                    genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = generatedPassword.join('')
                    if (i == (valueLengthRemainder - 1)) {
                        for (let x = 0; x < genPassCustomText.value.length; x++) {
                            setTimeout(function timer() {
                                generatedPassword.push(genPassCustomSplit[x]);
                                genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = generatedPassword.join('')
                                if (x == (genPassCustomText.value.length - 1)) {
                                    genPassGenerateEnable = 1
                                    console.log(`Generated a new password: ${generatedPassword.join('')}`);
                                }
                            }, x * 50);
                        }
                    }
                }, i * 50);
            }
        } if (genPassPlacementSwitch == -1) {
            let placementRandomizer = intRandomizer(1, valueLengthRemainder - 1);
            for (let i = 0; i < valueLengthRemainder; i++) {
                generatedPassword.push(genPassGenerateList[intMaxRandomizer(genPassGenerateList.length)]);
            }
            generatedPassword.join('');
            generatedPassword.splice(placementRandomizer, 0, genPassCustomText.value);
            let firstStageGenPass = generatedPassword.join('');
            let finalStageGenPass = firstStageGenPass.split('');
            if (finalStageGenPass.length == genPassSlider.value) {
                generatedPassword = []
                for (let i = 0; i < genPassSlider.value; i++) {
                    setTimeout(function timer() {
                        generatedPassword.push(finalStageGenPass[i]);
                        genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = generatedPassword.join('')
                        if (i == (genPassSlider.value - 1)) {
                            genPassGenerateEnable = 1
                            console.log(`Generated a new password: ${generatedPassword.join('')}`);
                        }
                    }, i * 50);
                }
            }
        }
    } if (valueLengthRemainder == 0) {
        for (let i = 0; i < genPassCustomText.value.length; i++) {
            setTimeout(function timer() {
                generatedPassword.push(genPassCustomSplit[i]);
                genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = generatedPassword.join('')
                if (i == (genPassSlider.value - 1)) {
                    genPassGenerateEnable = 1
                    console.log(`Generated a new password: ${generatedPassword.join('')}`);
                }
            }, i * 50);
        }
    } if (genPassCustomText.value == '') {
        for (let i = 0; i < genPassSlider.value; i++) {
            setTimeout(function timer() {
                generatedPassword.push(genPassGenerateList[intMaxRandomizer(genPassGenerateList.length)]);
                genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = generatedPassword.join('')
                if (i == (genPassSlider.value - 1)) {
                    genPassGenerateEnable = 1
                    console.log(`Generated a new password: ${generatedPassword.join('')}`);
                }
            }, i * 50);
        }
    }
}

function generatePassword() {
    genPassGenerateEnable = 0;
    let genPassOutputSplit = genPassOutputText.split('')
    if (genPassOutputText.length >= 16) {
        for (let i = 0; i < genPassOutputText.length; i++) {
            setTimeout(function timer() {
                genPassOutputSplit.pop(genPassOutputSplit[i]);
                genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = genPassOutputSplit.join('');
                if (genPassOutputText.length == 0) {
                    setTimeout(function timer() {
                        createPassword();
                    }, 500);
                }
            }, i * intRandomizer(90, 100));
        }
    } if (genPassOutputText.length < 16) {
        for (let i = 0; i < genPassOutputText.length; i++) {
            setTimeout(function timer() {
                genPassOutputSplit.pop(genPassOutputSplit[i]);
                genPassOutputText = document.getElementById('generatepassoutputtext').innerHTML = genPassOutputSplit.join('');
                if (genPassOutputText.length == 0) {
                    setTimeout(function timer() {
                        createPassword();
                    }, 500);
                }
            }, i * intRandomizer(180, 200));
        }
    } if (genPassOutputText.length == 0) {
        createPassword();
    }
}

genPassGenerateButton.addEventListener('click', function() {
    if (genPassGenerateEnable == 1) {
        generatePassword();
    }
})

genPassCopyButton.addEventListener('click', function() {
    console.log(`Copied "${genPassOutputText}" to clipboard.`)
    navigator.clipboard.writeText(genPassOutputText);
    document.getElementById('generatepasscopy').innerHTML = 'Copied Successfully!';
    setTimeout(function timer() {
        document.getElementById('generatepasscopy').innerHTML = 'Copy';
    }, 1500);
})

// Check Button Text Randomizer Configuration:

let checkButton = document.getElementById('checkpasswordnowbutton')

checkButton.addEventListener('mouseover', function() {
    checkButton = document.getElementById('checkpasswordnowbutton').innerHTML = '';
    let newCheckButton = [];
    newCheckButton.push(passGen11[intMaxRandomizer(passGen11.length)]);
    newCheckButton.push(passGen13[intMaxRandomizer(passGen13.length)]);
    newCheckButton.push(passGen8[intMaxRandomizer(passGen8.length)]);
    newCheckButton.push(passGen11[intMaxRandomizer(passGen11.length)]);
    newCheckButton.push(passGen14[intMaxRandomizer(passGen14.length)]);

    let newCheckButtonJoin = newCheckButton.join('');
    checkButton = document.getElementById('checkpasswordnowbutton').innerHTML = newCheckButtonJoin;
})

checkButton.addEventListener('mouseout', function() {
    checkButton = document.getElementById('checkpasswordnowbutton').innerHTML = 'Check';
})

}

/*------------------------------- cyberhygiene.html -------------------------------*/

if (window.location.pathname == '/Password-Generator/cyberhygiene.html') {
    
    // Generate Button Text Randomizer Configuration:

let generateButton = document.getElementById('generatepasswordnowbutton')

generateButton.addEventListener('mouseover', function() {
    generateButton = document.getElementById('generatepasswordnowbutton').innerHTML = '';
    let newGenerateButton = [];
    newGenerateButton.push(passGen7[intMaxRandomizer(passGen7.length)]);
    newGenerateButton.push(passGen8[intMaxRandomizer(passGen8.length)]);
    newGenerateButton.push(passGen9[intMaxRandomizer(passGen9.length)]);
    newGenerateButton.push(passGen8[intMaxRandomizer(passGen8.length)]);
    newGenerateButton.push(passGen5[intMaxRandomizer(passGen5.length)]);
    newGenerateButton.push(passGen1[intMaxRandomizer(passGen1.length)]);
    newGenerateButton.push(passGen10[intMaxRandomizer(passGen10.length)]);
    newGenerateButton.push(passGen8[intMaxRandomizer(passGen8.length)]);

    let newGenerateButtonJoin = newGenerateButton.join('');
    generateButton = document.getElementById('generatepasswordnowbutton').innerHTML = newGenerateButtonJoin;
})

generateButton.addEventListener('mouseout', function() {
    generateButton = document.getElementById('generatepasswordnowbutton').innerHTML = 'Generate'
})

}