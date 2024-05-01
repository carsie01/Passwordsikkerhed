// Slider med tips til en god kode

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



// Test af kodeord
// hentning af html

const passwordInput = document.querySelector(".kode input");
const eyeIcon = document.querySelector(".kode i");
const requirementList = document.querySelectorAll(".krav-liste li");
// Krav til kodeordet 
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0 }, // Mindst 8 tegn
    { regex: /[0-9]/, index: 1 }, // Mindst et tal
    { regex: /[a-z]/, index: 2 }, // Mindst et lille bogstav
    { regex: /[^A-Za-z0-9]/, index: 3 }, // Mindst et symbol
    { regex: /[A-Z]/, index: 4 }, // Mindst et stort bogstav
]
passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        // Updating class and icon of requirement item if requirement matched or not
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
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

// interaktiv historie
let storyIndex = 0;

const storyData = [
  
        {
            text: "Alex receives an email with a link to reset his password for a social media account. What should he do?",
            choices: [
                { text: "Click the link and reset the password.", consequence: "Alex's account gets hacked due to a phishing attack.", isCorrect: false },
                { text: "Ignore the email and go directly to the social media website to reset the password.", consequence: "Alex avoids the phishing attack and successfully resets his password.", isCorrect: true }
            ]
        },
        // Fortsæt med at tilføje flere kapitler og valgmuligheder

    
    {
        text: "Alex receives an email with a link to reset his password for a social media account. What should he do?",
        choices: [
            { text: "Click the link and reset the password.", consequence: "Alex's account gets hacked due to a phishing attack.", isCorrect: false },
            { text: "Ignore the email and go directly to the social media website to reset the password.", consequence: "Alex avoids the phishing attack and successfully resets his password." ,isCorrect: true}
        ]
    },
    {
        text: "Alex needs to create a new password. Which one is the most secure?",
        choices: [
            { text: "password123", consequence: "Alex's account gets hacked easily." , isCorrect: false},
            { text: "P@ssw0rd!", consequence: "Alex's password is strong and secure." ,isCorrect: true},
            { text: "abc123", consequence: "Alex's account gets hacked easily.", isCorrect: false }
        ]
    },
    {
        text: "Alex wants to enhance the security of his online accounts. What should he do next?",
        choices: [
            { text: "Enable two-factor authentication.", consequence: "Alex's accounts become more secure against unauthorized access.",isCorrect: true },
            { text: "Keep using only passwords for authentication.", consequence: "Alex's accounts remain vulnerable to hacking.", isCorrect: false }
        ]
    },
    {
        text: "Alex receives a pop-up message on a website claiming he has won a prize. What should he do?",
        choices: [
            { text: "Click the pop-up to claim the prize.", consequence: "Alex's computer gets infected with malware." , isCorrect: false},
            { text: "Close the pop-up and leave the website.", consequence: "Alex avoids malware infection.",isCorrect: true }
        ]
    },
    {
        text: "Alex receives a friend request from someone he doesn't know on social media. What should he do?",
        choices: [
            { text: "Accept the friend request.", consequence: "Alex's personal information may be compromised by a stranger.", isCorrect: false },
            { text: "Ignore the friend request.", consequence: "Alex's personal information remains secure.",isCorrect: true }
        ]
    },
    {
        text: "Alex receives an email from his bank asking for his account details. What should he do?",
        choices: [
            { text: "Reply to the email with his account details.", consequence: "Alex's bank account gets hacked due to a phishing attempt.", isCorrect: false },
            { text: "Call his bank using the official phone number to verify the request.", consequence: "Alex confirms it's a phishing attempt and avoids giving away his account details.",isCorrect: true }
        ]
    },
    {
        text: "Alex wants to securely dispose of his old computer. What should he do?",
        choices: [
            { text: "Throw it in the trash.", consequence: "Alex's personal data remains accessible to anyone who finds the computer." , isCorrect: false},
            { text: "Wipe the hard drive and donate the computer to a charity.", consequence: "Alex ensures his personal data is not accessible to others.",isCorrect: true }
        ]
    },
    {
        text: "Alex wants to protect his online accounts from unauthorized access. What should he do?",
        choices: [
            { text: "Use the same password for all accounts.", consequence: "Alex's accounts are vulnerable to being compromised if one password is breached.", isCorrect: false },
            { text: "Use unique passwords for each account.", consequence: "Alex's accounts are more secure against hacking attempts." ,isCorrect: true}
        ]
    },
    {
        text: "Alex receives an email from his colleague with a suspicious attachment. What should he do?",
        choices: [
            { text: "Open the attachment to see what it is.", consequence: "Alex's computer gets infected with malware.", isCorrect: false },
            { text: "Delete the email and notify his colleague about the suspicious attachment.", consequence: "Alex avoids malware infection and protects his colleague's computer.",isCorrect: true }
        ]
    },
    {
        text: "Alex wants to access his online banking account from a public Wi-Fi hotspot. What should he do?",
        choices: [
            { text: "Connect to the public Wi-Fi and log in to his account.", consequence: "Alex's account credentials may be intercepted by hackers on the same network.", isCorrect: false },
            { text: "Use a VPN (Virtual Private Network) to encrypt his connection before logging in.", consequence: "Alex's connection is secure, and his account credentials are protected from interception." ,isCorrect: true}
        ]
    },
    
];


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

    currentChapter.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-btn');
        button.onclick = () => makeChoice(choice.consequence, choice.isCorrect);
        if (choice.isCorrect) {
            button.classList.add('correct'); // Tilføj klassen 'correct' for det rigtige valg
        } else {
            button.classList.add('incorrect'); // Tilføj klassen 'incorrect' for det forkerte valg
        }
        storyDiv.appendChild(button);
    });
}


function makeChoice(consequence, isCorrect) {
    const storyDiv = document.getElementById('story');
    const paragraph = document.createElement('p');
    paragraph.textContent = `Outcome: ${consequence}`;
    storyDiv.appendChild(paragraph);

    if (isCorrect) {
        paragraph.style.color = '#4CAF50'; // Grøn farve for korrekt svar
    } else {
        paragraph.style.color = '#F44336'; // Rød farve for forkert svar
    }

    if (storyIndex < storyData.length - 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.onclick = () => {
            storyIndex++;
            displayStory();
        };
        storyDiv.appendChild(nextButton);
    } else {
        const endMessage = document.createElement('p');
        endMessage.textContent = 'Congratulations! You have completed the interactive story.';
        storyDiv.appendChild(endMessage);
    }
}

