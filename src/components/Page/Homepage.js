import React from "react";
import "../../../src/index.css";
import ArrowImgIcon from "../../assets/Icon/down-arrow.svg";
import UXImgIcon from "../../assets/Icon/ux.svg";
import DesignIcon from "../../assets/Icon/design-tools.svg";
import ProgrammingIcon from "../../assets/Icon/web-programming.svg";
import Cards from "../Layout/Cards";
import LetterImage from "../../assets/Icon/letter-app.png";
import EzEsportImg from "../../assets/img-component/ez-esport.PNG";
import NarationImg from "../../assets/img-component/naration-app.png";
import ReactLogo from "../../assets/Icon/react-logo.png";
import FigmaLogo from "../../assets/Icon/figma-logo.png";
import VSCode from "../../assets/Icon/vs-code.svg";
import HtmlLogo from "../../assets/Icon/html5.svg";
import CssLogo from "../../assets/Icon/css.jpg";
import CardsTools from "../Layout/CardsTools";
import FacebookLogo from "../../assets/Icon/facebook.svg";
import WhatsappLogo from "../../assets/Icon/whatsapp.svg";
import GithubLogo from "../../assets/Icon/github.svg";
import TelegramLogo from "../../assets/Icon/telegram.svg";
import SocialLinks from "../Layout/SocialLinks";
import SpotifyLogo from "../../assets/Icon/spotify.svg";

const Homepage = () => {
  return (
    <div>
      <div className="homepage-img h-screen bg-center bg-cover md:bg-fixed relative ">
        <div className="flex-col-reverse flex sm:text-center text-center ">
          <h1 className="text-white sm:text-8xl text-4xl uppercase tracking-widest font-sans absolute top-1/3 left-24 sm:left-1/3  ">
            Welcome
          </h1>
          <p className="text-white text-center absolute top-1/2 left-1/4 text-1xl w-1/2 sm:text-xl">
            Selamat datang di website saya, saya lulusan dari SMKN 1 Bondowoso
            yang sekarang menempuh kuliah semester 2 di Politeknik Negeri
            Jember.
          </p>
        </div>
        <img
          className="h-16 w-10 absolute top-3/4 sm:left-2/4 mt-20 left-48 transform duration-150 animate-bounce ease-out sm:top-3/4 "
          src={ArrowImgIcon}
          alt="arrow"
        />
      </div>
      <div className="flex flex-col ">
        <h1 className="text-center text-4xl m-16 tracking-wider font-bold transform duration-300 hover:skew-x-6 hover:scale-90">
          Hi i'm Faisal Nice To Meet You
        </h1>
        <p className="text-xl text-center self-center w-2/3 ">
          Saya memiliki pengalaman kerja selama 6 bulan sebagai developer di
          sebuah perusahaan di malang.
        </p>
      </div>
      <div className=" flex justify-center mt-24 w-auto sm:h-96 ">
        <div className="flex mx-10 flex-col sm:flex-row p-10">
          <div className="flex shadow-xl flex-col items-center rounded-xl bg-blue-50 m-3 transform duration-150 hover:scale-110 ease-in-out cursor-default sm:h-72 h-80">
            <img src={DesignIcon} alt="icon1" className="h-1/6 m-9"></img>
            <h2 className="font-bold text-3xl ">Designer</h2>
            <p className="w-80 text-center p-6">
              Saya memiliki skill desain, logo, banner.
            </p>
          </div>
          <div className="flex shadow-xl flex-col items-center bg-blue-50 rounded-xl m-3 transform duration-150 hover:scale-110 ease-in-out cursor-default sm:h-72 h-80">
            <img src={ProgrammingIcon} alt="icon1" className="h-1/6 m-9"></img>
            <h2 className="font-bold text-3xl  ">Front End Developer</h2>
            <p className="w-80 text-center p-6">
              Front end developer, biasanya bertugas untuk membuat tampilan dari
              sebuah website
            </p>
          </div>
          <div className="flex shadow-xl flex-col items-center bg-blue-50 m-3 rounded-xl transform duration-150 hover:scale-110 ease-in-out cursor-default sm:h-72 h-80">
            <img src={UXImgIcon} alt="icon1" className="h-1/6 m-9"></img>
            <h2 className="font-bold text-3xl ">UI / UX</h2>
            <p className="w-80 text-center p-6">
              Saya bisa mendesain UI atau UX sebagai prototipe Website.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl m-16 tracking-wider font-bold transform duration-300 hover:skew-x-6 hover:scale-90 uppercase">
        Recent Work
      </h1>
      <div className=" flex  m-14 sm:flex-row flex-col">
        <Cards
          title="Simple Letter App"
          desc="Aplikasi surat menyurat, simpel menggunakan MERN (MongoDB, Express, React, Node). Aplikasi ini memiliki fitur Surat masuk dan surat keluar"
          link="https://github.com/fsl-karimullah/Letter-App"
          image={LetterImage}
        />
        <Cards
          title="UI Ez Esport Organizer"
          desc="User Interface dari website Ez Esport Organizer, yang pernah saya buat. UI ini saya buat menggunakan Figma"
          link="https://www.figma.com/file/EepiKLs6CA7hOVVLsfKVIy/Untitled?node-id=0%3A1"
          image={EzEsportImg}
        />
        <Cards
          title="UI Naration App"
          desc="UI aplikasi mobile bernama Naration, UI ini dibuat menggunakan Figma dan Template"
          link="https://www.figma.com/proto/DUgg59EwTOChfT2X7fHaeT/Food-delivery-app-Ui-kit-(Community)?node-id=0%3A1"
          image={NarationImg}
        />
      </div>
      <div>
        <h1 className="text-center text-4xl m-16 tracking-wider font-bold transform duration-300 hover:skew-x-6 hover:scale-90">
          Bahasa Pemrograman dan Tools yang saya pakai
        </h1>
        <div className="flex flex-col justify-center sm:flex-row md:flex-row m-10 ">
          <CardsTools img={ReactLogo} title="ReactJs" />
          <CardsTools img={HtmlLogo} title="Html" />
          <CardsTools img={CssLogo} title="Css" />
          <CardsTools img={FigmaLogo} title="Figma" />
          <CardsTools img={VSCode} title="Visual Studio Code" />
        </div>
      </div>
      <div className="flex flex-row justify-center m-20 my-80">
        <h1 className="text-base sm:text-5xl font-serif">
          "Jangan lupa siapin <span className="text-blue-700"> air </span>, dan
          spotify ketika <span className="text-red-700">ngoding</span>."{" "}
        </h1>
        <img className="w-20" src={SpotifyLogo} alt="icon-spotify" />
      </div>
      <footer className=" bg-gray-300  ">
        <div className="flex flex-row justify-center ">
          <SocialLinks
            link="https://www.facebook.com/profile.php?id=100067495405913"
            img={FacebookLogo}
          />
          <SocialLinks
            link="https://wa.me/6287826563459"
            img={WhatsappLogo}
          />
          <SocialLinks
            link="t.me/@amirfaisalk"
            img={TelegramLogo}
          />
          <SocialLinks
            link="https://github.com/fsl-karimullah"
            img={GithubLogo}
          />
        </div>
      </footer>
      <div className="text-center bg-gray-300">
        <p>Copyright © Amir Faisal K.</p>
      </div>
    </div>
  );
};

export default Homepage;
