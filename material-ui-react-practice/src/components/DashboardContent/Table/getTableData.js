const getTableData = async (token) => {
    try {
        
        const response = await fetch('http://localhost:5000/api/courses/get-users-courses', {
        method: "GET",
        headers:{
            'Authorization': "Bearer " + token,
        }
        });
        if(response.status === 401){
            console.log("here");
            return "Expired";
        }
        const data = await response.json();
        //console.log(data);
        if(data){
            return data;
        } else {
            return null
        }
    } catch (error) {
        console.log("getTableData 17", error);
        return null;
    }
}

export default getTableData;