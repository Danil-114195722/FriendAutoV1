import axios from 'axios';
import './addVacansy.css'

const AddVacansy = () => {
	
	const addVacansy = (e) => {
		e.preventDefault()
		const formData = new FormData();
		formData.append('title', e.target.vacansy_name.value);
		formData.append('photo', e.target.fileUpload.files[0]);

		axios.post('http://188.225.36.185/api/vacancy/add-vacancy/', formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.error('Ошибка при отправке фото', error)
		})
	}

	return (
		<div className="addService">
			<div className="addService_title">
				<h2><span>Д</span>обавьте вакансию</h2>
				<h3>Введите её название и добавьте картинку</h3>
			</div>
			<form action="" className='admin_vacansy_form' onSubmit={(e) => addVacansy(e)}>
				<input name='vacansy_name' type="text" placeholder='Название вакансии'/>
				<input type="file" id='fileUpload'/>
				<label htmlFor='fileUpload' className='fileUpload'>Добавить картинку</label>
				<input type="submit" value="Добавить"/>
			</form>
		</div>
	)
}

export default AddVacansy