const getTableData = async (token) => {
    try {
        const response = await fetch('http://localhost:5000/api/courses/get-users-courses', {
        method: "GET",
        headers:{
            'Authorization': "Bearer " + token,
        }
        });
        const data = await response.json();
        //console.log(data);
        if(data){
            return data;
        } else {
            return null
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getTableData;