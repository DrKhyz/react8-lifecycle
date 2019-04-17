import React, { useState, useEffect } from 'react';

const MyForm = () => {
	const [title, setTitle] = useState('');
	const [globalTitle, setGlobalTitle] = useState('');

	const handleSubmit = e => {
		setGlobalTitle(`Mon formulaire - ${title}`);
		console.log('Titre changé');
		e.preventDefault();
	};

	useEffect(() => {
		console.log('Formulaire rendu');
	});

	return (
		<div>
			<h2>{globalTitle}</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Titre : </label>
				<input type='text' id='title' onChange={e => setTitle(e.target.value)} value={title} />
				<br />
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default MyForm;
