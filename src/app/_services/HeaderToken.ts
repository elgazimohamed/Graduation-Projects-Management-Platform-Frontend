import { HttpHeaders } from '@angular/common/http';

const token = localStorage.getItem('jwtToken');
const fulltoken = 'Bearer ' + token;
const httpHeader = {
  headers: new HttpHeaders({
    Authorization: fulltoken,
  }),
};

export default httpHeader;
