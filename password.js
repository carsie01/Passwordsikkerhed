

// Slider med tips til en god kode------------------------------------------

// hentning af html
let tips = document.querySelectorAll('.slideinfo .slider .tips');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function loadShow() {
    let stt = 0;
    tips[active].style.transform = 'none';
    tips[active].style.zIndex = 1;
    tips[active].style.filter = 'none';
    tips[active].style.opacity = 1;
// skift mod højre
    for (let i = active + 1; i < tips.length; i++) {
        stt++;
        tips[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        tips[i].style.zIndex = -stt;
        tips[i].style.filter = 'blur(5px)';
        tips[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
// skift mod venstre
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        tips[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        tips[i].style.zIndex = -stt;
        tips[i].style.filter = 'blur(5px)';
        tips[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();
// button knap mod højre 
next.onclick = function () {
    active = active + 1 < tips.length ? active + 1 : active;
    loadShow();
}
// button knap mod venstre
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}




// interaktiv historie------------------------------------------------------------
let storyIndex = 0;
// indhold til histrorie
const storyData = [
  
        {
            text: "Morten modtager en e-mail med et link til at nulstille hans adgangskode til en social mediekonto. Hvad bør han gøre?",
            choices: [
                { text: "Klik på linket og nulstil adgangskoden.", consequence: "Mortens's konto bliver hacket på grund af et phishing-angreb.", isCorrect: false },
                { text: "Ignorer e-mailen og gå direkte til det sociale medies websted for at nulstille adgangskoden.", consequence: "Morten undgår phishing-angrebet og nulstiller succesfuldt sit kodeord.", isCorrect: true }
            ]
        },
    {
        text: "Morten skal oprette en ny adgangskode. Hvilken er mest sikker?",
        choices: [
            { text: "password123", consequence: "Morten's konto bliver let hacket." , isCorrect: false},
            { text: "P@ssw0rd!", consequence: "Morten's kodeord er stærkt og sikkert.." ,isCorrect: true},
            { text: "abc123", consequence: "Morten's konto bliver let hacket.", isCorrect: false }
        ]
    },
    {
        text: "Morten vil øge sikkerheden for sine onlinekonti. Hvad skal han gøre næste?",
        choices: [
            { text: "Aktivér totrinsbekræftelse.", consequence: "Morten's konti bliver mere sikre mod uautoriseret adgang.",isCorrect: true },
            { text: "Fortsæt med kun at bruge adgangskoder til godkendelse.", consequence: "Morten's konti forbliver sårbare over for hacking.", isCorrect: false }
        ]
    },
    {
        text: "Morten modtager en pop-up-besked på et websted, der hævder, at han har vundet en pris. Hvad bør han gøre?",
        choices: [
            { text: "Klik på pop-up'en for at kræve prisen.", consequence: "Morten's computer bliver inficeret" , isCorrect: false},
            { text: "Luk pop-up'en og forlad webstedet.", consequence: "Morten undgår infektion med malware.",isCorrect: true }
        ]
    },
    {
        text: "Morten modtager en venneanmodning fra nogen, han ikke kender på sociale medier. Hvad bør han gøre?",
        choices: [
            { text: "Accepter venneanmodningen.", consequence: "Morten's personlige oplysninger kan kompromitteres af en fremmed.", isCorrect: false },
            { text: "Ignorer venneanmodningen.", consequence: "Morten's personlige oplysninger forbliver sikre.",isCorrect: true }
        ]
    },
    {
        text: "Morten modtager en e-mail fra sin bank, der beder om hans kontodetaljer. Hvad bør han gøre?",
        choices: [
            { text: "RBesvar e-mailen med sine kontodetaljer.", consequence: "Mortens bankkonto bliver hacket på grund af et phishing-forsøg.", isCorrect: false },
            { text: "Ringe til sin bank ved hjælp af det officielle telefonnummer for at verificere anmodningen.", consequence: "Morten ved at det er et phishing-forsøg, og undlader at give sine kontodetaljer væk.",isCorrect: true }
        ]
    },
    {
        text: "Morten vil sikkert bortskaffe sin gamle computer. Hvad bør han gøre?",
        choices: [
            { text: "Smid den i skraldespanden.", consequence: "Mortens personlige data forbliver tilgængelig for enhver, der finder computeren." , isCorrect: false},
            { text: "Slet harddisken og doner computeren til velgørenhed.", consequence: "Morten sikrer, at hans personlige data ikke er tilgængelig for andre.",isCorrect: true }
        ]
    },
    {
        text: "Morten vil beskytte sine onlinekonti mod uautoriseret adgang. Hvad bør han gøre?",
        choices: [
            { text: "Brug den samme adgangskode til alle konti.", consequence: "Mortens konti er sårbare over for at blive kompromitteret, hvis ét kodeord bliver brudt.", isCorrect: false },
            { text: "Brug unikke adgangskoder til hver konto.", consequence: "Mortens konti er mere sikre mod hacking forsøg." ,isCorrect: true}
        ]
    },
    {
        text: "Morten modtager en e-mail fra sin kollega med en mistænkelig vedhæftning. Hvad bør han gøre?",
        choices: [
            { text: "Åbn vedhæftningen for at se, hvad det er.", consequence: "Mortens computer bliver inficeret med malware.", isCorrect: false },
            { text: "Slet e-mailen og underret sin kollega om den mistænkelige vedhæftning.", consequence: "Morten undgår malware-infektion og beskytter sin kollegas computer.",isCorrect: true }
        ]
    },
    {
        text: "Morten vil tilgå sin onlinebankkonto fra et offentligt Wi-Fi-hotspot. Hvad bør han gøre?",
        choices: [
            { text: "Forbind til det offentlige Wi-Fi og log ind på sin konto.", consequence: "Morten kontokredentialer kan blive opsnappe af hackere på det samme netværk.", isCorrect: false },
            { text: "Brug en VPN (Virtual Private Network) til at kryptere sin forbindelse, før han logger ind.", consequence: "Morten's forbindelse er sikker, og hans kontokredentialer er beskyttet mod opsnapning." ,isCorrect: true}
        ]
    },
    
];

// next knep

    function startStory() {
        document.getElementById('story').innerHTML = '';
        displayStory();
    
        // Viser "Next" knappen når "Start Story" knappen klikkes
        document.getElementById('next-btn').style.display = 'inline-block';
    }
    


function displayStory() {
    const currentChapter = storyData[storyIndex];
    const storyDiv = document.getElementById('story');
    const paragraph = document.createElement('p');
    paragraph.textContent = currentChapter.text;
    storyDiv.appendChild(paragraph);
// tilføjelse af rigtig of forkert
    currentChapter.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-btn');
        button.onclick = () => makeChoice(choice.consequence, choice.isCorrect);
        if (choice.isCorrect) {
            button.classList.add('correct'); 
        } else {
            button.classList.add('incorrect'); 
        }
        storyDiv.appendChild(button);
    });
}

// rød og grøn
function makeChoice(consequence, isCorrect) {
    const storyDiv = document.getElementById('story');
    const paragraph = document.createElement('p');
    paragraph.textContent = `Outcome: ${consequence}`;
    storyDiv.appendChild(paragraph);

    if (isCorrect) {
        paragraph.style.color = '#E6F0D8'; 
    } else {
        paragraph.style.color = '#EE9696'; 
    }

    if (storyIndex < storyData.length - 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Næste';
        nextButton.onclick = () => {
            storyIndex++;
            displayStory();
        };
        storyDiv.appendChild(nextButton);
    } else {
        const endMessage = document.createElement('p');
        endMessage.textContent = 'Tillykke! Du har fuldført den interaktive historie.';
        storyDiv.appendChild(endMessage);
    }
}

// Test af kodeord-------------------------------------------------------------
// hentning af html

const passwordInput = document.querySelector(".kode input");
const eyeIcon = document.querySelector(".kode i");
const requirementList = document.querySelectorAll(".krav-liste li");
// Krav til kodeord 
const requirements = [
    { regex: /.{12,}/, index: 0 }, // Mindst 12 tegn
    { regex: /[0-9]/, index: 1 }, // tal
    { regex: /[a-z]/, index: 2 }, // lille bogstav
    { regex: /[^A-Za-z0-9]/, index: 3 }, // sær symbol
    { regex: /[A-Z]/, index: 4 }, // stort bogstav
]
passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // om man opfylder kravne
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});
eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});


