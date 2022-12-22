import React from 'react';
function App(props) {
return (
	<div>
        <h1>We are learning Default props</h1>
	<Candidate name="Bob" profession="Web Developer" age="23"></Candidate>
	<Candidate name="Aly" profession="Network Engineer" age="32" ></Candidate>
	<Candidate name="Sandy" profession="Mern stack Developer" age="26"></Candidate>
	<Candidate profession="QA tester" age="21"></Candidate>
	</div>)}
function Candidate(props) {
return (
	<div>
	<p> Name: {props.name} </p>
	<p>Profession: {props.profession}</p>
	<p>Age : {props.age} </p>
	<hr></hr>
	</div>
)
}

Candidate.defaultProps = {
name: "Laraib",
profession: "Developer",
age: "24"
}

export default App;
