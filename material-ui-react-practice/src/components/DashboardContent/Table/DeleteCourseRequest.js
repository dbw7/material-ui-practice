const DeleteCourseRequest = async (CRN, email, token) => {
    try {
        const response = await fetch('http://localhost:5000/api/courses/remove-user-course', {
        method: "POST",
        body: new URLSearchParams({
            email: email,
            CRN: CRN
        }),
        headers:{
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        });
        //console.log(response);
        const data = await response.text();
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export default DeleteCourseRequest;