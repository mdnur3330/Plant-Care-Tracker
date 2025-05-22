import React from "react";
import {
  FaDove,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto md:flex justify-evenly md:pl-9  border-b border-dashed border-gray-300 pb-10 space-y-6">
        <div className="flex-1">
          <h2 className="text-4xl my-4 font-bold">HariCare </h2>
          <p>
            Stacked — Your Ultimate Subscription Hub Discover, compare, and
            manage your favorite subscription services all in one place. From
            entertainment and gaming to productivity and cloud storage, Stacked
            helps you stay organized and make the most of every plan. Simplify
            your digital life with personalized recommendations and exclusive
            deals—because when it comes to subscriptions, we've got you stacked!
          </p>
        </div>
        <div className="flex-1 md:pl-30 ">
          <h3 className="text-2xl my-4 font-bold ">Quick Links</h3>
          <ul className="text-left text-2xl space-y-5">
            <li>
              <Link className="underline" to="/terms">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link className="underline" to="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 md:text-center">
          <h3 className="text-2xl my-4 font-bold ">Follow Us</h3>
          <div className="flex md:justify-center gap-5">
            <Link
              to="https://www.facebook.com/profile.php?id=100067795436674"
              target="_blank"
            >
              <FaFacebook size={30}></FaFacebook>
            </Link>

            <Link to="https://github.com/mdnur3330" target="_blank">
              <FaGithub size={30} ></FaGithub>
            </Link>

            <Link
              to="https://www.linkedin.com/in/nur-alom1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin size={30} ></FaLinkedin>
            </Link>

            <Link target="_blank" to="https://www.youtube.com/@hmnurulalom9359">
              <FaYoutube size={30} ></FaYoutube>
            </Link>

            <Link target="_blank" to="https://wa.me/qr/HQUAFMEBDLC3G1">
              {" "}
              <FaWhatsapp size={30} ></FaWhatsapp>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center pt-4 mt-5">
        © 2025 Stacked. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
