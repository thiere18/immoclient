import React, {useState }from 'react'

export default function Login() {
  const [username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(username)

}
    return (
      <section className="py-5 bg-gray ">  
    <div className="container">
      <div className="row">
          <div className="col">
            <h1 className="display-1 text-center">Gss</h1>
        </div>
          </div>
          <div className="row ">
            <div className="col-md-6 my-3  height">
              <div className="card card-body bg-dark">
                <div className="card-title text-center text-white">
                  <h2 className="text-capitalize">S'inscrire</h2>
                </div>
                {/* end of title */}
                <form onSubmit={handleSubmit}>
                  {/* Nom d'utilisateur */}
                  <div className="input-group my-3">
               
                    <input className="form-control form-control-lg outline-danger " 
                      placeholder="Nom d'utilisateur"
                      type="text" name="username"
                      value={username}
                      onChange={(e) =>(setUsername(e.target.value))}
                    />
                  </div>
                  {/* mot de passe */}
                  <div className="input-group my-3">
         
                    <input className="form-control form-control-lg outline-danger "
                      type="password" 
                      name='username'
                      placeholder="Email"
                      value={password}
                      onChange={(e) =>(setPassword(e.target.value))}

                    />
                  </div>
                  <div className="input-group my-3">

                    <input className="form-control form-control-lg outline-danger "
                      type="password" 
                      name='username'
                      value={password}
                      placeholder='Mot de passe'
                      onChange={(e) =>(setPassword(e.target.value))}

                    />
                  </div>
                  <div className="input-group my-3">

                    <input className="form-control form-control-lg outline-danger "
                      type="password" 
                      name='username'
                      value={password}
                      onChange={(e) =>(setPassword(e.target.value))}
                      placeholder="Confirmez Mot de passe"
                    />
                  </div>
                  <button type="submit"
                    className="btn btn-outline-success btn-block text-uppercase"
                  >Inscription</button>
                </form>
                <p class="text-white mt-3 text-center">Deja un compte connectez vous a cotes</p>
              </div>
            </div>
            <div className="col-md-6 my-3 height">
              <div className="card card-body bg-dark">
                <div className="card-title text-center text-white">
                  <h2 className="text-capitalize">Se connecter</h2>
                </div>
                {/* end of title */}
                <form onSubmit={handleSubmit}>
                  {/* Nom d'utilisateur */}
                  <div className="input-group my-3">
                    <input className="form-control form-control-lg outline-danger "
                      type="text" name="username"
                      value={username}
                      placeholder="Nom d'utilisateur"
                      onChange={(e) =>(setUsername(e.target.value))}
                    />
                  </div>
                  {/* mot de passe */}
                  <div className="input-group my-3 ">
    
                    <input className="form-control form-control-lg outline-danger "
                      type="password" 
                      name='username'
                      value={password}
                      placeholder="Mot de passe"
                      onChange={(e) =>(setPassword(e.target.value))}

                    />
                  </div>
                  <button type="submit"
                    className="btn btn-outline-success btn-block text-uppercase"
                  >connexion</button>
                </form>
                <div className="input-group my-3 bg-danger text-white">
                  <button className=" btn btn-lg btn-google btn-block text-white btn-outline btn-outline-success ">
                  <img src="https://img.icons8.com/color/16/000003/google-logo.png" alt="Google"/>Continuer avec Google</button>
                </div>
                <p className="text-align-center mx-auto display-5  text-white" >OU </p>
                <div className="input-group my-2 bg-primary text-white">
                  <button className=" btn btn-lg btn-google btn-block text-white btn-outline btn-outline-success ">
                  <img src="https://img.icons8.com/color/12/000000/facebook-logo.png" alt="Google"/>Continuer avec Facebook</button>

                  </div>
              </div>
              
            </div>

          </div>
        </div>

  </section>
        );
    
}