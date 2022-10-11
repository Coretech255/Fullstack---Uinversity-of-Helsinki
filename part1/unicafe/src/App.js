import { useState } from "react"

const StatisticLine = ({text, value}) => {
	return(
		<>
			<td>{text}</td>  
			<td>{value}</td>
		</>
	)
}

const Button = ({text, handleIncrement}) => {
	return (
		<button onClick={handleIncrement}>{text}</button>
	)
}

const Statistics = ({good, neutral, bad}) => {
	const all = good + neutral + bad;
	const average = (good - bad) / all;
	const percentage = ((good / all)  *  100) + '%';

	if (all != 0){
		return(
			<div>
				<table>
					<tbody>
					<tr><StatisticLine text="good" value={good}/></tr>
					<tr><StatisticLine text="neutral" value={neutral}/></tr>
					<tr><StatisticLine text="bad" value={bad}/></tr>
					<tr><StatisticLine text="All" value={all} /></tr>
					<tr><StatisticLine text="Average" value={average} /></tr>
					<tr><StatisticLine text="Percentage" value={percentage}/></tr>
					</tbody>
				</table>

			</div>
		)
	}else return (<p>No Feedback given</p>)


}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const increaseGoodByOne = () => setGood(good + 1);
	const increaseNeutralByOne = () => setNeutral(neutral + 1);
	const increaseBadByOne = () => setBad(bad + 1);


	return(
		<div>
			<h1>Give us your feedback </h1>
			<i>by clicking on your desired button below</i>
			<br />
			<br />

			<Button handleIncrement={increaseGoodByOne} text="Good"/>
			<Button handleIncrement={increaseNeutralByOne} text="Neutral" />
			<Button handleIncrement={increaseBadByOne} text="Bad" />

			<br />
			<h3>Statistics</h3>
			<Statistics 
				good={good}
				neutral={neutral}
				bad={bad}
			/>

		</div>
	)
}

export default App;
