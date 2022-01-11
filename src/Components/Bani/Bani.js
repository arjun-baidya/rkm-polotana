import React from 'react'
import { Row,Col } from 'react-bootstrap';
import '../../Styles/bani.css'

const data_bani = [ "সংঘর্ষের দ্বারা আপনি মহান হতে পারেন | আগে এগিয়ে যেতে হলে সংঘর্ষ অবশ্যই দরকার",
    "জীবনের বিশ্লেষণ করা ছেড়ে দেও, এটা জীবনকে আরো জটিল করে দেবে",
    "জ্ঞানের অর্থ হলো, কাম ও লোভের থেকে মুক্তি",

 ];
 console.log("bani",data_bani);

//  "শক্তিই জীবন, দুর্বলতাই মৃত্যু, বিস্তার জীবন, সংকোচন মৃত্যু, প্রেম জীবন, ঘৃণা মৃত্যু – Swami Vivekananda",
//  "সব শক্তিই আপনার মধ্যে আছে সেটার উপর বিশ্বাস রাখুন, এটা বিশ্বাস করবেন না যে আপনি দুর্বল | দাঁড়ান এবং আপনার মধ্যেকার দৈবত্বকে চিনতে শিখুন – Swami Vivekananda",
//  "সমাজ অপরাধীদের কারণে খারাপ হয়না বরং ভালো মানুষদের নীরবতার কারণে হয় – Swami Vivekananda ",
//  "তারা একাই থাকেন, যারা অন্যদের জন্য জীবিত থাকেন – Swami Vivekananda ",
//  "বিশ্ব একটি ব্যায়ামাগার যেখানে আমরা নিজেদেরকে শক্তিশালী করতে এসেছি – Swami Vivekananda",
//  "বাহ্যিক স্বভাব কেবল অভ্যন্তরীণ স্বভাবের একটি বড় রূপ হয় – Swami Vivekananda ",
//  "সাংসারিক বিষয়ের উপর জ্ঞান, মানুষকে জেদী বানিয়ে তোলে | জ্ঞানের অভিমান হলো একটি বন্ধন – Ramkrishna Paramhans",
//  "একমাত্র ভগবানই বিশ্বের পথপ্রদর্শক এবং গুরু – Ramkrishna Paramhans",
//  "বন্ধন ও মুক্তি কেবল একলা মনের চিন্তামাত্র – Ramkrishna Paramhans",
//  "ভগবানের ভক্তি বা প্রেম ছাড়া, কোনো কাজকে সম্পূর্ণ করা সম্ভব নয় – Ramkrishna Paramhans",

function Bani() {
    return (
        // <div id="container">
        // <div id="flip">
        //     {data_bani.map((item, index) => {
        //         return (
        //                 <div key={index}><div>{item}</div></div>
                        
        //         ) } )}
        // </div>
        // </div>
        <Row className='bani-row'>
            <Col>
                <p className='bani-text'>"শক্তিই জীবন, দুর্বলতাই মৃত্যু, বিস্তার জীবন, সংকোচন মৃত্যু, প্রেম জীবন, ঘৃণা মৃত্যু "– Swami Vivekananda</p>
            </Col>
        </Row>
    )
}

export default Bani
