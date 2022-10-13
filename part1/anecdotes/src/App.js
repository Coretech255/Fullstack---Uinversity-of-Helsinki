import { useState } from "react"

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selected, setSelected] = useState(0);
    const [votes, setVote] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0});
    const [anecdoteIndexWithTopVote, setAnecdoteIndexWithTopVote] = useState(0)


    const getRandomNum = (max) => Math.floor(Math.random() * max);

    const setAnectodesIndex = () => {
        const randomNum = getRandomNum(7);
        setSelected(randomNum);
    }

    //add vote
    const addVote = () => {
        const newVote = {
            ...votes,
            [`${selected}`] : ++votes[selected]
        };
        //console.log(newVote)
        const q = anectodeWithMostVotes(newVote)
        setAnecdoteIndexWithTopVote(q)
        //console.log(q)
        setVote(newVote)
        
    }

    const anectodeWithMostVotes = (q) => {
        const maxVote = (voteObj) => Object.keys(voteObj)
        .reduce((max, min) => (voteObj[max] > voteObj[min]) ? max : min)

        return maxVote(q)
    }


	return(
		<div>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>

            <Button onClick={addVote} text="vote" />
            <Button onClick={setAnectodesIndex} text="next anectode" />

            <h1>Anectode with most vote</h1>
            <p>{anecdotes[anecdoteIndexWithTopVote]}</p>
            <p>has {votes[anecdoteIndexWithTopVote]}</p>
		</div>
	)
}

export default App;
