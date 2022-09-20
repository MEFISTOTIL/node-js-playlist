//Фунцкция читает JSON и выводит список магазинов
const getStors = async function () {
	const quotes = 'Data/linkStore.json';
	const res = await fetch(quotes);
	const data = await res.json();
	const storList = document.querySelector('.stor-list')
	for (let i = 0; i < data.length; i++) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		storList.append(li);
		li.append(a);
		a.textContent = data[i].Name;
		a.setAttribute('href', data[i].Link)
		a.setAttribute('target', "blank")
	}
}

export default getStors;



