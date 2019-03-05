import axios from "axios";

export default axios.create({
  // make sure baseURL is correct capitalization
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6417da756474a465cbac06a48b37cd828b0cd134ce84aea103f7872539b4e8d2"
  }
});

/*

6417da756474a465cbac06a48b37cd828b0cd134ce84aea103f7872539b4e8d2 - Access Key
bfd560afb28a70bc76cbcd7f6b58ac7fcaae190e2019dabde3d4bb1335185077 - Secret Key
https://api.unsplash.com/ - api url

*/
