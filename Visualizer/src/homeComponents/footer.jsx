import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/Deepraj-chawda" data-show-count="true" aria-label="Follow @Deepraj-chawda on GitHub">Follow @Deepraj-chawda</GitHubButton></div>
                </div>

                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://github.com/Deepraj-chawda" style={{color: "#65b6f0"}}> Deepraj Chawda</a>
                </div>

            </footer>
        );
    }
}

export default Footer;