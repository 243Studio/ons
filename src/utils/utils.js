import dispatch1 from "../assets/img/illustration/dispatch1.png";
import dispatch2 from "../assets/img/illustration/dispatch2.png";	
import dispatch3 from "../assets/img/illustration/dispatch3.png";	


let googleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.755665496141!2d126.82492987453399!3d37.46649047206467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6255ab8f6953%3A0x6b2225825e053679!2s237%20Yangji-ro%2C%20Bucheon%2C%20Gyeonggi-do%2C%20Cor%C3%A9e%20du%20Sud!5e0!3m2!1sfr!2sca!4v1712314866680!5m2!1sfr!2sca";

let pageNames = ["회사소개","서비스", "문의하기", "오시는길" ]

let businessAreaList= [
    ["인력파견", ["공공기관, 기업등32개 업종 대상 인력 파견", "전문인력 파견", "채용대행"]],
    ["판매 서비스", ["판매 서비스 도급 및 운영", "오프라인 매장 운영 및 관리", "전문적인 운영"]],
    ["시설관리", ["빌딩 경영관리 및 임대차 관리", "Cleaning Service (환경, 소독, 청소)", "Security, Parking (경비, 주차, 보안)"]],
    ["물류", ["3PL 업무 대행", "택배 운송 관리", "물류보관 대행 및 창고 임대", "차량운송, 해외물류"]],
    ["콜센터&IT", ["일반 고객상담", "인•아웃바운드 전문센터", "시스템 구축•개발", "시스템 운영•유지 보수"]]
]

let ServiceList = [
    {
        "title": "HR I 인력 파견 부문 개요",
        "content": 
            <p>
                OnS는 Outsourcing & Service 전문가인 사람들만을 모았기에 다양한 사업영역을 수행한 경험 속에서 축적한 노하우를 바탕으로 고객사와 지속적으로 소통하여 가장 좋은 선택지가 될 수 있는 비즈니스 플랜 서비스를 제시합니다.
            </p>,
        "img": dispatch1
    },
    {
        "title": "OnS 인력파견 부문 특징",
        "content": <p>다양한 사업분야를 경험한 전문가 집단으로 우리의 일이 고객사와 근로자에게 더 나은 내일을 가져다 줄 것이라고 확신합니다. 내일을 아름다운 내일을 만드는 것은 끊임없는 노력이 있어야만 가능합니다.<br/><br/><br/> 빠르게 변화하는 글로벌 시장 속에서 뒤처지지 않기 위해 늘 먼저 움직이려 합니다. 정확한 분석과 타당한 근거를 바탕으로 여러분에게 새로운 길을 제시하겠습니다</p>,
        "img": dispatch2
    },
    {
        "title":"인력 확보 방안 1",
        "content": 
            <p>
                최고의 전문성을 갖춘 ONS는 다양한 인력확보 방안을 마련하고 있습니다.
            </p>,
        "img": dispatch3
    }
]

export { googleMapLink, pageNames, businessAreaList, ServiceList }