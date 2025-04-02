import Win from "./Win";
import Master from "./Master";
import Testimonials from "./Testimonials";
import Services1 from "./Services1";
import Solution from "./Solution";

export default function Webinar({zIndexSetUp, setZIndexSetUp}) {
  // const x = 10;
  return (
    <>
      <Win/>
      <Solution zIndexSetUp={zIndexSetUp} setZIndexSetUp={setZIndexSetUp}/>
      <Master/>
      <Testimonials />
      <Services1 />
      
    </>
  );
}
