import './delVacansy.css'
import VacansiesList from './vacansiesList/VacansiesList'
import axios from 'axios'
import { useSelector } from 'react-redux'

const DelVacansy = ({setVacansiesList, isLoading, vacansiesList}) => {
	const selectedService = useSelector((state) => state.admin.selectedService)
	
	const delVacansy = () => {
		if(selectedService) {
			axios.delete('http://188.225.36.185/api/vacancy/delete-vacancy/', {data: {id: selectedService.slice(1)}, headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
			.then(() => {
				document.querySelector('vac_del_inp').style.border = '2px solid green'
				setVacansiesList(prev => prev.filter(el => el.id != selectedService.slice(1)))
			})
			.catch((error) => {
				document.querySelector('vac_del_inp').style.border = '2px solid red'
				console.log(document.querySelector('vac_del_inp'))
				console.error('Ошибка при удалении услуги', error)
			})
		}
		else{
			document.querySelector('vac_del_inp').style.border = '2px solid red'
		}
	}

	return (
		<div className="deleteService">
			<div className="addService_title">
				<h2><span>У</span>даление вакансии</h2>
				<h3>Укажите вакансию, которую хотите удалить</h3>
			</div>
			<div className="deleteVacansy_field">
				<div className="vacansies_list">
					{isLoading ? (
						<h3>Загрузка</h3>
					): (
						<>
						{vacansiesList.length > 0 ? (
							vacansiesList.map((vacansy, index) => <VacansiesList key={vacansy.id} setVacansiesList={setVacansiesList} vacansy={vacansy} vacansiesList={vacansiesList} index={index}/>)
						): (
							<h3>Вакансий нет</h3>
						)}
						</>
					)}
				</div>
			</div>
			<input className='vac_del_inp' type="submit" value='Удалить' onClick={() => delVacansy()}/>
		</div>
	)
}

export default DelVacansy