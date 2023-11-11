import { useState , useEffect  } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);
  console.log(time);
  useEffect(() => {
    const timmer=setInterval(()=>{
            if(time==0){
                clearInterval(timmer);
                alert("Times up");
            }else
                setTime(time-1);
        }, 500);
    return ()=> {clearInterval(timmer)}
  },[time]);

  return (
    <>
      <h3>Count down: {time}</h3>
    </>
  );
}
