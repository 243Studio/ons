import logistic from "../assets/img/illustration/logistics.jpg";
import hr from "../assets/img/illustration/hr.jpg";	
import call from "../assets/img/illustration/call.jpg";	
import facility from "../assets/img/illustration/facility.jpg";	
import sales from "../assets/img/illustration/sales.jpg";	
import meeting from "../assets/img/icons/meeting.png"
import quote from "../assets/img/icons/quote.png"
import partnership from "../assets/img/icons/partnership.png"
import callBuilding from "../assets/img/icons/call-building.png"
import callGrowth from "../assets/img/icons/call-growth.png"
import meeting2 from "../assets/img/illustration/meeting.jpg"
import review from "../assets/img/illustration/review.jpg"
import contract from "../assets/img/illustration/contract.jpg"
import callCenter from "../assets/img/illustration/call-setup.jpg"
import callCenterSetup from "../assets/img/illustration/call-setup2.jpg"

/** DATA */
let googleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.755665496141!2d126.82492987453399!3d37.46649047206467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6255ab8f6953%3A0x6b2225825e053679!2s237%20Yangji-ro%2C%20Bucheon%2C%20Gyeonggi-do%2C%20Cor%C3%A9e%20du%20Sud!5e0!3m2!1sfr!2sca!4v1712314866680!5m2!1sfr!2sca";

let pageNames = ["회사소개","서비스", "오시는길" ]

let businessAreaList = [
    {
        "title":"인력파견",
        "translation":"Human Resource", 
        "content":["공공기관, 기업등32개 업종 대상 인력 파견", "전문인력 파견", "채용대행"],
        "img": hr
    },
    {
        "title":"판매 서비스", 
        "translation":"Sales Service",
        "content":["판매 서비스 도급 및 운영", "오프라인 매장 운영 및 관리", "전문적인 운영"],
        "img": sales
    },
    {
        "title":"시설관리",
        "translation":"Facility Management",
        "content":["빌딩 경영관리 및 임대차 관리", "Cleaning Service (환경, 소독, 청소)", "Security, Parking (경비, 주차, 보안)"],
        "img": facility
    },
    {
        "title":"물류", 
        "translation":"Logistics",
        "content":["3PL 업무 대행", "택배 운송 관리", "물류보관 대행 및 창고 임대", "차량운송, 해외물류"],
        "img": logistic
    },
    {
        "title":"콜센터&IT",
        "translation":"Call Center & IT",
        "content":["일반 고객상담", "인•아웃바운드 전문센터", "시스템 구축•개발", "시스템 운영•유지 보수"],
        "img": call
    }
    
]

let processSteps = [
    {
        "title":"미팅 진행",
        "illustration":meeting,
    },
    {
        "title":"견적서 제출",
        "illustration":quote,
    },
    {
        "title":"진행 협의 및 계약 체결",
        "illustration":partnership,
    },
    {
        "title":"콜센터 셋업 진행 (2주~3주 소요)",
        "illustration":callGrowth,
    },
    {
        "title":"콜센터 오픈",
        "illustration":callBuilding,
    }
]


let processDetails =[
    {
        "img":meeting2,
        "content":[
            ["고객사 업종 관련 업무 파악"],
            ["2요청 업무 세부내용 파악", 
            ["현재 콜량 or 예상 콜량,고객 응대 채널, 업무 운영 장소,교육기간","콜센터 솔루션 적용범위"]],
        ]
    },
    {
        "img":contract,
        "content":[
            ["견적서(운영인력 산정) 발송"],
            ["2운영 프로세스 파악"],
        ]
    },
    {
        "img":review,
        "content":[
            ["오픈, 교육일정 협의"],
            ["2계약서 발송 및 날인"],
        ]
    },
    {
        "img":callCenterSetup,
        "content":[
            ["인력채용"],
            ["2통신 및 솔루션"],
            ["3업무자료"],
            ["4교육"],
            ["5보고서"],
            ["6통신, 채팅 채널 연동 테스트"]
        ]
    },
    {
        "img":callCenter,
        "content":[
            ["류점검, 보고서 검토 수정"],
            ["2콜센터 안정화 관리"],
            ["3운영 현안 논의, 개선방안 제안"],
            ["4정기 운영회의(월 1회)"],
            ["5운영매뉴얼 작업(오픈 3개월 차 ~ 6개월)"],
            ["6운영 내용의 A~Z까지 모든 내용 수록 매뉴얼 구성"]
        ]
    }
]
let googleSheetEndpoint3= "https://script.google.com/macros/s/AKfycbyvuh06T33pdiBbUbL0oGikA_qOzwIJQhNm5RnzoSUck0vatpRLz8YTedZzV46HvXigqQ/exec";


/** FUNCTIONS */
function hideBodyOverflow(privacyIsOpen){
    if (privacyIsOpen) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'unset'
      }
}
function closeDrawer(value){
    return value && !value
}

function removeQueryData(){
    window.history.pushState(null, "", window.location.href.split("?")[0]);
}

export { googleMapLink, pageNames, businessAreaList,googleSheetEndpoint3, processSteps, processDetails, removeQueryData, hideBodyOverflow, closeDrawer }