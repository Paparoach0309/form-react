import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Modal from './Modal.jsx';

const App = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [firstNameDirty, setFirstNameDirty] = useState(false);
	const [lastNameDirty, setLastNameDirty] = useState(false);
	const [firstNameError, setFirstNameError] = useState('Заполните Имя');
	const [lastNameError, setLastNameError] = useState('Заполните Фамилию');
	const [formValid, setFormValid] = useState(false);
    const [modalActive, setModalActive] = useState(true);

	useEffect( () => {
		if (firstNameError || lastNameError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [firstNameError, lastNameError]);

	const firstNameHandler = (e) => {
		setFirstName(e.target.value);
		if (e.target.value.length < 2 || e.target.value.length >30) {
			setFirstNameError('Некорректное значение');
		} else {
			setFirstNameError('');
		}
	}

	const lastNameHandler = (e) => {
		setLastName(e.target.value);
		if (e.target.value.length < 2 || e.target.value.length >30) {
			setLastNameError('Некорректное значение');
		} else {
			setLastNameError('');
		}
	}

	const handlerBlur = (e) => {
		switch (e.target.name) {
			case 'firstName':
				setFirstNameDirty(true);
				break;
			case 'lastName':
				setLastNameDirty(true);
				break;
				default: ;
		}
	};

	return (
		<div className="App">
			<form onSubmit={(e) => { e.preventDefault(); setModalActive(true) }}>
				{(firstNameDirty && firstNameError) && <div style={{color:'red'}}>{firstNameError}</div>}
				<input onChange={e => firstNameHandler(e)} value={firstName} onBlur={e =>handlerBlur(e)} name='firstName' type='text' placeholder='Введите Ваше имя'/>
				{(lastNameDirty && lastNameError) && <div style={{color:'red'}}>{lastNameError}</div>}
				<input onChange={e => lastNameHandler(e)} value={lastName} onBlur={e =>handlerBlur(e)} name='lastName' type='text' placeholder='Введите Вашу фамилию'/>
				<button type='submit' disabled={!formValid}>Готово</button>
			</form>
			<Modal active={modalActive} setActive={setModalActive} first={firstName} last={lastName}/>
		</div>
	);
}

export default App;