import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPlayers } from "../../../helpers/auth";

const SignUpForm = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [players, setPlayers] = useState(null);
  const [isExist, setIsExist] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function playerList() {
      const data = await getPlayers();
      setPlayers(data);
    }

    playerList();
  }, []);

  const submitHandler = () => {
    const data = {
      fullname,
      username,
      email,
      password,
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
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="username"
          name="username"
          aria-describedby="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
