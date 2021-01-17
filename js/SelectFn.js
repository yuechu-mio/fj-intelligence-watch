function SelectFn(data,content,selectImg,selectItem){
	let ul = document.createElement('ul');
	selectItem.appendChild(ul);
	for(let i = 0; i < data.length; i++){
		let li = document.createElement('li');
		li.setAttribute('data-value',data[i].value);
		li.innerText = data[i].name;
		ul.appendChild(li);
	}
	/**
	 * 点击下拉箭头
	 */
	selectImg.onclick = function () {
		console.log(selectItem.style.display);
		if(selectItem.style.display == 'none' || selectItem.style.display == ''){
			selectItem.style.display = 'block';
		}else{
			selectItem.style.display = 'none';
		}

	}

	content.onclick = function () {
		if(selectItem.style.display == 'none' || selectItem.style.display == ''){
			selectItem.style.display = 'block';
		}else{
			selectItem.style.display = 'none';
		}
	}

	let lis = selectItem.getElementsByTagName('li');
	for(let i = 0; i < lis.length; i++){
		lis[i].onclick = function () {
			console.log(this.innerHTML,this.getAttribute('data-value'));
			content.innerText = this.innerHTML;
			selectItem.style.display = 'none';
		}
	}
}
