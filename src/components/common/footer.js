import React from "react";
import '../../style/footer.css'

export default class Footer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className='footer'>
                <div className='footer-wrap'>
                    <div>
                        <span> &copy;2019 SSR share </span>
                    </div>
                    <div>
                        <span>AaronW</span>
                    </div>
                </div>
            </footer>
        );
    }
}
