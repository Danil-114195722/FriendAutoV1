import { useSelector } from 'react-redux'
import './deleteService.css'
import ServiceList from './ServiceList/ServiceList'
import axios from 'axios'

const DeleteService = ({categorizedServices}) => {
	const selectedService = useSelector((state) => state.admin.selectedService)
	const delService = () => {
		console.log(selectedService.slice(1))
		axios.delete('http://188.225.36.185/api/service/delete-service/', {
			data: {id: selectedService.slice(1)},
			headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
		})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.error('Ошибка при удалении услуги', error)
		})
	}
	return (
		<div className="deleteService">
			<div className="addService_title">
				<h2><span>И</span>ли удалите услугу</h2>
				<h3>Выберите услугу соответствующей категории</h3>
			</div>
			<div className="deleteService_field">
				{categorizedServices.map(category => <ServiceList key={category.category_id} category={category} />)}
			</div>
			<input type="submit" value='Удалить' onClick={() => delService()}/>
		</div>
	)
}

export default DeleteService