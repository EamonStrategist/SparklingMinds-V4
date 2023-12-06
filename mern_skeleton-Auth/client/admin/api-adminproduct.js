let apiURL = "http://localhost:3000";

const create = async (product) => {
    try {
      let response = await fetch(apiURL + "/admin/api/products/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const remove = async (params) => {
    try {
      let response = await fetch(apiURL + "/admin/api/products/delete", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //Authorization: "Bearer " + credentials.t,
          body: JSON.stringify(params),
        },
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  export{create,remove};