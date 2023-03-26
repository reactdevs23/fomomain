import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Trust.css";

const Trust = () => {
  // const data = [
  //     {
  //         img: "/images/user1.png",
  //         title: "AYZ (@jpegplug)"
  //     },
  //     {
  //         img: "/images/user1.png",
  //         title: "Alex?  (@ShiLLin_ViLLian)"
  //     },
  //     {
  //         img: "/images/user1.png",
  //         title: "Urkann (@_Urkann)"
  //     }
  // ]
  return (
    <section id="trust">
      <div className="container">
        <h1>Crypto twitter 🧡 FOMO</h1>
        <div className="trust-contents">
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a
                  className="text-decoration-none"
                  href="https://twitter.com/JCverse9/status/1629981485078913026"
                  target="blank"
                >
                  <div className="trust-card">
                    <img
                      className="d-block mx-auto"
                      src="/images/trust-qoute.png"
                      alt=""
                    />
                    <p>
                      Damn, I’m so <b>FOMO</b> wish to having this Magazine.
                    </p>
                    <div className="user-contents d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          className="user-img"
                          src="/images/user5.png"
                          alt=""
                        />
                        <div>
                          <h4 className="user-name">🅹🅲 III (@JCverse9)</h4>
                          <h6 className="user-comment-time">3 days ago</h6>
                        </div>
                      </div>
                      <img src="/images/twitter-c.png" alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-2 love-contents">
                      <button className="border-0 bg-none btn">
                        <img src="/images/love.svg" alt="" />
                      </button>
                      <h6 className="love-react-quantity m-0">06</h6>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  className="text-decoration-none"
                  href="https://twitter.com/Capiz92/status/1629483934328184834"
                  target="blank"
                >
                  <div className="trust-card">
                    <img
                      className="d-block mx-auto"
                      src="/images/trust-qoute.png"
                      alt=""
                    />
                    <p>
                      Guys the founder
                      <b>@frankdegods</b> is on the first page of{" "}
                      <b>@MagFomo</b> LFG!!! 🔥 #SolanaCommunity #NFT #solana
                    </p>
                    <div className="user-contents d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          className="user-img"
                          src="/images/user2.png"
                          alt=""
                        />
                        <div>
                          <h4 className="user-name">Rena_ (@Capiz92)</h4>
                          <h6 className="user-comment-time">5 days ago</h6>
                        </div>
                      </div>
                      <img src="/images/twitter-c.png" alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-2 love-contents">
                      <button className="border-0 bg-none btn">
                        <img src="/images/love.svg" alt="" />
                      </button>
                      <h6 className="love-react-quantity m-0">87</h6>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  className="text-decoration-none"
                  href="https://twitter.com/BrummieSOL/status/1629473983845261315"
                  target="blank"
                >
                  <div className="trust-card">
                    <img
                      className="d-block mx-auto"
                      src="/images/trust-qoute.png"
                      alt=""
                    />
                    <p>
                      LFG <b>@MagFomo</b>
                      <img
                        className="d-block mx-auto"
                        src="/images/bru.png"
                        alt=""
                        width="400"
                        height="500"
                      />
                    </p>
                    <div className="user-contents d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          className="user-img"
                          src="/images/user3.png"
                          alt=""
                        />
                        <div>
                          <h4 className="user-name">Brummie (@BrummieSOL)</h4>
                          <h6 className="user-comment-time">6 days ago</h6>
                        </div>
                      </div>
                      <img src="/images/twitter-c.png" alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-2 love-contents">
                      <button className="border-0 bg-none btn">
                        <img src="/images/love.svg" alt="" />
                      </button>
                      <h6 className="love-react-quantity m-0">25</h6>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  className="text-decoration-none"
                  href="https://twitter.com/FlyOnSOL/status/1629508959122997248"
                  target="blank"
                >
                  <div className="trust-card">
                    <img
                      className="d-block mx-auto"
                      src="/images/trust-qoute.png"
                      alt=""
                    />
                    <p>
                      Look around for <b>@MagFomo</b>. Ask for his project and
                      what he is doing! He might have an interesting surprise
                      for you. 🥐
                      <br />
                      <img
                        src="/images/slice.png"
                        alt=""
                        width="400"
                        height="500"
                      />
                    </p>
                    <div className="user-contents d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          className="user-img"
                          src="/images/user1.png"
                          alt=""
                        />
                        <div>
                          <h4 className="user-name">flynft.sol (@FlyOnSOL)</h4>
                          <h6 className="user-comment-time">3 days ago</h6>
                        </div>
                      </div>
                      <img src="/images/twitter-c.png" alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-2 love-contents">
                      <button className="border-0 bg-none btn">
                        <img src="/images/love.svg" alt="" />
                      </button>
                      <h6 className="love-react-quantity m-0">44</h6>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  className="text-decoration-none"
                  href="https://twitter.com/Ogibx/status/1629608010849853440"
                  target="blank"
                >
                  <div className="trust-card">
                    <img
                      className="d-block mx-auto"
                      src="/images/trust-qoute.png"
                      alt=""
                    />
                    <p>
                      Looks great ! 😍 Thx to <b>@MagFomo</b> for featuring
                      @luciddrakes, hope you enjoyed <b>@nft_paris</b>
                      <img
                        className="d-block mx-auto"
                        src="/images/jay.png"
                        alt=""
                        width="400"
                        height="500"
                      />
                    </p>
                    <div className="user-contents d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          className="user-img"
                          src="/images/user4.png"
                          alt=""
                        />
                        <div>
                          <h4 className="user-name">Djiiz ⚡ (@Ogibx)</h4>
                          <h6 className="user-comment-time">3 days ago</h6>
                        </div>
                      </div>
                      <img src="/images/twitter-c.png" alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-2 love-contents">
                      <button className="border-0 bg-none btn">
                        <img src="/images/love.svg" alt="" />
                      </button>
                      <h6 className="love-react-quantity m-0">01</h6>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default Trust;
