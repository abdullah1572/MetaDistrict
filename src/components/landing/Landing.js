// import logo from './logo.svg';
import '../../App.scss';
import Chapter1 from './chapter1/chapter1';
import Chapter2 from './chapter2/chapter2';
import Banner from './main-banner/Banner';
// import Partnership from '../partner/Partner.js';
// import PerformanceM from '../performance/Performance.js';


// import Banner from './main-banner/Banner.js';
// import Tokensale from './tokensale/Token.js';


function Landing() {
  return (
    <>
      {/* <Banner />
      <Tokensale/>
      <Partnership />
      <PerformanceM/> */}
      <Banner />
      <Chapter1 />
      <Chapter2 />
    </>
  );
}

export default Landing;