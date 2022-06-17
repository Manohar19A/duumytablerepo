import axios from "axios";



const Url = axios.create({


    // baseURL: 'http://65.1.40.113:6065'
    baseURL: 'http://localhost:8989'


});

export default Url; 