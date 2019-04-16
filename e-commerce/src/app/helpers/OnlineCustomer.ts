export class OnlineCustomer {
    get get(){
        if (sessionStorage.getItem("ONLINECUSTOMER"))
      return JSON.parse(sessionStorage.getItem("ONLINECUSTOMER"));
    else
      return null
    }
}
