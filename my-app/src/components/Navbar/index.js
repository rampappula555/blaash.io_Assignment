import React from "react";
import "./index.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          className="logo"
          src="https://s3-alpha-sig.figma.com/img/bfd1/e2a7/1fda382152782238d18f1bd9a710228f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ya4spP73zUbsPN~R3UhRp-4BPkrGr00y3G-UixKWBF1RtNakWiO~Ubo-kHgiKWGFlZcPWHhJ10Hmho0zjll4JUWrT9qsbnx09mWpwpHfjS1nK-~HP2ySxlRKFdXnNBYHCgGLV6w8F~7QzX3p46F9j-kh0Bb-4OWYP1OYBcICIDxCM9PJX-4Bknvv8a50Ys9xsPyvtltvMRIUFCqriINUvxmT-isu7HbkSIqE2CSV0crBc~hCEF5PNE-dkfEHeyMsYsJbDkuhi13svUqnAU6wRrGp25NnaRZGrdWedryMPWpZOP1XMdqUd6vISuk~waewDfGLP9ga-swtLr5dAUg8Cw__"
          alt="logo"
        />
        <h1 className="design-heading">Design studio</h1>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-input"
          id="navbar-inp"
        />
        <div className="navbar-profile">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca36/f578/7872525aaf6ad0282e97da8c646da0d9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nekSJD9S67i7g1tn0yI5wu3pFmrTSTr3ywVP7h7Bnghir6berAKa8w3xjE2IWM4CXNDBfiL3s0~FswAlHlO4ThtILAbdhLqH3ux4Zm0F6YT-t55OT03TiGWVudT1~r5pWI7cOiDcXTgRN8ITR~rh67my9J5t9C93Bf6df21JqXVabOXVGgcUAunl3GggELwyRcbWuNCwQROyEabJxROnyC63OVLuz5mUMT90TTLqAdrLi-1RslOHmuSZLM6z6WBqES7iYo4fcIdsj5ThQkeZPqPyXG3Ptva62IjVj1KVtseUz5OxS~Ih04z9v4AVUpygq6W9ChmU1M3iRer-hzw~kw__"
            alt="Profile"
            className="profile-icon"
          />
        </div>
        <span className="navbar-name">Leonardo C</span>
      </div>
    </nav>
  );
};

export default Navbar;
