import React, { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [cards, setCards] = useState([
    { id: 1, value: "Pick Me 💯", isCorrect: false, isFlipped: false },
    { id: 2, value: "Pick Me 💯", isCorrect: false, isFlipped: false },
    { id: 3, value: "Pick Me 💯", isCorrect: true, isFlipped: false },
    // { id: 4, value: "Pick Me 💯", isCorrect: false, isFlipped: false },
    // { id: 5, value: "Pick Me 💯", isCorrect: true, isFlipped: false },
  ]);
  const [canPlayAgain, setCanPlayAgain] = useState(true);

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setGreeting("Good morning");
    } else if (currentTime < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }

    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    setCards(shuffledCards);
  };

  const handleCardClick = (cardIndex) => {
    const updatedCards = [...cards];

    if (!canPlayAgain || updatedCards[cardIndex].isFlipped) {
      return;
    }

    updatedCards[cardIndex].isFlipped = true;
    setCards(updatedCards);

    if (cards[cardIndex].isCorrect) {
      setAttempts(3); // Reset attempts to 3 on winning
      shuffleCards(); // Reset the game board
    } else {
      setAttempts(attempts - 1);
      setTimeout(() => {
        updatedCards[cardIndex].isFlipped = false;
        setCards(updatedCards);
      }, 1000);
    }

    setTimeout(() => {
      if (!cards[cardIndex].isCorrect) {
        shuffleCards();
        setCanPlayAgain(true);
      }
    }, 2000);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Card Game
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Let's have fun🤣</p>
      </div>
      <div className="text-center">
        <p>Remaining Attempts: {attempts}</p>
      </div>

      <div className="relative flex min-h-screen overflow-hidden">
        <div className="p-6 w-full">
          <div className="flex space-x-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`mx-auto max-w-2xl px-2 lg:px-2 cursor-pointer`}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`${
                    card.isFlipped
                      ? card.isCorrect
                        ? "bg-black"
                        : "bg-red-500"
                      : "bg-white"
                  } px-2 lg:px-2 mx-auto mt-16 max-w-2xl rounded-3xl cursor-pointer ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none`}
                >
                  <div className="p-6 sm:p-10 lg:flex-auto">
                    <h3
                      className={`${
                        card.isFlipped
                        ? card.isCorrect
                          ? "text-white"
                          : "text-gray-900"
                        : "bg-white"
                      } text-2xl font-bold tracking-tight`}
                    >
                      {card.isFlipped
                        ? card.isCorrect
                          ? "You Win!"
                          : "You Lose"
                        : card.value}
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      There are higher chances of winning if you pick me
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
