import axios from 'axios';

const EMPLOYEE_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeByUsername(employeeUsername){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeUsername);
    }

    updateEmployee(employee, employeeUsername){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeUsername, employee);
    }

    deleteEmployee(employeeUsername){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeUsername);
    }
}

export default new EmployeeService()