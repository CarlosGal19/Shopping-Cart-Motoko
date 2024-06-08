import { test_motoko_backend } from 'declarations/test-motoko-backend';
import { games } from '../mocks/data.js';
import useAdd from '../hooks/useAdd.jsx';

export default function Games() {

    const { myGames, setMyGames } = useAdd();
 
    const handleClick = (e) => {
        const gameId = e.target.id;
        const gameAdd = { ...games[gameId - 1], amount: 1 }; // Add amount property
        setMyGames((prevGames) => {
            // Check if the game is already in the list
            const existingGame = prevGames.find(game => game.id === gameAdd.id);
            if (existingGame) {
                // If the game is already in the list, update the amount
                return prevGames.map(game => 
                    game.id === gameAdd.id ? { ...game, amount: game.amount + 1 } : game
                );
            } else {
                // If the game is not in the list, add it to the list
                return [...prevGames, gameAdd];
            }
        });
    }

    return (
        <div className="w-3/4 mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Games List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    games.map(element => (
                        <div key={element.id} className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">{element.name}</h2>
                            {/* <img src={element.photo} alt={element.name} className="w-full h-48 object-cover rounded-md mb-4" /> */}
                            <p className="text-gray-600">{element.year}</p>
                            <div className='flex space-x-8'>
                                <button className='rounded-xl bg-indigo-600 font-bold text-white py-2 px-4' id={element.id} onClick={handleClick}>Add</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
