const SubmitCourseRequest = async (courseInfo, email, token) => {
    try {
        const response = await fetch('http://localhost:5000/api/courses/submit-course', {
        method: "POST",
        body: new URLSearchParams({
            email: email,
            subject: courseInfo.subject,
            courseNumber: courseInfo.courseNumber,
            CRN: courseInfo.CRN
        }),
        headers:{
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        });
        if(response.status === 401){
            return "Expired";
        }
        //console.log(response);
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export default SubmitCourseRequest;