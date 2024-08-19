//your JS code here. If required.

const input = document.getElementById("display");
const buttons =  document.querySelectorAll(".buttons button");

buttons.forEach((btn)=>{

	btn.addEventListener("click",()=>{
		const btnId = btn.id;
		
		// console.log(btnId);

		if(btnId === 'C'){
			input.value = "";
		}else if(btnId === "back"){
			input.value = input.value.slice(0,-1);
		}else if(btnId === "equal"){
			try{
			input.value = eval(input.value);
			}catch{
				input.value = "Error"
			}
		}else{
			input.value += btn.textContent;
		}
	})
})