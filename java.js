const questions = [
    {
        question: "Q1/20: Ketika Anda bekerja dalam tim, peran apa yang paling Anda sukai?",
        answers: {
            A: {
                text: "Memimpin tim dan mengembangkan strategi pemasaran yang kreatif.",
                category: "ADVERTISING",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            B: {
                text: "Berpartisipasi dalam proses kreatif animasi dan desain karakter.",
                category: "ANIMATION",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            C: {
                text: "Menggambar cerita komik yang menghibur dan menginspirasi pembaca.",
                category: "Comic",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            D: {
                text: "Meliput berita dan peristiwa terkini untuk disajikan dalam format digital.",
                category: "Digital Journalism",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            }
        }
    },
    {
        question: "Pertanyaan: Bidang mana yang paling menarik bagi Anda dalam industri media?",
        answers: {
            A: {
                text: "Esports dan gaming",
                category: "Esports",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            B: {
                text: "Dunia fashion dan gaya hidup",
                category: "Fashion & Lifestyle",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            C: {
                text: "Produksi film, fotografi, dan videografi ",
                category: "Film, Photography & Videography",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            D: {
                text: "Pengembangan permainan dan game design ",
                category: "Game Development",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            }
        }
    },
    {
        question: "Pertanyaan: Apa yang paling Anda minati dalam teknologi kreatif?",
        answers: {
            A: {
                text: "Interaksi manusia dan komputer (HCI)",
                category: "HCI & Creative Technology",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            B: {
                text: "Konversi media dan pengolahan konten",
                category: "Media Conversion",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            C: {
                text: "Menciptakan dan mengedit musik",
                category: "Music & Audio",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            D: {
                text: "Memahami tren dan analisis media",
                category: "OTT & Media Intelligence",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            }
        }
    },
    {
        question: "Pertanyaan: Manakah yang lebih Anda nikmati: membuat konten visual atau audio?",
        answers: {
            A: {
                text: "Visual - Menampilkan ide melalui gambar dan video",
                category: "Film, Photography & Videography",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            B: {
                text: "Audio - Mengekspresikan diri melalui suara dan musik",
                category: "Music & Audio",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            C: {
                text: "Saya suka keduanya sama-sama",
                category: "G - Visual & Audio - Representasi gabungan",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            D: {
                text: "Saya tidak memiliki preferensi khusus",
                category: "Tidak ada representasi khusus",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            }
        }
    },
    {
        question: "Pertanyaan: Apakah Anda tertarik pada produksi konten media digital?",
        answers: {
            A: {
                text: "Ya, saya tertarik dalam menghasilkan konten yang menarik dan informatif",
                category: "Digital Journalism",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            B: {
                text: "Tidak begitu, saya lebih suka berfokus pada pengembangan produk digital",
                category: "Game Development",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            C: {
                text: "Saya belum yakin, saya ingin lebih mempelajari berbagai bidang terlebih dahulu",
                category: "Tidak ada representasi khusus",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            },
            D: {
                text: "Saya tidak tertarik pada media digital",
                category: "Tidak ada representasi khusus",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 },
            }
        }
    }
] 

            
const resultOptions = {
    A: {
        category: "ADVERTISING",
        image: "advertising.jpg",
        representation: "A"
    },
    B: {
        category: "ANIMATION",
        image: "animation.jpg",
        representation: "B"
    },
    C: {
        category: "Comic",
        image: "comic.jpg",
        representation: "C"
    },
    D: {
        category: "Digital Journalism",
        image: "digital_journalism.jpg",
        representation: "D"
    },
    E: {
        category: "Esports",
        image: "esports.jpg",
        representation: "E"
    },
    F: {
        category: "Fashion & Lifestyle",
        image: "fashion_lifestyle.jpg",
        representation: "F"
    },
    G: {
        category: "Film, Photography & Videography",
        image: "film_photography_videography.jpg",
        representation: "G"
    },
    H: {
        category: "Game Development",
        image: "game_development.jpg",
        representation: "H"
    },
    I: {
        category: "HCI & Creative Technology",
        image: "hci_creative_technology.jpg",
        representation: "I"
    },
    J: {
        category: "Media Conversion",
        image: "media_conversion.jpg",
        representation: "J"
    },
    K: {
        category: "Music & Audio",
        image: "music_audio.jpg",
        representation: "K"
    },
    L: {
        category: "OTT & Media Intelligence",
        image: "ott_media_intelligence.jpg",
        representation: "L"
    }
  };

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}
var answeredQuestions = 0;
var totalQuestions = questions.length;


//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];
       // Hitung total jawaban yang telah dijawab
       answeredQuestions++;

       // Hitung persentase progres
       var progressPercentage = (answeredQuestions / totalQuestions) * 100;
   
       // Update lebar progres bar
       var progressBarValue = document.getElementById("progress-bar-value");
       progressBarValue.style.width = progressPercentage + "%";
   
       // Lanjutkan dengan logika untuk menambahkan skor dan melanjutkan ke pertanyaan berikutnya
       // ...
    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here
    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...




 //show result
//show result
function showResult() {
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    let topCategory = "";
    let maxScore = 0;

    // Loop through userAnswers to find the category with the highest score
    for (const category in userAnswers) {
        if (userAnswers[category] > maxScore) {
            maxScore = userAnswers[category];
            topCategory = category;
        }
    }

    // Display the main interest of the user based on representation
    const categoryData = resultOptions[topCategory];
    if (categoryData) {
        resultTextContainer.innerHTML = `Congratulations! Your main interest is in: ${categoryData.category}`;
        resultImage.src = "images/" + categoryData.image;
        resultImage.alt = `${categoryData.category} Image`;
    } else {
        resultTextContainer.innerHTML = "Sorry, couldn't determine your main interest.";
        resultImage.src = ""; // Or provide a default image path
        resultImage.alt = "No Image";
    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}

// Dalam fungsi showResult():


// Menampilkan hasil peminatan pengguna
const categoryData = resultOptions[topCategory];
if (categoryData) {
    resultTextContainer.innerHTML = `Peminatan utama Anda adalah: ${categoryData.category}`;
    resultImage.src = "images/" + categoryData.image;
    resultImage.alt = `${categoryData.category} Image`;
} else {
    resultTextContainer.innerHTML = "Maaf, tidak dapat menentukan peminatan utama Anda.";
    resultImage.src = ""; // Atau berikan path gambar default
    resultImage.alt = "No Image";
}


// Tentukan jumlah total pertanyaan
var totalQuestions = 5; // Misalnya, total ada 10 pertanyaan

// Hitung berapa banyak pertanyaan yang telah dijawab
var answeredQuestions = 0;

// Saat permainan dimulai
function startGame() {
    document.querySelector('.progress-bar-container').style.display = 'block'; // Mengubah display menjadi block
}

// Saat permainan selesai
function endGame() {
    document.querySelector('.progress-bar-container').style.display = 'none';
}

z

//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();

