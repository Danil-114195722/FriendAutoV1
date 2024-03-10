import { useDispatch, useSelector } from 'react-redux'
import './serviceSignUpModal.css'
import { toggleModal } from '../../store/modal/modal.slice'
import axios from 'axios'

const ServiceSignUpModal = () => {
	const dispatch = useDispatch()
	const selectedServiceName = useSelector((state) => state.modal.serviceName);
	const serviceId = useSelector((state) => state.modal.currentServiceId)

	const addServiceRecord = (e) => {
		e.preventDefault()
		const formData = {
			service: serviceId,
			car_brand: e.target.car_brand.value,
			car_number: e.target.car_number.value,
			client_phone: e.target.phone.value,
		}
		axios.post('http://188.225.36.185/api/service-record/add-service-record/', formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		// TODO: нужно сделать какое то обозначение успешной записи и не успешной
		// .then(response => {
		// 	console.log(response)
		// })
		// .catch(error => {
		// 	console.error('Ошибка при отправке формы', error)
		// })
	}
	
	return (
		<div className="modal">
			<div className="modal_header">
				<div className="modal_title">
					<h2><span>З</span>апись</h2>
					<h3>{selectedServiceName}</h3>
				</div>
				<svg style={{cursor: "pointer"}} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(toggleModal()) }>
					<path d="M40 20L20 40M20 20L40 40" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			<form action="" className='modal_form' onSubmit={(e) => addServiceRecord(e)}>
				<div className="inputs">
					<input type="text" placeholder='Номер телефона' name='phone'/>
					<input type="text" placeholder='Марка машины' name='car_brand'/>
					<input type="text" placeholder='Номер машины' name='car_number'/>
				</div>
				<input type="submit" value='Подтвердить'/>
			</form>
		</div>
	)
}

export default ServiceSignUpModal