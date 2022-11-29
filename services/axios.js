import axios from 'axios';

export const GetPlatos = async (Plato) => {
    console.log(Plato)
    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f876f842ee604610b4ca54f02051426a&query=${Plato}`,{})
    .then(async(res) => {
        console.log(res.data.results)
        return res.data.results   //devuelve un array de platos
    })
    .catch(() => {
      throw "error" //propagar error
    });
};

export const getPlatoByID = async (id) => {
    console.log(id);
    return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f876f842ee604610b4ca54f02051426a`,{})  
    .then(function(res){
        return res.data  //devuelve el plato
    })
    .catch(() => {
        throw "Error" //propagar error
    });
};

export const enterLogin = async (user) => {
    console.log(user)
    return axios.post(`http://challenge-react.alkemy.org`, {
        ...user
      })
      .then(() => {
        return true   //si encuentra usuario devuelve true porque no hay un token que funcione aunque tambien se podria devolver el token para que se guarde en el context
      })
      .catch(() => {
        throw "error" //propagar error
      });
  };

