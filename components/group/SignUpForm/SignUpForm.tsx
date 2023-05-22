import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useUserFormStore } from "../../../zustand";
import InputField from "../../atom/Input/InputField";

const SignUpForm = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const user = useUserFormStore((state: any) => state.addSignUpData);

  const submitHandler = async () => {
    const data = {
      fullname,
      username,
      email,
      password,
    };

    await user(data);
    router.push("/upload-photo");
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
        <InputField
          type="text"
          id="name"
          placeholder="Enter your name"
          value={fullname}
          onchange={(e) => setFullname(e.target.value)}
          required
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="username"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Username
        </label>
        <InputField
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onchange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <InputField
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <InputField
          type="password"
          id="password"
          placeholder="Your password"
          value={password}
          onchange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={submitHandler}
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
