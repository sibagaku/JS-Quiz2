const pokemonQuiz = [
    {
        question: "600族は？",
        numbers: [
            "ガブリアス",
            "オンバーン",
            "リーフィア",
            "コイキング"
        ],
        correct: "ガブリアス"
    }, {
        question: "ひこうタイプは？",
        numbers: [
            "ラティオス",
            "ギャラドス",
            "リザード",
            "キュレム"
        ],
        correct: "ギャラドス"
    }, {
        question: "悪の組織のボスの名前は？",
        numbers: [
            "マサキ",
            "サカキ",
            "シルバー",
            "ミュウツー"
        ],
        correct: "サカキ"
    }, {
        question: "イーブイの進化は何種類？",
        numbers: [
            "5種類",
            "6種類",
            "7種類",
            "8種類"
        ],
        correct: "8種類"
    }
];

const quizLength = pokemonQuiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");

const setupQuiz = () => {
    //問題文
    document.getElementById("question").textContent = pokemonQuiz[quizIndex].question;
    
    //ボタンテキスト
    let buttonIndex = 0; 
    let buttonLength = $button.length
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = pokemonQuiz[quizIndex].numbers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();

//答え合わせ
const answer = (e) => {
    if (pokemonQuiz[quizIndex].correct === e.target.textContent) {
        alert("正解");
        score++;
    } else {
        alert("不正解");
    };

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        alert("終了! あなたの正解数は" + score + "/" + quizLength + "です！");
        
        if (score === 4) {
            alert("ポケモンマスター！！");
        } else if (score === 3) {
            alert("おしい！あと１問！");
        } else if (score === 2) {
            alert("まだまだポケモンについて知れる事ばかり！");
        } else　if (score === 1) {
            alert("さぁ、ポケモンと旅に出よう！！");
        } else {
            alert("オーキド博士～");
        }
    }
};


let handle = 0;

while (handle < $button.length) {
    $button[handle].addEventListener("click", (e) => {
        answer(e);
    });
    handle++;
};
