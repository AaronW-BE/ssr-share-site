import React from 'react';
import {info} from "../utils/utils";
import ShareCard from "../components/shareCard";
import '../style/index.css';

class Index extends React.Component{
    constructor(props) {
        super(props);
        info("index init");

        this.state = {
            list: [
                {
                    img: 'https://img.ssyer.com/picture/new/zl/a6f98fa6ae4f89041ff5ba401303690d.png',
                    date: new Date().toLocaleDateString(),
                    author: '123'
                },
                {
                    img: 'https://img.ssyer.com/picture/new/zl/a6f98fa6ae4f89041ff5ba401303690d.png',
                    date: new Date().toLocaleDateString(),
                    author: '123'
                },
                {
                    img: 'https://img.ssyer.com/picture/new/zl/a6f98fa6ae4f89041ff5ba401303690d.png',
                    date: new Date().toLocaleDateString(),
                    author: '123'
                },
                {
                    img: 'https://img.ssyer.com/picture/new/zl/a6f98fa6ae4f89041ff5ba401303690d.png',
                    date: new Date().toLocaleDateString(),
                    author: '123'
                },
                {
                    img: 'https://img.ssyer.com/picture/new/zl/0e508de22b94f66266ef7759faf72ef8.png',
                    date: new Date().toLocaleDateString(),
                    author: '123'
                },
                {
                    img: 'https://img.ssyer.com/picture/new/zl/bccd2ecb8193d29e911286e3344cb8be.png',
                    date: new Date().toLocaleDateString(),
                    author: '123'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className='main-content'>
                    <div className="card-wrap">
                        {
                            this.state.list.map((item, idx) =>
                                <div className='card-item'>
                                    <ShareCard album={item.img} share_date={item.date} share_author={item.author}
                                               key={idx}
                                    />
                                </div>

                            )
                        }
                    </div>

                </div>

            </div>
        );
    }
}

export default Index;
