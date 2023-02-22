import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignUpForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const clickHandler = () => {
    const data = {
      fullname: fullname,
      email: email,
      password: password,
    };

    if (typeof Storage === undefined) {
      alert("No storage support!");
    } else {
      localStorage.setItem("user-form", JSON.stringify(data));
      router.push("/upload-photo");

      const getUserForm = localStorage.getItem("user-form");
      console.log(JSON.parse(getUserForm!));
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label
          htmlFor="name"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={clickHandler}
          type="button"
        >
          Continue
        </button>
        <Link
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill mb-16"
          href="/login"
          role="button"
        >
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
