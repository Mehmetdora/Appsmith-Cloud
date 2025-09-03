export default {
	myVar1: [],
	myVar2: {},
	user_list : [],
	setUserList (user_list) {
		UserTable.setData(user_list);
	},
	getAllUsers(){
		this.user_list = users_all.data;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
	
	// Burada istediğin arka planda çalışacak kodlarını yaz
	
	
}