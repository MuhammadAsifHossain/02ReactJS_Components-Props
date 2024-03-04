import SherOshayari from "./ChildComp";
import OneImg from "./img/moon.jpg";
import TwoImg from "./img/coin.jpeg";
import ThreeImg from "./img/close.png";
function ParentComp() {
  return (
    <div>
      <SherOshayari
        image={OneImg}
        line1="us ke chehre ki chamak ke saamne saada laga "
        line2="aasman pe chand puurā tha magar aadha laga"
        shayar="IFTIKHAR NASEEM"
      />
      <SherOshayari
        line1="hamāre paas yahī shā.irī kā sikka hai"
        line2="ulaT-palaT ke isī ko chalānā paḌtā hai"
        shayar="FARHAT EHSAS"
        image={TwoImg}
      />
      <SherOshayari
        line1="tum muḳhātib bhī ho qarīb bhī ho "
        line2=" tum ko dekheñ ki tum se baat kareñ"
        shayar="FIRAQ GORAKHPURI"
        image={ThreeImg}
      />
    </div>
  );
}
export default ParentComp;
