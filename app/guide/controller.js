function GuideController($scope) {
	$scope.minhaLista = [
		'Teste',
		'Teste1',
		'Teste2',
		'Teste3',
		'Teste4',
		'Teste0',
		'Teste6'
	];

	$scope.seila = () => {
		console.log('Seila');
	};

	console.log('Adicionando5');
}

export default GuideController;