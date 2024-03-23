import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="panukorn hongtong (Leo)">
          <h3>ตำแหน่ง : Frontend</h3>
        </Title>

        <Title title="Contact">
     
          
          <p>วันเกิด: {moment("2002/02/27").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +6667709583
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : panurorn1@gmail.com</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>กำลังศึกษาอยู่ที่มหาวิทยาลัยราชภัฏสวนสุนันทาคณะวิทยาศาสตร์และเทคโนโลยีสารสนเทศมีความรู้ความสามารถด้าน word, excel, adobe premiere ,เบื้องต้น การเขียนโปรแกรมเบื้องต้น Html,Java   จึงอยากนำทักษะความรู้จากที่ฝึกงานมาพัฒพันาตนเอง และ ทำประโยชน์ให้กับองค์กร </p>
        </Title>

        <Title title="Work Experience">
          <p>สามารถสร้าง web HTML css  </p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>Git</p>
        </Title>
      </div>
    </main>
  )
}

export default App
