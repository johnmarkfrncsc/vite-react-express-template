import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5864595/pexels-photo-5864595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div class="p-5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-transparent">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">Welcome to BiteLine!</h1>
              <p class="py-6">Bites and Brews, Perfectly Paired</p>
            </div>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div class="card-body">
                <fieldset class="fieldset">
                  <label class="label">Email</label>
                  <input type="email" class="input" placeholder="Email" />
                  <label class="label">Password</label>
                  <input type="password" class="input" placeholder="Password" />
                  <div>
                    <a class="link link-hover">Forgot password?</a>
                  </div>

                  <Link to="/home" class="btn btn-neutral mt-4">
                    Login
                  </Link>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
