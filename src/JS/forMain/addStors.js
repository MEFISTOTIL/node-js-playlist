
const addStors = function () {
	function isValidUrl(url) {
		var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
		return objRE.test(url);
	}

	async function checkAlert() {
		const quotes = 'Data/linkStore.json';
		const res = await fetch(quotes);
		const data = await res.json();
		const name = document.querySelector('.name');
		const link = document.querySelector('.link');
		let searchCopy = data.find(item => {
			if (item.Name == name.value) {
				return true;
			}
		})
		if (name.value == '' || name.value == undefined) {
			alert('Введите имя');
		}
		else if (link.value == '' || link.value == undefined) {
			alert('Введите ссылку');
		}
		else if (isValidUrl(link.value) == false) {
			alert('Ссылка введена некоректно')
		}
		else if (searchCopy) {
			alert('Магазин с таким именем уже существует')
		}

	}
	checkAlert()
}
export default addStors;