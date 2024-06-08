import { test_motoko_backend } from 'declarations/test-motoko-backend';
import useAdd from '../hooks/useAdd.jsx';

export default function Cart() {

    const { myGames, setMyGames } = useAdd();

    const handleClick = (e) => {
        const gameId = Number(e.target.id); // Convertir id a número
        setMyGames((prevGames) => {
            return prevGames.filter(game => game.id !== gameId);
        });
    };

    return (
        <div className="w-1/4 p-6 mx-auto bg-gray-100 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Cart</h1>
            <div className="space-y-4">
                {myGames.length > 0 ? (
                    myGames.map(game => (
                        <div key={game.id} className="bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-lg font-semibold">{game.name}</h2>
                            <p className="text-gray-600">{game.year}</p>
                            <p className="text-gray-800 font-bold">Amount: {game.amount}</p>
                            <button 
                                id={game.id} 
                                className='bg-red-700 font-bold px-6 py-3 rounded-lg text-white mt-2'
                                onClick={handleClick}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
}
