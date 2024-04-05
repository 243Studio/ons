function Footer() {
    return (
    <footer className='footer-wrap'>

    <div className='horizontal-line'></div>
       <div className='footer-container'>
            <div className='footer-row'>
                <img src='.png' className='footer-col'/>
                <div className='footer-col center'>
                    <h5>CONTACT</h5>
                    <ul>
                            <li class="name">회사명 : 주식회사 오앤에스</li>
                            <li>
                                <address>
                                주소 : 경기도 부천시 양지로 237
                                </address>
                            </li>
                            <li class="tel">TEL : 02-6474-4208 / 010-4520-0449</li>
                            <li class="email">E-mail : 담당자 김현주 zest@onskorea.co</li>
                        </ul>
                </div>
                <div className='footer-col right'>
                    <ul className='footer-icon-list'>
                        <li><a href="http://kppower.co.kr/member/login">로그인</a></li>
                        <li><a href="http://kppower.co.kr/member/login">로그인</a></li>
                        <li><a href="http://kppower.co.kr/member/login">로그인</a></li>
                    </ul>
                    <a class="privacy" href="http://kppower.co.kr/member/privacy">개인정보처리방침</a>
                </div>

            </div>
       </div>
  </footer>
  )
}

export {Footer}