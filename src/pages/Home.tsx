import * as React from "react";
import Table from '../components/Table'; 

const Home = () => {
    const backgroundImageUrl = "https://i.pinimg.com/1200x/f3/c9/e6/f3c9e6c658db9a0b798456cf688b569c.jpg";
    const cardStyle = {
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "10vh",
    };

    return (
        <>
            <div className="container" style={cardStyle}>
                <h1 className="text-center text-light mt-5">
                    <p>WELCOME TO GAMEWORLD</p>
                    <h2>THIS IS THE ADMIN PAGE</h2>
                </h1>
            </div>

           
            <section className="py-4 bg-success text-light">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 text-center">
                <h1 className="display-4 mb-4">GAMEWORLD</h1>
                <p className="lead">
                    Welcome to GameWorld! GameWorld is your ultimate destination for gaming, where you can discover the latest titles, shop for quality accessories, and enjoy excellent customer support. Join us to experience the passion for games and explore the unique world of GameWorld. We are ready to welcome you!
                </p>
            </div>
            <div className="col-md-3">
                <img
                    src="https://s3.cloud.cmctelecom.vn/2game-vn/pictures/2game/2017/09/29/2game-29-9-336-6.jpg"
                    className="w-100 rounded-circle"
                    alt="Mô tả ảnh"
                />
            </div>
            <div className="col-md-3">
                <img
                    src="https://bookvexe.vn/wp-content/uploads/2023/03/tong-hop-25-hinh-nen-game-dep-nhat-nam-2023_25.jpg"
                    className="w-100 rounded-circle"
                    alt="Mô tả ảnh"
                />
            </div>
        </div>
    </div>
</section>

            <div>
                <div className="card p-3">
                    <div className="card-header">
                        <h1 style={{ fontSize: "36px", color: "blue", textAlign: "center", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                            Please check the statistics here
                        </h1>
                    </div>
                    <div className="card-body border-1">
                        {/* Thêm phần lọc sản phẩm game tại đây */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 mb-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="">All Games</option>
                                        <option value="action">Action</option>
                                        <option value="adventure">Adventure</option>
                                        <option value="racing">Racing</option>
                                        <option value="sports">Sports</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="">All Consoles</option>
                                        <option value="ps5">PS5</option>
                                        <option value="xbox">Xbox Series X</option>
                                        <option value="switch">Nintendo Switch</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn btn-primary">Apply Filters</button>
                                </div>
                            </div>
                        </div>
                        {/* Kết thúc phần lọc sản phẩm game */}
                        <Table />
                    </div>
                </div>
            </div>

            
            <footer className="text-bg-dark">
                <section>
                    <div className="container py-5">
                        <div className="row g-4">
                            {/* Phần 1 */}
                            <div className="col-12 col-md-4">
                                <strong>SOME FEATURES ABOUT GAMEWOURL AND THE HISTORY OF GAMEWORLD</strong>
                                <div className="mt-4">
                                    <p>
                                    Welcome to GameWorld!
                                    GameWorld is the ultimate destination for gamers, where you can discover the latest titles,
                                     shop for quality accessories, and enjoy excellent customer support. We were born with the 
                                     goal of creating a friendly and stylish environment for the gaming community.
                                    Join us to experience the passion for games and explore the unique world 
                                    of GameWorld. We are ready to welcome you!{" "}
                                        <i className="fa-solid fa-arrow-right text-danger"></i>
                                    </p>
                                </div>
                            </div>
                            {/* Phần 2 */}
                                    <div className="col-12 col-md-4">
                                <h5 className="text-uppercase">THE GAMES THAT ARE MOST OFTEN PLAYED BY RENTAL GAMES </h5>
                                <div className="row mt-2 g-3">
                                    <div className="col-4">
                                        <img
                                            src="https://cdn.tgdd.vn/2020/07/content/Top-Moba-800x400-1.jpg"
                                            className="w-100 h-100"
                                            alt="Mô tả ảnh"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <img
                                            src="https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_12_06/minecraftnen1768x512.jpg"
                                            className="w-100 h-100"
                                            alt="Mô tả ảnh"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <img
                                            src="https://genk.mediacdn.vn/GA8Ko1ApccccccccccccfqZTLfY3/Image/2012/11/wp_3_1024x768-eddbd.jpg"
                                            className="w-100 h-100"
                                            alt="Mô tả ảnh"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <img
                                            src="https://teky.edu.vn/blog/wp-content/uploads/2022/03/hinh-nen-gaming-cho-may-tinh-an-tuong.jpg"
                                            className="w-100 h-100"
                                            alt="Mô tả ảnh"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <img
                                            src="https://cdn.tgdd.vn/Files/2021/08/13/1375026/mobilelegendsbangbang1_1280x720-800-resize.jpg"
                                            className="w-100 h-100"
                                            alt="Mô tả ảnh"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <img
                                            src="https://d9n64ieh9hz8y.cloudfront.net/wp-content/uploads/20220731015326/steam-cam-cac-hang-game-khoe-giai-thuong-va-diem-danh-gia-tren-hinh-anh-cua-hang-tin-game-2.jpg"
                                            className="w-100 h-100"
                                            alt="Mô tả ảnh"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Phần 3 */}
                            <div className="col-12 col-md-4">
                                <h5>LOG IN TO BUY GAME</h5>
                                <div className="mt-5">
                                  
                                    <form action=" ">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label"></label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label"></label>
                                            <input
                                                type="text"
                                                id="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <button
                                                className="btn btn-danger rounded-3 mt-3 text-light d-block"
                                            >
                                                <strong>SUBMIT</strong>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ backgroundColor: "black" }} className="py-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col">
                                <p className="m-0">
                                    Copyright &#169; 2003-2024 - All rights Reserved - Domain Name
                                </p>
                            </div>
                            <div className="col-auto ">
                                <p>Nguyễn Thanh Đề- 22-0-21212</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Kết thúc đoạn mã footer */}
        </>
    );
};

export default Home;
