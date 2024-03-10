const Worksheet = ({worksheet}) => {
	return (
		<div className="request">
			<div className="request_header">
				<h3>{worksheet.worksheet}</h3>
				<h3>Отметить заявку прочитанной</h3>
			</div>
			<div className="request_info_wrapper">
				<div className="request_info">
					<h3><span>Имя:</span> {worksheet.client_name}</h3>
					<h3><span>Фамилия:</span> {worksheet.client_surname}</h3>
					<h3><span>Номер телефона:</span> {worksheet.client_phone}</h3>
				</div>
				<div className="border"></div>
			</div>
		</div>
	)	
}

export default Worksheet