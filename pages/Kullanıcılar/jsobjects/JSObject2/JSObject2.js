export default {
	myVar1: [],
	myVar2: {},


	async delete_user_by_id(userId){
		console.log("çalıştı");

		delete_user_by_id.run(userId).then((response) => {

			console.log("sorgu yanıtı: ",response);
			

		}).catch((err) => {

			console.log("HAta:" ,err);
		}) 


		console.log("veri silindi");

		closeModal(userDeleteModal.name);


	},

	bulkDeleteUsers: async (user_id) => {
		// Array to store the promises from the delete operations
		const data = delete_user_by_id.run({ user_id });

		try {
			// Wait for all delete operations to complete
			const results = await Promise.all(data);
			// Optional: Handle the results, such as updating the UI or notifying success
			return results;
		} catch (error) {
			// Optional: Error handling logic
			console.error("Bulk delete operation failed", error);
			throw error;
		}
	},
}