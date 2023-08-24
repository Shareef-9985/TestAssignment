// import { Carousel } from 'bootstrap';
import React, { useState } from 'react'
import CarouselComponent from './Carousel';


const Home = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = ( e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
  }
  return (
    <div >

      <div className="container ">
        <div class="row  " >
          <div class="col car   ">
<CarouselComponent/>
          </div>
          <div class="col " >
            <div>
              <h1 class="text-center">HELLO AGAIN!</h1>
              <div class="text-center">
                <small class="text-center">PERISYNC TECHNOLOGIES <br />It is a research & development company</small><br />
              </div>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div class="w-50 form-group">
                <div className='center'>
                  <label for="exampleInputEmail1" >Email address</label>
                  <input type="email" w-200 class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={name} onChange={(e) => { setName(e.target.value) }} />
                  <br />
                  <div class=" w-100 form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary mt-4">LOGIN</button>
              <a class="btn btn-lg btn-google btn-block  btn-outline mt-3" href="1">
                <img alt='h' src="https://img.icons8.com/color/16/000000/google-logo.png " /> Signup Using Google</a>

              <p class="text-inverse text-center mt-4">Don't have an account yet? <a href="<?= base_url() ?>auth/login" data-abc="true">Sign up</a></p>



            </form>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Home